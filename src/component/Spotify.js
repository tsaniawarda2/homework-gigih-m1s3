import React, { useEffect, useState } from "react";
import axios from "axios";

import "../assets/style.css";
import Img from "../assets/sejeong.jpg";
import Song from "../assets/Sejeong - SKYLINE.mp3";

export default function Spotify() {
  const [token, setToken] = useState("");
  const [data, setData] = useState({});

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      setToken(localStorage.getItem("accessToken"));
    }
  }, []);

  const handleData = () => {
    axios
      .get("https://api.spotify.com/v1/me/playlists", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => console.log(err.data));
  };

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
                  <a
                    href="#"
                    class="btn btn-dark"
                    id="shuffleMusic"
                    onClick={handleData}
                  >
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
