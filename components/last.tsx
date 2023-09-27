import type { NextPage } from "next";
import { useState, useCallback } from "react";

import MenuIPadPro1291 from "../components/menumobile";
import PortalPopup from "../components/portalpopup";
import Flower from "../public/Group 1000000920.png";
import localFont from "next/font/local";
import Headlogo from "../public/logs.png";
import Wallet from "../public/mingcute_wallet-4-fill.svg";
import User from "../public/Ellipse 59.svg";
import Circles from "../public/Group 6.png";
import Snake from "../public/Vector 19.png";
import Image from "next/image";
import Sidecircle from "../public/Group 8.png";
import Head from "next/head";
import Star from "../public/Union.png";
import Abouts from "../public/aboutbac.png";
import Sociallin from "../public/Group 87.svg";
import Brother from "../public/Mask Group.svg";
import { ConnectWallet } from "@thirdweb-dev/react";
import Navbar from "../components/navbar";
import Footer from "../components/aboutfooter";
import Box from "@mui/material/Box";
import About from "../public/image 1.png";
import Aboutmobile from "../components/last";
import Navbs from "../public/dd.svg";
import Github from "../public/mdi_github.svg";
import Twitter from "../public/mdi_twitter.svg";
import Linkedin from "../public/entypo-social_linkedin-with-circle.svg";
import Notion from "../public/mingcute_notion-fill.svg";
import communityBg from "../public/back.png";
import { useTranslation } from "react-i18next";

import Tradei from "../public/montra.png";
import Stakei from "../public/mobst.png";
import Abouti from "../public/mobab.png";
import Termi from "../public/termi.png";
import Roadmap from "../public/Road Map.png";
import Abs from "../public/a.png";
import Abtus from "../public/About Us.png";
import Joincom from "../public/Join our community.png";
import Copyright from "../public/Copy Right 2023 - CMax. All Rights Reserved.png";
import Homer from "../public/hsss.png";

import F from "../public/Q1.png";
import S from "../public/Q2.png";
import T from "../public/Q3.png";
import Fo from "../public/Q4.png";
import LanguageSelector from "./mobilelang";

const myFont = localFont({
  src: "../public/font/MonumentExtended-FreeForPersonalUse/MonumentExtended-Regular.otf",
});
const secondFont = localFont({
  src: "../public/font/MonumentExtended-FreeForPersonalUse/NeueMontreal-Light.otf",
});
const thirdFont = localFont({
  src: "../public/font/MonumentExtended-FreeForPersonalUse/NeueMontreal-Medium.otf",
});
const fourthFont = localFont({
  src: "../public/font/MonumentExtended-FreeForPersonalUse/NeueMontreal-Regular.otf",
});

