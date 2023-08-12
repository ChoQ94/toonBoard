import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getRomanceList } from "../logics/api";
import ToonContainer from "../components/ToonContainer";

export default function RankPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const genre = queryParams.get("genre");

  const [data, setData] = useState();

  const getData = async (page: number | string) => {
    const res = await getRomanceList(page);
    setData(res);
  };

  console.log(data);
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const genre = queryParams.get("genre");
    getData(1);
    if (!genre) {
      navigate("/ranking?genre=romance");
    }
  }, [location.search, navigate]);

  return (
    <>
      {genre}
      <ToonContainer />
    </>
  );
}
