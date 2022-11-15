import React, { PureComponent } from 'react'
import ProductsContainer from '../components/ProductsContainer'
import CatNameHeader from '../components/shared/CatNameHeader.styled'


export default class CategoryPage extends PureComponent {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <>
        <CatNameHeader>{this.props.match.params.categoryName}</CatNameHeader>
        <ProductsContainer categoryName={this.props.match.params.categoryName} />
      </>
    )
  }
}
