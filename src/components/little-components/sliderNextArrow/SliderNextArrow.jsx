import mc from "./slider-next-arrow.module.scss";

const SliderNextArrow = ({ onClick }) => {
  return (
    <i
      onClick={onClick}
      className={`${mc.next_arrow} icon-arrow-ios-forward-outline`}
    ></i>
  );
};

export default SliderNextArrow;
