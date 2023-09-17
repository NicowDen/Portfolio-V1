import mc from "./menu-projects.module.scss";
import geekVerse from "../../images/geek_verse_screen.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MenuProjects = () => {
  return (
    <div className={mc.container}>
      <div className={mc.project}>
        <h3>Geek Verse</h3>
        <a href="https://www.youtube.com/watch?v=K0Yc2kAU5OU" target="_blank">
          <div className={`${mc.image} adaptive-img-contain`}>
            <span>
              <img
                crossOrigin="anonymous"
                src={geekVerse}
                alt="Image du site Geek Verse"
              />
            </span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default MenuProjects;
