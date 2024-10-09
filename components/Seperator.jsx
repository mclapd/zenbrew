import Image from "next/image";

const Seperator = ({ bg = "white" }) => {
  const imageSrc =
    bg === "accent"
      ? "/assets/separator-accent.svg"
      : "/assets/separator-white.svg";

  return (
    <div className="relative w-[168px] h-[26px] mx-auto">
      <Image src={imageSrc} fill alt="" />
    </div>
  );
};

export default Seperator;
