import React, { useState } from 'react';
import { useTranslation } from "next-i18next";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import banner from '../../public/img/banner.png';
import logo from '../../public/logo.png';
import { Container } from "../ui/container";
import { menu } from './menu';
import {
  Banner,
  BarIcon,
  CloseBtn,
  HeaderWrap,
  IconsContent,
  Input,
  LangBtn,
  LogoBtn,
  LogoContent,
  Menu,
  MenuActiveLink,
  MenuContent,
  MenuLink, MobSearchSoc, MobSidebar,
  MobSidebarModal,
  Search,
  SearchIcon,
  SocIcons,
} from './styles';
import { Soc } from './soc';
import search from '../../public/icons/search.png';
import bar from '../../public/icons/bars.png';
import close from '../../public/icons/close.png';
import useMedia from 'use-media';
import TimeWeather from '../home/time-weather';

export const Navbar: React.FC = () => {
  const [show, setShow] = useState(false);
  const { t } = useTranslation("general");
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <Banner>
        <Image src={banner} alt="banner" />
      </Banner>
      <HeaderWrap>
        <Container>
          <LogoContent>
            <BarIcon onClick={() => setShow(true)}>
              <Image src={bar} alt="bar" />
            </BarIcon>
            {show && (
              <MobSidebarModal>
                <CloseBtn onClick={() => setShow(false)}>
                  <Image src={close} alt="close" />
                </CloseBtn>
                <MobSidebar>
                  <MenuFC close={() => setShow(false)} />
                  <TimeWeather />
                </MobSidebar>
              </MobSidebarModal>
            )}
            <Link href="/">
              <a>
                <LogoBtn>
                  <Image src={logo} alt="logo" />
                </LogoBtn>
              </a>
            </Link>
            <IconsContent>
              <SocIcons>
                <Soc />
              </SocIcons>
              <Link
                  href={{
                    pathname: router.pathname,
                    query: {id: id}
                  }}
                  locale={router.locale === 'kg' ? 'ru' : 'kg'}
                  passHref
              >
                <LangBtn>
                  <a>{t('lang.title')}</a>
                </LangBtn>
              </Link>
            </IconsContent>
          </LogoContent>
          <MenuContent>
            <MenuFC />
            <SearchFC />
          </MenuContent>
          <MobSearchSoc>
            <SearchFC />
            <Soc />
          </MobSearchSoc>
        </Container>
      </HeaderWrap>
    </div>
  );
};

type Close = {
  close?: any;
}

const MenuFC: React.FC<Close> = ({close}) => {
  const isMob = useMedia({maxWidth: 801});
  const [active, setActive] = useState(menu[0].id);
  const { t } = useTranslation("general");
  return (
    <Menu>
      {menu.map((item, index) => (
        <Link href={item.link} key={index}>
          <a onClick={() => {!isMob ? setActive(item.id) : close()}}>
            {item.id === active ? (
              <MenuActiveLink>{t(item.name)}</MenuActiveLink>
            ) : (
              <MenuLink>{t(item.name)}</MenuLink>
            )}
          </a>
        </Link>
      ))}
    </Menu>
  )
};

const SearchFC: React.FC = () => {
  const { t } = useTranslation("general");
  return (
    <Search>
      <SearchIcon>
        <Image src={search} alt="search"/>
      </SearchIcon>
      <Input placeholder={t('doc.search')}/>
    </Search>
  )
};
