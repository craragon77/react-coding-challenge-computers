import React, {Component} from 'react'

export default class Total extends Component{
    render(){
        const total = Object.keys(this.props.selectedOption).reduce(
            (acc, curr) => acc + this.props.selectedOption[curr].cost,
            0
        );
        return(
            <div>
                <p>Total:{total}</p>
            </div>
        )
    }
}