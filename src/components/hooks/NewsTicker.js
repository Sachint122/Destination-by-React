import React, { useState, useEffect, useRef } from "react";
import "../hooks/Style/NewsTicker.css";
const NewsTicker = () => {
  const [newsItems, setNewsItems] = useState([]);
  const newsRef = useRef(null);

  useEffect(() => {
    // Fetch text file data
    fetch("/news.txt")
      .then(response => response.text())
      .then(text => {
        const newsArray = text.split("\n").filter(line => line.trim() !== ""); // Split by line & remove empty lines
        setNewsItems(newsArray);
      })
      .catch(error => console.error("Error loading news:", error));
  }, []);

  useEffect(() => {
    if (newsRef.current && newsItems.length > 0) {
      const ticker = newsRef.current;
      let animation = ticker.animate(
        [{ transform: "translateX(100%)" }, { transform: "translateX(-100%)" }],
        { duration: 25000, iterations: Infinity, easing: "linear" }
      );

      // Pause animation on hover
      ticker.addEventListener("mouseenter", () => animation.pause());
      ticker.addEventListener("mouseleave", () => animation.play());

      return () => animation.cancel();
    }
  }, [newsItems]);

  return (
    <div className="news-ticker">
      <div className="news-content" ref={newsRef}>
        {newsItems.map((news, index) => (
          <span key={index} className="news-item">
            {news} &nbsp; | &nbsp;
          </span>
        ))}
      </div>
    </div>
  );
};

export default NewsTicker;
