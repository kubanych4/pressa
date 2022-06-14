import React from "react";
import {IconBtn, SocIcons} from "./styles";
import Link from "next/link";
import Image from "next/image";
import tiktok from "../../public/icons/tiktok.png";
import instagram from "../../public/icons/instagram.png";
import facebook from "../../public/icons/facebook.png";
import youtube from "../../public/icons/youtube.png";

export const Soc: React.FC = () => {
  return(
      <div>
        <Link href="https://www.tiktok.com/@koom.press">
          <a target="_blank">
            <IconBtn>
              <Image src={tiktok} alt="tiktok" />
            </IconBtn>
          </a>
        </Link>
        <Link href="https://www.instagram.com/koom.press.kg/">
          <a target="_blank">
            <IconBtn>
              <Image src={instagram} alt="instagram" />
            </IconBtn>
          </a>
        </Link>
        <Link href="https://www.facebook.com/koom.press.kg/">
          <a target="_blank">
            <IconBtn>
              <Image src={facebook} alt="facebook" />
            </IconBtn>
          </a>
        </Link>
        <Link href="https://www.youtube.com/channel/UCPzUDnyfHpDnoRuPbDpJ9-Q">
          <a target="_blank">
            <IconBtn>
              <Image src={youtube} alt="youtube" />
            </IconBtn>
          </a>
        </Link>
      </div>
  )
}
