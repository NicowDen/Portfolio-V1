import mc from "./menu-home.module.scss";
import { useSelector } from "react-redux";
//components//
import HomePageLogos from "../home-page-logos/HomePageLogos";
//components//

const MenuHome = () => {
  const { pageOpen, presentationArray } = useSelector((store) => {
    return {
      pageOpen: store.homePageReducer.pageOpen,
      presentationArray: store.homePageReducer.presentationArray,
    };
  });

  return (
    pageOpen && (
      <div className={mc.welcome_container}>
        <div className={mc.welcome}>
          <h2>Bienvenue</h2>
          <div className={mc.welcome_presentation}>
            <div>
              {presentationArray.map((el, i) => (
                <span key={i}>{el}</span>
              ))}
            </div>
          </div>
        </div>

        <div className={mc.logos}>
          <HomePageLogos />
        </div>
      </div>
    )
  );
};

export default MenuHome;
