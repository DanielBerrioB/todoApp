const modalStyles = (theme) => ({
  inputStyle: {
    width: "80%",
    marginBottom: "10px",
  },
  paper: {
    position: "absolute",
    width: "80%",
    textAlign: "center",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid white",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  widthAlert: {
    display: "flex",
    justifyContent: "center",
    marginTop: "10px",
  },
});

export default modalStyles;
