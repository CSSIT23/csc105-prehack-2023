import { Box, Typography } from "@mui/material";
import TD_Hero from "../team_track_detail/components/TD_Hero"
import TD_Content from "../team_track_detail/components/TD_Content"
import TD_FakeButtons from "./components/TD_FakeButtons";

export default function TeamTrackDetail$() {
  return (
    <div>
      <TD_Hero />
      <TD_FakeButtons/>
      <TD_Content />
    </div>
  );
}
