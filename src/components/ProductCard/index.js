import React, { Component } from 'react'
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { CartConsumer } from '../../context/CartContext';
import { CurrencyConsumer } from '../../context/CurrencyContext'
import { GET_PRODUCT } from '../../utils/gql-request-handler';
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
                            <img src= {this.props.imgSrc} />
                            <p>{ this.props.name + " " + this.props.brand }</p>
                            <OutOfStockText>Out of Stock</OutOfStockText>
                            <Price>{ value.state.currentSymbol + this.props.price[value.state.currency].amount }</Price>
                            <button onClick={(e) => e.preventDefault()}><img src="https://i.ibb.co/6nJx2DH/Empty-Cart.png"/></button>
                        </OutOfStockOverlay>
                        </Link>
                    </Card>
                } else {
                    return <Card>
                    <Link to={"/products/" + this.props.prodId}>
                        <img src= {this.props.imgSrc} />
                        <p>{ this.props.name + " " + this.props.brand }</p>
                        <Price>{ value.state.currentSymbol + this.props.price[value.state.currency].amount }</Price>
                        <CartConsumer>
                            {
                                cartValue => {
                                    const selectedAttributes = {}
                                        
                                    {this.props.attributes.map((attribute, index) => {
                                      selectedAttributes[attribute.id] = attribute.items[0].value;
                                    })} 
                                    
                                    return <button onClick={(e) => { e.preventDefault(); cartValue.addProduct({ productId: this.props.prodId, selectedAttributes: selectedAttributes, price: this.props.price })}}><img id="center-img" src="https://i.ibb.co/VVS6T1V/Empty-Cart.png"/></button>

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
