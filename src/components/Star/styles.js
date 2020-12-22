import styled from 'styled-components';

export const StarImage = styled.svg`
  width: ${(props) => (props.size ? `${props.size}px` : '24px')};
  color: ${(props) => (props.variant === 'active' ? '#f5c518' : '#ddd')};
`;
