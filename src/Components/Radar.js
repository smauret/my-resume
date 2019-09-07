import React from 'react'
import * as d3 from "d3";
import {RadarChart} from "./radarChart";
import {Grid} from "@material-ui/core";

var data = [
  { name: 'Technical',
    axes: [
      {axis: 'Ethereum', value: 70},
      {axis: 'DLTs', value: 70},
      {axis: 'Solidity', value: 60},
      {axis: 'React', value: 80},
      {axis: 'Redux', value: 80},
      {axis: 'Material-UI', value: 80},
      {axis: 'Scrum', value: 0},
      {axis: 'Sharing knowledge', value: 0},
      {axis: 'Team Work', value: 0},
    ],
    color: "#4caf50"
  },
  { name: 'Soft',
    axes: [
      {axis: 'Ethereum', value: 0},
      {axis: 'DLTs', value: 0},
      {axis: 'Solidity', value: 0},
      {axis: 'React', value: 0},
      {axis: 'Redux', value: 0},
      {axis: 'Material-UI', value: 0},
      {axis: 'Scrum', value: 90},
      {axis: 'Sharing knowledge', value: 100},
      {axis: 'Team Work', value: 70},
    ],
    color: "#ffab00"

  }
];
var margin = { top: 50, right: 80, bottom: 50, left: 80 }


var radarChartOptions = {
  w: 290,
  h: 350,
  margin: margin,
  maxValue: 100,
  levels: 5,
  roundStrokes: true,
  color: d3.scaleOrdinal().range(["#4caf50", "#ffab00"]),
  format: '.0f'
};


export const Radar = () => {
  RadarChart(".radarChart", data, radarChartOptions);
  return <Grid container item xs={12} style={{marginBottom: '10px', justifyContent:'center'}}>
    <div id={'tl;dr'} className="radarChart"/>
  </Grid>
};
