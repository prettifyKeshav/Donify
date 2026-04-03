"use client";

import { useEffect, useRef, useState } from "react";

const StoriesHope = () => {

    // ─── Data ────────────────────────────────────────────────────
    const stories = [
        {
            id: 1,
            name: "Kamala",
            age: "68 years old",
            designation: "Flood Survivor",
            image:
                "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=500&h=650&fit=crop&crop=faces,top",
            description:
                "At 68, Kamala lost her small home when floods swept through her village overnight. The waters took her belongings, medicines, and life savings, leaving her without shelter. With relief support, she now has a temporary roof and essential supplies. She dreams of rebuilding her home and living her remaining years in peace and dignity.",
        },
        {
            id: 2,
            name: "Rajan",
            age: "45 years old",
            designation: "Earthquake Survivor",
            image:
                "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=500&h=650&fit=crop&crop=faces,top",
            description:
                "Rajan watched his workshop collapse in seconds during the earthquake. As the sole provider for three children, he feared the worst. Emergency support helped him rebuild his tools and livelihood. Today he employs two others from his community, turning personal loss into collective resilience.",
        },
        {
            id: 3,
            name: "Meena",
            age: "32 years old",
            designation: "Drought Relief Beneficiary",
            image:
                "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&h=650&fit=crop&crop=faces,top",
            description:
                "Three consecutive failed harvests left Meena's family with no income and mounting debt. Through agricultural aid and seed programs, she learned drought-resistant farming. Last season she harvested enough to feed her family and sell surplus at market, reclaiming independence and hope.",
        },
        {
            id: 4,
            name: "Arjun",
            age: "54 years old",
            designation: "Cyclone Survivor",
            image:
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=650&fit=crop&crop=faces,top",
            description:
                "When the cyclone made landfall, Arjun sheltered his entire neighborhood in his half-built concrete home. The structure held. Relief organizations later helped him complete the building, which now serves as a community emergency shelter — saving fourteen lives that night.",
        },
        {
            id: 5,
            name: "Lakshmi",
            age: "29 years old",
            designation: "Wildfire Relief Recipient",
            image:
                "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=500&h=650&fit=crop&crop=faces,top",
            description:
                "Lakshmi fled with her two toddlers as wildfires encircled her village. She lost everything but their lives. Aid workers provided shelter kits, nutrition support, and trauma counseling. She has since become a community volunteer, guiding other survivors through the relief process.",
        },
    ];


    // ─── Styles ──────────────────────────────────────────────────
    const css = `
//   @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=DM+Sans:wght@300;400;500&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --cream: #f4efe6;
    --ink: #1c1b18;
    --accent: #b86b3a;
    --accent-light: rgba(184,107,58,0.12);
    --muted: #7a7163;
    --white: #ffffff;
    --shadow: 0 32px 80px rgba(28,27,24,0.18);
  }

  .soh-root {
    min-height: 100vh;
    background: var(--cream);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 60px 40px;
    position: relative;
    overflow: hidden;
    font-family: 'DM Sans', sans-serif;
  }

  .soh-root::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      radial-gradient(ellipse 55% 55% at 10% 55%, rgba(184,107,58,0.09) 0%, transparent 65%),
      radial-gradient(ellipse 35% 45% at 85% 15%, rgba(28,27,24,0.04) 0%, transparent 65%);
    pointer-events: none;
  }

  .soh-wrap {
    width: 100%;
    max-width: 980px;
    position: relative;
    z-index: 1;
  }

  /* Header */
  .soh-header { margin-bottom: 56px; }
  .soh-tag {
    display: block;
    font-size: 10.5px;
    font-weight: 500;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--accent);
    margin-bottom: 10px;
  }
  .soh-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(38px, 5.5vw, 62px);
    font-weight: 400;
    color: var(--ink);
    line-height: 1.05;
    letter-spacing: -0.015em;
  }
  .soh-title span { color: var(--accent); }

  /* Body grid */
  .soh-body {
    display: grid;
    grid-template-columns: 280px 1fr;
    gap: 72px;
    align-items: center;
  }

  /* ── Left: Swiper ── */
  .soh-swiper-col { position: relative; }

  /* Swiper overrides */
  .soh-swiper {
    width: 220px !important;
    height: 460px !important;
    margin: 0 auto !important;
    overflow: visible !important;
  }

  .soh-swiper .swiper-slide {
    border-radius: 14px;
    overflow: hidden;
    transition: box-shadow 0.4s ease, opacity 0.4s ease !important;
    cursor: pointer;
  }

  .soh-swiper .swiper-slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top center;
    display: block;
    transition: transform 0.6s ease;
  }

  .soh-swiper .swiper-slide:hover img {
    transform: scale(1.04);
  }

  .soh-swiper .swiper-slide-active {
    box-shadow: var(--shadow), 0 0 0 2px var(--accent) !important;
    z-index: 10 !important;
  }

  .soh-swiper .swiper-slide:not(.swiper-slide-active) {
    opacity: 0.48;
  }

  .slide-gradient {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(28,27,24,0.6) 0%, rgba(28,27,24,0.05) 55%, transparent 100%);
    border-radius: 14px;
    pointer-events: none;
  }

  .slide-name {
    position: absolute;
    bottom: 14px;
    left: 16px;
    font-family: 'Cormorant Garamond', serif;
    font-size: 15px;
    font-style: italic;
    color: rgba(255,255,255,0.88);
    letter-spacing: 0.02em;
    z-index: 2;
  }

  /* Vertical dots */
  .soh-dots {
    position: absolute;
    right: -22px;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    gap: 7px;
    align-items: center;
  }

  .soh-dot {
    width: 4px;
    border-radius: 3px;
    background: rgba(28,27,24,0.18);
    transition: all 0.35s cubic-bezier(0.4,0,0.2,1);
    height: 5px;
  }

  .soh-dot.active {
    height: 20px;
    background: var(--accent);
  }

  /* ── Right: Content ── */
  .soh-content {
    display: flex;
    flex-direction: column;
  }

  .soh-quote-mark {
    font-family: 'Cormorant Garamond', serif;
    font-size: 110px;
    line-height: 0.45;
    color: rgba(184,107,58,0.15);
    margin-bottom: 18px;
    user-select: none;
  }

  .soh-desc {
    font-size: 15.5px;
    line-height: 1.88;
    color: rgba(28,27,24,0.68);
    margin-bottom: 40px;
    max-width: 430px;
    font-weight: 300;
  }

  /* Person row */
  .soh-person {
    display: flex;
    align-items: center;
    gap: 18px;
  }

  .soh-bar {
    width: 2.5px;
    height: 54px;
    background: linear-gradient(to bottom, var(--accent), rgba(184,107,58,0.15));
    border-radius: 2px;
    flex-shrink: 0;
  }

  .soh-info { display: flex; flex-direction: column; gap: 3px; }

  .soh-name {
    font-family: 'Cormorant Garamond', serif;
    font-size: 22px;
    font-weight: 500;
    color: var(--ink);
    letter-spacing: -0.01em;
  }

  .soh-age {
    font-size: 12px;
    color: var(--muted);
    letter-spacing: 0.04em;
  }

  .soh-desg {
    font-size: 10px;
    font-weight: 500;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--accent);
  }

  .soh-nav {
    margin-left: auto;
    display: flex;
    gap: 10px;
  }

  .soh-btn {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    border: 1.5px solid rgba(28,27,24,0.14);
    background: var(--white);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: var(--ink);
    transition: all 0.24s ease;
    box-shadow: 0 2px 10px rgba(28,27,24,0.07);
  }

  .soh-btn svg { width: 16px; height: 16px; }

  .soh-btn:hover {
    border-color: var(--accent);
    background: var(--accent);
    color: var(--white);
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(184,107,58,0.32);
  }

  .soh-btn:active { transform: translateY(0); }

  /* Content fade animation */
  @keyframes sohFadeIn {
    from { opacity: 0; transform: translateX(22px); }
    to   { opacity: 1; transform: translateX(0); }
  }

  .soh-content-inner {
    animation: sohFadeIn 0.46s cubic-bezier(0.4,0,0.2,1) both;
  }

  /* Responsive */
  @media (max-width: 720px) {
    .soh-body { grid-template-columns: 1fr; gap: 44px; }
    .soh-swiper { width: 180px !important; height: 380px !important; }
    .soh-swiper-col { display: flex; justify-content: center; }
    .soh-dots { right: -18px; }
  }
`;




    const swiperRef = useRef(null);
    const swiperInstanceRef = useRef(null);
    const [activeIdx, setActiveIdx] = useState(0);
    const [animKey, setAnimKey] = useState(0);

    useEffect(() => {
        // Inject CSS
        const style = document.createElement("style");
        style.textContent = css;
        document.head.appendChild(style);

        // Load Swiper from CDN
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css";
        document.head.appendChild(link);

        const script = document.createElement("script");
        script.src = "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js";
        script.onload = () => initSwiper();
        document.head.appendChild(script);

        return () => {
            document.head.removeChild(style);
            document.head.removeChild(link);
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
                    {/* Header */}
                    <div className="soh-header">
                        <span className="soh-tag">Human Stories</span>
                        <h2 className="soh-title">
                            Stories of Hope<span>.</span>
                        </h2>
                    </div>

                    <div className="soh-body">
                        {/* ── Left: Vertical Swiper ── */}
                        <div className="soh-swiper-col">
                            <div className="swiper soh-swiper" ref={swiperRef}>
                                <div className="swiper-wrapper">
                                    {stories.map((s) => (
                                        <div className="swiper-slide" key={s.id}>
                                            <img src={s.image} alt={s.name} />
                                            <div className="slide-gradient" />
                                            <span className="slide-name">{s.name}</span>
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
                                <div className="soh-quote-mark">"</div>
                                <p className="soh-desc">{story.description}</p>

                                <div className="soh-person">
                                    <div className="soh-bar" />
                                    <div className="soh-info">
                                        <span className="soh-name">{story.name}</span>
                                        <span className="soh-age">{story.age}</span>
                                        <span className="soh-desg">{story.designation}</span>
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