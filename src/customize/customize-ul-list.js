import React, {Component} from 'react';
import FieldSet from './ListItems/list-item'

export default class Customize extends Component {
    render() {
    //i have a feeling that this stays here, but that we will need a prop called features
        return (
        <form className="main__form">
            <h2>Customize your laptop</h2>
            <FieldSet 
                feature={this.props.features} 
                key={this.props.featureHash}
                updateFeatures={this.props.updateFeature}
                USCurrencyFormat = {this.props.USCurrencyFormat}
                selected={this.props.selected}/>
        </form>
    )}
}