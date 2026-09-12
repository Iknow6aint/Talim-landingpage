import Image from "next/image";
import { LOGO_SRC } from "@/lib/site";

type BrandMarkProps = {
  size: number;
  priority?: boolean;
  className?: string;
};

export default function BrandMark({ size, priority = false, className = "" }: BrandMarkProps) {
  return <Image src={LOGO_SRC} alt="" width={size} height={size} priority={priority} className={`shrink-0 ${className}`} />;
}
