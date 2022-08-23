import React from "react";
import './scss/main.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentInput: '',
      result: ''
    };

    this.handleDisplay = this.handleDisplay.bind(this);
  };

  handleDisplay = (e) => {
    const value = e.target.textContent;

    if (value === 'C') {
      this.setState({
        currentInput: ''
      })
    } else {
      this.setState(state => ({
        currentInput: this.state.currentInput + value
      }));
    }

    
   
//   handleCalculation = () => {
    
// ;  };

  }

  render() {
    return(
      <div className='app'>
        <div className='calculator'>
          <div id='display'>
            <div id='previous-operand'></div>
            <div id='current-input'>{ this.state.currentInput || 0 }</div>
          </div>
          <div className='operator'>
            <button id='clear' onClick={ this.handleDisplay }>C</button>
            <button id='divide' onClick={ this.handleDisplay }>÷</button>
            <button id='multiply' onClick={ this.handleDisplay }>x</button>
            <button id='add' onClick={ this.handleDisplay }>+</button>
            <button id='subtract' onClick={ this.handleDisplay }>-</button>
          </div>
          <div className='digits'>
            <button id='one' onClick={ this.handleDisplay }>1</button>
            <button id='two' onClick={ this.handleDisplay }>2</button>
            <button id='three' onClick={ this.handleDisplay }>3</button>
            <button id='four' onClick={ this.handleDisplay }>4</button>
            <button id='five' onClick={ this.handleDisplay }>5</button>
            <button id='six' onClick={ this.handleDisplay }>6</button>
            <button id='seven' onClick={ this.handleDisplay }>7</button>
            <button id='eight' onClick={ this.handleDisplay }>8</button>
            <button id='nine' onClick={ this.handleDisplay }>9</button>
            <button id='zero' onClick={ this.handleDisplay }>0</button>
            <button id='decimals' onClick={ this.handleDisplay }>.</button>
            <button id='equals'>=</button>
          </div>
        </div>
    </div> 
    );
  };
};


export default App;
