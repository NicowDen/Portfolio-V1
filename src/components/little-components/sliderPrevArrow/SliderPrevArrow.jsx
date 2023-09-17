import mc from "./slider-prev-arrow.module.scss";

const SliderPrevArrow = ({ onClick }) => {
  return (
    <i
      onClick={onClick}
      className={`${mc.prev_arrow} icon-arrow-ios-back-outline`}
    ></i>
  );
};

export default SliderPrevArrow;
