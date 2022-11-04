import styled from 'styled-components'

export const AttributeContainer = styled.div`
  margin-top: 5%;
  display: flex;
`

export const NormalAttribute = styled.div`
  height: ${props => (props.isModal ? "30px" : "40px")};
  width: ${props => (props.isModal ? "30px" : "50px")};
  font-size: ${props => (props.isModal ? "0.65rem" : "0.85rem")};
  border: 1px solid #1D1F22;
  padding: 2% 8%;
  margin-right: 4%;
  position: relative;

  &:hover {
    background-color: black;
    color: white;
  }

  & p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`

export const SelectedAttribute = styled.div`
  height: ${props => (props.isModal ? "30px" : "40px")};
  width: ${props => (props.isModal ? "30px" : "50px")};
  font-size: ${props => (props.isModal ? "0.65rem" : "0.85rem")};
  border: 1px solid #1D1F22;
  padding: 2% 8%;
  margin-right: 4%;
  background-color: black;
  color: white;
  position: relative;

  & p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`

export const ColoredAttribute = styled.div`
    position: relative;
    width: ${props => (props.isModal ? "20px" : "30px")};
    height: ${props => (props.isModal ? "20px" : "30px")};
    font-size: 0.85rem;
    margin-right: 4%;

    &:hover {
        border: 1px solid green;
    }
`;

export const Color = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 93%;
    height: 92%;
    border: ${props => props.value === "#FFFFFF" ? "1px solid black" : "none" };
    background-color: ${props => props.value};
`;

export const SelectedColor = styled.div`
    position: relative;
    width: ${props => (props.isModal ? "20px" : "30px")};
    height: ${props => (props.isModal ? "20px" : "30px")};
    font-size: 0.85rem;
    border: 1px solid green;
    margin-right: 4%;
`