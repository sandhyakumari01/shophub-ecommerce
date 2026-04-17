"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface BannerType {
  _id: string;
  title: string;
  image: string;
  link: string;
}

export default function AffiliateProductBanner() {
  const [banners, setBanners] = useState<BannerType[]>([]);
  const [api, setApi] = useState<any>(null);

  useEffect(() => {
    const dummyData = [
      {
        _id: "1",
        title: "Big Billion Deals",
        image:
          "https://images.unsplash.com/photo-1607082349566-187342175e2f",
        link: "https://amazon.in",
      },
      {
        _id: "2",
        title: "Electronics Sale",
        image:
          "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5",
        link: "https://amazon.in",
      },
      {
        _id: "3",
        title: "Fashion Offers",
        image:
          "https://images.unsplash.com/photo-1521334884684-d80222895322",
        link: "https://amazon.in",
      },
    ];

    setBanners(dummyData);
  }, []);

  // auto slide
  useEffect(() => {
    if (!api || banners.length <= 1) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [api, banners]);

  if (banners.length === 0) return null;

  return (
    <div className="mb-6 p-6">
      <Carousel setApi={setApi} opts={{ loop: true }} className="w-full">
        <CarouselContent>
          {banners.map((item) => (
            <CarouselItem key={item._id}>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <div className="w-full h-[250px] md:h-[450px] rounded-2xl overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </a>
            </CarouselItem>
          ))}
        </CarouselContent>

        {banners.length > 1 && (
          <>
            <CarouselPrevious className="left-3" />
            <CarouselNext className="right-3" />
          </>
        )}
      </Carousel>
    </div>
  );
}