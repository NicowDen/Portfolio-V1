import mc from "./home-page-menu.module.scss";
import { useDispatch, useSelector } from "react-redux";
//components//
import HomeMenuButton from "../little-components/buttons/HomeMenuButton";
//components//

const HomePageMenu = ({
  formationsMenu,
  backgroundMenu,
  skillsMenu,
  projectsMenu,
}) => {
  const dispatch = useDispatch();

  const { burgerMenu, wWidth } = useSelector((store) => {
    return {
      burgerMenu: store.modificatorsReducer.burgerMenu,
      wWidth: store.sizeReducer.wWidth,
    };
  });

  const openFormations = () => {
    dispatch({ type: "SWITCH_FORMATIONS_MENU" });
    dispatch({ type: "CLOSE_BURGER" });
  };
  const openBackground = () => {
    dispatch({ type: "SWITCH_BACKGROUND_MENU" });
    dispatch({ type: "CLOSE_BURGER" });
  };
  const openSkills = () => {
    dispatch({ type: "SWITCH_SKILLS_MENU" });
    dispatch({ type: "CLOSE_BURGER" });
  };
  const openProjects = () => {
    dispatch({ type: "SWITCH_PROJECTS_MENU" });
    dispatch({ type: "CLOSE_BURGER" });
  };

  return (
    <div
      className={
        wWidth > 1070
          ? mc.container
          : wWidth <= 1070 && burgerMenu
          ? `${mc.container}`
          : mc.container_inactive
      }
    >
      <div className={mc.sub_container}>
        <div className={mc.buttons_sub_container}>
          <div className={mc.buttons_container}>
            <HomeMenuButton
              children="Formations"
              onButtonClick={openFormations}
              buttonActive={formationsMenu}
            />
            <HomeMenuButton
              children="Parcours"
              onButtonClick={openBackground}
              buttonActive={backgroundMenu}
            />
            <HomeMenuButton
              children="Soft skills"
              onButtonClick={openSkills}
              buttonActive={skillsMenu}
            />
            <HomeMenuButton
              children="Projects"
              onButtonClick={openProjects}
              buttonActive={projectsMenu}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageMenu;
