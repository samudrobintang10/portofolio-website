import Image from "next/image";

export default function Card({ image, title, desc }) {
  return (
    <div className="card py-6 px-11 bg-secondary-light rounded-2xl border border-black grid gap-y-8">
      <div className="px-10 lg:px-10 xl:px-16 pt-6 md:px-10 ">
        <Image
          src={image}
          alt="image-placholder"
          layout="responsive"
          objectFit="cover"
          width={150}
          height={178}
        />
      </div>

      <div className="grid gap-y-4">
        <h4 className="font-nunito font-bold text-2xl text-primary-main text-center">
          {title}
        </h4>
        <p className="font-pangolin text-sm font-normal text-black text-center">
          {desc}
        </p>
      </div>
    </div>
  );
}
