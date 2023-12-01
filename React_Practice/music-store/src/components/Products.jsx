import React, { Component } from 'react'
import JSON from './db1.json'
import ProductList from './ProductList'

export default class Products extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: 'Products Page',
            products: JSON
        }
    }
    render() {
        return (
            <div>
                <h2>{this.state.title}</h2>
                <ProductList productList={this.state.products} />
            </div>
        )
    }
}