import styles from "./last.module.css";
import GenericMobileNavbar from "./mobileGenericNavbar";
import { BsGithub } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { SiNotion } from "react-icons/si";
const AboutIPadPro1293: NextPage = () => {
  const [isMenuIPadPro1291Open, setMenuIPadPro1291Open] = useState(false);

  const openMenuIPadPro1291 = useCallback(() => {
    setMenuIPadPro1291Open(true);
  }, []);

  const closeMenuIPadPro1291 = useCallback(() => {
    setMenuIPadPro1291Open(false);
  }, []);

  const { t, i18n } = useTranslation();
  // important for translation. import in every page or component
  const switchLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <div className={styles.aboutIpadPro1293}>
        <div className={styles.aboutIpadPro1293Item} />

        <section
          className="h-fit w-screen bg-center bg-cover bg-no-repeat mt-0 absolute bottom-[750px] z-50"
          style={{
            backgroundImage: `url('${communityBg.src}')`,
          }}
        >
          <h5 className="block montrealMedium text-[#FFE925] text-center text-3xl mx-auto my-10">
            {t("communityhead")}
          </h5>
          <h5 className="block text-white text-xl w-10/12 montreal text-center mx-auto mt-3 mb-5">
            {t("communityparagraph")}
          </h5>
          <div className="flex md:hidden flex-row items-center justify-around my-10 px-10">
            <BsGithub color="#ffffff" size={35} />
            <FaXTwitter color="#ffffff" size={35} />
            <TiSocialLinkedinCircular color="#ffffff" size={35} />
            <SiNotion color="#ffffff" size={35} />
          </div>
        </section>

        <div style={myFont.style} className={styles.aboutUs}>
          <h5 className="text-3xl capitalize">{t("about")}</h5>
        </div>
        <div style={thirdFont.style} className={styles.roadMap}>
          <h5 className="text-3xl capitalize">{t("roadmap")}</h5>
        </div>

        <div className={styles.loremIpsumDolorContainer}>
          <p style={secondFont.style} className={styles.blankLine}>
            {t("aboutparagraph")}{" "}
          </p>
          <p style={secondFont.style} className={styles.blankLine}>
            &nbsp;
          </p>
        </div>
        <div className={styles.loremIpsumDolorContainer1}>
          <p style={secondFont.style} className={styles.blankLine}>
            {t("roadmapparagraph")}{" "}
          </p>
          <p className={styles.blankLine}>&nbsp;</p>
        </div>
        <div className={styles.loremIpsumDolorContainer2}>
          <div
            style={thirdFont.style}
            className={styles.ourVision1}
          >{`Audit`}</div>
          <p style={secondFont.style} className={styles.blankLine}>
            {t("auditparagraph")}{" "}
          </p>
          <p className={styles.blankLine}>&nbsp;</p>
        </div>
        <img
          className={styles.aboutIpadPro1293Inner}
          alt=""
          src="Vector 20.svg"
        />

        <div className={styles.vectorContainer}>
          <img className={styles.groupChild1} alt="" src="Vector 21.svg" />

          <div className={styles.groupParent2}>
            <div className={styles.ellipseParent2}>
              <div className={styles.groupChild5} />
              <div className={styles.rectangleDiv} />
              <div style={myFont.style} className={styles.q1}>
                <Image src={F} alt="" />
              </div>
              <div className={styles.distributionTokenCbcContainer}>
                <p style={fourthFont.style} className={styles.blankLine}>
                  {t("roadmapone")}{" "}
                </p>
              </div>
            </div>
            <div className={styles.ellipseParent2}>
              <div className={styles.groupChild6} />
              <div className={styles.groupChild7} />
              <div style={myFont.style} className={styles.q2}>
                <Image src={S} alt="" />
              </div>
              <div className={styles.distributionTokenCbcContainer1}>
                <p style={fourthFont.style} className={styles.blankLine}>
                  {t("roadmapthree")}{" "}
                </p>
              </div>
            </div>
            <div className={styles.ellipseParent4}>
              <div className={styles.groupChild8} />
              <div className={styles.groupChild9} />
              <div style={myFont.style} className={styles.q3}>
                <Image src={Fo} alt="" />
              </div>
              <div className={styles.distributionTokenCbcContainers}>
                <p style={fourthFont.style} className={styles.blankLine}>
                  {t("roadmapfour")}{" "}
                </p>
              </div>
            </div>
            <div className={styles.ellipseParent2}>
              <div className={styles.groupChild10} />
              <div className={styles.groupChild7} />
              <div style={myFont.style} className={styles.q2}>
                <Image src={T} alt="" />
              </div>
              <div className={styles.distributionTokenCbcContainer3}>
                <p style={fourthFont.style} className={styles.blankLine}>
                  {t("roadmaptwo")}{" "}
                </p>
              </div>
            </div>
          </div>
          <img className={styles.groupChild12} alt="" src="Vector 22.svg" />
          <img className={styles.groupChild13} alt="" src="Vector 23.svg" />
          <img className={styles.groupChild14} alt="" src="Vector 24.svg" />
          <img className={styles.groupChild15} alt="" src="Vector 25.svg" />
        </div>
      </div>
      {isMenuIPadPro1291Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeMenuIPadPro1291}
        >
          <MenuIPadPro1291 />
        </PortalPopup>
      )}
      <GenericMobileNavbar />
      <section className="bg-[#141315] h-fit w-screen flex flex-col items-center justify-start absolute bottom-0 pt-10 pb-24">
        <a href="/">
          <img
            src={Headlogo.src}
            className=" aspect-square w-20 md:w-36 my-10 md:my-16"
            alt=""
          />
        </a>
        <div className="flex flex-col items-center justify-center gap-4 md:gap-10 px-6 flex-wrap w-full mb-6 md:mb-10">
          <a href="/trade">
            <h5 className="text-white montreal text-2xl md:text-2xl">Trade</h5>
          </a>
          <a href="/stake">
            <h5 className="text-white montreal text-2xl md:text-2xl">Stake</h5>
          </a>
          <a href="/about">
            <h5 className="text-white montreal text-2xl md:text-2xl">About</h5>
          </a>
          <a href="/profile">
            <h5 className="text-white montreal text-2xl md:text-2xl">
              Profile
            </h5>
          </a>
        </div>
        <h5 className="montreal text-gray-500 text-sm absolute bottom-8">
          All Rights Reserved - © 2021 Stephen King
        </h5>
      </section>
    </>
  );
};

export default AboutIPadPro1293;
