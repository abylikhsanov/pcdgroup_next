"use client";

import { MailOutlined, PhoneOutlined, HomeOutlined } from '@ant-design/icons';

export function ContactUs() {
  const latitude = 45.41826828505711;
  const longitude = 79.88686209789078;
  const googleMapsEmbedUrl = `https://www.google.com/maps?q=${latitude},${longitude}&hl=es;z=14&output=embed`;

  return (
    <div id="contact" className="bg-gradient-to-r from-white via-yellow-50 to-yellow-theme p-10 rounded-lg shadow-xl transform transition duration-500 hover:scale-105">
      <h1 className="text-gray-800 text-center text-4xl font-bold m-4">Контакты</h1>
      <div className="space-y-4">
        <div className="flex items-center justify-center">
          <HomeOutlined className="text-2xl text-gray-700" />
          <p className="text-black text-lg ml-2">
            PCD Group, ул. Промышленная, д.4, Сарканд, Алматинская обл., Республика Казахстан
          </p>
        </div>
        <div className="flex items-center justify-center">
          <MailOutlined className="text-2xl text-gray-700" />
          <p className="text-black text-lg ml-2">
            abyl@pcdgroup.kz
          </p>
        </div>
        <div className="flex items-center justify-center">
          <PhoneOutlined className="text-2xl text-gray-700" />
          <p className="text-black text-lg ml-2">
            +7 775 210 5348
          </p>
        </div>
        <div className="flex items-center justify-center">
          <PhoneOutlined className="text-2xl text-gray-700" />
          <p className="text-black text-lg ml-2">
            +7 727 891 2345
          </p>
        </div>
        <div className="mt-6">
          <iframe
            src={googleMapsEmbedUrl}
            width="100%"
            height="400"
            style={{ border:0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
