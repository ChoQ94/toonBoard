import React from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();
  const routeToRanking = (genre: string) => {
    navigate(`/ranking?&genre=${genre}`);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{ color: "white", margin: "200px 0 30px 0", fontWeight: "bold" }}
      >
        조규원(프런트 과제)
      </div>
      <button
        style={{
          width: "200px",
          height: "50px",
          margin: "20px",
          cursor: "pointer",
        }}
        onClick={() => {
          routeToRanking("romance");
        }}
      >
        로맨스 장르 랭킹
      </button>
      <button
        style={{
          width: "200px",
          height: "50px",
          margin: "20px",
          cursor: "pointer",
        }}
        onClick={() => {
          routeToRanking("drama");
        }}
      >
        드라마 장르 랭킹
      </button>
    </div>
  );
}
