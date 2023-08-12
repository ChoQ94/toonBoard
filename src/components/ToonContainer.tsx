import styled from "@emotion/styled";
import React from "react";
import { SCHEDULE_PERIOD } from "../constants/common";

const ToonWrapper = styled.div`
  width: 600px;
  height: 170px;
  padding: 10px;
  display: flex;
  border: 1px solid grey;
  margin: 10px;
  background: #ffffff;
`;

const ThumbnailWrapper = styled.div`
  margin-right: 5px;
  width: 140px;
  height: 170px;
`;

const ThumbnailImage = styled.img`
  width: 100%;
  height: 100%;
`;

const RankingWrapper = styled.div`
  width: 50px;
  height: 100%;
  text-align: center;
  margin-right: 10px;
`;

const ToonDetail = styled.div`
  width: 600px;
  height: 100%;
  padding: 10px;
  box-sizing: border-box;
`;

const Title = styled.div`
  font-size: 25px;
  margin-bottom: 20px;
`;

interface ToonDetailProps {
  toon: any;
}

export default function ToonContainer(props: ToonDetailProps) {
  const { toon } = props;
  console.log(toon);

  const calculateRank = (currentRank: number, prevRank: number) => {
    if (currentRank - prevRank > 0) {
      return `▲ ${currentRank - prevRank}`;
    } else if (currentRank - prevRank === 0) {
      return "-";
    } else {
      return `▼ ${prevRank - currentRank}`;
    }
  };

  const renderSchedule = (schedule: any, state: any) => {
    if (state === "completed") {
      return "완결";
    } else {
      return "매주 " + SCHEDULE_PERIOD[schedule.periods[0]] + " 연재";
    }
  };

  const renderArtist = (artistList: any[]) => {
    return artistList
      .filter(
        (artist) =>
          artist.role === "writer" ||
          artist.role === "painter" ||
          artist.role === "scripter"
      )
      .map((artist) => (
        <div
          style={{
            marginRight: "5px",
            border: "1px solid #A1A3A6",
            padding: "2px",
          }}
          key={artist.id}
        >
          {artist.name}
        </div>
      ));
  };

  return (
    <>
      <ToonWrapper>
        <ThumbnailWrapper>
          <ThumbnailImage
            className="thumbnail"
            alt="toonThumbnail"
            src={toon.thumbnailSrc}
          />
        </ThumbnailWrapper>
        <RankingWrapper>
          <div style={{ fontSize: "45px", fontWeight: "bold" }}>
            <em>{toon.currentRank}</em>
          </div>
          <div style={{ fontSize: "15px", marginTop: "10px" }}>
            {calculateRank(toon.currentRank, toon.previousRank)}
          </div>
        </RankingWrapper>
        <ToonDetail>
          <Title>{toon.title}</Title>
          <div style={{ display: "flex", marginBottom: "5px" }}>
            {renderArtist(toon.artists)}
          </div>
          <div style={{ color: "#A1A3A6", marginBottom: "5px" }}>
            {toon.freedEpisodeSize}화 무료
          </div>
          <div>{renderSchedule(toon.schedule, toon.contentsState)}</div>
        </ToonDetail>
      </ToonWrapper>
    </>
  );
}
