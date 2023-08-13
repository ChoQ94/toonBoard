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
      <div style={{ color: "white", marginTop: "200px" }}>
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
      <div style={{ color: "white", marginTop: "200px" }}>
        * 랭킹 페이지에서 로고버튼을 누르면 다시 이 화면으로 돌아옵니다.
      </div>
    </div>
  );
}
