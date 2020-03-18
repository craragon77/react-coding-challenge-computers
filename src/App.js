import React, { Component } from 'react';
import Customize from './customize/customize-ul-list'
import Checkout from './checkout/checkout'
import './App.css';

// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

class App extends Component {
  state = {
    selected: {
      Processor: {
        name: '17th Generation Intel Core HB (7 Core with donut spare)',
        cost: 700
      },
      'Operating System': {
        name: 'Ubuntu Linux 16.04',
        cost: 200
      },
      'Video Card': {
        name: 'Toyota Corolla 1.5v',
        cost: 1150.98
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500
      }
    }
  };

//this will stay in the App.js, but the state will be pushed down into customize the ul and li componenets
  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };
  render(){
    return(
      <div className="App">
        <header>
          <h1>ELF Computing | Laptops</h1>
        </header>
        <main>
          {/*This title stays in the customize form*/}
          <Customize 
            USCurrencyFormat = {USCurrencyFormat}
            selected={this.state.selected}
          />
          {/*This title stays in the cart*/}
          <section className="main__summary">
          <Checkout 
            USCurrencyFormat = {USCurrencyFormat}
            selected={this.state.selected}
          />
          </section>
        </main>
      </div>)
  }
}

export default App;
