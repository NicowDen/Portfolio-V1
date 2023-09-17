import mc from "./menu-skills.module.scss";
import { skills } from "../../constants/skills";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from "react-redux";
//components//
import SliderPrevArrow from "../little-components/sliderPrevArrow/SliderPrevArrow";
import SliderNextArrow from "../little-components/sliderNextArrow/SliderNextArrow";

const MenuSkills = () => {
  const { wWidth } = useSelector((store) => store.sizeReducer);

  const settings = {
    prevArrow: <SliderPrevArrow />,
    nextArrow: <SliderNextArrow />,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: wWidth > 800 ? 2 : 1,
    slidesToScroll: 1,
    draggable: true,
  };

  return (
    <div className={mc.container}>
      <Slider className={mc.slider} {...settings}>
        {skills.map((el, i) => (
          <div className={`${mc.skill_container}`} key={i}>
            <i className={el.icon}></i>
            <span>{el.skill}</span>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MenuSkills;
