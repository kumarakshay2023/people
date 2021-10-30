import React, { Component } from 'react';
import '../App.css';
import { Cardlist } from '../component/card-list/card-list';
import { ToFrom } from '../component/range/Tofrom';

const people = require('../people.json');

class Slider extends Component {
  constructor() {
    super();
    this.state = {
      people: people,
      from: 0,
      to: Number.MAX_SAFE_INTEGER,
    };

  }
  handleSlider = (event) => {
    event.preventDefault();
    let from = this.state.from;
    let to = this.state.to;
    let filtered = people.filter((people) => {
      let balance = getIntFromComma(people.balance);
      if (from <= balance && balance <= to) {
        return true;
      }
      return false;
    })
    this.setState({people : filtered});
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }
  render() {

    return (
      <div className='App'>

        <h1 className='heading'>Peoples</h1>
        <ToFrom handleSlider={this.handleSlider} handleChange={this.handleChange}></ToFrom>
        <Cardlist people={this.state.people}></Cardlist>
      </div>
    );
  }
}

function getIntFromComma(s) {
  s = s.replace(/,/g, '').replace('$', ''); // 1125, but a string, so convert it to number
  s = parseFloat(s, 10);
  return s;
}

export default Slider;


