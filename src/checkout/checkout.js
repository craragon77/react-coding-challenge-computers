import React, {Component} from 'react'
import Recipt from './recipt'
import Total from './total'


export default class Checkout extends Component{
    render() {
  //this one is the the list of what was checked out
        return (
          <div>
            <section className="main__summary">
            <h2>Your cart</h2>
            <Recipt 
                summary={this.props.summary}
                featureHash = {this.props.featureHash}
                selectedOption = {this.props.selectedOption}
            />
            <Total 
                selectedOption={this.props.selectedOption}
            />
          </section>
          </div>
        );
    }
}