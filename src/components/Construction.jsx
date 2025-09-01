import "./Construction.css";
import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function UnderConstruction() {
  return (
    <div className="construction-wrapper">
      <div className="content">
        <h1 className="title">🚧 Page Under Construction 🚧</h1>

        
        <DotLottieReact
          src="https://lottie.host/8d6cae31-0601-40a2-93d4-c76009b5fd20/t4beGi1QV8.lottie"
          loop
          autoplay
        />

        <p className="subtitle">
          I'm working hard to craft something amazing. Stay tuned!
        </p>

        <div className="links">
          <a href="mailto:vs.uusitalo@gmail.com" className="btn btn-secondary">
            Contact Me
          </a>
          <a
            href="https://www.linkedin.com/in/santeri-uusitalo/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            LinkedIn
          </a>
        </div>

        <footer className="footer">© 2025 Santeri Uusitalo</footer>
      </div>
    </div>
  );
}
