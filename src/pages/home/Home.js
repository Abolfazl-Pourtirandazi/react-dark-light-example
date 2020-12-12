import { useContext } from "react";
import { ThemeContext } from "../../provider/ThemeProvider";

const Home = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <>
      <div className={`text-center ${theme}`}>
        <div>H! Abolfazl !!!</div>
        {theme === "dark" ? (
          <button onClick={() => setTheme("light")}>light</button>
        ) : (
          <button onClick={() => setTheme("dark")}>dark</button>
        )}
      </div>
    </>
  );
};

export default Home;
