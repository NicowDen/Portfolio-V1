import mc from "./home-menu-button.module.scss";

const HomeMenuButton = ({ onButtonClick, children, buttonActive }) => {
  return (
    <button
      className={
        buttonActive
          ? `${mc.button} ${mc.active_button}`
          : `${mc.button} ${mc.button_inactive}`
      }
      onClick={onButtonClick}
    >
      <span>{children}</span>
    </button>
  );
};

export default HomeMenuButton;
