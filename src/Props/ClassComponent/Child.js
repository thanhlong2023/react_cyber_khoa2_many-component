import React, { Component } from 'react'

export default class Child extends Component {

    renderSize = () => {
        let { size } = this.props.productItem
        return size.map((number, index) => {
            return <button key={index}>{number}</button>
        })
    }
    render() {
        let { name, src } = this.props.productItem
        return (
            <div className="card text-white bg-dark" style={{ width: "18rem" }}>
                <img className="card-img-top" src={src} alt />
                <div className="card-body">
                    <h4 className="card-title">{name}</h4>
                    {this.renderSize()}
                    <p>Class Component</p>
                </div>


                <button onClick={() => { this.props.showAlert(name) }}>Detail</button>
            </div>

        )
    }
}
