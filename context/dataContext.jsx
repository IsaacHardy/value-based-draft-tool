import React, { createContext, useState, useContext, useEffect } from "react";
const initalQbData = require("../pages/api/data/qb.json");
const initalRbData = require("../pages/api/data/rb.json");
const initalWrData = require("../pages/api/data/wr.json");
const initalTeData = require("../pages/api/data/te.json");

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [{ qbData, rbData, wrData, teData }, setPosData] = useState({
    qbData: [],
    rbData: [],
    wrData: [],
    teData: [],
  });

  const QB_REPLACEMENT_INDEX = 22;
  const QB_BENCH_INDEX = 15;

  const RB_REPLACEMENT_INDEX = 60;
  const RB_BENCH_INDEX = 35;

  const WR_REPLACEMENT_INDEX = 60;
  const WR_BENCH_INDEX = 35;

  const TE_REPLACEMENT_INDEX = 30;
  const TE_BENCH_INDEX = 15;

  useEffect(() => {
    const cleanedQbData = initalQbData.map(({ Player, Team, FPTS }) => ({
      Player,
      Team,
      FPTS,
      pos: "QB",
      vorp: Math.round(FPTS - initalQbData[QB_REPLACEMENT_INDEX].FPTS),
      vols: Math.round(FPTS - initalQbData[QB_BENCH_INDEX].FPTS),
    }));

    const cleanedRbData = initalRbData.map(({ Player, Team, FPTS }) => ({
      Player,
      Team,
      FPTS,
      pos: "RB",
      vorp: Math.round(FPTS - initalRbData[RB_REPLACEMENT_INDEX].FPTS),
      vols: Math.round(FPTS - initalRbData[RB_BENCH_INDEX].FPTS),
    }));

    const cleanedWrData = initalWrData.map(({ Player, Team, FPTS }) => ({
      Player,
      Team,
      FPTS,
      pos: "WR",
      vorp: Math.round(FPTS - initalWrData[WR_REPLACEMENT_INDEX].FPTS),
      vols: Math.round(FPTS - initalWrData[WR_BENCH_INDEX].FPTS),
    }));

    const cleanedTeData = initalTeData.map(({ Player, Team, FPTS }) => ({
      Player,
      Team,
      FPTS,
      pos: "TE",
      vorp: Math.round(FPTS - initalTeData[TE_REPLACEMENT_INDEX].FPTS),
      vols: Math.round(FPTS - initalTeData[TE_BENCH_INDEX].FPTS),
    }));
    setPosData({
      qbData: cleanedQbData,
      rbData: cleanedRbData,
      wrData: cleanedWrData,
      teData: cleanedTeData,
    });
    setIsLoading(false);
  }, []);

  useEffect(() => {
    const cleanedQbData = qbData.map(({ Player, Team, FPTS }) => ({
      Player,
      Team,
      FPTS,
      pos: "QB",
      vorp: Math.round(FPTS - qbData[QB_REPLACEMENT_INDEX].FPTS),
      vols: Math.round(FPTS - qbData[QB_BENCH_INDEX].FPTS),
    }));

    const cleanedRbData = rbData.map(({ Player, Team, FPTS }) => ({
      Player,
      Team,
      FPTS,
      pos: "RB",
      vorp: Math.round(FPTS - rbData[RB_REPLACEMENT_INDEX].FPTS),
      vols: Math.round(FPTS - rbData[RB_BENCH_INDEX].FPTS),
    }));

    const cleanedWrData = wrData.map(({ Player, Team, FPTS }) => ({
      Player,
      Team,
      FPTS,
      pos: "WR",
      vorp: Math.round(FPTS - wrData[WR_REPLACEMENT_INDEX].FPTS),
      vols: Math.round(FPTS - wrData[WR_BENCH_INDEX].FPTS),
    }));

    const cleanedTeData = teData.map(({ Player, Team, FPTS }) => ({
      Player,
      Team,
      FPTS,
      pos: "TE",
      vorp: Math.round(FPTS - teData[TE_REPLACEMENT_INDEX].FPTS),
      vols: Math.round(FPTS - teData[TE_BENCH_INDEX].FPTS),
    }));

    const concatData = [
      ...cleanedQbData,
      ...cleanedRbData,
      ...cleanedWrData,
      ...cleanedTeData,
    ];

    const sortedData = concatData.sort((a, b) => b.vorp - a.vorp);
    setData(sortedData);
    setIsLoading(false);
  }, [qbData, rbData, wrData, teData]);

  const draftPlayer = (pos, player) => {
    setIsLoading(true);
    switch (pos) {
      case "QB":
        setPosData({
          rbData,
          wrData,
          teData,
          qbData: qbData.filter(({ Player }) => Player !== player),
        });
        break;
      case "RB":
        setPosData({
          rbData: rbData.filter(({ Player }) => Player !== player),
          wrData,
          teData,
          qbData,
        });
        break;
      case "WR":
        setPosData({
          rbData,
          wrData: wrData.filter(({ Player }) => Player !== player),
          teData,
          qbData,
        });
        break;
      case "TE":
        setPosData({
          rbData,
          wrData,
          teData: teData.filter(({ Player }) => Player !== player),
          qbData,
        });
        break;
      default:
        break;
    }
  };

  const value = {
    data,
    qbData,
    rbData,
    wrData,
    teData,
    draftPlayer,
    isLoading,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export const useDataContext = () => {
  const context = useContext(DataContext);
  return context;
};
