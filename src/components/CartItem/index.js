import React, { Component } from 'react'
import { Query } from 'react-apollo'
import { CartConsumer } from '../../context/CartContext'
import { CurrencyConsumer } from '../../context/CurrencyContext'
import { GET_PRODUCT } from '../../utils/gql-request-handler'
import MiniImageController from '../MiniImageController'
import ProductAttribute from '../ProductAttribute'
import { ImageController } from '../ProductImageController/ProductImageController.styles'
import { AttributeTitle } from '../shared/AttributeTitle.styled'
import { ProductPrice } from '../shared/ProductPrice.styled'
import { CartItemFlex, CartItemSubtitle, CartItemTitle, ImgPlaceHolder, ProductDetails, QtyFlex, QtyImageContainer, SampleFlexItem, SampleP } from './CartItem.styles'

export default class CartItem extends Component {
  render() {
    return (
      <CartItemFlex>
      <Query query={GET_PRODUCT(this.props.product.product.productId)} fetchPolicy='no-cache'>
      {({ loading, error, data }) => {
      if (loading) return <div>Loading...</div>;
      if (error) return <div>Error : </div>;
      return <>
            <ProductDetails>
            <CartItemTitle isModal= { this.props.isModal }>
                {data.product.name}
            </CartItemTitle>
            <CartItemSubtitle isModal= { this.props.isModal }>
                {data.product.brand}
            </CartItemSubtitle>
            <ProductPrice isModal={this.props.isModal}>
            <CurrencyConsumer>
            {
                value => {
                    return(data.product.prices[value.state.currency].currency.symbol + data.product.prices[value.state.currency].amount)
                }
            }
            </CurrencyConsumer>
            </ProductPrice>
            {data.product.attributes.map((attribute, index) => {
                  return(<ProductAttribute isModal={ this.props.isModal } key={index} inStock={ false } attribute={attribute} selectAttribute={ null } selectedAttribute={this.props.product.product ? this.props.product.product.selectedAttributes[attribute.id] : ""} />)
              })}
        </ProductDetails>
        <QtyImageContainer>
            <QtyFlex>
                <CartConsumer>
                    {
                        cartValue => {
                            return <>
                                <SampleFlexItem onClick={() => cartValue.incrementItem(this.props.itemId)}><p>+</p></SampleFlexItem>
                                <SampleP>{this.props.product.qty}</SampleP>
                                <SampleFlexItem onClick={() => cartValue.decrementItem(this.props.itemId)}><p>-</p></SampleFlexItem>
                            </>
                        }
                    }
                </CartConsumer>
            </QtyFlex>
            <ImgPlaceHolder><MiniImageController isModal = {this.props.isModal} gallery={ data.product.gallery } /></ImgPlaceHolder>
        </QtyImageContainer>  
      </>
      }}
    </Query>
    </CartItemFlex>
    )
  }
}
