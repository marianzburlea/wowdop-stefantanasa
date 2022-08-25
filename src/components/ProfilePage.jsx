import React, { useRef, useState } from "react";
import Navbar from "./Navbar";

export const ProfilePage = ({ profile }) => {
  let [showText, setShowText] = useState(false);
  console.log(profile.profile_pic);

  let descriptionParagraph = useRef();
  let readMore = () => {
    if (showText) {
      descriptionParagraph.current.style.height = "5rem";
      setShowText(!showText);
    } else {
      descriptionParagraph.current.style.height = "auto";
      setShowText(!showText);
    }
  };
  // console.log((descriptionParagraph.current.style.backgroundColor = "blue"));
  return (
    <section className="profile">
      <Navbar />
      <div className="profile-image">
        <img src={profile.profile_pic} alt="" />
      </div>
      <h1>{profile.position}</h1>
      <h2>£{profile.current_salary}/year</h2>
      <div className="description">
        <p ref={descriptionParagraph}>{profile.description}</p>
        {showText ? (
          <button onClick={readMore}>Read more</button>
        ) : (
          <button onClick={readMore}>I read all</button>
        )}
      </div>
      <div className="socials">
        <p>Contact me</p>
        <div className="social-icons-group">
          <a href={profile.facebook}>
            <i class="bi bi-facebook"></i>
          </a>
          <a href={profile.facebook}>
            <i class="bi bi-linkedin"></i>
          </a>
        </div>
      </div>
    </section>
  );
};
