import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
  list-style: none;
  text-decoration: none;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.08) !important;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 330px;
  object-fit: cover;
  margin-bottom: 1em;
  border-radius: 0.3em;
`;

export const Title = styled.h2`
  font-size: 1em;
  font-weight: bold;
  margin-bottom: 0.5em;
  color: #222;
`;

export const Rating = styled.p`
  display: flex;
  align-items: center;
  color: #666;

  svg {
    margin-right: 10px;
  }
`;
