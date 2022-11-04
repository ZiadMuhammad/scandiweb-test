import styled from 'styled-components'


export const CartItemFlex = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`

export const ProductDetails = styled.div`
    
`

export const QtyImageContainer = styled.div`
    display: flex;
    width: 180px;
    height: 220px;
`

export const QtyFlex = styled.div`
    width: 25%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 4%;
`

export const SampleFlexItem = styled.div`
    height: 20%;
    border: 1px solid #1D1F22;
    cursor: pointer;
    position: relative;
    & p {
        font-size: 25px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
`

export const SampleP = styled.p`
    text-align: center;
`

export const ImgPlaceHolder = styled.div`
    width: 78%;
    position: relative;
`

export const CartItemTitle = styled.h2`
    font-size: ${props => (props.isModal ? "18px" : "")};
    margin-top: 0.5%;
    margin-bottom: 0.5%;
`

export const CartItemSubtitle = styled.p `
    margin-top: 0.5%;
    margin-bottom: 5%;
    font-size: ${props => (props.isModal ? "18px" : "22px")};
`