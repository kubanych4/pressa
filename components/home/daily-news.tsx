import React from 'react';
import Link from 'next/link';
import { A, Cont, DailyContent, DailyImg, DailyItem, DailyName, DailyWatch, HR, Title} from '../ui/home';
import img from '../../public/img/top-big.png';
import Image from 'next/image';
import time from '../../public/icons/clock-gray.png';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

type Type = {
  data?: any;
}

const DailyNews: React.FC<Type> = ({data}) => {
  const router = useRouter();
  const { t } = useTranslation("general");
  return (
    <DailyContent>
      <Title>{t('doc.daily_news')}</Title>
      <Cont>
        {data && data.slice(-6).map((item: any) => (
          <Link  href="/" key={item.id}>
            <A>
              <DailyItem>
                <DailyImg>
                  <Image src={img} alt="news" />
                </DailyImg>
                <DailyWatch>
                  <Image src={time} /> [time]
                </DailyWatch>
                <DailyName>{router.locale === 'ru' ? item.title_kg : item.title_ru}</DailyName>
              </DailyItem>
            </A>
          </Link>
        ))}
      </Cont>
      <HR />
    </DailyContent>
  );
};

export default DailyNews;


