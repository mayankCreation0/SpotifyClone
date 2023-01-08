import api from "../../utils/api";

export const getRecentlyPlayed = () =>
  api(
    "https://api.spotify.com/v1/me/player/recently-played?type=track&limit=10"
    // https://api.spotify.com/v1/me/player/recently-played \
  );

export const getRecommendations = (artistsIds, tracksIds, genre) =>
  api(
    `https://api.spotify.com/v1/recommendations?limit=15&countries=IN&seed_artists=1QOmebWGB6FdFtW7Bo3F0W&seed_genres=${genre}&seed_tracks=3oqWr0jDWNXxWufNogGREp`
  );

export const getFeaturedPlaylists = () =>
  api(`https://api.spotify.com/v1/browse/featured-playlists?limit=12`);

export const getNewReleases = () =>
  api(`https://api.spotify.com/v1/browse/new-releases?limit=20`);
