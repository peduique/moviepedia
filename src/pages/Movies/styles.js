import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const FeaturedImage = styled.img`
  margin-right: 40px;
  border-radius: 5px;
`;

export const Content = styled.div``;

export const Title = styled.h1`
  font-size: 40px;
  font-weight: 900;
  letter-spacing: -1.5px;
  margin-bottom: 5px;
`;

export const Tagline = styled.p`
  font-size: 20px;
  font-weight: 300;
  color: #888;
  margin-bottom: 15px;
`;

export const Overview = styled.p`
  font-size: 17px;
  font-style: italic;
  color: #888;
`;

export const Rating = styled.p`
  display: flex;
  align-items: center;
  color: #666;
  margin-bottom: 15px;

  svg {
    margin-right: 10px;
  }
`;

export const Info = styled.p`
  margin: 15px 0;
  font-size: 14px;
  &:before {
    content: attr(data-title);
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
  }
`;
