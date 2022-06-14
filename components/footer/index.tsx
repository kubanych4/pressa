import React from 'react';
import {Container} from "../ui/container";
import {
  Copy,
  CopyItem,
  FooterContent,
  FooterItem,
  FooterItemLeft,
  FooterItemRight,
  FooterMenu,
  FooterWrap,
  Gray,
  Mail,
  MailItem,
  MenuItem,
  Or,
  OrderBtn, Phone,
  PhoneItem,
  PhoneNumber,
  Question,
  SocIcon,
  SocItem,
  Type,
} from './styles';
import logo from '../../public/logo-horizontal.png';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import whatsapp from '../../public/icons/whatsapp.png';
import youtube from '../../public/icons/youtube-gray.png';
import youtubeOr from '../../public/icons/youtube.png';
import facebook from '../../public/icons/facebook-gray.png';
import facebookOr from '../../public/icons/facebook.png';
import instagram from '../../public/icons/instagram-gray.png';
import instagramOr from '../../public/icons/instagram.png';
import tiktok from '../../public/icons/tiktok-gray.png';
import tiktokOr from '../../public/icons/tiktok.png';
import Link from 'next/link';

export const Footer: React.FC = () => {
  const { t } = useTranslation("general");
  return (
    <FooterWrap>
      <Container>
        <FooterContent>
          <FooterItem>
            <Image src={logo} />
            <CopyItem>
              <Copy>{t('doc.koom_press_year')}</Copy>
              <Copy>{t('doc.affiliate_program')}</Copy>
            </CopyItem>
          </FooterItem>
          <MenuItem>
            <FooterItemLeft>
              <FooterMenu>{t('doc.all_news')}</FooterMenu>
              <FooterMenu>{t('doc.society')}</FooterMenu>
              <FooterMenu>{t('doc.politics')}</FooterMenu>
              <FooterMenu>{t('doc.economy')}</FooterMenu>
              <FooterMenu>{t('doc.in_the_world')}</FooterMenu>
              <FooterMenu>{t('doc.special_projects')}</FooterMenu>
            </FooterItemLeft>
            <FooterItemRight>
              <FooterMenu>{t('doc.about_us')}</FooterMenu>
              <FooterMenu>{t('doc.contacts')}</FooterMenu>
              <FooterMenu>{t('doc.vacancy')}</FooterMenu>
            </FooterItemRight>
          </MenuItem>
          <FooterItem>
            <a href="../../public/doc/kommercheskoe-predlozhenie-koom-press-2022-.docx" download>
              <OrderBtn>{t('doc.for_advertisers')}</OrderBtn>
            </a>
            <PhoneItem>
              <Phone>
                <Image src={whatsapp} />
                <PhoneNumber>0707 58 63 62 | WhatsApp</PhoneNumber>
              </Phone>
              <Type>O! | Megacom | Beeline</Type>
            </PhoneItem>
            <MailItem>
              <Mail>koompress@gmail.com</Mail>
              <Question>{t('doc.question')}</Question>
            </MailItem>
          </FooterItem>
          <FooterItem>
            <SocItem>
              <Link href="https://www.youtube.com/channel/UCPzUDnyfHpDnoRuPbDpJ9-Q">
                <a target="_blank">
                  <SocIcon>
                    <Gray>
                      <Image src={youtube} />
                    </Gray>
                    <Or>
                      <Image src={youtubeOr} />
                    </Or>
                  </SocIcon>
                </a>
              </Link>
              <Link href="https://www.facebook.com/koom.press.kg/">
                <a target="_blank">
                  <SocIcon>
                    <Gray>
                      <Image src={facebook} />
                    </Gray>
                    <Or>
                      <Image src={facebookOr} />
                    </Or>
                  </SocIcon>
                </a>
              </Link>
              <Link href="https://www.instagram.com/koom.press.kg/">
                <a target="_blank">
                  <SocIcon>
                    <Gray>
                      <Image src={instagram} />
                    </Gray>
                    <Or>
                      <Image src={instagramOr} />
                    </Or>
                  </SocIcon>
                </a>
              </Link>
              <Link href="https://www.tiktok.com/@koom.press">
                <a target="_blank">
                  <SocIcon>
                    <Gray>
                      <Image src={tiktok} />
                    </Gray>
                    <Or>
                      <Image src={tiktokOr} />
                    </Or>
                  </SocIcon>
                </a>
              </Link>
            </SocItem>
          </FooterItem>
        </FooterContent>
      </Container>
    </FooterWrap>
  );
};
