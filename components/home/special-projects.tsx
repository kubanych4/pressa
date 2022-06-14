import React from 'react';
import Link from 'next/link';
import { A, Cont, DailyContent, DailyImg, DailyItem, DailyName, DailyWatch, HR, SpecImg, SpecItem, Title} from '../ui/home';
import Image from 'next/image';
import mega from '../../public/img/spec-mega.png';
import design from '../../public/img/spec-design.png';
import front from '../../public/img/spec-front.png';
import red from '../../public/img/spec-red.png';
import { useTranslation } from 'next-i18next';

type Type = {
  data?: any;
}

const data = [
  {
    id: 0,
    img: mega
  },
  {
    id: 1,
    img: design
  },
  {
    id: 2,
    img: front
  },
  {
    id: 3,
    img: red
  }
]

const SpecialProjects: React.FC<Type> = () => {
  const { t } = useTranslation("general");
  return (
    <DailyContent>
      <Title>{t('doc.special_projects')}</Title>
      <Cont>
        {data.map((item: any) => (
          <Link  href="/" key={item.id}>
            <A>
              <SpecItem>
                <SpecImg>
                  <Image src={item.img} alt="news" />
                </SpecImg>
              </SpecItem>
            </A>
          </Link>
        ))}
      </Cont>
    </DailyContent>
  );
};

export default SpecialProjects;


