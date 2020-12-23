import styled from 'styled-components';

import bgImage from '../../assets/images/header-bg.jpg';
import LogoImg from '~/components/Logo';

export const Container = styled.header`
  position: relative;
  background: ${(props) => `url(${props.backdrop || bgImage})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-blend-mode: overlay;
  padding: 150px 20px;
  margin-bottom: 60px;
  text-align: center;
`;

export const Logo = styled(LogoImg)`
  margin-bottom: 30px;
  display: block;
`;
