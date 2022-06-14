import React from 'react';
import Link from 'next/link';
import { A, Cont, DailyContent, DailyImg, DailyItem, DailyName, DailyWatch, GridCont, GridItem, HR, Title} from '../ui/home';
import img from '../../public/img/top-big.png';
import Image from 'next/image';
import time from '../../public/icons/clock-gray.png';
import useMedia from 'use-media';
import { useRouter } from 'next/router';

type Type = {
  data?: any;
}

const Grid: React.FC<Type> = ({data}) => {
  const router = useRouter();
  const isMob = useMedia({maxWidth: 801});
  return (
    <>
      <GridCont>
        {data && data.slice(isMob ? -2 : -5).map((item: any) => (
          <GridItem key={item.id}>
            <Link href="/">
              <A>
                <DailyImg>
                  <Image src={img} alt="news" />
                </DailyImg>
                <DailyWatch>
                  <Image src={time} /> [time]
                </DailyWatch>
                <DailyName>{router.locale === 'ru' ? item.title_kg : item.title_ru}</DailyName>
              </A>
            </Link>
          </GridItem>
        ))}
      </GridCont>
    </>
  );
};

export default Grid;


