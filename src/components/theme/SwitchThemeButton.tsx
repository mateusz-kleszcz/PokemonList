import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { changeTheme } from "actions/layoutActions/changeTheme";
import { useDispatch } from "react-redux";

const SwitchThemeButton = () => {
  const dispatch = useDispatch();

  const handleThemeChange = () => {
    dispatch(changeTheme());
  };

  return <FontAwesomeIcon icon={faLightbulb} onClick={handleThemeChange} />;
};

export default SwitchThemeButton;
