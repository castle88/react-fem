import Main from "./components/Main";
import GlobalStyles from "./components/styles/Global";
import { ThemeProvider } from "styled-components";
import { content } from "./components/utils/content";
import { theme } from "./components/utils/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Main content={content} />
      </>
    </ThemeProvider>
  );
}

export default App;
