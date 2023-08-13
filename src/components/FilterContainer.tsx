import styled from "@emotion/styled";
import React from "react";

const FilterWrapper = styled.div`
  width: 600px;
  gap: 10px;
  display: flex;
  // justify-content: space-between;
  align-items: center;
  height: 50px;
  color: #ffffffde;
`;

const FilterButton = styled.div`
  background-color: #3f4143;
  padding: 10px;
  cursor: pointer;
  border-radius: 20px;
`;

interface FilterProps {
  filter: any;
  changeFilter: any;
}
export default function FilterContainer(props: FilterProps) {
  const { filter, changeFilter } = props;

  return (
    <FilterWrapper>
      <FilterButton
        style={{
          background: filter.some(
            (item: any) => item.type === "contentsStateScheduled"
          )
            ? "red"
            : "#3f4143",
        }}
        onClick={() => {
          changeFilter("contentsStateScheduled", "scheduled");
        }}
      >
        연재중
      </FilterButton>
      <FilterButton
        style={{
          background: filter.some(
            (item: any) => item.type === "contentsStateCompleted"
          )
            ? "red"
            : "#3f4143",
        }}
        onClick={() => {
          changeFilter("contentsStateCompleted", "completed");
        }}
      >
        완결
      </FilterButton>
      <FilterButton
        style={{
          background: filter.some(
            (item: any) => item.type === "freedEpisodeSize"
          )
            ? "red"
            : "#3f4143",
        }}
        onClick={() => {
          changeFilter("freedEpisodeSize", 3);
        }}
      >
        무료회차 3회 이상
      </FilterButton>
      <FilterButton
        style={{
          background: filter.some((item: any) => item.type === "isPrint")
            ? "red"
            : "#3f4143",
        }}
        onClick={() => {
          changeFilter("isPrint", true);
        }}
      >
        단행본
      </FilterButton>
    </FilterWrapper>
  );
}
