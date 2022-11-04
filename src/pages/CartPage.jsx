import React, { Component } from 'react'
import CartContainer from '../components/CartContainer';
import { CartTitle } from '../components/shared/CartTitle.styled';
import { CartConsumer } from '../context/CartContext';
import { CurrencyConsumer } from '../context/CurrencyContext';

export default class CartPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
        <CartConsumer> 
          { cartValue => {
            return <CurrencyConsumer>
              {
                value => {
                  
                  const products = [];
                  Object.entries(cartValue.state).forEach(entry => {
                    const [key, val] = entry;
                    products.push({val, key});
                  });

                  return <>
                  <CartTitle>{"Cart (" + cartValue.getTotalItems() + " items)"}</CartTitle>
                  <CartContainer products={ products } totalItems={ cartValue.getTotalItems() } taxPrice= {value.state.currentSymbol + (cartValue.getTotalPrice(value.state.currency) * 0.21).toFixed(2)} totalPrice={value.state.currentSymbol + cartValue.getTotalPrice(value.state.currency)} />
                  </>
                }
              }

              </CurrencyConsumer>
            }
          }
        </CartConsumer>
      </>
    )
  }
}