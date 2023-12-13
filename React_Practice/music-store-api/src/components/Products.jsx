import React, { Component } from 'react'
import JSON from './db1.json'
import ProductList from './ProductList'

const url = "http://localhost:6700/products"
export default class Products extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: 'Products Page',
            products: ''
        }
    }
    componentDidMount() {
        // fetch(url, { method: 'GET' })
        //     .then((res) => res.json())
        //     .then((data) => {
        //         this.setState({
        //             products: data
        //         })
        //     })
        this.setState({ products: JSON })
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
