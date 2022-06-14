import React, { useState } from 'react';
import img from '../../public/img/money.png';
import Image from 'next/image';
import { Img, Info, Item, Load, LoadItem, Name, Time, TimeItem, Watch } from '../ui/home';
import clockGray from '../../public/icons/clock-gray.png';
import eyeGray from '../../public/icons/eye-gray.png';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

type Type = {
  data?: any;
}

const All: React.FC<Type> = ({data}) => {
  const router = useRouter();
  const { t } = useTranslation("general");
  const [postNum, setPostNum] = useState(15);
  function handleClick() {
    setPostNum(prevPostNum => prevPostNum + 10)
  }
  return (
    <>
      {data.slice(0, postNum).map((item: any) => (
        <Link href={`/news/${item.id}`} key={item.id}>
          <a>
            <Item>
              <div>
                <Img>
                  {item.image ? <Image unoptimized alt="" width="200" height="200" src={item.image} /> : '---'}
                </Img>
              </div>
              <Info>
                <Name>{router.locale === 'ru' ? item.title_kg : item.title_ru}</Name>
                <TimeItem>
                  <Time><Image src={clockGray} /> {item.post_date}</Time>
                  <Watch><Image src={eyeGray} /> ---</Watch>
                </TimeItem>
              </Info>
            </Item>
          </a>
        </Link>
      ))}
      {postNum < 15 && <LoadItem>
        <Load onClick={handleClick}>{t('doc.load_more')}</Load>
      </LoadItem>}
    </>
  );
};

export default All;


