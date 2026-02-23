import type { FC } from "react";

import Image from "next/image";

import logo from "@/assets/images/app/logo.png";

const Logo: FC = () => {
  return (
    <div className="flex items-end gap-1 py-3 pl-2">
      <Image
        src={logo}
        className="h-8 w-8 rounded-full bg-brand-primary-500/90 p-1"
        alt="Mocean"
      />

      <span className="text-nowrap font-[fantasy] text-2xl tracking-[-0.02em]">
        Mocean
      </span>
    </div>
  );
};

export default Logo;
