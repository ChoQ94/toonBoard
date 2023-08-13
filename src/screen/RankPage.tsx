import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getComicsList, getRomanceList } from "../logics/api";
import ToonContainer from "../components/ToonContainer";
import styled from "@emotion/styled";
import { LEZHIN_ICON_URL } from "../constants/common";
import FilterContainer from "../components/FilterContainer";

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
  width: 600px;
  margin: 50px 0 20px 0;
  color: #dbdee3;
  display: flex;
  align-items: center;
`;
const ToonListWrapper = styled.div``;

export default function RankPage() {
  const [target, setTarget] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const genre = queryParams.get("genre");

  const [list, setList] = useState<any>([]); // 본데이터
  const [filteredData, setFilteredData] = useState<any>(); // 필터데이터
  const [filter, setFilter] = useState<any>([]); // 필터

  const changeFilter = (type: string, value: string | number | boolean) => {
    let newFilter = [...filter];
    const filteredIndex = newFilter.findIndex((filter) => filter.type === type);
    const isScheduled = filter.some(
      (item: any) => item.type === "contentsStateScheduled"
    );
    const isCompleted = filter.some(
      (item: any) => item.type === "contentsStateCompleted"
    );
    if (type === "contentsStateCompleted" && isScheduled) {
      const checkIndex = newFilter.findIndex(
        (filter) => filter.type === "contentsStateScheduled"
      );
      newFilter.splice(checkIndex, 1);
    }

    if (type === "contentsStateScheduled" && isCompleted) {
      const checkIndex = newFilter.findIndex(
        (filter) => filter.type === "contentsStateCompleted"
      );
      newFilter.splice(checkIndex, 1);
    }

    if (filteredIndex !== -1) {
      newFilter.splice(filteredIndex, 1);
    } else {
      newFilter.push({ type, value });
    }
    setFilter(newFilter);
  };

  const getURLData = async (genre: string, page: string | number) => {
    const res = await getComicsList(genre, page);
    setList(res.data);
    setFilteredData(res.data);
  };

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const genre = queryParams.get("genre");

    if (!genre) {
      navigate("/ranking?genre=romance");
    } else {
      getURLData(genre, 1);
    }
  }, [location.search, navigate]);

  useEffect(() => {
    let filtered = list;
    filter.forEach((items: any) => {
      if (items.type === "contentsStateScheduled") {
        filtered = filtered?.filter(
          (item: any) => item.contentsState === "scheduled"
        );
      } else if (items.type === "contentsStateCompleted") {
        filtered = filtered?.filter(
          (item: any) => item.contentsState === "completed"
        );
      } else if (items.type === "freedEpisodeSize") {
        filtered = filtered?.filter(
          (item: any) => item.freedEpisodeSize > items.value
        );
      } else if (items.type === "isPrint") {
        filtered = filtered?.filter(
          (item: any) => item.isPrint === items.value
        );
      }
    });
    setFilteredData(filtered);
  }, [filter, list]);

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
      <FilterContainer filter={filter} changeFilter={changeFilter} />
      <ToonListWrapper>
        {filteredData &&
          filteredData?.map((toon: any) => {
            return <ToonContainer key={toon.id} toon={toon} />;
          })}
      </ToonListWrapper>
    </BodyWrapper>
  );
}
