import React from 'react';
import './Rate.css';

import Calc from '../Calc/Calc';

class Rate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      currancyRate: {},
    };
    this.currancy = ['USD', 'RUB', 'CAD', 'UAH'];
    this.getRate = this.getRate.bind(this);
    this.getRate();
  }

  getRate() {
    fetch('http://api.exchangeratesapi.io/v1/' + 'latest' + '?access_key=' + '5294241822ebd69fa96fa96389334518')
    .then(data => {
      return data.json();
    })
    .then(data => {
      this.setState({date: data.date});
      let result = {};
      for(let i = 0; i < this.currancy.length; i++) {
        result[this.currancy[i]] = data.rates[this.currancy[i]];
      }
      this.setState({currancyRate: result});
    });
  }

  render() {
    return (
      <div className="rate">
        <h3 className='container-header'>Exchange course for {this.state.date}:</h3>
        <div className="flex-container">
          {Object.keys(this.state.currancyRate).map((keyName, i) => 
            (
            <div className="block flex-item" key={keyName}>
              <div className="currency-name">{keyName}</div>
              <div className="currency-in">{this.state.currancyRate[keyName].toFixed(2)}*</div>
              <p className="currency-out">*You can buy this for 1 EUR</p>
            </div>
            )
          )}
        </div>
        <Calc rate={this.state.currancyRate}/>
      </div>
    )
  }
}

export default Rate;
