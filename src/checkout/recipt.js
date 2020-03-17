import React, {Component} from 'react'
import ReciptItems from './recipt-items'


export default class Recipt extends Component{
    render() {
        return(
        <div className="summary__option" key={this.props.featureHash}>
            <ReciptItems
                summary = {this.props.summary} 
                key={this.props.featureHash}
                selectedOption = {this.props.selectedOption}
            />
        </div>
    )}
}