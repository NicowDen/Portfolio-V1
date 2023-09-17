import mc from "./home.module.scss";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//components//
import HomePageMenu from "../home-page-menu/HomePageMenu";
import MenuFormations from "../menu-formations/MenuFormations";
import MenuHome from "../menu-home/MenuHome";
import MenuBackground from "../menu-background/MenuBackground";
import MenuSkills from "../menu-skills/MenuSkills";
import MenuProjects from "../menu-projects/MenuProjects";
//utils//
import { setItem } from "../../utils/storage.utils";

const HomePage = () => {
  const dispatch = useDispatch();

  const {
    theme,
    pageOpen,
    presentationDecorationOpacity,
    mainBoxShadowOpacity,
    homeMenu,
    formationsMenu,
    backgroundMenu,
    skillsMenu,
    projectsMenu,
    burgerMenu,
    wWidth,
  } = useSelector((store) => {
    return {
      theme: store.themesReducer.theme,
      pageOpen: store.homePageReducer.pageOpen,
      presentationDecorationOpacity:
        store.homePageReducer.presentationDecorationOpacity,
      mainBoxShadowOpacity: store.homePageReducer.mainBoxShadowOpacity,
      homeMenu: store.switchMenuReducer.homeMenu,
      formationsMenu: store.switchMenuReducer.formationsMenu,
      backgroundMenu: store.switchMenuReducer.backgroundMenu,
      skillsMenu: store.switchMenuReducer.skillsMenu,
      projectsMenu: store.switchMenuReducer.projectsMenu,
      presentationArray: store.homePageReducer.presentationArray,
      burgerMenu: store.modificatorsReducer.burgerMenu,
      wWidth: store.sizeReducer.wWidth,
    };
  });

  useEffect(() => {
    dispatch({ type: "SWITCH_HOME_MENU" });
  }, []);

  useEffect(() => {
    if (wWidth > 1070) dispatch({ type: "CLOSE_BURGER" });
  }, []);

  useEffect(() => {
    if (!formationsMenu) dispatch({ type: "CLOSE_FORMATIONS" });
  }, [formationsMenu]);

  useEffect(() => {
    if (!backgroundMenu) dispatch({ type: "CLOSE_BACKGROUND" });
  }, [backgroundMenu]);

  //==PageOpen Animation==//
  useEffect(() => {
    const timeout = setTimeout(() => {
      dispatch({ type: "HOME_PAGE_OPEN_STATE" });
    }, 1300);
    //Ouverture à 1s3 pour correspondre avec l'animation du container dans le css//
    return () => clearTimeout(timeout);
  }, [pageOpen]);

  //==Main BoxShadow opacity increase animation==//
  useEffect(() => {
    if (pageOpen && mainBoxShadowOpacity <= 1) {
      const timeout = setTimeout(() => {
        dispatch({ type: "HOME_PAGE_MAIN_BOXSHADOW_COUNTER" });
      }, 200);
      return () => clearTimeout(timeout);
    }
  }, [pageOpen, mainBoxShadowOpacity]);

  const changeTheme = () => {
    switch (theme) {
      case "theme_1":
        document.body.className = "";
        document.body.classList.add("theme_2");
        dispatch({ type: "SET_THEME", payload: { theme: "theme_2" } });
        setItem("userTheme", "theme_2");
        break;
      case "theme_2":
        document.body.className = "";
        document.body.classList.add("theme_3");
        dispatch({ type: "SET_THEME", payload: { theme: "theme_3" } });
        setItem("userTheme", "theme_3");
        break;
      case "theme_3":
        document.body.className = "";
        document.body.classList.add("theme_1");
        dispatch({ type: "SET_THEME", payload: { theme: "theme_1" } });
        setItem("userTheme", "theme_1");
        break;
      default:
        document.body.className = "";
        document.body.classList.add("theme_1");
        dispatch({ type: "SET_THEME", payload: { theme: "theme_1" } });
        setItem("userTheme", "theme_1");
    }
  };

  const openHome = () => {
    dispatch({ type: "SWITCH_HOME_MENU" });
    dispatch({ type: "CLOSE_BURGER" });
  };

  const openCloseBuger = () => {
    dispatch({ type: "OPEN_CLOSE_BURGER" });
  };

  const onPageClick = (e) => {
    if (
      e.target.id !== "menu" &&
      !e.target.className.includes("home_bar") &&
      !e.target.className.includes("home_burger")
    ) {
      dispatch({ type: "CLOSE_BURGER" });
    }
  };

  return (
    <div className={mc.main_container} onClick={onPageClick}>
      <div
        style={{ "--welcome-decoration": `${presentationDecorationOpacity}%` }}
        className={mc.container}
      >
        <>
          {pageOpen && (
            <div onClick={changeTheme} className={mc.theme_container}>
              <div className={mc.theme}>
                <i className="icon-color-palette-outline"></i>
              </div>
            </div>
          )}

          {pageOpen && (
            <div
              onClick={openHome}
              className={homeMenu ? `${mc.home} ${mc.home_active}` : mc.home}
            >
              <i className="icon-home-outline"></i>
            </div>
          )}

          {pageOpen && (
            <div className={mc.contact}>
              <div className={mc.contact_sub_container}>
                <ul>
                  <li className={mc.mail}>
                    <a href="mailto:nicolas.j.grenier@gmail.com">
                      <i className={`icon-email-outline `}></i>
                    </a>
                  </li>
                  <li className={mc.linkedin}>
                    <a href="https://www.linkedin.com/in/nicolas-grenier-509874235">
                      <i className={`icon-linkedin-outline `}></i>
                    </a>
                  </li>
                  <li className={mc.github}>
                    <a href="https://github.com/NicowDen">
                      <i className={`icon-github-outline `}></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {wWidth <= 1070 && pageOpen && (
            <div
              onClick={openCloseBuger}
              className={
                burgerMenu
                  ? `${mc.burger_menu} ${mc.burger_menu_active}`
                  : mc.burger_menu
              }
            >
              <div
                className={
                  burgerMenu
                    ? `${mc.bar} ${mc.bar_1} ${mc.bar_1_active}`
                    : `${mc.bar} ${mc.bar_1}`
                }
              ></div>
              <div className={`${mc.bar} ${mc.bar_2}`}></div>
              <div
                className={
                  burgerMenu
                    ? `${mc.bar} ${mc.bar_3} ${mc.bar_3_active}`
                    : `${mc.bar} ${mc.bar_3}`
                }
              ></div>
            </div>
          )}
        </>

        <div
          style={{
            "--main-box-animation": `${mainBoxShadowOpacity}`,
          }}
          className={mc.sub_container}
        >
          {pageOpen && (
            <>
              {homeMenu && (
                <div className={mc.main}>
                  <MenuHome />
                </div>
              )}

              {formationsMenu && (
                <div className={mc.main}>
                  <MenuFormations />
                </div>
              )}

              {backgroundMenu && (
                <div className={mc.main}>
                  <MenuBackground />
                </div>
              )}

              {skillsMenu && (
                <div className={mc.main}>
                  <MenuSkills />
                </div>
              )}

              {projectsMenu && (
                <div className={mc.main}>
                  <MenuProjects />
                </div>
              )}

              <nav className={mc.menu} id="menu">
                <HomePageMenu
                  formationsMenu={formationsMenu}
                  backgroundMenu={backgroundMenu}
                  skillsMenu={skillsMenu}
                  projectsMenu={projectsMenu}
                />
              </nav>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
