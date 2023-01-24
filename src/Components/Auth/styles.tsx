import { makeStyles } from "@mui/styles";
import theme from "@src/styles/theme";

const authStyles = makeStyles({
  imgContainer: {
    background: theme.palette.secondary.main,
    height: "100vh",
    // background: "#6495ED",
    // color: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    // boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  },
  displayColumnWithHeight: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
  },
  JustifySpaceBtw: {
    justifyContent: "space-between",
  },
  JustifyCenter: {
    justifyContent: "center",
  },
  textAlignCentre: {
    textAlign: "center",
  },
  btn: {
    width: "100%",
    marginTop: 30,
    padding: 11,
    fontSize: 20
  },
});
export default authStyles;
