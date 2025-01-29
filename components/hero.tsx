import Image from "next/image";

interface HeroProps {
  src: string;
  alt: string;
}

export function Hero({ src, alt }: HeroProps) {
  return (
    <div className="relative w-full h-[20vh] sm:h-[30vh] lg:h-[40vh]">
      <Image
        src={src}
        alt={alt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      <div className="absolute top-4 right-4 size-20">
        <Image
          src="/img/logos/MBEwhite.png"
          alt="Certified by the Minority and Women-owned Business Enterprise (M/WBE)
            Certification Program in NYC"
          fill
          className="aspect-square"
        />
      </div>
    </div>
  );
}
