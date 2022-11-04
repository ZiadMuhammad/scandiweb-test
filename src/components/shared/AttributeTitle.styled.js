import styled from 'styled-components'

export const AttributeTitle = styled.p`
    font-size: ${props => (props.isModal ? "18px" : "14px")};
    font-weight: bold;
    margin-top: 5%;
    text-transform: uppercase;
`