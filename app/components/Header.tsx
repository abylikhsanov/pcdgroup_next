"use client";

import Image from "next/image";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";

export function Header() {
  const [visible, setVisible] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 950 });

  const menu = (
    <div className="flex flex-col justify-center items-center mt-4">
      <CloseOutlined style={{ color: "black" }} onClick={() => setVisible(!visible)} />
      <p className="text-black text-xl text-center mr-4 mt-4">Главная</p>
      <p className="text-black text-xl text-center mr-4 mt-4">О компании</p>
      <p className="text-black text-xl text-center mr-4 mt-4">Сертификаты</p>
      <p className="text-black text-xl text-center mr-4 mt-4">Расположение</p>
      <p className="text-black text-xl text-center mr-4 mt-4 mb-4">Контакты</p>
    </div>
  );

  return (
    <div className="flex flex-row justify-between w-full px-12">
      <div className="h-48">
      <Image src="/logo.png" height={192} width={200} alt="logo" />
      </div>

      {isMobile ? (
        <div className="flex justify-center items-center">
          {visible ? (
            menu
          ) : (
            <MenuOutlined style={{ color: "black", fontSize: 30 }} onClick={() => setVisible(!visible)} />
          )}
        </div>
      ) : (
        <div className="flex flex-row justify-center items-center">
          <p className="text-black text-xl text-center mr-4">Главная</p>
          <p className="text-black text-xl text-center mr-4">О компании</p>
          <p className="text-black text-xl text-center mr-4">Сертификаты</p>
          <p className="text-black text-xl text-center mr-4">Расположение</p>
          <p className="text-black text-xl text-center">Контакты</p>
        </div>
      )}
    </div>
  );
}
