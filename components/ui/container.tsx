import styled from 'styled-components';

export const Container = styled.div`
  width: 1200px;
  margin-right: auto;
  margin-left: auto;
  padding-left: 5px;
  padding-right: 5px;
  @media (max-width: 1300px) {
    width: 1100px;
  }
  @media (max-width: 1200px) {
    width: 1000px;
  }
  @media (max-width: 1100px) {
    width: 900px;
  }
  @media (max-width: 1000px) {
    width: 800px;
  }
  @media (max-width: 900px) {
    width: 700px;
  }
  @media (max-width: 801px) {
    width: 600px;
  }
  @media (max-width: 700px) {
    width: 95%;
  }
`;

const ImageLayout = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
