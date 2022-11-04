import styled from 'styled-components'

export const ImageController = styled.div`
  display: flex;
  width: 60%;
  margin-bottom: 5%;
  height: 100%;
`;

export const SelectableImages = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  margin-right: 2%;

  & img {
    width: 90%;
    height: 100px;
    margin-bottom: 2%;
  }
`;

export const SelectedImage = styled.div`
    width: 100%;

    & img {
        width: 100%;
        height: 500px;
    }
`;

