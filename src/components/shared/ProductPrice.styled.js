import styled from 'styled-components';

export const ProductPrice = styled.p`
    margin-top: 1%;
    font-size: ${props => (props.isModal ? "16px" : "20px")};
    font-weight: bold;
`