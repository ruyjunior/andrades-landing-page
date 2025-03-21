"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";

const services = [
    { title: "Skin Cleansing", image: "/images/services/service1.png" },
    { title: "Laser Hair Removal", image: "/images/services/service2.png" },
    { title: "Lymphatic Drainage", image: "/images/services/service3.png" },
    { title: "Massage Therapy", image: "/images/services/service4.png" },
    { title: "Physiotherapy (Post-Plastic Surgery)", image: "/images/services/service5.png" },
    { title: "Enzyme Application", image: "/images/services/service6.png" },
    { title: "Facial Rejuvenation", image: "/images/services/service7.png" }
];

export default function ServicesCarousel() {
    return (
        <section className="w-full flex flex-col items-center mt-10 p-6 bg-red-200 shadow-lg rounded-xl">
            <h2 className="text-3xl font-bold mb-6">Our Services</h2>
            <Swiper
                modules={[Autoplay]}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                loop
                className="w-full max-w-2xl"
            >
                {services.map((service, index) => (
                    <SwiperSlide key={index} className="flex flex-col items-center">
                        <div className="flex flex-col items-center">
                            <Image
                                src={service.image}
                                alt={service.title}
                                width={300}
                                height={200}
                                className="w-auto h-64 object-cover rounded-xl shadow-md"
                            />
                            <h3 className="text-xl font-semibold mt-4">{service.title}</h3>

                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
