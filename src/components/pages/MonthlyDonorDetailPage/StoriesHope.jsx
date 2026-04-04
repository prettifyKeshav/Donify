"use client";
import "@/uploads/styles/monthly-donar-listing/monthly-donar-listing.css"
import { useEffect, useRef, useState } from "react";

const StoriesHope = () => {

  // ─── Data ────────────────────────────────────────────────────
  const stories = [
    {
      id: 1,
      name: "Kamala",
      age: "68 years old",
      image: "/assets/images/monthlydoner/detailpage/story-of-hope/1.jpg",
      description: "At 68, Kamala lost her small home when floods swept through her village overnight. The waters took her belongings, medicines, and life savings, leaving her without shelter. With relief support, she now has a temporary roof and essential supplies. She dreams of rebuilding her home and living her remaining years in peace and dignity.",
    },
    {
      id: 2,
      name: "Rajan",
      age: "13 years old",
      image: "/assets/images/monthlydoner/detailpage/story-of-hope/2.jpg",
      description: "At just 13, Rajan lost access to school when an earthquake damaged his village infrastructure. His family struggled to recover, but with educational support and community aid, he was able to continue his studies. Today, he dreams of becoming an engineer and rebuilding safer homes for others.",
    },
    {
      id: 3,
      name: "Meena",
      age: "10 years old",
      image: "/assets/images/monthlydoner/detailpage/story-of-hope/3.jpg",
      description: "Meena, only 10, faced hunger when her family’s crops failed due to drought. With support from food programs and school meal initiatives, she now receives proper nutrition and attends school regularly. She hopes to become a teacher and help other children like her.",
    },
    {
      id: 4,
      name: "Arjun",
      age: "13 years old",
      image: "/assets/images/monthlydoner/detailpage/story-of-hope/1.jpg",
      description: "During a devastating cyclone, 13-year-old Arjun helped his family and neighbors find safety. Though their home was damaged, relief support provided shelter and essentials. Arjun continues his education and has become a symbol of courage in his community.",
    },
    {
      id: 5,
      name: "Lakshmi",
      age: "10 years old",
      image: "/assets/images/monthlydoner/detailpage/story-of-hope/2.jpg",
      description: "Lakshmi, a 10-year-old girl, was displaced after wildfires destroyed her village. With humanitarian aid, she received shelter, clothing, and access to schooling again. She now enjoys learning and dreams of a brighter, safer future.",
    },
  ];

  const swiperRef = useRef(null);
  const swiperInstanceRef = useRef(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js";
    script.onload = () => initSwiper();
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const initSwiper = () => {
    if (!swiperRef.current || !window.Swiper) return;

    const swiper = new window.Swiper(swiperRef.current, {
      direction: "vertical",
      centeredSlides: true,
      slidesPerView: 1.55,
      spaceBetween: 18,
      loop: true,
      speed: 560,
      grabCursor: true,
      on: {
        slideChange(sw) {
          const idx = sw.realIndex;
          setActiveIdx(idx);
          setAnimKey((k) => k + 1);
        },
      },
    });

    swiperInstanceRef.current = swiper;
  };

  const goNext = () => swiperInstanceRef.current?.slideNext();
  const goPrev = () => swiperInstanceRef.current?.slidePrev();

  const story = stories[activeIdx];

  return (
    <>
      <div className="soh-root">
        <div className="soh-wrap">
          <div className="soh-body">
            {/* ── Left: Vertical Swiper ── */}
            <div className="soh-swiper-col">
              <div className="swiper soh-swiper" ref={swiperRef}>
                <div className="swiper-wrapper">
                  {stories.map((s) => (
                    <div className="swiper-slide" key={s.id}>
                      <img src={s.image} alt={s.name} />
                      <div className="slide-gradient" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Vertical dots */}
              <div className="soh-dots">
                {stories.map((_, i) => (
                  <div
                    key={i}
                    className={`soh-dot ${i === activeIdx ? "active" : ""}`}
                  />
                ))}
              </div>
            </div>

            {/* ── Right: Description ── */}
            <div className="soh-content">
              <div className="soh-content-inner" key={animKey}>
                <p className="soh-desc">{story.description}</p>

                <div className="soh-person">
                  <div className="soh-bar" />
                  <div className="soh-info">
                    <span className="soh-name">{story.name}</span>
                    <span className="soh-age">{story.age}</span>
                  </div>
                  <div className="soh-nav">
                    <button className="soh-btn" onClick={goPrev} aria-label="Previous">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="15 18 9 12 15 6" />
                      </svg>
                    </button>
                    <button className="soh-btn" onClick={goNext} aria-label="Next">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default StoriesHope