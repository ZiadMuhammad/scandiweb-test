import React, { Component } from 'react'
import { CartConsumer } from '../../context/CartContext'
import { CurrencyConsumer } from '../../context/CurrencyContext'
import CartItem from '../CartItem'
import CheckoutPrice from '../CheckoutPrice'
import { ProductTitle } from '../shared/ProductTitle.styled'
import { CartCenter, CartList, HorizontalLine } from './CartContainer.styles'

export default class CartContainer extends Component {
  render() {
    return (
      <CartCenter>
        <CartList>
            { this.props.isModal ? <></> : <HorizontalLine /> }
            {this.props.products.map((item, index) => {
                const {key, val} = item;
                if(val) {
                return <div key={ index }>
                    <CartItem isModal={ this.props.isModal } itemId = { key } product = { val } />
                    <HorizontalLine />
                </div>
                }
            })}
            { this.props.isModal ? <></> : <CheckoutPrice totalPrice={ this.props.totalPrice } taxPrice = { this.props.taxPrice } totalItems={ this.props.totalItems } ></CheckoutPrice>} 
        </CartList>
      </CartCenter>
    )
  }
}
