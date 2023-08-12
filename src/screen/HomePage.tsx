import React from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();
  const routeToRanking = (genre: string) => {
    navigate(`/ranking?&genre=${genre}`);
  };

  return (
    <div>
      <button
        onClick={() => {
          routeToRanking("romance");
        }}
      >
        로맨스 장르 랭킹
      </button>
      <button
        onClick={() => {
          routeToRanking("drama");
        }}
      >
        드라마 장르 랭킹
      </button>
    </div>
  );
}
