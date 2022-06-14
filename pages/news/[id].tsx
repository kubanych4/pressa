import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NextPage } from 'next';
import { Container } from '../../components/ui/container';
import {
  Content,
  Editor,
  Icon,
  InfoItem,
  InfoTime,
  Left,
  LeftBtn,
  LeftQuote,
  Name,
  Paragraph,
  Picture,
  Quote,
  Right,
  Share,
  RightQuote,
  Title,
  CircleLogo,
  Redactor,
  ShareIcon,
} from '../../components/ui/news-info';
import banner from '../../public/img/eldiki_koom 2.png';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import clock from '../../public/icons/clock-gray.png';
import eye from '../../public/icons/eye-gray.png';
import left from '../../public/icons/left-quote.png';
import right from '../../public/icons/right-quote.png';
import info from '../../public/img/news-info.png';
import logo from '../../public/img/circle-logo.png';
import { GridContent, MT40 } from '../../components/ui/home';
import Grid from '../../components/home/grid';
import whatsapp from '../../public/icons/share/whatsapp.png';
import telegram from '../../public/icons/share/telegram.png';
import facebook from '../../public/icons/share/facebook.png';
import twitter from '../../public/icons/share/twitter.png';
import instagram from '../../public/icons/share/instagram.png';
import vk from '../../public/icons/share/vk.png';
import ok from '../../public/icons/share/ok.png';
import tiktok from '../../public/icons/share/tiktok.png';
import Head from 'next/head';
import Parser from 'html-react-parser';
import { useRouter } from 'next/router';

type Type = {
  data: any;
  dataId: any;
}

const Info: NextPage<Type> = ({ dataId, data }) => {
  const router = useRouter();
  const { t } = useTranslation("general");
  return (
    <Container>
      <Head>
        <title>КООМ ПРЕСС - Новости Кыргызстана news id</title>
        <meta name="description" content="КООМ ПРЕСС - Новости Кыргызстана" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Content>
        <Left>
          <Title>{Parser(router.locale === 'ru' ? dataId.title_kg : dataId.title_ru)}</Title>
          <LeftBtn>
            <div>
              <button>{t('doc.in_the_world')}</button>
              <button>{t('doc.politics')}</button>
            </div>
            <InfoTime>
              <Icon><Image src={clock} /> {dataId.post_date}</Icon>
              <Icon><Image src={eye} /> ---</Icon>
            </InfoTime>
          </LeftBtn>
          <Picture>
            {dataId.image ? <Image unoptimized alt="" width="1000" height="600" src={dataId.image} /> : '---'}
          </Picture>
          <InfoItem>
            {/*<Paragraph>{dataId.body}</Paragraph>*/}
            {/*<Quote>*/}
            {/*  <LeftQuote>*/}
            {/*    <Image src={left} />*/}
            {/*  </LeftQuote>*/}
            {/*  {dataId.body}*/}
            {/*  <RightQuote>*/}
            {/*    <Image src={right} />*/}
            {/*  </RightQuote>*/}
            {/*</Quote>*/}
            {dataId.details_kg || dataId.details_ru ? (
            <Paragraph>{Parser(router.locale === 'kg' ? dataId.details_kg : dataId.details_ru)}</Paragraph>
              ) : '---'}
            <div></div>
          </InfoItem>
          <Editor>
            <Name>
              <div>Айсулуу</div>
              <Redactor>Редактор</Redactor>
              <CircleLogo>
                <Image src={logo} />
              </CircleLogo>
            </Name>
            <Share>
              Поделиться:
              <ShareIcon>
                <Image src={whatsapp} />
              </ShareIcon>
              <ShareIcon>
                <Image src={telegram} />
              </ShareIcon>
              <ShareIcon>
                <Image src={facebook} />
              </ShareIcon>
              <ShareIcon>
                <Image src={twitter} />
              </ShareIcon>
              <ShareIcon>
                <Image src={instagram} />
              </ShareIcon>
              <ShareIcon>
                <Image src={vk} />
              </ShareIcon>
              <ShareIcon>
                <Image src={ok} />
              </ShareIcon>
              <ShareIcon>
                <Image src={tiktok} />
              </ShareIcon>
            </Share>
          </Editor>
        </Left>
        <Right>
          <Image src={banner} />
        </Right>
      </Content>
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
  )
}

export const getServerSideProps = async (context: any ) => {
  const { locale } = context;
  const { id } = context.params;

  const responseId = await fetch(`https://koompress.herokuapp.com/api/news/${id}`,);
  const dataId = await responseId.json();

  const response = await fetch(`https://koompress.herokuapp.com/api/news`,);
  const data = await response.json();

  return {
    props: { dataId, data: data.data, ...(await serverSideTranslations(locale, ["general"])) },
  }
}

type StaticType = React.PropsWithChildren<{
  locale: any;
}>;


export default Info;
