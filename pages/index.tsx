import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React  from 'react';
import { Container } from "../components/ui/container";
import { GridContent, MT40, TimeDesk, Title, TopLeft, TopNews, TopRight } from '../components/ui/home';
import { NextPage } from 'next';
import TimeWeather from '../components/home/time-weather';
import Top from "../components/home/top-news";
import All from "../components/home/all-news";
import Video from '../components/home/video-content';
import { useTranslation } from 'next-i18next';
import DailyNews from "../components/home/daily-news";
import SpecialProjects from '../components/home/special-projects';
import Grid from "../components/home/grid";

type Type = {
  data?: any;
}

const Home: NextPage<Type> = ({data}) => {
  const { t } = useTranslation("general");
  return (
    <Container>
      <TimeDesk>
        <TimeWeather />
      </TimeDesk>
      <Top data={data} />
      <TopNews>
        <TopLeft>
          <Title>{t('doc.last_news')}</Title>
          <All data={data} />
        </TopLeft>
        <TopRight>
          <Video data={data}/>
          <DailyNews data={data} />
          <SpecialProjects />
        </TopRight>
      </TopNews>
      <MT40>
        <GridContent>
          <Title>{t('doc.society')}</Title>
          <Grid data={data} />
        </GridContent>
        <GridContent>
          <Title>{t('doc.politics')}</Title>
          <Grid data={data} />
        </GridContent>
        <GridContent>
          <Title>{t('doc.economy')}</Title>
          <Grid data={data} />
        </GridContent>
        <GridContent>
          <Title>{t('doc.in_the_world')}</Title>
          <Grid data={data} />
        </GridContent>
      </MT40>
    </Container>
  );
}

type StaticType = React.PropsWithChildren<{
  locale: any;
}>;

export const getStaticProps = async ({locale}: StaticType) => {
  const response = await fetch(`https://koompress.herokuapp.com/api/news`,);
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { data: data.data, ...(await serverSideTranslations(locale, ["general"])) },
  }
}

export default Home;


