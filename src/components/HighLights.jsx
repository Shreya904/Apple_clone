// import { useGSAP } from "@gsap/react";
// import React from "react";
// import gsap from "gsap";
import { rightImg, watchImg } from "../utils";
import VideoCarousel from "./VideoCarousel";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HighLights = () => {
  useEffect(() => {
    // GSAP animation for #title
    gsap.fromTo(
      "#title",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: "#title",
          start: "top 80%", // Adjust this to control when the animation starts
          end: "bottom top",
          toggleActions: "play none none reverse", // Play the animation when entering, and reverse when exiting
        },
      }
    );

    // GSAP animation for .link elements
    gsap.fromTo(
      ".link",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.25,
        scrollTrigger: {
          trigger: ".link",
          start: "top 80%", // Adjust this to control when the animation starts
          end: "bottom top",
          toggleActions: "play none none reverse", // Play the animation when entering, and reverse when exiting
        },
      }
    );
  }, []);

  return (
    <section
      id="highlights"
      className="w-screen overflow-hidden h-full common-padding bg-zinc"
    >
      <div className="screen-max-width">
        <div className="mb-12 w-full md:flex items-end justify-between">
          <h1 id="title" className="section-heading">
            Get the highlights.
          </h1>
          <div className="flex flex-wrap items-end gap-5">
            <p className="link">
              Watch the film
              <img src={watchImg} alt="watch" className="ml-2" />
            </p>
            <p className="link">
              Watch the event
              <img src={rightImg} alt="right" className="ml-2" />
            </p>
          </div>
        </div>
        <VideoCarousel />
      </div>
    </section>
  );
};

export default HighLights;
