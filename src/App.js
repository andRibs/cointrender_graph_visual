import React, { Component } from 'react';
import classes from './App.css';
import ScatterGraph from './components/ScatterGraph'
import regression from 'regression';

class App extends Component {
  constructor() {
    super();
    this.state = {
      showLinear1: false,
      showLinear2: false,
      showData1: true,
      showData2: true
    }
  }



  setData1 = () => {
    const show1 = this.state.showData1;
    this.setState({ showData1: !show1 });
  }

  setData2 = () => {
    const show2 = this.state.showData2;
    this.setState({ showData2: !show2 });
  }

  toggleLinear1 = () => {
    const doesShow1 = this.state.showLinear1;
    this.setState({ showLinear1: !doesShow1 });
  }
  toggleLinear2 = () => {
    const doesShow2 = this.state.showLinear2;
    this.setState({ showLinear2: !doesShow2 });
  }

  GetReg = (set) => {
    let parseData = [];
    set.data.forEach(point => {
      parseData.push([point.x, point.y]);
    });
    const result = regression.linear(parseData);
    const gradient = result.equation[0];
    const yIntercept = result.equation[1];
    let maxX = Math.max.apply(Math, set.data.map(function (o) { return o.x; }));
    let minX = Math.min.apply(Math, set.data.map(function (o) { return o.x; }));

    let firstPoint = Object.assign(set.data[0]);
    let dataReg = [{ x: minX, y: (gradient * minX + yIntercept) },
    { x: maxX, y: (gradient * maxX + yIntercept) }];

    return dataReg;
  }


  render() {
    const data1 = {
      label: 'Data set A',
      fill: false,
      lineTension: 0.1,
      backgroundColor: '#90EE90',
      borderColor: '#90EE90',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '#90EE90',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 8,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: '#90EE90',
      pointHoverBorderColor: '#90EE90',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [
        { x: 110, y: 120 },
        { x: 97, y: 110 },
        { x: 109, y: 106 },
        { x: 90, y: 102 },
        { x: 110, y: 118 },
        { x: 108, y: 115 },
        { x: 97, y: 99 },
        { x: 101, y: 97 },
        { x: 86, y: 94 },
        { x: 95, y: 89 }
      ],
    };

    const data2 = {
      label: 'Data set B',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,0.4)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,0.4)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 8,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,0.4)',
      pointHoverBorderColor: 'rgba(75,192,192,0.4)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [
        { x: 106, y: 115 },
        { x: 97, y: 104 },
        { x: 108, y: 98 },
        { x: 96, y: 101 },
        { x: 112, y: 98 },
        { x: 111, y: 106 },
        { x: 97, y: 95 },
        { x: 99, y: 98 },
        { x: 87, y: 87 },
        { x: 91, y: 86 }
      ],
    };

    let dataSets = [];

    if (this.state.showData1) {
      dataSets.push(data1);
    }

    if (this.state.showData2) {
      dataSets.push(data2);
    }

    if (this.state.showLinear1) {
      dataSets.push({
        label: 'Linear regression A',
        showLine: true,
        fill: false,
        lineTension: 0.1,
        borderColor: '#90EE90',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: '#90EE90',
        pointBackgroundColor: '#90EE90',
        pointBorderWidth: 10,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: '#90EE90',
        pointHoverBorderColor: '#90EE90',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: this.GetReg(data1)
      });
    }

    if (this.state.showLinear2) {
      dataSets.push({
        label: 'Linear regression B',
        showLine: true,
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,0.4)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,0.4)',
        pointBackgroundColor: 'rgba(75,192,192,0.4)',
        pointBorderWidth: 10,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,0.4)',
        pointHoverBorderColor: 'rgba(75,192,192,0.4)',
        backgroundColor: 'rgba(75,192,192,0.4)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: this.GetReg(data2)
      });
    }

    let dataBtn1 = this.state.showData1 ? 'btnGreenOn' : 'btnGreenOff';
    let dataBtn2 = this.state.showData2 ? 'btnBlueOn' : 'btnBlueOff';
    let regBtn1 = this.state.showLinear1 ? 'btnGreenOn' : 'btnGreenOff';
    let regBtn2 = this.state.showLinear2 ? 'btnBlueOn' : 'btnBlueOff';

    return (
      <div className="App">

        <p>Front-end Test Project by Andrey Plyushchenko</p>
        <p>October 2018</p>

        <ScatterGraph className={classes.App} dataSets={dataSets}
        />
        <button className={dataBtn1} onClick={this.setData1}>DATA SET A</button>
        <button className={dataBtn2} onClick={this.setData2}>DATA SET B</button>
        <button className={regBtn1} onClick={this.toggleLinear1}>Linear Reg. Data A</button>
        <button className={regBtn2} onClick={this.toggleLinear2}>Linear Reg. Data B</button>
        <a href="AndreyP-test-front-end.rar" download>Download Files</a>
	
      </div>
    );
  }
}

export default App;
