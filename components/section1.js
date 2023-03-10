import Image from "next/image";
import Link from "next/link";
import Author from "./child/author";
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore,{Autoplay} from 'swiper'
import "swiper/css";

export default function section1() {
    SwiperCore.use([Autoplay]);
  return (
    <section className="py-16">
      <div className="container mx-auto md:px-20">
        <h1 className="font-bold text-4xl pb-12 text-center">Trending</h1>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          loop
          onSlideChange={() => console.log('slide change')}
          autoplay={{
            delay:2000,
          }}
     
         
        >
          <SwiperSlide> {Slide()}</SwiperSlide>
          <SwiperSlide> {Slide()}</SwiperSlide>
          <SwiperSlide> {Slide()}</SwiperSlide>
          <SwiperSlide> {Slide()}</SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

function Slide() {
  return (
    <div className="grid md:grid-cols-2">
      <div className="image">
        <Link href={"/"}>
        
          <Image src={"/images/Intro_image.jpg"} width={600} height={600} />
        </Link>
      </div>
      <div className="info px-6 ">
        <div className="cat">
          <Link
            href={""}
            className="text-orange-600 hover:text-orange-800 text-center"
          >
            Nature
          </Link>
          <Link
            href={""}
            className="text-grey-600 hover:text-orange-800 text-center"
          >
            {" "}
            - March 10 2023
          </Link>
        </div>
        <div className="title">
          <Link
            href={""}
            className="text-3xl md:text-5xl font-bold text-black-800 hover:text-red-600"
          >
            "Connecting with Nature: Why Spending Time Outdoors is Essential for
            our Well-being"
          </Link>
        </div>
        <p className="text-black-500 py-3">
          Nature refers to the natural world around us, including all living and
          non-living things that exist in the universe. It encompasses
          everything from the smallest microorganisms to the largest galaxies,
          and includes all ecosystems, landscapes, and natural resources on
          Earth
        </p>
        <Author />
      </div>
    </div>
  );
}
