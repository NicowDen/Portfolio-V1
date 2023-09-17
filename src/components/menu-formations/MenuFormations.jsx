import mc from "./menu-formations.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const MenuFormations = () => {
  const dispatch = useDispatch();

  const { firstFormation, secondFormation, thirdFormation, wHeight } =
    useSelector((store) => {
      return {
        firstFormation: store.formationsPageReducer.firstFormation,
        secondFormation: store.formationsPageReducer.secondFormation,
        thirdFormation: store.formationsPageReducer.thirdFormation,
        wHeight: store.sizeReducer.wHeight,
      };
    });

  useEffect(() => {
    const timeout = setTimeout(() => {
      dispatch({ type: "FORMATIONS_ANIMATION" });
    }, 0);
    return () => clearTimeout(timeout);
  }, []);

  const openFirstFormation = () => {
    wHeight > 450
      ? dispatch({ type: "OPEN_FIRST_FORMATION" })
      : dispatch({ type: "OPEN_FIRST_FORMATION_LANDSCAPE" });
  };
  const openSecondFormation = () => {
    wHeight > 450
      ? dispatch({ type: "OPEN_SECOND_FORMATION" })
      : dispatch({ type: "OPEN_SECOND_FORMATION_LANDSCAPE" });
  };
  const openThirdFormation = () => {
    wHeight > 450
      ? dispatch({ type: "OPEN_THIRD_FORMATION" })
      : dispatch({ type: "OPEN_THIRD_FORMATION_LANDSCAPE" });
  };

  return (
    <div className={mc.main_container}>
      <div
        className={`${mc.sub_container} ${mc.sub_container_1}`}
        onClick={openFirstFormation}
        style={{
          "--move": `${firstFormation.move}`,
        }}
      >
        <div className={mc.title}>
          <h2>Développeur intégrateur web mobile</h2>
          <button className={firstFormation.open ? mc.arrow_reverse : mc.arrow}>
            <i className={"icon-arrow-ios-downward-outline"}></i>
          </button>
        </div>
        <div
          className={mc.sub_container_content}
          style={{
            "--height": `${firstFormation.height}`,
            "--move": `${firstFormation.move}`,
          }}
        >
          {firstFormation.open && (
            <>
              <h3>3W ACADEMY</h3>
              <h3>2022-2023</h3>
              <span className={mc.diploma}>Diplômé en 2023</span>
              <ul>
                <li>HTML / CSS</li>
                <li>Javascript</li>
                <li>React</li>
                <li>Node JS</li>
                <li>No Sql</li>
              </ul>
            </>
          )}
        </div>
      </div>

      <div
        className={`${mc.sub_container} ${mc.sub_container_2}`}
        onClick={openSecondFormation}
        style={{
          "--move": `${secondFormation.move}`,
        }}
      >
        <div className={mc.title}>
          <h2>BTS MUC</h2>
          <button
            className={secondFormation.open ? mc.arrow_reverse : mc.arrow}
          >
            <i className={"icon-arrow-ios-downward-outline"}></i>
          </button>
        </div>
        <div
          className={mc.sub_container_content}
          style={{
            "--height": `${secondFormation.height}`,
            "--move": `${secondFormation.move}`,
          }}
        >
          {secondFormation.open && (
            <>
              <h3>ICFA BORDEAUX</h3>
              <h3>2007 - 2009</h3>
              <span className={mc.diploma}>Diplômé en 2009</span>
            </>
          )}
        </div>
      </div>

      <div
        className={`${mc.sub_container} ${mc.sub_container_3}`}
        onClick={openThirdFormation}
        style={{
          "--move": `${thirdFormation.move}`,
        }}
      >
        <div className={mc.title}>
          <h2>Baccalauréat STT</h2>
          <button className={thirdFormation.open ? mc.arrow_reverse : mc.arrow}>
            <i className={"icon-arrow-ios-downward-outline"}></i>
          </button>
        </div>
        <div
          className={mc.sub_container_content}
          style={{
            "--height": `${thirdFormation.height}`,
            "--move": `${thirdFormation.move}`,
          }}
        >
          {thirdFormation.open && (
            <>
              <h3>LYCÉE VICTOR LOUIS</h3>
              <span className={mc.diploma}>Diplômé en 2006</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuFormations;
