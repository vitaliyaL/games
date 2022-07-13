import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Trailers.css";

function Trailers() {
  const [info, setInfo] = useState([]);
  const params = useParams();
  console.log(params);
  useEffect(() => {
    axios
      .get(
        `https://api.rawg.io/api/games/${params.id}/movies?key=eba7a71de49f4a419200344351f2f231`
      )
      .then((res) => {
        console.log(res.data.results);
        setInfo(res.data.results);
      });
  }, []);
  return (
    <div>
      {info?.map(({ id, name, preview,data }) => {
        return (
          <div key={id}>
            <p>{name}</p>
            <video width="300px" controls poster={preview}>
              <source src={data?.max} type="video/mp4"/>
            </video>
          </div>
        );
      })}
    </div>
  );
}

export default Trailers;
