import React, { createContext, useState, useContext, useEffect } from 'react';
const initalQbData = require('../pages/api/data/qb.json');
const initalRbData = require('../pages/api/data/rb.json');
const initalWrData = require('../pages/api/data/wr.json');
const initalTeData = require('../pages/api/data/te.json');

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [qbData, setQbData] = useState([]);
  const [rbData, setRbData] = useState([]);
  const [wrData, setWrData] = useState([]);
  const [teData, setTeData] = useState([]);

  const QB_REPLACEMENT_INDEX = 21;
  const QB_BENCH_INDEX = 17;

  const RB_REPLACEMENT_INDEX = 50;
  const RB_BENCH_INDEX = 35;

  const WR_REPLACEMENT_INDEX = 55;
  const WR_BENCH_INDEX = 35;

  const TE_REPLACEMENT_INDEX = 21;
  const TE_BENCH_INDEX = 17;

  useEffect(() => {
    setQbData(initalQbData);
    setRbData(initalRbData);
    setWrData(initalWrData);
    setTeData(initalTeData);
  }, [])

  useEffect(() => {
    const cleanedQbData = qbData.map(({ Player, Team, FPTS }) => ({
      Player, 
      Team, 
      FPTS,
      pos: 'QB',
      vorp: Math.round(FPTS - qbData[QB_REPLACEMENT_INDEX].FPTS),
      vols: Math.round(FPTS - qbData[QB_BENCH_INDEX].FPTS),
    }));
  
    const cleanedRbData = rbData.map(({ Player, Team, FPTS }) => ({
      Player, 
      Team, 
      FPTS,
      pos: 'RB',
      vorp: Math.round(FPTS - rbData[RB_REPLACEMENT_INDEX].FPTS),
      vols: Math.round(FPTS - rbData[RB_BENCH_INDEX].FPTS),
    }));
  
    const cleanedWrData = wrData.map(({ Player, Team, FPTS }) => ({
      Player, 
      Team, 
      FPTS,
      pos: 'WR',
      vorp: Math.round(FPTS - wrData[WR_REPLACEMENT_INDEX].FPTS),
      vols: Math.round(FPTS - wrData[WR_BENCH_INDEX].FPTS),
    }));
  
    const cleanedTeData = teData.map(({ Player, Team, FPTS }) => ({
      Player, 
      Team, 
      FPTS,
      pos: 'TE',
      vorp: Math.round(FPTS - teData[TE_REPLACEMENT_INDEX].FPTS),
      vols: Math.round(FPTS - teData[TE_BENCH_INDEX].FPTS),
    }));
  
    const concatData = [...cleanedQbData, ...cleanedRbData, ...cleanedWrData, ...cleanedTeData];
    
    const sortedData = concatData.sort((a, b) => b.vorp - a.vorp);
    setData(sortedData)
  }, [qbData, rbData, wrData, teData])

  const draftPlayer = (pos, player) => {
    switch (pos) {
      case "QB":
        setQbData(qbData.filter(({Player}) => Player !== player))
        break;
      case "RB":
        setRbData(rbData.filter(({Player}) => Player !== player))
        break;
      case "WR":
        setWrData(wrData.filter(({Player}) => Player !== player))
        break;
      case "TE":
        setTeData(teData.filter(({Player}) => Player !== player))
        break;
      default:
        break;
    }
  }

  const value = {
    data,
    draftPlayer
  };

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => {
  const context = useContext(DataContext);
  return context;
};
