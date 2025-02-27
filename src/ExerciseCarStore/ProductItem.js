import React, { Component } from 'react'

export default class ProductItem extends Component {

    render() {
        let { item } = this.props
        return (
            <div className="card text-white bg-primary">
                <img className="card-img-top" src={item.img} alt />
                <div className="card-body">
                    <h4 className="card-title">{item.name}</h4>
                    <p className="card-text">{item.price}</p>
                    <button onClick={() => { this.props.xemChiTiet(item) }} type="button" data-toggle="modal" data-target="#modelId" className='btn btn-success'>Xem chi tiết</button>
                </div>
            </div>

        )
    }
}
