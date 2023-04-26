import React, { useContext } from "react";
import ThemeContextProvider, { ThemeContext } from "./ThemeContext";

// v1
// const Box = () => {
//   const themeContext = useContext(ThemeContext);
//   return (
//     <ThemeContextProvider>
//       <div style={{ backgroundColor: themeContext.primary.main, color: themeContext.primary.text }}>
//         hi there, from box component
//       </div>
//     </ThemeContextProvider>
//   );
// };

const Box = () => {
  const themeContext = useContext(ThemeContext);
  return (
    <ThemeContextProvider>
      <div
        style={{ backgroundColor: themeContext?.themeState.primary.main, color: themeContext?.themeState.primary.text }}
      >
        hi there, from box component
      </div>
    </ThemeContextProvider>
  );
};

export default Box;
