import mc from "./home-page-logos.module.scss";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
//components//
import jsSvg from "../../images/js.svg";
import reactSvg from "../../images/react.svg";
import htmlSvg from "../../images/html.svg";
import cssSvg from "../../images/css.svg";
import nodeSvg from "../../images/node.svg";
//components//

const HomePageLogos = () => {
  const dispatch = useDispatch();
  const logos = [htmlSvg, cssSvg, jsSvg, reactSvg, nodeSvg];

  const { welcomeMessageInPosition, logosPopCounter, logosArray } = useSelector(
    (store) => {
      return {
        welcomeMessageInPosition:
          store.homePageReducer.welcomeMessageInPosition,
        logosPopCounter: store.homePageReducer.logosPopCounter,
        logosArray: store.homePageReducer.logosArray,
      };
    }
  );

  //==Presentation text Animation==/
  useEffect(() => {
    if (welcomeMessageInPosition && logosPopCounter < logos.length) {
      const interval = setInterval(() => {
        dispatch({ type: "HOME_PAGE_INCREASE_LOGOS_COUNTER" });
        dispatch({
          type: "HOME_PAGE_INCREASE_LOGOS_ARRAY",
          payload: { counter: logosPopCounter, array: logos },
        });
      }, 500);
      return () => clearInterval(interval);
    }
  }, [logosPopCounter, logosArray, welcomeMessageInPosition]);

  return (
    <ul className={mc.logos}>
      {logosArray.map((el, i) => (
        <li key={i} className={`${mc.image} adaptive-img-contain`}>
          <span>
            <img crossOrigin="anonymous" src={el} alt="Logo Javascript" />
          </span>
        </li>
      ))}
    </ul>
  );
};

export default HomePageLogos;
