import React, {Component} from 'react'
import ListItem from './list-item'

export default class Fieldset extends Component {
  render() {
    const features = Object.keys(this.props.features).map((feature, idx) => {
      console.log(features)
      const featureHash = feature + '-' + idx;
      const options = this.props.features[feature].map(item => {
      const itemHash = slugify(JSON.stringify(item));
      return (
          <fieldset className="feature" key={featureHash}>
            <legend className="feature__name">
              <h3>{features}</h3>
              <ListItem 
                key={featureHash}
                itemHash={itemHash}  
                options={options} 
                features={features}
                featureHash = {featureHash}
              />
            </legend>
          </fieldset>
      )
      })
    })
  }
}