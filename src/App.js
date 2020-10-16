import React from "react";
import { ThemeProvider } from "@material-ui/core";
import { Provider } from "react-redux";
import theme from "./styles";
import Main from "./components/Main/Main.jsx";
import store from "./redux/store";

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <div className="App">
        <Main />
      </div>
    </ThemeProvider>
  </Provider>
);

export default App;
