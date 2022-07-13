import React from "react";
import { useEffect, useState } from "react";
import Card from "./Card/Card";
import "./Game.css";
import { Circles } from "react-loader-spinner";
import Button from "../Button/Button";
import Input from "../Input/Input";
import {Link} from "react-router-dom"
function Game() {
  const [game, setGame] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  useEffect(() => {
    fetch(
      `https://api.rawg.io/api/games?key=eba7a71de49f4a419200344351f2f231&page=${page}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data?.results);
        setGame(data?.results);
        setLoading(false);
      });
  }, [page]);
  useEffect(() => {
    fetch(
      `https://api.rawg.io/api/games?key=4112f87194d64e0ca2f4ce2fbe5ac117&search=${search}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data?.results);
        setGame(data?.results);
        setLoading(false);
      });
  }, [search]);
  const handlePage = (e) => {
    setPage(e.target.name);
  };
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const handleFilter = (e) => {
    setGame(
      game?.filter((i) =>
        i?.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };
  if (loading) {
    return (
      <Circles height="100" width="100" color="grey" ariaLabel="loading" />
    );
  } else {
    return (
      
      <>
        <p>Filter:</p>
        <Input onChange={handleFilter} />
        <p>Search:</p>
        <Input onChange={handleSearch} />
        
        <Card game={game}  />
        
        <div className="buttons">
          {game?.map((_, index) => {
            return (
              <Button
                key={index}
                text={index + 1}
                name={index + 1}
                onClick={handlePage}
              />
            );
          })}
        </div>
      </>
    );
  }
}

export default Game;
