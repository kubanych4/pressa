import styled from 'styled-components';

export const FooterWrap = styled.div`
  background: #303B44;
  padding: 100px 0;
  margin-top: 40px;

  @media (max-width: 801px) {
    padding: 50px 0;
  }
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: Roboto, serif;
  
  @media (max-width: 801px) {
    display: block;
  }
`;

export const FooterItem = styled.div`
  @media (max-width: 801px) {
    text-align: center;
    margin-bottom: 30px;
  }
`;

export const Copy = styled.div`
  color: #8BA4A4;
  margin-top: 10px;
  
  @media (max-width: 801px) {
    font-size: 10px;
  }
`;

export const CopyItem = styled.div`
  margin-top: 30px;
`;

export const FooterMenu = styled.div`
  color: #8BA4A4;
  font-size: 18px;
  padding: 6px 20px;
  cursor: pointer;
  border-radius: 20px;
  transition: 0.3s;

  @media (max-width: 801px) {
    padding: 6px 10px;
    font-size: 12px;
  }
  
  &:hover {
    color: #00CCC3;
  }
`;

export const MenuItem = styled.div`
  display: flex;
  @media (max-width: 801px) {
    margin-bottom: 30px;
  }
`;

export const FooterItemLeft = styled.div`
  border-right: 1px solid #8BA4A4;
  padding-right: 40px;

  @media (max-width: 801px) {
    padding-right: 20px;
  }
`;

export const FooterItemRight = styled.div`
  padding-left: 40px;

  @media (max-width: 801px) {
    padding-left: 20px;
  }
`;

export const OrderBtn = styled.button`
  background: #00CCC3;
  color: #fff;
  padding: 14px 22px;
  border-radius: 30px;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;

  @media (max-width: 801px) {
    font-size: 12px;
  }
`;

export const PhoneItem = styled.div`
  color: #fff;
  margin-top: 40px;
    justify-content: center;
`;

export const Type = styled.div`
  color: #8BA4A4;
  font-weight: 300;
  margin-left: 37px;
`;

export const Phone = styled.div`
  display: flex;
  align-items: center;
    
    @media (max-width: 801px) {
      justify-content: center;
    }
`;

export const PhoneNumber = styled.div`
  margin-left: 15px;
`;

export const MailItem = styled.div`
  margin-left: 37px;
  margin-top: 20px;
`;

export const Mail = styled.div`
  color: #00F4EA;
  text-decoration: underline;
`;

export const Question = styled.div`
  color: #8BA4A4;
  font-weight: 300;
  margin-top: 5px;
`;

export const SocItem = styled.div`
  display: flex;
  flex-direction: column;
    
    @media (max-width: 801px) {
      flex-direction: row;
      justify-content: center;
    }
`;

export const Gray = styled.div``;

export const Or = styled.div`
  display: none;  
`;

export const SocIcon = styled.div`
  padding: 10px;
  border-radius: 50px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    background: #fff;
    ${Or} {
      display: block;
    }
    ${Gray} {
      display: none;
    }
  }
`;