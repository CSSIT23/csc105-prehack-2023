import TeamRecentlyPlayed$ from "../../team_recently_played";
import TeamPlayListSection$ from "../../team_playlist_section";
import TeamYourShows$ from "../../team_your_shows";
import Body from "./body";

export default function HomePage() {
  return (
    <Body>
      <TeamRecentlyPlayed$ />
      <TeamPlayListSection$ />
      <TeamYourShows$ />
    </Body>
  );
}
