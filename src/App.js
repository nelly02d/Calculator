import React from "react";
import './scss/main.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currInput: '',
      prevInput: '',
      operand: ['+', '-', '/', 'x']
    };

    this.handeNumbers = this.handeNumbers.bind(this);
    this.handleOperators = this.handleOperators.bind(this);
    this.calculate = this.calculate.bind(this);
  };

  
  handeNumbers = (e) => {
    const value = e.target.textContent;

    if(value === '.' && this.state.currInput.includes('.')) return;
    if(value === '.' && this.state.currInput === '') return;

    if (value === 'C') {
      this.setState({
        currInput: '',
        prevInput: ''
      })
    } else {
      this.setState(state => ({
        currInput: this.state.currInput.toString() + value.toString()
      }));
    }
  }

  handleOperators = (e) => {
    const value = e.target.textContent;
    if(this.state.operand.includes(value) && this.state.currInput === '') return;

    if(this.state.prevInput !== '') {
      this.calculate();
    };
    
    this.setState(state => ({
      prevInput: `${this.state.currInput} ${value}`,
      currInput:''
    }));
  }


  calculate = () => {
    let calculation;

    const prev = parseFloat(this.state.prevInput);
    const curr = parseFloat(this.state.currInput);
    if(isNaN(prev) || isNaN(curr)) return;

    // 

    // for(let i = 0; i < this.state.operand.length; i++) {
    //   switch(this.state.operand[i]) {
    //     case '+': 
    //       calculation = prev - curr
    //       break;
    //     case '-': 
    //       calculation = prev - curr
    //       break;
    //     case '*': 
    //       calculation = prev - curr
    //       break;
    //     case '/': 
    //       calculation = prev - curr
    //       break;
    //     default:
    //       return;
    //   }
    // }

    
    this.state.operand.forEach(operator => {
      if(operator === '+') {
        calculation = prev + curr
      } else if(operator === '-') {
        calculation = prev - curr;
      } else {
        return
      }

      console.log(operator)
    });


    this.setState(state => ({
      prevInput: calculation ,
      currInput: ''
    }));
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
            <button id='clear' onClick={ this.handeNumbers }>C</button>
            <button id='divide' onClick={ this.handleOperators }>/</button>
            <button id='multiply' onClick={ this.handleOperators }>x</button>
            <button id='add' onClick={ this.handleOperators }>+</button>
            <button id='subtract' onClick={ this.handleOperators }>-</button>
          </div>
          <div className='digits'>
            <button id='one' onClick={ this.handeNumbers }>1</button>
            <button id='two' onClick={ this.handeNumbers }>2</button>
            <button id='three' onClick={ this.handeNumbers }>3</button>
            <button id='four' onClick={ this.handeNumbers }>4</button>
            <button id='five' onClick={ this.handeNumbers }>5</button>
            <button id='six' onClick={ this.handeNumbers }>6</button>
            <button id='seven' onClick={ this.handeNumbers }>7</button>
            <button id='eight' onClick={ this.handeNumbers }>8</button>
            <button id='nine' onClick={ this.handeNumbers }>9</button>
            <button id='zero' onClick={ this.handeNumbers }>0</button>
            <button id='decimals' onClick={ this.handeNumbers }>.</button>
            <button id='equals' onClick={ this.calculate }>=</button>
          </div>
        </div>
    </div> 
    );
  };
};


export default App;
