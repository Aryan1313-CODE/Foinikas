import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import Home from "../Home/Home";
import Wealth from "../Wealth/Wealth";
import Partners from "../Partners/Partners";
import OurFeatures from "../OurFeatures/OurFeatures";
import Finances from "../Finances/Finances";
import LandingCTA from "../CTASection/LandingCTA";
import Tablet from "../../assets/tablet7.png";
import Support from "../Support/Support";
import FeaturesLeftSlide from "../Support/FeaturesLeftSlide";
import Bg1 from '../../assets/bg1.jpg';
gsap.registerPlugin(ScrollTrigger);

const Landing = () => {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  useEffect(() => {
    // Initial state
    gsap.set(".target", {
      x: -0.25 * screenWidth,
      y: 0,
      rotate: 0,
      rotateZ: 0,
      xPercent: 0,
      bottom: -350,
      top: "auto",
      opacity: 0,
    });

    // Home Section Animation
    gsap.timeline({
      scrollTrigger: {
        trigger: ".home-section",
        start: "35% center",
        end: "60% center",
        scrub: true,
        markers: false,
      },
    }).to(".target", {
      opacity: 1,
      y: -0.1 * screenHeight,
      duration: 1,
      ease: "power1.out",
    });

    // Wealth Section Animation
    gsap.timeline({
      scrollTrigger: {
        trigger: ".wealth-section",
        start: "-80% center",
        end: "-30% 50%",
        scrub: true,
        markers: false,
      },
    }).to(".target", {
      x: -0.25 * screenWidth,
      y: -0.78 * screenHeight,
      scale: 0.85,
      rotateZ: 80,
      duration: 1,
      ease: "none",
      opacity: 1,
    });

    // Finances Section Animation
    gsap.timeline({
      scrollTrigger: {
        trigger: ".finances-section",
        start: "-30% center",
        end: "30% 100%",
        scrub: true,
        markers: false,
      },
    }).to(".target", {
      x: -0.25 * screenWidth,
      y: -0.54 * screenHeight,
      rotate: 0,
      scaleX: 1.1,
      scaleY: 1,
      duration: 6,
      ease: "none",
      zIndex: 0,
      opacity: 1,
    });

    // Features Section Animation
    gsap.timeline({
      scrollTrigger: {
        trigger: ".features-section",
        start: "-20% center",
        end: "5% 100%",
        scrub: true,
        markers: false,
      },
    }).to(".target", {
      scale: 0.5,
      duration: 26,
      ease: "none",
      opacity: 0,
    });

    // Support Section Animation
    gsap.timeline({
      scrollTrigger: {
        trigger: ".support-section",
        start: "-17% center",
        end: "80% 100%",
        scrub: true,
        markers: false,
      },
    }).to(".target", {
      x: -1575,
      y: -325,
      rotate: 90,
      scale: 0.75,
      duration: 6,
      ease: "none",
      zIndex: 0,
      opacity: 0,
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="w-full flex justify-center items-center flex-col relative">
      <div className="home-section w-full">
        <Home />
      </div>

      <div className="wealth-section w-full">
        <Wealth />
      </div>

      <div className="finances-section w-full">
        <Finances />
      </div>

      <div className="features-section w-full">
        <OurFeatures />
      </div>

      <div className="left-slide w-full md:flex hidden">
        <FeaturesLeftSlide />
      </div>

      <div className="partners-section w-full">
        <Partners />
      </div>

      <div className="support-section w-full">
        <Support />
      </div>

      {/* Optional CTA */}
      {/* 
      <div className="cta-section w-full">
        <LandingCTA />
      </div> 
      */}
      {/* ✅ FINAL DISCLAIMER SECTION — FULL HEIGHT, NO CLIPPING */}
<section
  className="
    w-full
    bg-cover bg-center bg-no-repeat
    px-4 sm:px-6 md:px-10 lg:px-16
    py-20
    relative
  "
  style={{ backgroundImage: `url(${Bg1})` }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/60"></div>

  {/* Content wrapper — NO HEIGHT LIMITS */}
  <div className="relative z-10 max-w-7xl mx-auto
 mx-auto">
    <div className="
      bg-white/90
      backdrop-blur-md
      rounded-2xl
      p-8 md:p-12
      text-gray-800
      leading-relaxed
      space-y-4
    ">
      <h2 className="text-2xl font-semibold text-[#7b1e1e] mb-6">
        Legal Disclaimer & Important Notices
      </h2>

      <p>
        Foinikas Wealth Management provides the information on this website for
        general informational purposes only. By accessing this website, you agree
        to be bound by the terms and conditions set forth below.
      </p>

      <h3 className="font-semibold">1. No Investment Advice</h3>
      <p>
        The information, analyses, opinions, and recommendations contained on
        this website do not constitute investment advice, a recommendation, an
        offer, or a solicitation to buy or sell any financial instruments. Past
        performance is not indicative of future results. Any investment decision
        should be based solely on your own independent assessment of your
        financial situation, investment objectives, risk tolerance, and
        consultation with your independent professional advisors.
      </p>

      <h3 className="font-semibold">2. Performance Disclosures</h3>
      <p>
        All performance figures – whether actual, simulated, or back-tested –
        are provided for illustrative purposes only and do not represent the
        performance of any specific client account. Back-tested and simulated
        performance has inherent limitations:
      </p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Calculated with hindsight benefit</li>
        <li>
          Does not reflect actual trading costs, liquidity constraints, or market
          impact
        </li>
        <li>
          Would be lower if management fees, transaction costs, custody fees, and
          other expenses were deducted
        </li>
        <li>No guarantee that similar results can be achieved in the future</li>
      </ul>

      <p>
        Past performance is not a reliable indicator of future results. The value
        of investments may go down as well as up, and you may not recover your
        original investment.
      </p>

      <h3 className="font-semibold">3. Risk Warning</h3>
      <ul className="list-disc pl-6 space-y-1">
        <li>Capital loss</li>
        <li>Market volatility</li>
        <li>Currency exchange risk</li>
        <li>Interest rate risk</li>
        <li>Credit risk</li>
        <li>Liquidity risk</li>
        <li>Counterparty risk</li>
        <li>Regulatory and political risk</li>
      </ul>

      <p>
        Different investments carry different levels of risk, and investors
        should be aware they could lose some or all of their investment.
      </p>

      <h3 className="font-semibold">4. Hypothetical & Model Performance</h3>
      <ul className="list-disc pl-6 space-y-1">
        <li>Ignore the effects of taxes, fees, and transaction costs</li>
        <li>May assume unrealistic liquidity or execution conditions</li>
        <li>Are constructed with the benefit of hindsight</li>
        <li>Cannot account for investor behavioral biases or timing</li>
      </ul>

      <h3 className="font-semibold">5. Third-Party Information</h3>
      <p>
        Any third-party content, links, or references do not constitute
        endorsement or recommendation. Foinikas Wealth Management accepts no
        responsibility for the accuracy, completeness, or suitability of
        external information.
      </p>

      <h3 className="font-semibold">6. Forward-Looking Statements</h3>
      <p>
        Statements regarding future performance, market trends, economic
        conditions, or investment outcomes are forward-looking and subject to
        uncertainty. Actual results may differ materially due to market
        conditions, regulatory changes, and other factors.
      </p>

      <h3 className="font-semibold">7. Regulatory Compliance</h3>
      <p>
        Foinikas Wealth Management Ltd is licenced by the Malta Financial Services
        Authority (“MFSA”) in terms of the Investment Services Act (Chapter 370 of
        the Laws of Malta). This website is not intended for persons in
        jurisdictions where such distribution is restricted.
      </p>

      <h3 className="font-semibold">8. No Guarantee of Accuracy</h3>
      <p>
        While we strive for accuracy, Foinikas Wealth Management does not
        guarantee the timeliness, correctness, or completeness of information on
        this website. All content is subject to change without notice.
      </p>

      <h3 className="font-semibold">9. No Liability</h3>
      <p>
        To the maximum extent permitted by law, Foinikas Wealth Management, its
        affiliates, directors, officers, and employees shall not be liable for
        any direct, indirect, incidental, consequential, or special damages
        arising from use of this website or reliance on its content.
      </p>

      <h3 className="font-semibold">10. Copyright & Intellectual Property</h3>
      <p>
        All content is proprietary to Foinikas Wealth Management. Reproduction,
        distribution, or use without prior written consent is prohibited.
      </p>

      <div className="text-xs text-gray-600 pt-6 border-t">
        Last Updated: January 27, 2026<br />
        Contact: compliance@foinikaswealth.com
      </div>
    </div>
  </div>
</section>

      {/* Animated Tablet */}
      <div
        style={{ mixBlendMode: "normal" }}
        className="target fixed top-0 w-[400px] h-[500px] z-50 hidden md:flex justify-center items-center"
      >
        <img
          src={Tablet}
          alt="Tablet"
          className="object-cover w-full h-full rounded-[18px]"
          style={{ filter: "drop-shadow(5px 5px 25px #000)" }}
        />
      </div>
    </div>
  );
};

export default Landing;
