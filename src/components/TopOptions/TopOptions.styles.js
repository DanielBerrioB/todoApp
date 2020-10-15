const topOptionsStyles = (theme) => ({
  container: {
    margin: "0 auto",
    maxWidth: "500px",
    textAlign: "center",
    display: "flex",
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
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
  },
});

export default topOptionsStyles;
