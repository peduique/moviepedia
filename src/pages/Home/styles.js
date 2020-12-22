import styled from 'styled-components';

import bgImage from '../../assets/images/header-bg.jpg';

export const Container = styled.div``;

export const Header = styled.div`
  position: relative;
  background: url(${bgImage}),
    linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-blend-mode: overlay;
  padding: 100px 20px;
  margin-bottom: 60px;
`;
