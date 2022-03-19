import axios from "axios";

import "./assets/style.css";
import Img from "./assets/sejeong.jpg";
import Song from "./assets/Sejeong - SKYLINE.mp3";

const spotify_secret_key = process.env.REACT_APP_SPOTIFY_KEY;

function retrieveData() {
  console.log("iniRetrieve");
  axios
    .get("https://api.spotify.com/v1/me/playlists", {
      params: {
        api_key: spotify_secret_key,
      },
    })
    .then((response) => console.log(response.data))
    .catch((err) => console.log(err.data));
}

retrieveData();

console.log(process.env.REACT_APP_SPOTIFY_KEY);

function App() {
  return (
    <>
      <section class="content">
        <div class="container">
          {/* <!-- Album --> */}
          <div class="row justify-content-center">
            <div class="col-md-4">
              <div class="card text-center">
                <p class="decs">Playing from ALBUM</p>
                <p class="album">Plant</p>
                <div class="imgAlbum">
                  <img class="card-img-top" src={Img} alt="sejeong" />
                </div>

                <div class="card-body">
                  <h5 class="card-title">Skyline</h5>
                  <p class="card-text">Kim Sejeong</p>
                  <a href="#" class="btn btn-dark" id="shuffleMusic">
                    Shuffle Music
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Audio --> */}
          <div class="row justify-content-center">
            <audio controls class="audio">
              <source src={Song} type="audio/mpeg" />
            </audio>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
