import { ThemeProvider } from "styled-components";

import theme from "./src/theme";

import { Main } from "./src/screens/main/Main";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Main />
    </ThemeProvider>
  );
}
