import { createMuiTheme } from "@material-ui/core/styles";

export default createMuiTheme({
  typography: {
    fontFamily: "'Quicksand', sans-serif",
  },
  overrides: {
    MuiIconButton: {
      colorPrimary: {
        color: "white",
      },
    },
  },
  palette: {
    primary: {
      main: "#845EC2",
    },
    secondary: {
      main: "#D65DB1",
    },
    success: {
      main: "#008F7A",
    },
  },
});
