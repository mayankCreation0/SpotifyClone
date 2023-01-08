function authorize() {
  let hashParams = {};
  let e,
    r = /([^&;=]+)=?([^&;]*)/g,
    q = window.location.hash.substring(1);
  while ((e = r.exec(q))) {
    hashParams[e[1]] = decodeURIComponent(e[2]);
  }

  if (!hashParams.access_token) {
    window.location.href =
      "https://accounts.spotify.com/authorize?client_id=c5fd06c42610402e8ebf8048f6c971d7&scope=playlist-read-private%20playlist-read-collaborative%20playlist-modify-public%20user-read-recently-played%20playlist-modify-private%20ugc-image-upload%20user-follow-modify%20user-follow-read%20user-library-read%20user-library-modify%20user-read-private%20user-read-email%20user-top-read%20user-read-playback-state&response_type=token&redirect_uri=http://localhost:3000/";
  } else {
    localStorage.setItem('token', hashParams.access_token);
  }
}
//e2c99faf9e834d70a37afd66a6c85b50
//
//rohan clint id -->c5fd06c42610402e8ebf8048f6c971d7
export default authorize;
