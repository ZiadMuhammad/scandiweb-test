import React, { Component } from 'react'
import ProductCard from '../ProductCard'
import { CenterProducts, ContainProducts } from './ProductsContainer.styles'
import { Query } from 'react-apollo';
import { GET_ALL_PRODUCTS, GET_PRODUCTS } from '../../utils/gql-request-handler';
import { NavLinkHolder } from '../Navbar/Navbar.styles';

export default class ProductsContainer extends Component {
  render() {
    return (
      <CenterProducts>
        <ContainProducts>            
            <Query query={this.props.categoryName ? GET_PRODUCTS(this.props.categoryName) : GET_ALL_PRODUCTS } fetchPolicy='no-cache'>
                {({ loading, error, data }) => {
                  if (loading) return <div>Loading...</div>;
                  if (error) return <div>Error : </div>;
                  return (
                      data.category.products.map((product, index) => {
                          return <ProductCard key={index} prodId = {product.id} brand = { product.brand } attributes = { product.attributes } inStock = { product.inStock } imgSrc={product.gallery[0]} name={product.name} price={product.prices}/>
                      })
                  )
                  }}
            </Query>
        </ContainProducts>
      </CenterProducts>
    )
  }
}
