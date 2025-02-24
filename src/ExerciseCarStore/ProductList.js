import React, { Component } from 'react'
import ProductItem from './ProductItem'

export default class ProductList extends Component {
    renderProductItem = () => {
        return this.props.productsData.map((product, index) => {
            return (<div className='col-3' key={index}>
                <ProductItem item={product} xemChiTiet={this.props.xemChiTiet} />
            </div>)
        })
    }

    render() {
        return (
            <div className='container-fluid row mt-3'>
                {this.renderProductItem()}
            </div>
        )
    }
}
