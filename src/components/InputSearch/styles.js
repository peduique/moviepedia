import styled from 'styled-components';

import ClearButtonSvg from '~/assets/images/clear.svg';
import SearchButtonSvg from '~/assets/images/search.svg';

export const Container = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
  border-radius: 40px;
  width: 40vw;
  margin: 0 auto;

  @media (max-width: 767px) {
    width: 80vw;
  }
`;

export const Input = styled.input.attrs({ type: 'text' })`
  flex: 2;
  background: transparent;
  border: 0;
  padding: 20px;
`;

export const SearchButton = styled.button.attrs({ type: 'button' })`
  background: transparent;
  background: url(${SearchButtonSvg});
  background-size: 30px;
  background-position: center;
  background-repeat: no-repeat;
  border: 0;
  width: 50px;
  height: 50px;
  cursor: pointer;
`;

export const ClearButton = styled.button.attrs({ type: 'button' })`
  background: transparent;
  background: url(${ClearButtonSvg});
  background-size: 20px;
  background-position: center;
  background-repeat: no-repeat;
  border: 0;
  width: 50px;
  height: 50px;
  cursor: pointer;
  margin-left: auto;
`;
