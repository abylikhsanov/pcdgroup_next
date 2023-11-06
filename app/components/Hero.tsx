import Image from "next/image";

export function Hero() {
  return (
    <div id="home" className="flex flex-col xl:flex-row bg-white w-full">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-black text-center text-3xl font-bold m-4">PCD Group</h1>
        <p className="text-black text-center text-xl m-4">
          Производитель соевого, подсолнечного, рапсового масла и шрота
        </p>
      </div>
      <Image
        src="/1.jpeg"
        className="rounded-xl m-4 self-center border-l-8 border-b-8 border-theme-yellow"
        alt="main"
        height={807}
        width={900}
      />
    </div>
  );
}
