import React from "react";
import style from "./header.module.scss";
import firstImg from "./assets/Group 36.png";
import Image from "next/image";
import User from "./assets/Vector (10).png";
import Eye from "./assets/ic_baseline-remove-red-eye.png";
const Header = () => {
  return (
    <div className={style.header}>
      <h1>Tarixmanba.uz</h1>
      <Image src={firstImg} alt="group" />
      <ul>
        <li>Biz haqimizda </li>
        <li>Yangiliklar</li>
        <li>Kutubxona</li>
        <li>Bog’lanish</li>
      </ul>
      <div>
        <p>
          <Image src={User} alt="user" />
          Shaxsiy xona
        </p>
        <p>
          <Image src={Eye} alt="Eye" />
          Zaif koʻruvchilar uchun
        </p>
      </div>
    </div>
  );
};

export default Header;
