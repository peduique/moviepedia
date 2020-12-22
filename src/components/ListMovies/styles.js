import styled from 'styled-components';

export const Container = styled.div``;

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 35px;
`;

export const Title = styled.h2`
  font-size: 30px;
  color: #333;
  margin-bottom: 30px;
`;
