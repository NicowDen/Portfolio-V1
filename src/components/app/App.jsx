import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { welcome } from "../../constants/texts-languages";
//components//
import Home from "../home/Home";
//utils//
import { getItem } from "../../utils/storage.utils";

const App = () => {
  const dispatch = useDispatch();

  const {
    presentationPopCounter,
    welcomeMessageInPosition,
    presentationArray,
    presentationDecorationOpacity,
    pageOpen,
  } = useSelector((store) => {
    return {
      presentationPopCounter: store.homePageReducer.presentationPopCounter,
      welcomeMessageInPosition: store.homePageReducer.welcomeMessageInPosition,
      presentationArray: store.homePageReducer.presentationArray,
      presentationDecorationOpacity:
        store.homePageReducer.presentationDecorationOpacity,
      pageOpen: store.homePageReducer.pageOpen,
    };
  });

  //==Get Theme==//
  useEffect(() => {
    const actualTheme = getItem("userTheme");
    if (actualTheme) {
      document.body.className = "";
      document.body.classList.add(actualTheme);
      dispatch({ type: "SET_THEME", payload: { theme: actualTheme } });
    } else {
      document.body.className = "";
      document.body.classList.add("theme_1");
      dispatch({ type: "SET_THEME", payload: { theme: "theme_1" } });
    }
  }, []);

  //==Presentation text Animation==/
  useEffect(() => {
    if (
      welcomeMessageInPosition &&
      presentationPopCounter <= welcome.french.length
    ) {
      const interval = setInterval(() => {
        dispatch({ type: "HOME_PAGE_INCREASE_PRESENTATION_COUNTER" });
        dispatch({
          type: "HOME_PAGE_INCREASE_PRESENTATION_ARRAY",
          payload: { counter: presentationPopCounter, array: welcome.french },
        });
      }, 10);
      return () => clearInterval(interval);
    }
  }, [presentationPopCounter, presentationArray, welcomeMessageInPosition]);

  //==Presentation text decoration Animation==/
  useEffect(() => {
    if (
      presentationPopCounter >= welcome.french.length &&
      presentationDecorationOpacity < 100
    ) {
      const interval = setInterval(() => {
        dispatch({
          type: "HOME_PAGE_INCREASE_PRESENTATION_DECORATION_OPACITY",
        });
      }, 10);
      return () => clearInterval(interval);
    }
  }, [presentationPopCounter, presentationDecorationOpacity]);

  //==Welcome message Animation==//
  useEffect(() => {
    if (pageOpen) {
      const timeout = setTimeout(() => {
        dispatch({ type: "HOME_PAGE_WELCOME_MESSAGE_IN_POSITION" });
      }, 1000);
      //Ouverture à 1s pour correspondre avec l'animation du container dans le css//
      return () => clearTimeout(timeout);
    }
  }, [pageOpen, welcomeMessageInPosition]);

  //==window width recuperation==/
  useEffect(() => {
    const windowSize = window.innerWidth;
    dispatch({
      type: "GET_WINDOW_WIDTH",
      payload: { wWidth: windowSize },
    });
  }, []);

  const getScreenSize = () => {
    const windowSize = window.innerWidth;

    dispatch({
      type: "GET_WINDOW_WIDTH",
      payload: { wWidth: windowSize },
    });
  };

  useEffect(() => {
    const handleWindowResize = () => {
      getScreenSize();
    };
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  //==window height recuperation==/
  useEffect(() => {
    const windowHeight = window.innerHeight;
    dispatch({
      type: "GET_WINDOW_HEIGHT",
      payload: { wHeight: windowHeight },
    });
  }, []);

  const getScreenHeight = () => {
    const windowHeight = window.innerHeight;

    dispatch({
      type: "GET_WINDOW_HEIGHT",
      payload: { wHeight: windowHeight },
    });
  };

  useEffect(() => {
    const handleWindowResize = () => {
      getScreenHeight();
    };
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return <Home />;
};

export default App;
