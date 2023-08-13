import styled from "@emotion/styled";
import React from "react";
import { FILTER } from "../constants/common";

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
            (item: any) => item.type === FILTER["SCHEDULED"]
          )
            ? "red"
            : "#3f4143",
        }}
        onClick={() => {
          changeFilter(FILTER["SCHEDULED"], "scheduled");
        }}
      >
        연재중
      </FilterButton>
      <FilterButton
        style={{
          background: filter.some(
            (item: any) => item.type === FILTER["COMPLETED"]
          )
            ? "red"
            : "#3f4143",
        }}
        onClick={() => {
          changeFilter(FILTER["COMPLETED"], "completed");
        }}
      >
        완결
      </FilterButton>
      <FilterButton
        style={{
          background: filter.some(
            (item: any) => item.type === FILTER["FREE_EPISODE"]
          )
            ? "red"
            : "#3f4143",
        }}
        onClick={() => {
          changeFilter(FILTER["FREE_EPISODE"], 3);
        }}
      >
        무료회차 3회 이상
      </FilterButton>
      <FilterButton
        style={{
          background: filter.some(
            (item: any) => item.type === FILTER["IS_PRINT"]
          )
            ? "red"
            : "#3f4143",
        }}
        onClick={() => {
          changeFilter(FILTER["IS_PRINT"], true);
        }}
      >
        단행본
      </FilterButton>
    </FilterWrapper>
  );
}
