import React, { PureComponent } from 'react'
import { Query } from 'react-apollo'
import { CurrencyConsumer } from '../../context/CurrencyContext'
import { GET_PRODUCT } from '../../utils/gql-request-handler'
import ProductAttribute from '../ProductAttribute'
import ProductImageController from '../ProductImageController'
import { AddToCart } from '../shared/AddToCart.styled'
import { AttributeTitle } from '../shared/AttributeTitle.styled'
import { ProductDescription } from '../shared/ProductDescription.styled'
import { ProductPrice } from '../shared/ProductPrice.styled'
import { ProductSubtitle } from '../shared/ProductSubtitle.styled'
import { ProductTitle } from '../shared/ProductTitle.styled'
import { CenterFlex, ProductDetails, ProductInfoContainer } from './ProductInfo.styles'
import Parser from 'html-react-parser';
import { CartConsumer } from '../../context/CartContext'


export default class ProductInfo extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {}
  }
  onCompletedHandler = (data) => {
    const selectedAttributes = {}
    data.product.attributes.map((attribute, index) => {
      selectedAttributes[attribute.id] = attribute.items[0].value;
      return null;
    })

    this.setState({ currentProduct: { productId: this.props.productId, selectedAttributes: selectedAttributes, price: data.product.prices } });
  }
  onChangeAttributeValue = (id, value) => {
    this.setState(prevState => ({ ...prevState, currentProduct: { ...prevState.currentProduct, selectedAttributes: { ...prevState.currentProduct.selectedAttributes, [id]: value } } }))
  }
  render() {
    return (
      <CenterFlex>
           <Query query={GET_PRODUCT(this.props.productId)} onCompleted={this.onCompletedHandler} fetchPolicy='no-cache'>
              {({ loading, error, data }) => {
              if (loading) return <div>Loading...</div>;
              if (error) return <div>Error : </div>;

              return <ProductInfoContainer>
                  <ProductImageController gallery={data.product.gallery} />
                  <ProductDetails>
                      <ProductTitle>{data.product.name}</ProductTitle>
                      <ProductSubtitle>{data.product.brand}</ProductSubtitle>
                      {data.product.attributes.map((attribute, index) => {
                        // if(this.state.currentProduct) console.log(this.state.currentProduct.selectedAttributes[attribute.id]);
                          return(<ProductAttribute key={index} inStock={ data.product.inStock } attribute={attribute} selectAttribute={ this.onChangeAttributeValue } selectedAttribute={this.state.currentProduct ? this.state.currentProduct.selectedAttributes[attribute.id] : ""} />)
                      })}
                      
                      <AttributeTitle>
                          Price:
                      </AttributeTitle>
                      <ProductPrice>
                          <CurrencyConsumer>
                              {
                                  value => {
                                      return(data.product.prices[value.state.currency].currency.symbol + data.product.prices[value.state.currency].amount)
                                  }
                              }
                          </CurrencyConsumer>
                      </ProductPrice>
                      <CartConsumer>
                        {
                          cartValue => {
                            if(this.state.currentProduct) {
                              return data.product.inStock ? <AddToCart onClick={() => cartValue.addProduct(this.state.currentProduct)}>Add to Cart</AddToCart> : <></>
                            }
                          }
                        }
                      </CartConsumer>
                      <ProductDescription>{Parser(data.product.description)}</ProductDescription>
                  </ProductDetails>
              </ProductInfoContainer>
              }}
          </Query>
      </CenterFlex>
    )
  }
}
