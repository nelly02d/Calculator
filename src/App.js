import React from "react";
import './scss/main.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currInput: '',
      prevInput: '',
      operation: undefined
    };

    this.handeNumbers = this.handeNumbers.bind(this);
    this.handleOperators = this.handleOperators.bind(this);
    this.calculate = this.calculate.bind(this);
    this.handleReset = this.handleReset.bind(this);
  };

  //handle to reset state to null
  handleReset = () => {
    this.setState({
      currInput: '',
      prevInput: '',
    })
  }

  //handle when number is pressed
  handeNumbers = (event) => {
    if(event.currentTarget.value === '.' && this.state.currInput.includes('.')) return;
    if(event.currentTarget.value === '.' && this.state.currInput === '') return;

    let stringInput = this.state.currInput.toString() + event.currentTarget.value.toString();
    this.setState({
      currInput: stringInput
    })
  }

  handleOperators = (event) => {
    if(this.state.currInput === '') return
    if(this.state.prevInput !== '') {
      this.calculate();
    };
    
    this.setState({
      currInput: '',
      prevInput: `${this.state.currInput} ${event.currentTarget.value}`,
      operation: event.currentTarget.value
    })
  }


  calculate = () => {
    let calculation;
    let operator = this.state.operation

    const prev = parseFloat(this.state.prevInput);
    const curr = parseFloat(this.state.currInput);
    if(isNaN(prev) || isNaN(curr)) return;

    // if(operator === '+') {
    //   calculation = prev + curr;
    // } else if(operator === '-') {
    //   calculation = prev - curr;
    // } else if(operator === 'x') {
    //   calculation = prev * curr;
    // } else if(operator === '/') {
    //   calculation = prev / curr;
    // }

    switch(operator) {
      case '+':
        calculation = prev + curr;
      break;
      case '-':
        calculation = prev - curr;
      break;
      case 'x':
        calculation = prev * curr;
      break;
      case '/':
        calculation = prev / curr;
      break;
    }

    this.setState({
      currInput: calculation,
      prevInput: ''
    })
  }

  render() {
    return(
      <div className='app'>
        <div className='calculator'>
          <div id='display'>
            <div id='previous-input'>{ this.state.prevInput }</div>
            <div id='current-input'>{ this.state.currInput }</div>
          </div>
          <div className='operator'>
            <button value='c' id='clear' onClick={ this.handleReset }>C</button>
            <button value='/' id='divide' onClick={ this.handleOperators }>/</button>
            <button value='x' id='multiply' onClick={ this.handleOperators }>x</button>
            <button value='+' id='add' onClick={ this.handleOperators }>+</button>
            <button value='-' id='subtract' onClick={ this.handleOperators }>-</button>
          </div>
          <div className='digits'>
            <button value='1' id='one' onClick={ this.handeNumbers }>1</button>
            <button value='2' id='two' onClick={ this.handeNumbers }>2</button>
            <button value='3' id='three' onClick={ this.handeNumbers }>3</button>
            <button value='4' id='four' onClick={ this.handeNumbers }>4</button>
            <button value='5' id='five' onClick={ this.handeNumbers }>5</button>
            <button value='6' id='six' onClick={ this.handeNumbers }>6</button>
            <button value='7' id='seven' onClick={ this.handeNumbers }>7</button>
            <button value='8' id='eight' onClick={ this.handeNumbers }>8</button>
            <button value='9' id='nine' onClick={ this.handeNumbers }>9</button>
            <button value='0' id='zero' onClick={ this.handeNumbers }>0</button>
            <button value='.' id='decimals' onClick={ this.handeNumbers }>.</button>
            <button value='=' id='equals' onClick={ this.calculate }>=</button>
          </div>
        </div>
    </div> 
    );
  };
};


export default App;
