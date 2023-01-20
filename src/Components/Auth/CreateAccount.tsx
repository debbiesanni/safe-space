import Box from "@mui/material/Box";
import useStyles from "./styles";

const CreateAccount = () => {
  const authStyles = useStyles();
  return (
    <Box className={authStyles.bg} style={{}}>
      create-account
    </Box>
  );
};
export default CreateAccount;
