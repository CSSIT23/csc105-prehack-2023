// export * from "react/jsx-dev-runtime";
// import { JSX } from 'react/jsx-dev-runtime'

const options = require("react/jsx-dev-runtime");
const _jsxDev = options.jsxDEV;
import React from "react";
import ErrorBoundaryWrapper from "@/share/components/boundary";

function BoundaryX({ children, ...rest }) {
  return <ErrorBoundaryWrapper {...rest}>{children}</ErrorBoundaryWrapper>;
}

options.jsxDEV = (type, props, ...args) => {
  if (type.name && String(type.name).endsWith("$")) {
    return _jsxDev(
      BoundaryX,
      {
        children: _jsxDev(type, props, ...args),
        type,
        props,
        args,
      },
      ...args
    );
  }
  return _jsxDev(type, props, ...args);
};

module.exports = options;
