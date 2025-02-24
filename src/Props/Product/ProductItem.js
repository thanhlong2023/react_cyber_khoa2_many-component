import React, { Component } from 'react'

export default class ProductItem extends Component {
    render() {
        let { name, price, image } = this.props.dataProductItem
        return (
            <div className='card text-left'>
                <img style={{ width: '350px' }} src={image} alt={image} className='card-img-top' />
                <div className="card-body">
                    <h4 className='card-title'>{name}</h4>
                    <p className='card-text'>{price}</p>
                </div>
            </div>
        )
    }
}
