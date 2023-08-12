import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getComicsList, getRomanceList } from "../logics/api";
import ToonContainer from "../components/ToonContainer";
import styled from "@emotion/styled";
import { LEZHIN_ICON_URL } from "../constants/common";

const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
`;

const LezhinIconWrapper = styled.div`
  width: 48px;
  height: 48px;
  background-size: cover;
  background-position: center;
  background-color: red;
  justify-content: center;
  display: flex;
  margin-right: 20px;
  margin-bottom: 5px;
  cursor: pointer;
`;

const RankingTitleWrapper = styled.div`
  font-size: 50px;
  font-weight: bold;
  width: 700px;
  margin: 50px 0 20px 0;
  color: #dbdee3;
  display: flex;
  align-items: center;
`;

const ToonListWrapper = styled.div``;

export default function RankPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const genre = queryParams.get("genre");

  const [data, setData] = useState<any>({});

  const getURLData = async (genre: string, page: string | number) => {
    const res = await getComicsList(genre, page);
    setData(res);
  };

  console.log(data);
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const genre = queryParams.get("genre");

    if (!genre) {
      navigate("/ranking?genre=romance");
    } else {
      getURLData(genre, 1);
    }
  }, [location.search, navigate]);

  return (
    <BodyWrapper>
      <RankingTitleWrapper>
        <LezhinIconWrapper
          onClick={() => {
            navigate("/");
          }}
        >
          <img
            style={{ width: "30px" }}
            className="thumbnail"
            alt="logo"
            src={LEZHIN_ICON_URL}
          />
        </LezhinIconWrapper>
        {`${genre === "romance" ? "로맨스" : "드라마"}`} 장르 랭킹
      </RankingTitleWrapper>
      <ToonListWrapper>
        {data &&
          data.data?.map((toon: any) => {
            return <ToonContainer toon={toon} />;
          })}
      </ToonListWrapper>
    </BodyWrapper>
  );
}
