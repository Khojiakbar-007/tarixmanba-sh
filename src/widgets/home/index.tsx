import React from "react";
import style from "./home.module.scss";
import Image from "next/image";
import Logo from "./assets/Rectangle 22 (1).png";
import SearchIcon from "./assets/search.png";
import MainButton from "./components/mainButton";
import Uzbekistan from "./assets/uz 1.png";
import LinkImg from "./assets/Group 61.png";
import CardContainer, { Nav } from "./components/cardContainer";
import Rect251 from "./assets/Rectangle 25 (1).png";
import Rect252 from "./assets/Rectangle 25 (2).png";
import Rect253 from "./assets/Rectangle 25 (3).png";
import Rect25 from "./assets/Rectangle 25.png";
import arxivRect251 from "./assets/arxiv/Rectangle 25 (1).png";
import arxivRect252 from "./assets/arxiv/Rectangle 25 (2).png";
import arxivRect253 from "./assets/arxiv/Rectangle 25 (3).png";
import arxivRect25 from "./assets/arxiv/Rectangle 25.png";
import epigImg1 from "./assets/epigrafik/Rectangle 24.png";
import epigImg2 from "./assets/epigrafik/Rectangle 24 (1).png";
import epigImg3 from "./assets/epigrafik/Rectangle 24 (2).png";
import epigImg4 from "./assets/epigrafik/Rectangle 24 (3).png";
import manbaImg1 from "./assets/manba/Rectangle 25.png";
import manbaImg2 from "./assets/manba/Rectangle 25 (1).png";
import manbaImg3 from "./assets/manba/Rectangle 25 (2).png";
import manbaImg4 from "./assets/manba/Rectangle 25 (3).png";
import matImg1 from "./assets/matbuot/Rectangle 24.png";
import matImg2 from "./assets/matbuot/Rectangle 24 (1).png";
import matImg3 from "./assets/matbuot/Rectangle 24 (2).png";
import matImg4 from "./assets/matbuot/Rectangle 24 (3).png";
import muhrImg1 from "./assets/muhr/Rectangle 25.png";
import muhrImg2 from "./assets/muhr/Rectangle 25 (1).png";
import muhrImg3 from "./assets/muhr/Rectangle 25 (2).png";
import muhrImg4 from "./assets/muhr/Rectangle 25 (3).png";
import tanImg1 from "./assets/tanga/Rectangle 24.png";
import tanImg2 from "./assets/tanga/Rectangle 24 (1).png";
import tanImg3 from "./assets/tanga/Rectangle 24 (2).png";
import tanImg4 from "./assets/tanga/Rectangle 24 (3).png";
import hujImg1 from "./assets/hujjat/Rectangle 25.png";
import hujImg2 from "./assets/hujjat/Rectangle 25 (1).png";
import hujImg3 from "./assets/hujjat/Rectangle 25 (2).png";
import hujImg4 from "./assets/hujjat/Rectangle 25 (3).png";
import xalqImg1 from "./assets/xalq/Rectangle 24.png";
import xalqImg2 from "./assets/xalq/Rectangle 24 (1).png";
import xalqImg3 from "./assets/xalq/Rectangle 24 (2).png";
import xalqImg4 from "./assets/xalq/Rectangle 24 (3).png";
import yozImg1 from "./assets/yozma/Rectangle 25.png";
import yozImg2 from "./assets/yozma/Rectangle 25 (1).png";
import yozImg3 from "./assets/yozma/Rectangle 25 (2).png";
import yozImg4 from "./assets/yozma/Rectangle 25 (3).png";
import kutImg1 from "./assets/kutubxona/Rectangle 24.png";
import kutImg2 from "./assets/kutubxona/Rectangle 24 (1).png";
import kutImg3 from "./assets/kutubxona/Rectangle 24 (2).png";
import kutImg4 from "./assets/kutubxona/Rectangle 24 (3).png";
import kutImg5 from "./assets/kutubxona/Rectangle 24 (4).png";
import kutImg6 from "./assets/kutubxona/Rectangle 24 (5).png";
import kutImg7 from "./assets/kutubxona/Rectangle 24 (6).png";
import kutImg8 from "./assets/kutubxona/Rectangle 24 (7).png";
import Card from "./components/card";
import Latest from "./components/latest";
import SeeMore from "./components/seeMore";
import News from "./components/news";
const HomePage = () => {
     return (
          <div className={style.home}>
               <div className={style.homeTop}>
                    <div>
                         <Image src={Logo} alt="logo" />
                         <p>
                              Saytning toʻliq imkoniyatlaridan foydalanish uchun
                              <span> Roʻyxatdan oʻting</span> yoki shaxsiy
                              xonaga kiring
                         </p>
                         <div className={style.input}>
                              <input type="text" placeholder="Qidirmoq" />
                              <Image src={SearchIcon} alt="search icon" />
                         </div>
                         <MainButton title="Barcha manbalar" />
                         <div className={style.bottom}>
                              <div>
                                   <p>
                                        Oʻzbek davlatchiligiga oid manbalar soni
                                   </p>
                                   <p>15 000</p>
                              </div>
                              <div>
                                   <p>Tarixmanba.uz satdagi manbalar soni</p>
                                   <p>430</p>
                              </div>
                         </div>
                    </div>
               </div>
               <section className={style.mainSection}>
                    <div className={style.links}>
                         <Image src={LinkImg} alt="links" />
                         <Image src={Uzbekistan} alt="Uzbekistan" />
                    </div>
                    <CardContainer titleContainer="Arxeologik yodgorliklar">
                         <Card
                              title="Lorem ipsum dolor сonsectetur adipiscing"
                              imgUrl={Rect25.src}
                         />
                         <Card
                              title="Consectetur adipiscing lorem ipsum dolor"
                              imgUrl={Rect251.src}
                         />
                         <Card
                              title="Sed do eiusmod tempor incididunt ut labore"
                              imgUrl={Rect252.src}
                         />
                         <Card
                              title="Incididunt ut labore incididunt ut labore"
                              imgUrl={Rect253.src}
                         />
                    </CardContainer>
               </section>
               <section
                    className={style.mainSection}
                    style={{ background: "#FFEEDF" }}
               >
                    <CardContainer titleContainer="Arxiv hujjatlar">
                         <Card
                              title="Lorem ipsum dolor incididunt ut labore"
                              imgUrl={arxivRect25.src}
                         />
                         <Card
                              title="Consectetur adipiscing incididunt ut labore"
                              imgUrl={arxivRect251.src}
                         />
                         <Card
                              title="Sed do eiusmod tempor incididunt ut labore"
                              imgUrl={arxivRect252.src}
                         />
                         <Card
                              title="Incididunt ut labore incididunt ut labore"
                              imgUrl={arxivRect253.src}
                         />
                    </CardContainer>
               </section>
               <section className={style.mainSection}>
                    <CardContainer titleContainer="Epigrafik manbalar">
                         <Card
                              title="Lorem ipsum dolor incididunt ut labore"
                              imgUrl={epigImg1.src}
                         />
                         <Card
                              title="Consectetur adipiscing incididunt ut labore"
                              imgUrl={epigImg2.src}
                         />
                         <Card
                              title="Sed do eiusmod tempor incididunt ut labore"
                              imgUrl={epigImg3.src}
                         />
                         <Card
                              title="Incididunt ut labore incididunt ut labore"
                              imgUrl={epigImg4.src}
                         />
                    </CardContainer>
               </section>
               <section
                    className={style.mainSection}
                    style={{ background: "#FFEEDF" }}
               >
                    <CardContainer titleContainer="Foto va video manbalar">
                         <Card
                              title="Lorem ipsum dolor incididunt ut labore"
                              imgUrl={manbaImg1.src}
                         />
                         <Card
                              title="Consectetur adipiscing incididunt ut labore"
                              imgUrl={manbaImg2.src}
                         />
                         <Card
                              title="Sed do eiusmod tempor incididunt ut labore"
                              imgUrl={manbaImg3.src}
                         />
                         <Card
                              title="Incididunt ut labore incididunt ut labore"
                              imgUrl={manbaImg4.src}
                         />
                    </CardContainer>
               </section>
               <section className={style.mainSection}>
                    <CardContainer titleContainer="Matbuot">
                         <Card
                              title="Lorem ipsum dolor incididunt ut labore"
                              imgUrl={matImg1.src}
                         />
                         <Card
                              title="Consectetur adipiscing incididunt ut labore"
                              imgUrl={matImg2.src}
                         />
                         <Card
                              title="Sed do eiusmod tempor incididunt ut labore"
                              imgUrl={matImg3.src}
                         />
                         <Card
                              title="Incididunt ut labore incididunt ut labore"
                              imgUrl={matImg4.src}
                         />
                    </CardContainer>
               </section>
               <section
                    className={style.mainSection}
                    style={{ background: "#FFEEDF" }}
               >
                    <CardContainer titleContainer="Muhrlar">
                         <Card
                              title="Qozi Mir Abdulloh Mir Homid al-Husayniy"
                              imgUrl={muhrImg1.src}
                         />
                         <Card
                              title="Qozi Mir Abdulloh Mir Homid al-Husayniy"
                              imgUrl={muhrImg2.src}
                         />
                         <Card
                              title="Qozi Mir Abdulloh Mir Homid al-Husayniy"
                              imgUrl={muhrImg3.src}
                         />
                         <Card
                              title="Qozi Mir Abdulloh Mir Homid al-Husayniy"
                              imgUrl={muhrImg4.src}
                         />
                    </CardContainer>
               </section>
               <section className={style.mainSection}>
                    <CardContainer titleContainer="Tangashunoslik">
                         <Card
                              title="Lorem ipsum dolor incididunt ut labore"
                              imgUrl={tanImg1.src}
                         />
                         <Card
                              title="Consectetur adipiscing incididunt ut labore"
                              imgUrl={tanImg2.src}
                         />
                         <Card
                              title="Sed do eiusmod tempor incididunt ut labore"
                              imgUrl={tanImg3.src}
                         />
                         <Card
                              title="Incididunt ut labore incididunt ut labore"
                              imgUrl={tanImg4.src}
                         />
                    </CardContainer>
               </section>
               <section
                    className={style.mainSection}
                    style={{ background: "#FFEEDF" }}
               >
                    <CardContainer titleContainer="Tarixiy hujjatlar">
                         <Card
                              title="Lorem ipsum dolor incididunt ut labore"
                              imgUrl={hujImg1.src}
                         />
                         <Card
                              title="Consectetur adipiscing incididunt ut labore"
                              imgUrl={hujImg2.src}
                         />
                         <Card
                              title="Sed do eiusmod tempor incididunt ut labore"
                              imgUrl={hujImg3.src}
                         />
                         <Card
                              title="Incididunt ut labore incididunt ut labore"
                              imgUrl={hujImg4.src}
                         />
                    </CardContainer>
               </section>
               <section className={style.mainSection}>
                    <CardContainer titleContainer="Xalq og'zaki ijodi">
                         <Card title="Xoldorxon" imgUrl={xalqImg1.src} />
                         <Card title="Malika Ayyor" imgUrl={xalqImg2.src} />
                         <Card title="Rustamxon" imgUrl={xalqImg3.src} />
                         <Card title="Ravshan" imgUrl={xalqImg4.src} />
                    </CardContainer>
               </section>
               <section
                    className={style.mainSection}
                    style={{ background: "#FFEEDF" }}
               >
                    <CardContainer titleContainer="Yozma manbalar">
                         <Card
                              title="Lorem ipsum dolor incididunt ut labore"
                              imgUrl={yozImg1.src}
                         />
                         <Card
                              title="Consectetur adipiscing incididunt ut labore"
                              imgUrl={yozImg2.src}
                         />
                         <Card
                              title="Sed do eiusmod tempor incididunt ut labore"
                              imgUrl={yozImg3.src}
                         />
                         <Card
                              title="Incididunt ut labore incididunt ut labore"
                              imgUrl={yozImg4.src}
                         />
                    </CardContainer>
               </section>
               <section className={style.mainSection}>
                    <div className={style.uzb}>
                         <div>
                              <Nav />
                         </div>
                         <h1>Ozbekiston tarixi</h1>
                         <p>23.02.2022</p>
                         <MainButton title="Batafsil" />
                    </div>
               </section>
               <section
                    className={style.mainSection}
                    style={{ background: "#FFEEDF" }}
               >
                    <CardContainer titleContainer="Elektron kutubxona">
                         <Card
                              title="Lorem ipsum dolor"
                              author="Oybek"
                              imgUrl={kutImg1.src}
                         />
                         <Card
                              title="Ut enim ad minim"
                              author="Alisher Navoiy"
                              imgUrl={kutImg2.src}
                         />
                         <Card
                              title="Quis nostrud exercitation "
                              imgUrl={kutImg3.src}
                              author="Egemberdi Ermatov"
                         />
                         <Card
                              title="Ullamco laboris nisi"
                              imgUrl={kutImg4.src}
                              author="Aleksandr Belyaev"
                         />
                         <Card
                              title="Lorem ipsum dolor"
                              author="Shamsiddin Muhammad"
                              imgUrl={kutImg5.src}
                         />
                         <Card
                              title="Ut enim ad minim"
                              author="Nikolay Gogol"
                              imgUrl={kutImg6.src}
                         />
                         <Card
                              title="Quis nostrud exercitation "
                              imgUrl={kutImg7.src}
                              author="G’afur G’ulom"
                         />
                         <Card
                              title="Ullamco laboris nisi"
                              imgUrl={kutImg8.src}
                              author="Abdulla Qodiriy"
                         />
                    </CardContainer>
               </section>
               <section className={style.mainSection}>
                    <Latest />
               </section>
               <section
                    className={style.mainSection}
                    style={{ background: "#FFEEDF" }}
               >
                    <SeeMore />
               </section>
               <section className={style.mainSection}>
                    <News />
               </section>
               <footer className={style.footer}>
                    <p>«Tarixmanba.uz» Все права защищены</p>
                    <p>© Copyright 2021 - Web developed by SOS Group</p>
               </footer>
          </div>
     );
};

export default HomePage;
