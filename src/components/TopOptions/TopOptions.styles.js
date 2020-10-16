const topOptionsStyles = (theme) => ({
  container: {
    margin: "0 auto",
    maxWidth: "500px",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
  },
  inputStyle: {
    width: "80%",
    marginBottom: "10px",
  },
  paper: {
    position: "absolute",
    width: "80%",
    textAlign: "center",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  textSpace: {
    marginRight: "3px",
  },
  labelStyle: {
    fontSize: "15px",
    marginBlockStart: "auto",
    marginBlockEnd: "auto",
  },
  resetButton: {
    textAlign: "center",
    marginBottom: "5px",
    marginTop: "5px",
  },
});

export default topOptionsStyles;
