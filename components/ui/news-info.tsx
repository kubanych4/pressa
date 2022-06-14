import styled from 'styled-components';

export const Left = styled.div`
  width: 820px;
  @media (max-width: 801px) {
    width: 100%;
  }
`;

export const Right = styled.div`
  width: 250px;
  @media (max-width: 801px) {
    margin-top: 40px;
    width: 100%;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  margin-bottom: 50px;
  
  @media (max-width: 801px) {
    display: block;
    margin-top: 0;
  }
`;

export const Title = styled.h1`
  font-size: 40px;
  font-weight: 700;
`;

export const InfoTime = styled.div`
  display: flex;
  color: #9A9EA8;
  
  @media (max-width: 901px) {
    margin-top: 20px;
    justify-content: space-between;
  }  
`;

export const Picture = styled.div`
  margin-top: 30px;
  border-radius: 10px;
  
  img {
    border-radius: 10px;
  }
`;

export const Paragraph = styled.div`
  font-size: 24px;
  font-weight: 400;
  
  iframe {
    width: 100%;
  }
`;

export const Quote = styled.div`
  font-size: 20px;
  font-weight: 400;
  background: #F5F5F5;
  padding: 20px;
  border-radius: 20px;
  margin-top: 60px;
  position: relative;
  margin-bottom: 60px;
`;

export const InfoItem = styled.div`
  margin-top: 40px;
`;

export const LeftQuote = styled.div`
  position: absolute;
  top: -30px;
  left: 20px;
`;

export const RightQuote = styled.div`
  position: absolute;
  right: 20px;
  bottom: -30px;
`;

export const LeftBtn = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 801px) {
    display: block;
  }
  
  button {
    background: rgba(1, 188, 179, 0.2);
    border: 1.5px solid #00CCC3;
    border-radius: 30px;
    color: #01BCB3;
    margin-right: 15px;
    padding: 4px 15px;
    font-weight: 700;
    cursor: pointer;

    @media (max-width: 801px) {
      margin-right: 5px;
      font-size: 10px;
    }
  }
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;

  @media (max-width: 801px) {
    margin-left: 0;
  }
  
  img {
    padding-right: 10px !important;
  }
`;

export const Editor = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: space-between;
  
  @media (max-width: 801px) {
    display: block;
  }
`;

export const Name = styled.div`
  background: #F5F5F5;
  padding: 5px 40px 8px 20px;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  position: relative;
  color: #00CCC3;
  font-size: 20px;
  
  @media (max-width: 801px) {
    margin-bottom: 20px;
    border-radius: 30px;
  }
`;

export const Share = styled.div`
  background: #F5F5F5;
  border-radius: 30px;
  padding: 10px 20px;
  display: flex;
  align-items: center;
`;

export const CircleLogo = styled.div`
  position: absolute;
  right: -45px;
  top: -5px;
  
  @media (max-width: 801px) {
    right: 0;
  }
`;

export const Redactor = styled.div`
  font-size: 12px;
  color: #899595;
`;

export const ShareIcon = styled.div`
  margin-left: 10px;
`;
