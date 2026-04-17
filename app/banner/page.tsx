"use client";

import { useEffect, useState } from "react";
import { getBanners } from "../services/banner";
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

export default function BannerCarousel() {
  const [banners, setBanners] = useState<BannerType[]>([]);
  const [loading, setLoading] = useState(true);
  const [api, setApi] = useState<any>(null);

  const fetchBanners = async () => {
    try {
      setLoading(true);

      const response = await getBanners();

      if (response?.success) {
        setBanners(response.banner);
      } else {
        setBanners([]);
      }
    } catch (error) {
      console.error(error);
      setBanners([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBanners();
  }, []);

  useEffect(() => {
    if (!api || banners.length <= 1) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [api, banners]);

  if (loading) {
    return (
      <div >
        <div className="h-[220px] md:h-[400px] w-full rounded-2xl bg-gray-100 animate-pulse" />
      </div>
    );
  }

  if (banners.length === 0) return null;

  return (
    <div className=" my-7 p-6">
      <Carousel
        setApi={setApi}
        opts={{ loop: true }}
        className="w-full"
      >
        <CarouselContent>
          {banners.map((item) => (
            <CarouselItem key={item._id}>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[250px] md:h-[450px] object-cover rounded-2xl"
                />
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