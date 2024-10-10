import Image from "next/image";
import Badge from "./Badge";
import Seperator from "./Seperator";

const OpenningHours = () => {
  return (
    <section className="flex bg-primary h-[60vh] xl:h-[80vh]">
      <div className="hidden relative xl:flex flex-1 justify-center items-center">
        <div className="w-full h-full absolute z-40 top-0 bg-black/60"></div>
        <Image
          src="/assets/opening-hours/img.png"
          fill
          alt=""
          quality={100}
          priority
          className="object-cover"
        />
        <Badge containderStyles="w-[320px] h-[320px] absolute z-40" />
      </div>
      <div className="flex-1 bg-opening_hours bg-cover bg-no-repeat flex flex-col justify-center items-center relative">
        <div className="w-full h-full absolute top-0 bg-black/[0.85] z-10"></div>
        <div className="z-20 flex flex-col items-center justify-center">
          <h2 className="h2 text-white mb-4">Opening Hours</h2>
          <Seperator bg="accent" />
          <div className="mt-12 relative w-[300px] h-[220px] xl:w-[470px] xl:h-[280px]">
            <Image
              src="/assets/opening-hours/program-badge.svg"
              fill
              alt=""
              quality={100}
              priority
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpenningHours;
