import { Box } from "@mui/material";
import React, { Children } from "react";

function logErrorToMyService(...args) {
  console.log(...args);
}

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, info: null };
  }

  static getDerivedStateFromError(error, info) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error, info };
  }

  componentDidCatch(error, info) {
    // Example "componentStack":
    //   in ComponentThatThrows (created by App)
    //   in ErrorBoundary (created by App)
    //   in div (created by App)
    //   in App
    this.setState({ error, info });
    logErrorToMyService(error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <>{this.props.fallback(this.state.error, this.state.info)}</>;
    }

    return this.props.children;
  }
}

export default function ErrorBoundaryWrapper({ children, type, ...args }) {
  const errorBox = (error, info) => (
    <Box
      sx={{
        background: `repeating-linear-gradient(
          45deg,
          yellow,
          yellow 10px,
          black 10px,
          black 20px
        )`,
        color: "white",
        borderRadius: "10px",
        height: "100%",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: ".5rem",
      }}
    >
      <Box
        sx={{
          borderRadius: "10px",
          width: "100%",
          height: "100%",
          background: "black",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        Oh here we go again! <br />
        there's an error
        <br /> inside <b>`{type?.name}`</b> component.{" "}
      </Box>
    </Box>
  );

  return <ErrorBoundary fallback={errorBox}>{children}</ErrorBoundary>;
}
