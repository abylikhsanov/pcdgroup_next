"use client";

import Image from "next/image";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { MenuOutlined, CloseOutlined, HomeOutlined, InfoCircleOutlined, EnvironmentOutlined, ContactsOutlined, SafetyCertificateOutlined } from "@ant-design/icons";

export function Header() {
  const [visible, setVisible] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 950 });

  const menu = (
    <div className="flex flex-col justify-center items-center mt-4 bg-white shadow-md rounded-lg py-4">
      <CloseOutlined className="text-3xl text-black" onClick={() => setVisible(!visible)} />
      <a href="#home" className="flex items-center text-black text-xl text-center mr-4 mt-4 hover:text-green-600 transition-colors duration-300">
        <HomeOutlined className="mr-2" /> Главная
      </a>
      <a href="#about" className="flex items-center text-black text-xl text-center mr-4 mt-4 hover:text-green-600 transition-colors duration-300">
        <InfoCircleOutlined className="mr-2" /> О компании
      </a>
      <a href="#certificates" className="flex items-center text-black text-xl text-center mr-4 mt-4 hover:text-green-600 transition-colors duration-300">
        <SafetyCertificateOutlined className="mr-2" /> Сертификаты
      </a>
      <a href="#location" className="flex items-center text-black text-xl text-center mr-4 mt-4 hover:text-green-600 transition-colors duration-300">
        <EnvironmentOutlined className="mr-2" /> Расположение
      </a>
      <a href="#contact" className="flex items-center text-black text-xl text-center mr-4 mt-4 mb-4 hover:text-green-600 transition-colors duration-300">
        <ContactsOutlined className="mr-2" /> Контакты
      </a>
    </div>
  );

  return (
    <nav className="flex flex-row justify-between items-center w-full px-12 bg-gradient-to-r from-white via-yellow-50 to-yellow-theme py-4 rounded-lg shadow-xl">
      <div className="h-48">
        <Image src="/logo_nobg.png" height={192} width={200} alt="logo" />
      </div>

      {isMobile ? (
        <div className="flex justify-center items-center">
          {visible ? (
            menu
          ) : (
            <MenuOutlined className="text-3xl text-black" onClick={() => setVisible(!visible)} />
          )}
        </div>
      ) : (
        <div className="flex flex-row justify-center items-center">
          {/* Repeating items could be refactored into a map if list grows */}
          <a href="#home" className="flex items-center text-black text-xl text-center mr-4 hover:text-green-600 transition-colors duration-300">
            <HomeOutlined className="mr-2" /> Главная
          </a>
          <a href="#about" className="flex items-center text-black text-xl text-center mr-4 hover:text-green-600 transition-colors duration-300">
            <InfoCircleOutlined className="mr-2" /> О компании
          </a>
          <a href="#certificates" className="flex items-center text-black text-xl text-center mr-4 hover:text-green-600 transition-colors duration-300">
            <SafetyCertificateOutlined className="mr-2" /> Сертификаты
          </a>
          <a href="#location" className="flex items-center text-black text-xl text-center mr-4 hover:text-green-600 transition-colors duration-300">
            <EnvironmentOutlined className="mr-2" /> Расположение
          </a>
          <a href="#contact" className="flex items-center text-black text-xl text-center hover:text-green-600 transition-colors duration-300">
            <ContactsOutlined className="mr-2" /> Контакты
          </a>
        </div>
      )}
    </nav>
  );
}
