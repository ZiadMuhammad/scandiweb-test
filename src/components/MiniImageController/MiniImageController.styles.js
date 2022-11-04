import styled from 'styled-components'

export const ProductImage = styled.img`
    width: 100%;
    height: 100%;
`

export const ImgBtnLeft = styled.button`
  position: absolute;
  top: 80%;
  right: 10%;
  width: 20px;
  height: 20px;
  background-color: #000000BA;
  border: none;

  & img {
    position: relative;
    top: 5%;
    left: 10%;
    transform: rotate(180deg);
  }
`

export const ImgBtnRight = styled.button`
  position: absolute;
  width: 20px;
  height: 20px;

  top: 80%;
  left: 55%;
  background-color: #000000BA;
  border: none;

  & img {
    position: relative;
    top: 5%;
    right: 10%;
  }

`