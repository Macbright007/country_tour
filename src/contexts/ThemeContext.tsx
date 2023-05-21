import React, { useState, ReactNode } from "react";


type Theme = "light" | "dark";

type ThemeContext = { 
    theme: Theme; 
    toggleTheme: () => void 
};

const ThemeContext = React.createContext<ThemeContext>({} as ThemeContext
);

type Props = {
    children?: ReactNode;
}

export const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState<Theme>("light");
  
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

//   const color = theme === "light" ? "#333" : "#FFF";
//   const backgroundColor = theme === "light" ? "#FFF" : "#333";

//   document.body.style.color = color;
//   document.body.style.backgroundColor = backgroundColor;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext