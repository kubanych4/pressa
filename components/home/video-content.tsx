import React from 'react';
import Link from 'next/link';
import { A, Cont, HR, Play, Title, Vid, VidImg, VidName, Watch, WatchItem } from '../ui/home';
import img from '../../public/img/top-big.png';
import play from '../../public/icons/play.png';
import Image from 'next/image';
import eyeGray from '../../public/icons/eye-gray.png';
import { useTranslation } from 'next-i18next';
import time from '../../public/icons/clock-gray.png';
import { useRouter } from 'next/router';

type Type = {
  data?: any;
}

const Video: React.FC<Type> = ({data}) => {
  const router = useRouter();
  const { t } = useTranslation("general");
  return (
    <>
      <Title>{t('doc.video_content')}</Title>
      <Cont>
        {data && data.slice(-4).map((item: any) => (
          <Link  href="/" key={item.id}>
            <A>
              <Vid>
                <VidImg>
                  <Image src={img} alt="news" />
                  <Play>
                    <Image src={play} alt="play" />
                  </Play>
                </VidImg>
                <VidName>{router.locale === 'ru' ? item.title_kg : item.title_ru}</VidName>
                <WatchItem>
                  <Watch>
                    <Image src={time} /> [time]
                  </Watch>
                </WatchItem>
              </Vid>
            </A>
          </Link>
        ))}
      </Cont>
      <HR />
    </>
  );
};

export default Video;


