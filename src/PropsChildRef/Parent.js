import React, { Component } from 'react'

export default class Parent extends Component {
    state = {
        title: 'Cao Thành Long'
    }
    changeTitle = () => {
        this.setState({
            title: 'Đặng Vũ Mỹ Dung'
        })
    }
    render() {
        return (
            <div>

                <h1>{this.state.title}</h1>
                {/* {this.props.children} */}
                {/* <button className='btn btn-success' onClick={() => { this.changeTitle() }}>Click me</button> */}
            </div>
        )
    }
}
