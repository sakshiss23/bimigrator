import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./footer.scss";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {"Copyright © "}
      <Link color="inherit" href="https://vaidhyamegha.com">
        VaidhyaMegha
      </Link>{" "}
      {new Date().getFullYear()}
      {" | All Rights Reserved."}
    </Typography>
  );
}

const defaultTheme = createTheme();

const StickyFooter = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          py: 1,
          px: 1,
          mt: "auto",
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
        }}
      >
        <CssBaseline />
        <Box
          className="footerBox"
          component="footer"
          sx={{
            py: 2,
            px: 2,
            mt: "auto",
            // backgroundColor: (theme) =>
            //   theme.palette.mode === "light"
            //     ? theme.palette.grey[200]
            //     : theme.palette.grey[800],
          }}
        >
          <Container maxWidth="100vw" className="footerContainer">
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <AccountCircleIcon />
              <Typography sx={{ p: 1 }} variant="body2" color="text.secondary">
                username
              </Typography>
            </Box>
            <Copyright />
            <Box className="footerIcon">
              <Link
                href="https://www.facebook.com/yourUsername"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookIcon color="primary" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/yourUsername"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon color="primary" />
              </Link>
              <Link
                href="https://twitter.com/yourUsername"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TwitterIcon color="primary" />
              </Link>
            </Box>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default StickyFooter;
