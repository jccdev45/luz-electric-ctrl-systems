"use client";

import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const IMAGES = [
  {
    img: "/img/carousel/159Q Pictures 3-14-2015 (10).jpg",
    alt: "Newly installed hanging light fixtures in a school classroom",
  },
  { img: "/img/carousel/20130807_140404.jpg", alt: "Electrical panel" },
  {
    img: "/img/carousel/20130807_140634.jpg",
    alt: "Large electrical circuit breaker panel",
  },
  {
    img: "/img/carousel/20130822_113614.jpg",
    alt: "Power distribution system for computer room",
  },
  { img: "/img/carousel/20130822_114707.jpg", alt: "Electrical panel" },
  {
    img: "/img/carousel/20150805_125319.jpg",
    alt: "Wall of several electrical panels and meters",
  },
  {
    img: "/img/carousel/20150820_121706.jpg",
    alt: "Mechanical room for an elevator system",
  },
  {
    img: "/img/carousel/20150820_122609.jpg",
    alt: "Fuse box for elevator system",
  },
  {
    img: "/img/carousel/20150902_111457.jpg",
    alt: "Various electrical panels and cutoff switches for elevator system",
  },
  {
    img: "/img/carousel/20150903_143208.jpg",
    alt: "Wall of various electrical panels and meters",
  },
  {
    img: "/img/carousel/20150915_102522.jpg",
    alt: "Wall of electrical meters and a large electrical fuse box",
  },
  {
    img: "/img/carousel/20151019_132739.jpg",
    alt: "A trench that was dug to install pipe, with tape measure coming out through the pipe from inside the building",
  },
  { img: "/img/carousel/20151222_142322.jpg", alt: "Electrical panel" },
  {
    img: "/img/carousel/20151222_174118.jpg",
    alt: "Electrical system including panels and meters",
  },
  { img: "/img/carousel/20160115_130120.jpg", alt: "10 horsepower motor" },
  {
    img: "/img/carousel/20160115_130153.jpg",
    alt: "Several electrical cutoff switches with a sign that says 'Out of Service: Do Not Operate'",
  },
  {
    img: "/img/carousel/7-26-2015 Misl 104.jpg",
    alt: "Horizontally mounted large fuse box",
  },
  {
    img: "/img/carousel/Auditorium Back Stage Walkway.jpg",
    alt: "Back stage walkway of an auditorium with view of electrical system near the ceiling",
  },
  {
    img: "/img/carousel/Job Pic (25).jpg",
    alt: "Various scaffolds and ladders in a gymnasium, showing 6 mounted light fixtures",
  },
];

export function ImageGallery() {
  return (
    <Carousel
      className="w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto"
      plugins={[
        Autoplay({
          delay: 4000,
        }),
      ]}
      opts={{ loop: true }}
    >
      <CarouselContent>
        {IMAGES.map(({ img, alt }) => (
          <CarouselItem key={img} className="md:basis-2/3 lg:basis-1/2">
            <AspectRatio ratio={16 / 9} className="bg-muted">
              <Image
                src={img}
                alt={alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                className="object-cover rounded-lg"
              />
            </AspectRatio>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex" />
      <CarouselNext className="hidden md:flex" />
    </Carousel>
  );
}
