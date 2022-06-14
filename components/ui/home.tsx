import styled from "styled-components";

export const DateText = styled.div`
  position: relative;
  font-size: 20px;
  color: #899595;
  text-transform: capitalize;
  
  &:before {
    content: '';
    width: 4px;
    height: 80px;
    background: #00CCC3;
    position: absolute;
    left: -30px;
    
    @media (max-width: 420px) {
      left: -20px;
    }
  }
`;

export const DateTimer = styled.div`
  color: #01BCB3;
  font-size: 40px;
  margin-top: 12px;
`;

export const DateContent = styled.div`
  margin-top: 30px;
  margin-left: 30px;
  display: flex;
  justify-content: space-between;
  
  @media (max-width: 801px) {
    display: block;
    margin-left: 15px;
  }
`;

export const DateItem = styled.div``;

export const WeatherItem = styled.div`
  width: 300px;
  height: 110px;
  margin-left: 15px;
  
  @media (max-width: 801px) {
    margin-left: 0;
    margin-top: 40px;
  }

  .rw-main h2 {
    margin: 0;
    font-size: 20px;
  }

  .rw-main .rw-today .current {
    font-size: 30px;
  }
  
  .rw-box {
    font-family: "Roboto Slab";
  }
  
  .date, .range, .desc, .info, .hr {
    display: none;
  }
  
  .rw-main .rw-box-right {
    border-radius: 0 15px 15px 0;
  }
  
  .rw-main.type-today {
    border-radius: 15px;
  }
  
  .rw-main .rw-box-left {
    padding: 10px;
    text-align: center;
  }
  
  .rw-main .rw-box-right i {
    font-size: 50px;
  }
  
  .rw-main {
    background: linear-gradient(90deg, #4FECD9 0%, #4FD0EC 100%);
  }
`;

export const WeatherContent = styled.div`
  display: flex;
`;


export const TopNews = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  margin-bottom: 20px;
  
  @media (max-width: 801px) {
    display: block;      
  }
`;

export const TopLeft = styled.div`
  width: 57%;
  height: 100%;
  position: relative;
  
  span {
    border-radius: 20px;
  }
  
  @media (max-width: 801px) {
    width: 100%;
  }
`;

export const TopRight = styled.div`
  width: 40%;
  
  @media (max-width: 801px) {
    width: 100%;
    margin-top: 20px;
  }
`;

export const TimeDesk = styled.div`
  @media (max-width: 801px) {
    display: none;
  }
