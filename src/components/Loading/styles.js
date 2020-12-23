import styled, { keyframes } from 'styled-components';

const bouncedelay = keyframes`
  0%,
  80%,
  100% {
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  40% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
`;

export const Container = styled.div`
  margin: 100px auto 0;
  width: 70px;
  text-align: center;

  > div {
    width: 18px;
    height: 18px;
    background-color: #333;

    border-radius: 100%;
    display: inline-block;
    -webkit-animation: ${bouncedelay} 1.4s infinite ease-in-out both;
    animation: ${bouncedelay} 1.4s infinite ease-in-out both;
  }
`;

export const Bounce1 = styled.div`
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
`;

export const Bounce2 = styled.div`
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
`;

export const Bounce3 = styled.div``;
