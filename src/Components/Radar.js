import React from 'react'
import * as d3 from "d3";
import {RadarChart} from "./radarChart";
import {Grid} from "@material-ui/core";

const dataTech = [
  { name: 'Technical',
    axes: [
      {axis: 'Ethereum', value: 70},
      {axis: 'DLTs', value: 70},
      {axis: 'Solidity', value: 60},
      {axis: 'React', value: 80},
      {axis: 'Redux', value: 80},
      {axis: 'Material-UI', value: 80},
    ],
    color: "#4caf50"
  }];

const dataSoft = [
  { name: 'Soft',
    axes: [
      {axis: 'Scrum', value: 90},
      {axis: 'Sharing knowledge', value: 100},
      {axis: 'Team Work', value: 70},
    ],
    color: "#ffab00"
  }];

const margin = { top: 50, right: 80, bottom: 50, left: 80 }

const radarChartOptionsTech = {
  w: 240,
  h: 300,
  margin: margin,
  maxValue: 100,
  levels: 5,
  roundStrokes: true,
  color: d3.scaleOrdinal().range(["#4caf50"]),
  format: '.0f'
};

const radarChartOptionsSoft = {
  w: 240,
  h: 300,
  margin: margin,
  maxValue: 100,
  levels: 5,
  roundStrokes: true,
  color: d3.scaleOrdinal().range(["#ffab00"]),
  format: '.0f'
};


export const Radar = ({tech}) => {
  const data = tech ? dataTech : dataSoft;
  const idName = tech ? 'radarTech' : 'radarSoft'
  const radarChartOptions = tech ? radarChartOptionsTech : radarChartOptionsSoft;

  RadarChart(`.${idName}`, data, radarChartOptions);
  return <Grid container item xs={12} style={{marginBottom: '10px', justifyContent:'center'}}>
    <div className={idName}/>
  </Grid>
};
