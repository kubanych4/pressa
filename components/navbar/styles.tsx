import styled from "styled-components";

export const Banner = styled.div`
  text-align: center;
  
  @media (max-width: 801px) {
    display: none;
  }
`;

export const LogoContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const IconsContent = styled.div`
  display: flex;
`;

export const SocIcons = styled.div`
  @media (max-width: 801px) {
    display: none;
  }
`;

export const IconBtn = styled.button`
  background: transparent;
  cursor: pointer;
  border-radius: 50px;
  width: 45px;
  height: 45px;
  
  &:hover {
    background: #CCF2F0;
  }
  
  @media (max-width: 801px) {
    width: 30px;
    height: 30px;
  }
`;

export const LangBtn = styled.div`
  cursor: pointer;
  width: 45px;
  height: 45px;
  font-size: 18px;
  font-weight: 700;
  margin-left: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    color: #01BCB3;
  }
  @media (max-width: 801px) {
    margin-left: 0;
  }
`;

export const LogoBtn = styled.button`
  cursor: pointer;
  background: transparent;
  @media (max-width: 801px) {
    width: 150px;
  }
`;

export const Menu = styled.div`
  display: flex;
  margin-bottom: 15px;
  
  @media (max-width: 801px) {
    display: block;
  }
`;

export const MenuLink = styled.div`
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 18px;
  padding: 15px;
  margin: 2px;
  border-radius: 40px;
  cursor: pointer;
  text-align: center;
  
  &:hover {
    color: #01BCB3;
  }
  
  @media (max-width: 1301px) {
    font-size: 14px;
    padding: 10px;
  }
  
  @media (max-width: 801px) {
    margin: 0;
    text-align: left;
    width: fit-content;
  }
`;

export const MenuActiveLink = styled(MenuLink)`
  background: #CCF2F0;
  color: #01BCB3;
  
  @media (max-width: 801px) {
    background: transparent;
    color: #444C5E;
  }
`;

export const HeaderWrap = styled.div`
  border-bottom: 2px solid #F0F0F3;
`;

export const MenuContent = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 1001px) {
    display: block;
    margin-bottom: 20px;
  }
  @media (max-width: 801px) {
    display: none;
  }
`;

export const Search = styled.div`
  background: #F5F5F5;
  width: 250px;
  height: 50px;
  border-radius: 50px;
  padding: 20px;
  align-items: center;
  display: flex;
  @media (max-width: 1301px) {
    width: 200px;
    height: 40px;
    padding: 15px;
  }
  @media (max-width: 801px) {
    width: 180px;
    height: 30px;
    padding: 10px;
  }
`;

export const SearchIcon = styled.div`
  margin-right: 10px;
  min-width: 15px;
  margin-top: 4px;
  
  @media (max-width: 1301px) {
    margin-right: 5px;
  }
`;

export const Input = styled.input`
  font-family: Roboto;
  outline: 0;
  border: 0;
  background: transparent;
  font-size: 15px;
  width: 100%;
  
  @media (max-width: 801px) {
    font-size: 12px;
  }
`;

export const BarIcon = styled.div`
  margin-right: 24px;
  cursor: pointer;
  display: none;

  @media (max-width: 801px) {
    display: block;
  }
`;

export const MobSidebarModal = styled.div`
  background: rgba(0, 0, 0, 0.6);
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1001;
  
  @media (max-width: 801px) {
    display: block;
  }
`;

export const MobSidebar = styled.div`
  background: #fff;
  width: 85%;
  height: 100%;
  padding: 20px;
`;

export const CloseBtn = styled.div`
  position: absolute;
  right: 15px;
  top: 15px;
`;

export const MobSearchSoc = styled.div`
  display: none;
  margin-bottom: 15px;
  
  @media (max-width: 801px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
