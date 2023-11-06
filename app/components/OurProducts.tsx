import { Col, Divider, Row } from "antd";
import Image from "next/image";

const images = [
  {
    image: "/product-1.png",
    text: "Подсолнечное масло и шрот",
  },
  {
    image: "/product-2.png",
    text: "Рапсовое масло и шрот",
  },
  {
    image: "/product-3.png",
    text: "Соевое масло и шрот",
  },
  {
    image: "/product-4.png",
    text: "Рафинированное и нерафинированное масло",
  },
];

export function OurProducts() {
  return (
    <div className="flex flex-col items-around">
      <h1 className="text-black text-center text-3xl font-bold m-4">Наша продукция</h1>
      <div className="m-4">
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          {images.map((item, index) => {
            return (
              <Col
                className="gutter-row"
                key={`${item.image} + ${index}`}
                xs={24}
                sm={24}
                md={24}
                lg={6}
              >
                <div className="flex flex-col justify-center items-center m-4">
                  <Image
                    src={`${item.image}`}
                    className="rounded-3xl"
                    alt="product-sunflower"
                    width={200}
                    height={200}
                  />
                  <p className="text-black text-center font-bold text-xl mt-4">{`${item.text}`}</p>
                </div>
              </Col>
            );
          })}
        </Row>
      
      </div>
    </div>
  );
}
