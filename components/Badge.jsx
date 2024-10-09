import Image from "next/image";

const Badge = ({ containderStyles }) => {
  return (
    <div className={`relative ${containderStyles}`}>
      <Image src="/assets/badge.svg" fill alt="" className="object-contain" />
    </div>
  );
};

export default Badge;
