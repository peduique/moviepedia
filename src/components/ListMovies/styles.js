import styled from 'styled-components';

export const Container = styled.div``;

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 35px;

  @media (max-width: 767px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`;

export const Title = styled.h2`
  font-size: 30px;
  color: #333;
  margin-bottom: 30px;
`;

export const Filter = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  margin-right: 10px;
  color: #555;
`;
