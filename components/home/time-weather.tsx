import React from 'react';
import {
  DateContent,
  DateItem, DateText, DateTimer,
  WeatherContent,
  WeatherItem,
} from '../../components/ui/home';
import Clock from 'react-live-clock';
import 'moment/locale/ky';
import 'moment/locale/ru';
import { useRouter } from 'next/router';
// @ts-ignore
import ReactWeather from 'react-open-weather-widget';
import "react-open-weather-widget/lib/css/ReactWeather.css";

const TimeWeather: React.FC = () => {
  const router = useRouter();
  return (
    <DateContent>
      <DateItem>
        <DateText>
          <Clock
            locale={router.locale === 'kg' ? 'ky' : 'ru'}
            format={'dddd, D MMM YYYY'}
            ticking={true}
          />
        </DateText>
        <DateTimer>
          <Clock
            format={'HH:mm:ss'}
            ticking={true}
          />
        </DateTimer>
      </DateItem>
      <WeatherContent>
        {/*<div>*/}
        {/*  <iframe*/}
        {/*      src={router.locale === 'kg' ?*/}
        {/*          'http://www.nbkr.kg/service.jsp?sname=CurVal&lang=KGZ' :*/}
        {/*          'http://www.nbkr.kg/service.jsp?sname=CurVal&lang=RUS'*/}
        {/*      }*/}
        {/*      scrolling="no"*/}
        {/*      frameBorder="0"*/}
        {/*      width="300"*/}
        {/*      height="108"*/}
        {/*      style={{ border: '4px solid #01BCB3', borderRadius: 18 }}*/}
        {/*  />*/}
        {/*</div>*/}
        <WeatherItem>
          <ReactWeather
            forecast="today"
            lang="ru"
            apikey="7ad07aac9b0943040a4abdd2c23dfc4e"
            type="city"
            city="Bishkek"
          />
        </WeatherItem>
      </WeatherContent>
    </DateContent>
  );
}

export default TimeWeather;


