import React from 'react';
import {
  HR,
  Icon, RightBtn, RightDate,
  RightIcon,
  RightImages,
  RightInfo,
  TopBtn,
  TopInfo,
  TopLeft,
  TopNews,
  TopRight,
  TopRightItem,
  TopTime,
} from '../../components/ui/home';
import Image from 'next/image';
import top from '../../public/img/top-big.png';
import money from '../../public/img/money.png';
import clock from '../../public/icons/clock.png';
import eye from '../../public/icons/eye.png';
import clockGray from '../../public/icons/clock-gray.png';
import eyeGray from '../../public/icons/eye-gray.png';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

type Type = {
  data?: any;
}

const Top: React.FC<Type> = ({data}) => {
  const router = useRouter();
  const { t } = useTranslation("general");
  return (
    <>
      <TopNews>
        <TopLeft>
          {data && data.slice(-1).map((item: any) => (
            <Link href={`/news/${item.id}`} key={item.id}>
              <a>
                {/*<Image src={top} />*/}
                {item.image ? <Image unoptimized alt="" width="1000" height="740" src={item.image} /> : '---'}
                <TopInfo>
                    <div>
                      <h1>{router.locale === 'ru' ? item.title_kg : item.title_ru}</h1>
                    </div>
                  <TopBtn>
                    <div>
                      <button>{t('doc.in_the_world')}</button>
                      <button>{t('doc.politics')}</button>
                    </div>
                    <TopTime>
                      <Icon><Image src={clock} /> {item.post_date}</Icon>
                      <Icon><Image src={eye} /> ---</Icon>
                    </TopTime>
                  </TopBtn>
                </TopInfo>
              </a>
            </Link>
          ))}
        </TopLeft>
        <TopRight>
          {data && data.slice(-3).map((item: any) => (
            <Link href={`/news/${item.id}`} key={item.id}>
              <a>
                <TopRightItem>
                  <RightImages>
                    {item.image ? <Image unoptimized alt="" width="300" height="300" src={item.image} /> : '---'}
                  </RightImages>
                  <RightInfo>
                    <RightDate>
                      <RightIcon><Image src={clockGray} /> {item.post_date}</RightIcon>
                      <RightIcon><Image src={eyeGray} /> ---</RightIcon>
                    </RightDate>
                    <h2>{router.locale === 'ru' ? item.title_kg : item.title_ru}</h2>
                    <RightBtn>
                      <button>{t('doc.in_the_world')}</button>
                      <button>{t('doc.politics')}</button>
                    </RightBtn>
                  </RightInfo>
                </TopRightItem>
              </a>
            </Link>
          ))}
        </TopRight>
      </TopNews>
      <HR />
    </>
  );
};

export default Top;


