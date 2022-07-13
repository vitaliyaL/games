import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./GameInfo.css";
import { useDispatch, useSelector } from "react-redux";
import {inc, dec} from '../../redux/actions'

function GameInfo() {
  const [info, setInfo] = useState();

  const dispatch = useDispatch();

  const count = useSelector((store) => store.count.count);

const increment = () =>{
  dispatch(inc(10))
}

const decrement = () =>{
  dispatch(dec(10))
}

  const params = useParams();
  console.log(params);
  useEffect(() => {
    axios
      .get(
        `https://api.rawg.io/api/games/${params.id}?key=eba7a71de49f4a419200344351f2f231`
      )
      .then((res) => {
        console.log(res.data);
        setInfo(res.data);
      });
  }, []);

  return (
    <div>
      <p className="name">{info?.name}</p>
      <div style={info?.rating < 4 ? { color: "red" } : { color: "green" }}>
        {info?.rating}
      </div>
      <img width="400px" src={info?.background_image} />
      <div>
        <p>{info?.description_raw}</p>
      </div>
      <div>
        <p>{count}</p>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
    </div>
  );
}

export default GameInfo;
