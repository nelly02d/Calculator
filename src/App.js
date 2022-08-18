import React from "react";
import './scss/main.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentInput: '',
      result: ''
    }

  };
  render() {
    return(
      <div className='app'>
        <div className='calculator'>
          <div className='output'>
            <div className='previous-operand'>1234*</div>
            <div className='current-operand'>1234</div>
          </div>
          <div className='operator'>
            <button id='clear'>DEL</button>
            <button id='divide'>÷</button>
            <button id='multiply'>x</button>
            <button id='add'>+</button>
            <button>-</button>
          </div>
          <div className='digits'>
            <button id='one'>1</button>
            <button id='two'>2</button>
            <button id='three'>3</button>
            <button id='four'>4</button>
            <button id='five'>5</button>
            <button id='six'>6</button>
            <button id='seven'>7</button>
            <button id='eight'>8</button>
            <button id='nine'>9</button>
            <button id='zero'>0</button>
            <button id='decimals'>.</button>
            <button id='equals'>=</button>
          </div>
        </div>
    </div> 
    )
  }
};


export default App;
