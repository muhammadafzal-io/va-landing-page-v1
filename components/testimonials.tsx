"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const testimonials = [
  {
    quote:
      "Middle East Advisory Group’s deep understanding of local regulations and technical expertise in dealing with complex cross-border tax matters was invaluable to us as part of our expansion journey into the UAE. I would strongly recommend the firm to any business or entrepreneur relocating or expanding their business to the region.",
    name: "Rob [Full Name]",
    role: "Title",
    image: "/professional-executive-male-ceo-portrait-formal-bu.jpg",
  },
  {
    quote:
      "We have used Middle East Advisory Group’s advisory and structuring services for a number of our high-profile clients relocating from the UK to the UAE. Their excellent cross-border knowledge and expertise have made our clients’ GCC market entry process seamless and efficient.",
    name: "Sherad Dewedi",
    role: "Managing Partner – Shenward Chartered Accountants",
    image: "/professional-executive-male-ceo-portrait-formal-bu.jpg",
  },
  {
    quote:
      "The firm’s proactive and partner-led service has been instrumental for a number of our high-net-worth private clients entering the UAE and KSA markets. Middle East Advisory Group has not only provided top quality advisory services to our clients establishing their businesses in the region, but have also been excellent with their proactive compliance services post implementation. ",
    name: "Amer Nazir",
    role: "Partner – Fortis Private Wealth",
    image: "/professional-executive-male-ceo-portrait-formal-bu.jpg",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActive(prev => (prev + 1) % testimonials.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-16 py-20">
      <div className="relative bg-[#BD994E] rounded-[32px] px-10 py-14 overflow-hidden">
        <h3 className="text-[#5A2C35] text-xl font-semibold mb-8">
          What our clients say
        </h3>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
          {/* Text */}
          <div className="md:col-span-2">
            <p className="text-white text-lg leading-relaxed italic">
              “{testimonials[active].quote}”
            </p>

            <div className="mt-6 text-white">
              <p className="font-semibold">
                {testimonials[active].name}
              </p>
              <p className="text-sm opacity-90">
                {testimonials[active].role}
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center md:justify-end">
            <div className="w-48 h-48 rounded-full overflow-hidden bg-white">
              <Image
                src={testimonials[active].image}
                alt={testimonials[active].name}
                width={192}
                height={192}
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-10">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActive(index)}
              className={`w-3 h-3 rounded-full transition ${active === index
                ? "bg-[#5A2C35]"
                : "bg-white/60"
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
