import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import Image from "next/image";

import useStyles from "./styles";

const CreateAccount = () => {
  const authStyles = useStyles();
  return (
    <Box component="main">
      <Grid container>
        <Grid item xs={12} md={4} className={authStyles.imgContainer}>
          <Box
            ml={7}
            component="aside"
            className={`${authStyles.displayColumnWithHeight} ${authStyles.JustifySpaceBtw}`}
          >
            <Box>
              <Typography variant="h2" component="h1" mt={6} color="primary">
                safeSpace
              </Typography>
              <Typography
                variant="h4"
                component="article"
                mt={4}
                color="primary"
              >
                Welcome to your safe heaven. <br />
                create your space <br />
                where you can say it all <br />
                with no one judging you
              </Typography>
            </Box>
            <Box>
              <Image
                src="/images/create-account/create.svg"
                alt=""
                height={500}
                width={550}
              />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={8} sx={{ background: "#fff" }}>
          <Container
            maxWidth="sm"
            className={`${authStyles.displayColumnWithHeight} ${authStyles.JustifyCenter}`}
          >
            <Stack spacing={4}>
              <Typography
                variant="h4"
                component="text"
                mb={3}
                className={`${authStyles.textAlignCentre}`}
              >
                Create your safespace (Sign-up)
              </Typography>
              <TextField
                id="username"
                name="username"
                label="Username"
                variant="outlined"
                fullWidth
              />
              <TextField
                id="email"
                name="email"
                label="Email address"
                variant="outlined"
                fullWidth
              />
              <TextField
                id="password"
                name="password"
                label="Password"
                variant="outlined"
                fullWidth
              />
              <TextField
                id="confirmPassword"
                name="confirmPassword"
                label="Confirm Password"
                variant="outlined"
                fullWidth
              />
              <Box>
                <Button variant="contained" className={authStyles.btn}>
                  Create account
                </Button>
              </Box>
            </Stack>
          </Container>
        </Grid>
      </Grid>
    </Box>
  );
};
export default CreateAccount;
