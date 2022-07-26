import React, { useEffect, useState } from "react";
import "../../assets/herobanner.css";

const HeroBanner = () => {
  const [index, setIndex] = useState(0);
  const [vowels] = useState(["a", "e", "i", "o"]);
  const [headers] = useState([
    "software",
    "automation",
    "react",
    "uipath",
    "python",
    "aws",
  ]);
  const [title, setTitle] = useState(headers[index]);
  const [titlePrefix, setTitlePrefix] = useState("");

  useEffect(() => {
    setTitle(headers[index]);

    const interval = setInterval(() => {
      setIndex(index + 1);
      if (index === headers.length - 1) {
        setIndex(0);
      }
      setTitle(headers[index]);
    }, 3000);

    if (vowels.includes(title.substring(0, 1))) {
      setTitlePrefix("n");
    } else {
      setTitlePrefix("");
    }
    return () => clearInterval(interval);
  });

  return (
    <div className="container">
      <div id="home" className="heroBannerContainer">
        <div className="verticalLine"></div>
        <div className="centralContainer">
          <div className="horizontalLineTop"></div>
          <div className="headerTextContainer">
            <h1>
              a
              <span key={titlePrefix} className="cyclingTextPrefix">
                {titlePrefix}
              </span>
              <br></br>
              <span key={title} className="cyclingText">
                {title}
              </span>
              <br></br> enthusiast
            </h1>
          </div>
          <div className="horizontalLineBottom"></div>
        </div>
        <div className="verticalLine"></div>
      </div>
    </div>
  );
};

export default HeroBanner;
