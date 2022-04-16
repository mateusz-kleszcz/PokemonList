import { useEffect, useState } from "react";
import TypeSelectListItem from "./TypeSelectListItem";
import styles from "styles/Home.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import { useLayoutSelector } from "hooks/useLayoutSelector";

const TypeSelectList = () => {
  const [types, setTypes] = useState<string[]>([]);
  const [isContentVisible, setIsContentVisible] = useState<boolean>(false);

  const { isDarkTheme } = useLayoutSelector();

  // get all available types from API
  useEffect(() => {
    (async () => {
      const res = await fetch(`${process.env.REACT_APP_API_URL}type`);
      const json = await res.json();
      const { results } = json;
      const loadedTypes = results.map((type: any) => type.name);
      setTypes(loadedTypes);
    })();
  }, []);

  const handleToggleContent = () => {
    setIsContentVisible(!isContentVisible);
  };

  return types.length !== 0 ? (
    <div className={styles.selectContainer}>
      <p
        onClick={handleToggleContent}
        style={{ backgroundColor: isDarkTheme ? "#121212" : "white" }}
      >
        Select type
      </p>
      <div
        className={styles.selectContent}
        style={{ display: isContentVisible ? "flex" : "none" }}
      >
        <AnimatePresence>
          {isContentVisible && (
            <motion.div
              initial={{
                originY: 0,
                scaleY: 0,
              }}
              animate={{ originY: 0, scaleY: "100%" }}
              transition={{
                type: "spring",
                duration: 0.5,
              }}
            >
              {types.map((type) => (
                <TypeSelectListItem type={type} key={type} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  ) : (
    <div className={styles.selectContainer}>Loading...</div>
  );
};

export default TypeSelectList;
