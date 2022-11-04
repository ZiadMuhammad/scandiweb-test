import styled from 'styled-components';

export const Card = styled.div`
    position: relative;
    height: 400px;
    flex: 0 0 29%;
    margin: 1% 2.1%;
    cursor: pointer;

    & img {
        margin: 3%;
        width: 95%;
        height: 300px;
    }

    & p {
        margin-left: 3%;
    }

    & button {
        display: none;
        position: absolute;
        top: 73%;
        left: 85%;
        width: 11%;
        height: 10%;
        border-radius: 50%;
        border: none;
        background-color: #5ECE7B;
    }

    &:hover {
        box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);

        & button {
            display: block;

            & img {
                width: 50%;
                height: 50%;
            }
        }
    }
`

export const OutOfStockOverlay = styled.div`
    position: absolute;
    display: ${({ isOutOfStock }) => isOutOfStock ? "block" : "hidden"};
    height: 99%;
    width: 100%;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    opacity: 0.5;
`;

export const Price = styled.p`
    font-weight: bold;
`;

export const OutOfStockText = styled.h2`
    position: absolute;
    left: 50%;
    top: 40%;
    transform: translate(-50%, -50%);
    text-transform: uppercase;
    opacity: 0.7;
`