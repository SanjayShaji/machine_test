import { ThemeProvider, createTheme } from "@mui/material";
import HomePage from "./pages/HomePage";
import { themeSettings } from "./theme";
import { createContext, useState } from "react";

export const MyContext = createContext()

function App() {
  const theme = createTheme(themeSettings())
  const [cartCount, setCartCount] = useState(0)

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <MyContext.Provider
          value={{
            cartCount,
            setCartCount
          }}
        >
          <HomePage />
        </MyContext.Provider>
      </ThemeProvider>
    </div>
  );
}

export default App;
