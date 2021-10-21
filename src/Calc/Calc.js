import React from 'react';
import './Calc.css';

class Calc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0,
    };
  }

  static getDerivedStateFromProps(props, state) {
    return {rate: props.rate};
  }

  calcRate = (event) => {
    event.preventDefault();
    let elements = event.target.elements;
    let countCurrancy = elements['count-currancy'].value;
    let typeCurrancy = elements['type-currancy'].value;
    this.setState({ result: (countCurrancy / this.state.rate[typeCurrancy]).toFixed(2) });
  }

  render() {
    return (
      <div className="calculator">
        <h3 className='container-header'>Exchange calculator</h3>
        <div className="block-calc">
          <div>I want to..</div>
          <div>
            <form onSubmit={this.calcRate}>
              <input type="number" defaultValue='0'name="count-currancy" />
              <select name="type-currancy" id="">
                {Object.keys(this.props.rate).map((keyName) => 
                  (
                    <option key={keyName}>{keyName}</option>
                  )
                )}
              </select>
              <input type="submit" defaultValue="Get result" />
            </form>
          </div>
          <div>
            <h4 className="calc-res">Result:</h4>
            <ul className="calc-res">
              <li>EUR {this.state.result}</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Calc;
