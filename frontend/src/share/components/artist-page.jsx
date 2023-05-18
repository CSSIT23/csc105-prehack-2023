import React from "react";
import Body from "./body";
import TeamArtist$ from "../../team_artist";
import TeamArtistConcertSection$ from "../../team_artist_concert_section";
import TeamAboutArtist$ from "../../team_about_artist";

export default function HomePage() {
  return (
    <Body>
      <TeamArtist$ />
      <TeamArtistConcertSection$ />
      <TeamAboutArtist$ />
    </Body>
  );
}
