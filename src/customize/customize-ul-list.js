import React, {Component} from 'react';
import FieldSet from './ListItems/list-item'
import slugify from 'slugify'

export default class Customize extends Component {
    render() {
        const features = Object.keys(features).map((feature, idx) => {
        const featureHash = feature + '-' + idx;
        const options = features[feature].map(item => {
        const itemHash = slugify(JSON.stringify(item)
        );
          return (
            <fieldset className="feature" key={featureHash}>
              <legend className="feature__name">
                <h3>{features}</h3>
              </legend>
              <FieldSet 
                options={options}
                key={itemHash}
                featureHash = {featureHash}
                USCurrencyFormat = {this.props.USCurrencyFormat}
                selected={this.props.selected}
              />
            </fieldset>
          );
        });
        });
}
}