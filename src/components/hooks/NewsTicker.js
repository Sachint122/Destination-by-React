import React, { useState, useEffect, useRef } from "react";
import GradientText from "./GradientText";
import "../hooks/Style/NewsTicker.css";

const NewsTicker = () => {
  const [newsItems, setNewsItems] = useState([]);
  const newsRef = useRef(null);

  useEffect(() => {
    fetch("/news.txt")
      .then((response) => response.text())
      .then((text) => {
        const newsArray = text.split("\n").filter((line) => line.trim() !== "");
        setNewsItems(newsArray);
      })
      .catch((error) => console.error("Error loading news:", error));
  }, []);

  useEffect(() => {
    if (newsRef.current && newsItems.length > 0) {
      const ticker = newsRef.current;
      let animation = ticker.animate(
        [{ transform: "translateX(100%)" }, { transform: "translateX(-100%)" }],
        { duration: 25000, iterations: Infinity, easing: "linear" }
      );

      ticker.addEventListener("mouseenter", () => animation.pause());
      ticker.addEventListener("mouseleave", () => animation.play());

      return () => animation.cancel();
    }
  }, [newsItems]);

  return (
    <div className="news-ticker">
      <div className="news-content" ref={newsRef}>
        <div className="news-items-container">
          {newsItems.map((news, index) => (
            <GradientText
              key={index}
              colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
              animationSpeed={3}
              showBorder={false}
              className="news-item"
            >
              {news} &nbsp; | &nbsp;
            </GradientText>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsTicker;
