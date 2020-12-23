import styled from 'styled-components';

import bgImage from '../../assets/images/header-bg.jpg';
import LogoImg from '~/components/Logo';

export const Container = styled.div``;

export const Header = styled.div`
  position: relative;
  background: url(${bgImage}),
    linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.9));
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-blend-mode: overlay;
  padding: 100px 20px;
  margin-bottom: 60px;
  text-align: center;
`;

export const Logo = styled(LogoImg)`
  margin-bottom: 30px;
  display: block;
`;