`;

export const TopInfo = styled.div`
  background: linear-gradient(180deg, rgba(0, 204, 195, 0) 0%, #19333B 100%);
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60%;
  padding: 120px 30px 30px 30px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  @media (max-width: 1201px) {
    padding: 50px 20px 20px 20px;
  }

  @media (max-width: 901px) {
    padding: 15px;
  }
  
  h1 {
    font-weight: 700;
    color: #fff;
    
    @media (max-width: 1101px) {
      font-size: 24px;
    }

    @media (max-width: 901px) {
      font-size: 18px;
    }
  }
  
  img {
    border-radius: 20px;
  }
`;

export const TopBtn = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
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

export const TopTime = styled.div`
  display: flex;
  color: #fff;
  
  @media (max-width: 901px) {
    display: block;    
  }  
`;

export const RightImages = styled.div`
  margin-right: 20px;
  width: 150px;
  height: 150px;
  display: flex;
  align-items: center;
  
  span {
    border-radius: 20px;
  }
  
  @media (max-width: 801px) {
    width: 100px;
    height: 100px;
  }
`;

export const TopRightItem = styled.div`
  display: flex;
  margin-bottom: 28px;

  &:hover {
    color: #00CCC3;
  }
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  
  img {
    padding-right: 10px !important;
  }
`;

export const RightIcon = styled.div`
  display: flex;
  align-items: center;
  color: #9A9EA8;
  font-size: 12px;
  
  img {
    padding-right: 10px !important;
  }
`;

export const RightDate = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const RightInfo = styled.div`
  width: 60%;
  position: relative;
  
  h2 {
    font-size: 20px;
    font-weight: 500;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3; /* number of lines to show */
    line-clamp: 3;
    -webkit-box-orient: vertical;
    @media (max-width: 801px) {
      font-size: 14px;
    }
  }
`;

export const RightBtn = styled(TopBtn)`
  justify-content: start;
  position: absolute;
  bottom: 0;
`;

export const HR = styled.hr`
  border-style: dashed;
  border-color: #00CCC3;
`;

export const Title = styled.h1`
  position: relative;
  margin-left: 15px;
  margin-bottom: 30px;
  font-size: 34px;
  
  &:before {
    content: '';
    width: 4px;
    top: 8px;
    height: 30px;
    background: #00CCC3;
    position: absolute;
    left: -15px;
`;

export const Img = styled.div`
  width: 100px;
  height: 100px;
  margin-right: 20px;
  
  @media (max-width: 801px) {
    width: 60px;
    height: 60px;
  }
`;

export const Item = styled.div`
  display: flex;
  margin-bottom: 20px;
  border-bottom: 1.5px dashed #D4D4D4;
  padding-bottom: 20px;
  
  &:hover {
    color: #00CCC3;
  }
`;

export const Name = styled.h2`
  margin-top: 0;
  font-weight: 500;
  font-size: 18px;
  @media (max-width: 801px) {
    font-size: 14px;
  }
`;

export const TimeItem = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
`;

export const Time = styled.div`
  display: flex;
  align-items: center;
  color: #9A9EA8;
  width: 140px;
  margin-right: 10px;
  font-size: 12px;
  
  img {
    padding-right: 10px !important;
  }
`;

export const Watch = styled.div`
  display: flex;
  align-items: center;
  color: #9A9EA8;
  width: 86px;
  font-size: 12px;
  
  img {
    padding-right: 10px !important;
  }
`;

export const Info = styled.div`
  position: relative;
`;

export const LoadItem = styled.div`
  text-align: center;
`;

export const Load = styled.button`
  cursor: pointer;
  padding: 12px 30px;;
  background: #00CCC3;
  color: #fff;
  font-weight: 700;
  font-size: 16px;
  border-radius: 20px;
`;

export const VidImg = styled.div`
  position: relative;
  span {
    width: 100% !important;
    height: 130px !important;
    
    img {
      object-fit: cover;
      border-radius: 20px;
    }
  }
`;

export const Cont = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const A = styled.a`
  width: 48%;
  cursor: pointer;
`;

export const VidName = styled.h2`
  font-weight: 500;
  font-size: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* number of lines to show */
  line-clamp: 3;
  -webkit-box-orient: vertical;
`;

export const Play = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  display: none;
  transition: 0.3s;
  
  span {
    width: auto !important;
    height: auto !important;
  }
`;

export const Vid = styled.div`
  margin-bottom: 30px;
  height: 245px;
  position: relative;

  &:hover {
    color: #00CCC3;
  }
  
  &:hover ${Play} {
    display: flex;
  }
`;

export const WatchItem = styled.div`
  position: absolute;
  bottom: 0;
  color: #9A9EA8;
  font-size: 12px;
  right: 0;
`;

export const DailyContent = styled.div`
  margin-top: 40px;
`;

export const DailyItem = styled.div`
  margin-bottom: 30px;
  height: 260px;
  position: relative;
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 0.8px 8px rgba(0, 0, 0, 0.15);
  transition: 0.3s;

  &:hover {
    color: #00CCC3;
    box-shadow: 0 0.8px 8px rgba(0, 0, 0, 0.3);
  }
`;

export const DailyWatch = styled(Watch)`
  margin-top: 10px;
  margin-left: 15px;
`;

export const DailyName = styled(VidName)`
  margin-left: 15px;
  margin-right: 15px;
`;

export const DailyImg = styled.div`
  position: relative;
  span {
    width: 100% !important;
    height: 130px !important;
    
    img {
      object-fit: cover;
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;
    }
  }
`;

export const SpecItem = styled.div`
  margin-bottom: 20px;
`;

export const SpecImg = styled.div`
  border-radius: 20px;

  img {
    object-fit: cover;
  }
`;

export const GridCont = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 901px) {
    flex-wrap: wrap;
  }
`;

export const GridItem = styled.div`
  margin-bottom: 30px;
  height: 260px;
  width: 220px;
  position: relative;
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 0.8px 8px rgba(0, 0, 0, 0.15);
  transition: 0.3s;
  margin-right: 20px;

  @media (max-width: 901px) {
    width: 48%;
    margin-right: 0;
  }
  
  &:last-child {
    margin-right: 0;
  }

  &:hover {
    color: #00CCC3;
    box-shadow: 0 0.8px 8px rgba(0, 0, 0, 0.3);
  }
`;

export const GridContent = styled.div`
  margin-top: 20px;
`;

export const MT40 = styled.div`
  margin-top: 40px;
`;
