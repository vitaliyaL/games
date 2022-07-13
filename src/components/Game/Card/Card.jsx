import React, { useState, useReducer } from "react";
import "./Card.css";
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import { Link } from "react-router-dom";

import GaugeChart from "react-gauge-chart";
const initialState = {
  count: 0,
};
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      console.log("error");
  }
}
function Card({ game }) {
  const arr = new Array(game.length).fill(0);
  const [count, setCount] = useState(arr);
  const [state, dispatch] = useReducer(reducer, initialState);
  // onclick(()=>{dispatch({type: 'decrement'})})
  // <p>{state.count}</p>
  return (
    <div className="game__cont">
      {game.map(({ id, background_image, name, released, rating }, index) => {
        return (
          <div className="card" key={id}>
            <Link to={`/trailers/${id}`}>
              <img src={background_image} />
            </Link>
            <Link to={`/gameinfo/${id}`}>
              <p>name: {name}</p>
            </Link>
            <p>date: {released}</p>
            <Rater total={5} rating={rating} />

            <GaugeChart nrOfLevels={20} percent={rating / 5} />
            <div className="like">
              <button
                onClick={() =>
                  setCount((i) => {
                    const newCount = [...i];
                    newCount[index] = i[index] + 1;
                    return newCount;
                  })
                }
              >
                <ThumbUpIcon />
              </button>
              <p> {count[index]}</p>
              <button
                onClick={() =>
                  setCount((i) => {
                    const newCount = [...i];
                    newCount[index] = i[index] - 1;
                    return newCount;
                  })
                }
              >
                <ThumbDownIcon />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Card;
