import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import FeelingProud from "./FeelingProud";

export default function Greeting(props) {
  const theme = props.theme;
  return (
    <div className="greet-wrapper">
      {/* Top Left Organic Pastel Wave */}
      <svg
        className="wave-blob wave-top-left"
        viewBox="0 0 520 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M-50 -50 H380 C330 90 230 150 140 190 C60 225 -10 250 -50 290 Z"
          fill="#EAE5FF"
          fillOpacity="0.6"
        />
        <path
          d="M-50 -50 H270 C230 65 170 115 95 150 C40 175 -10 195 -50 215 Z"
          fill="#DCD5FF"
          fillOpacity="0.75"
        />
        <path
          d="M-50 -50 H180 C145 40 105 80 50 110 C10 125 -20 140 -50 150 Z"
          fill="#D0C6FF"
          fillOpacity="0.6"
        />
      </svg>

      {/* Bottom Right Organic Pastel Wave */}
      <svg
        className="wave-blob wave-bottom-right"
        viewBox="0 0 580 480"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M620 520 V160 C490 200 410 290 320 350 C240 400 170 430 90 520 Z"
          fill="#E0E9FF"
          fillOpacity="0.6"
        />
        <path
          d="M620 520 V240 C520 270 450 340 380 390 C310 440 260 470 200 520 Z"
          fill="#DCD5FF"
          fillOpacity="0.75"
        />
        <path
          d="M620 520 V320 C540 350 490 410 430 450 C380 480 350 500 300 520 Z"
          fill="#C8D8FF"
          fillOpacity="0.85"
        />
      </svg>

      {/* Gentle Light-Blue Gradient Glow behind the developer illustration */}
      <div className="hero-illustration-glow" aria-hidden="true"></div>

      <Fade bottom duration={2000} distance="40px">
        <div className="greet-main" id="greeting">
          <div className="greeting-main">
            <div className="greeting-text-div">
              <div>
                <h1 className="greeting-text" style={{ color: theme.text }}>
                  {greeting.title}
                </h1>
                {greeting.nickname && (
                  <h2 className="greeting-nickname" style={{ color: theme.text }}>
                    ( {greeting.nickname} )
                  </h2>
                )}
                <p
                  className="greeting-text-p subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {greeting.subTitle}
                </p>
                <SocialMedia theme={theme} />
                <div className="portfolio-repo-btn-div">
                  <Button
                    text="⭐ Star Me On Github"
                    newTab={true}
                    href={greeting.portfolio_repository}
                    theme={theme}
                    className="portfolio-repo-btn"
                  />
                </div>
              </div>
            </div>
            <div className="greeting-image-div">
              <FeelingProud theme={theme} />
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}
