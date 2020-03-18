import React, {Component} from 'react'
import ListItem from './list-item'

export default class Fieldset extends Component {
  render() {
    return(
        <ListItem 
          options={this.props.options}
          key={this.props.itemHash}
          featureHash = {this.props.featureHash}
          USCurrencyFormat = {this.props.USCurrencyFormat}
          selected={this.props.selected}
        />
    )
  }
}
