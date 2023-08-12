import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function RankPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const genre = queryParams.get("genre");

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const genre = queryParams.get("genre");

    if (!genre) {
      navigate("/ranking?genre=romance");
    }
  }, [location.search, navigate]);

  return <>{genre}</>;
}
