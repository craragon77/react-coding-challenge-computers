import React, {Component} from 'react'

export default class ReciptItems extends Component{
    render() {
        return(
            <div>
                <div className="summary__option__label">
                    {this.props.feature}
                </div>
                <div className="summary__option__value">
                    {this.props.selectedOption.name}
                </div>
          </div>
        )
    }
}