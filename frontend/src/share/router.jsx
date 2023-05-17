import React from "react";
import Body from "@share/components/body";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./components/layouts/main-layout";
import TeamHome from "@share/components/home-page";
import TeamYourShowsAll$ from "../team_your_shows_all";
import TeamPlayListArtist$ from "../team_playlist_artist";
import TeamSearch$ from "../team_search";
import TeamPodcastsBrowse$ from "../team_podcasts_browse";
import TeamPlaylist$ from "../team_playlist";
import TeamAlbum$ from "../team_album";
import TeamArtistSection$ from "../team_artist_section";
import TeamArtistConcert$ from "../team_artist_concert";
import TeamPodcastGenre$ from "../team_podcast_genre";
import TeamPodcastsShow$ from "../team_podcast_show";
import TeamPodcastEpisode$ from "../team_podcast_episode";
import TeamTrackDetail$ from "../team_track_detail";
import TeamConcertDetail$ from "../team_concert_detail";
import TeamProfile$ from "../team_profile";
import NotFoundPage from "./components/404page";
import TeamArtist$ from "@share/components/artist-page";
import TeamPodcastAll$ from "../team_podcast_all";
import TeamArtistDiscography$ from "../team_artist_discography";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <TeamHome />,
      },
      {
        path: "/section/shows",
        element: <Body children={<TeamYourShowsAll$ />} />,
      },
      {
        path: "/section/playlist/:sectionId",
        element: <Body children={<TeamPlayListArtist$ />} />,
      },
      {
        path: "/playlist/:playlistId",
        element: <Body children={<TeamPlaylist$ />} />,
      },
      {
        path: "/search",
        element: <Body children={<TeamSearch$ />} />,
      },
      {
        path: "/podcast",
        element: <Body children={<TeamPodcastsBrowse$ />} />,
      },
      {
        path: "/podcast/all",
        element: <Body children={<TeamPodcastAll$ />} />,
      },
      {
        path: `/album/:albumId`,
        element: <Body children={<TeamAlbum$ />} />,
      },
      {
        path: `/artist/:artistId`,
        element: <Body children={<TeamArtist$ />} />,
      },
      {
        path: `/artist/:artistId/discography`,
        element: <Body children={<TeamArtistDiscography$ />} />,
      },
      {
        path: `/artist/:artistId/discovery`,
        element: <Body children={<TeamArtistSection$ />} />,
      },
      {
        path: `/artist/:artistId/concerts`,
        element: <Body children={<TeamArtistConcert$ />} />,
      },
      {
        path: `/genre/:genreId`,
        element: <Body children={<TeamPodcastGenre$ />} />,
      },
      {
        path: `/show/:podcastShowId`,
        element: <Body children={<TeamPodcastsShow$ />} />,
      },
      {
        path: `/episode/:podcastEpisodeId`,
        element: <Body children={<TeamPodcastEpisode$ />} />,
      },
      {
        path: `/track/:trackId`,
        element: <Body children={<TeamTrackDetail$ />} />,
      },
      {
        path: `/concert/:concertId`,
        element: <Body children={<TeamConcertDetail$ />} />,
      },
      {
        path: `/profile/:userId`,
        element: <Body children={<TeamProfile$ />} />,
      },
    ],
  },
  {
    path: `*`,
    element: <Body children={<NotFoundPage />} />,
  },
]);

export default router;
