import React, { Component } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { CartConsumer } from '../../context/CartContext';
import { CurrencyConsumer } from '../../context/CurrencyContext'
import { Card, OutOfStockOverlay, OutOfStockText, Price } from './ProductCard.styled'

export default class ProductCard extends Component {
  render() {
    return (
        <CurrencyConsumer>
            {value => {
                if(!this.props.inStock) {
                    return <Card>
                    <Link to={"/products/" + this.props.prodId}>
                        <OutOfStockOverlay isOutOfStock={ !this.props.inStock }>
                            <img alt="out of stock" src= {this.props.imgSrc} />
                            <p>{ this.props.name + " " + this.props.brand }</p>
                            <OutOfStockText>Out of Stock</OutOfStockText>
                            <Price>{ value.state.currentSymbol + this.props.price[value.state.currency].amount }</Price>
                            <button onClick={(e) => e.preventDefault()}><img alt="cart" src="https://i.ibb.co/6nJx2DH/Empty-Cart.png"/></button>
                        </OutOfStockOverlay>
                        </Link>
                    </Card>
                } else {
                    return <Card>
                    <Link to={"/products/" + this.props.prodId}>
                        <img alt="product" src= {this.props.imgSrc} />
                        <p>{ this.props.name + " " + this.props.brand }</p>
                        <Price>{ value.state.currentSymbol + this.props.price[value.state.currency].amount }</Price>
                        <CartConsumer>
                            {
                                cartValue => {
                                    const selectedAttributes = {}
                                        
                                    this.props.attributes.map((attribute, index) => {
                                      selectedAttributes[attribute.id] = attribute.items[0].value;
                                      return null;
                                    })
                                    
                                    return <button onClick={(e) => { e.preventDefault(); cartValue.addProduct({ productId: this.props.prodId, selectedAttributes: selectedAttributes, price: this.props.price })}}><img alt="cart" id="center-img" src="https://i.ibb.co/VVS6T1V/Empty-Cart.png"/></button>

                                }
                            }
                        </CartConsumer>
                        </Link>
                </Card>
                }
            }
            }
        </CurrencyConsumer>
    )
  }
}
