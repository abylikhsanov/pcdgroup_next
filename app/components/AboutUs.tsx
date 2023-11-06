export function AboutUs() {
    return (
      <div id="about" className="m-8 bg-gradient-to-r from-yellow-50 via-yellow-100 to-yellow-theme p-10 rounded-lg shadow-xl transform transition duration-500 hover:scale-105">
        <h1 className="text-gray-800 text-center text-4xl font-extrabold m-4">
          История нашего успеха
        </h1>
        <p className="text-gray-700 text-center text-xl m-4 leading-relaxed">
          {`С нового тысячелетия, PCD Group вдыхает жизнь в инновации. Наш завод в Сарканде — это сердце нашего производства, где мы с любовью создаем соевый шрот и масло. Наши ежегодные мощности впечатляют: 🌱 57600 тонн шрота и 🛢️ 14400 тонн масла. Ищем партнеров, таких же преданных земле и качеству, для сотрудничества без ГМО. Присоединяйтесь к нам в путешествии по доставке чистой продукции на столы по всему миру!`}
        </p>
        <div className="text-center mt-6">
          <a
            href="/contact"
            className="inline-block bg-yellow-400 text-white text-lg font-semibold px-6 py-2 rounded-full shadow-lg hover:bg-yellow-500 transition duration-300"
          >
            Свяжитесь с нами
          </a>
        </div>
      </div>
    );
  }
  