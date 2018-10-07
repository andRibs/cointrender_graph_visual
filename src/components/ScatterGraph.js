import React, { Component } from 'react';
import { Line, Scatter } from 'react-chartjs-2';




const ScatterGraph = (props) => {
  const style = {
    textAlign: 'center',
    width: '80%'
   
  }

  let allData = {
    labels: ['Intellisense'],
    datasets: props.dataSets
  };

  return (
    <div style={style} >
      <Scatter data={allData} height={450} options={{
        maintainAspectRatio: false, trendlineLinear: {
          style: "rgba(255,105,180, .8)",
          width: 2
        },

      }}
      />

    </div>

  )

}

export default ScatterGraph;