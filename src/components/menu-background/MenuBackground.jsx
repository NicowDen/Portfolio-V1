import mc from "./menu-background.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const MenuBackground = () => {
  const dispatch = useDispatch();

  const { firstBackground, secondBackground, thirdBackground, wHeight } =
    useSelector((store) => {
      return {
        firstBackground: store.backgroundPageReducer.firstBackground,
        secondBackground: store.backgroundPageReducer.secondBackground,
        thirdBackground: store.backgroundPageReducer.thirdBackground,
        wHeight: store.sizeReducer.wHeight,
      };
    });

  useEffect(() => {
    const timeout = setTimeout(() => {
      dispatch({ type: "BACKGROUND_ANIMATION" });
    }, 0);
    return () => clearTimeout(timeout);
  }, []);

  const openFirstBackground = () => {
    wHeight > 450
      ? dispatch({ type: "OPEN_FIRST_BACKGROUND" })
      : dispatch({ type: "OPEN_FIRST_BACKGROUND_LANDSCAPE" });
  };
  const openSecondBackground = () => {
    wHeight > 450
      ? dispatch({ type: "OPEN_SECOND_BACKGROUND" })
      : dispatch({ type: "OPEN_SECOND_BACKGROUND_LANDSCAPE" });
  };
  const openThirdBackground = () => {
    wHeight > 450
      ? dispatch({ type: "OPEN_THIRD_BACKGROUND" })
      : dispatch({ type: "OPEN_THIRD_BACKGROUND_LANDSCAPE" });
  };

  return (
    <div className={mc.main_container}>
      <div
        className={`${mc.sub_container} ${mc.sub_container_1}`}
        onClick={openFirstBackground}
        style={{
          "--move": `${firstBackground.move}`,
        }}
      >
        <div className={mc.title}>
          <h2>Développeur WEB</h2>
          <button
            className={firstBackground.open ? mc.arrow_reverse : mc.arrow}
          >
            <i className={"icon-arrow-ios-downward-outline"}></i>
          </button>
        </div>
        <div
          className={mc.sub_container_content}
          style={{
            "--height": `${firstBackground.height}`,
            "--move": `${firstBackground.move}`,
          }}
        >
          {firstBackground.open && (
            <>
              <h3>SUEZ</h3>
              <h3>MAI 2022</h3>
              <span>PMSMP</span>
            </>
          )}
        </div>
      </div>

      <div
        className={`${mc.sub_container} ${mc.sub_container_2}`}
        onClick={openSecondBackground}
        style={{
          "--move": `${secondBackground.move}`,
        }}
      >
        <div className={mc.title}>
          <h2>CONSEILLER COMMERCIAL EN TÉLÉPHONIE</h2>
          <button
            className={secondBackground.open ? mc.arrow_reverse : mc.arrow}
          >
            <i className={"icon-arrow-ios-downward-outline"}></i>
          </button>
        </div>
        <div
          className={mc.sub_container_content}
          style={{
            "--height": `${secondBackground.height}`,
            "--move": `${secondBackground.move}`,
          }}
        >
          {secondBackground.open && (
            <>
              <h3>Orange - SFR</h3>
              <h3>2010 - 2021</h3>
              <ul>
                <li>Accueil clientèle</li>
                <li>Analyse des besoins</li>
                <li>Propositions commerciales</li>
                <li>Atteinte d'objectifs mensuels</li>
                <li>Organisation de la surface</li>
              </ul>
            </>
          )}
        </div>
      </div>

      <div
        className={`${mc.sub_container} ${mc.sub_container_3}`}
        onClick={openThirdBackground}
        style={{
          "--move": `${thirdBackground.move}`,
        }}
      >
        <div className={mc.title}>
          <h2>TÉLÉCONSEILLER</h2>
          <button
            className={thirdBackground.open ? mc.arrow_reverse : mc.arrow}
          >
            <i className={"icon-arrow-ios-downward-outline"}></i>
          </button>
        </div>
        <div
          className={mc.sub_container_content}
          style={{
            "--height": `${thirdBackground.height}`,
            "--move": `${thirdBackground.move}`,
          }}
        >
          {thirdBackground.open && (
            <>
              <h3>Orange France</h3>
              <h3>2007 - 2009</h3>
              <ul>
                <li>Service commercial</li>
                <li>Service technique</li>
                <li>Service comptabilité</li>
                <li>Service contentieux</li>
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuBackground;
