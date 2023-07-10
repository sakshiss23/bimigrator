import { Box } from "@mui/system";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Dialog from "@/components/Dialog/Dialog";
import Typography from "@mui/material/Typography";
import heroImg from "@/assets/imgs/hero-img.json";
import backgroundImage from "@/assets/imgs/hero-bg.png";
import Lottie from "react-lottie";

const Intro = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: heroImg,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Box
      className="intro"
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        justifyContent: "space-between",
      }}
    >
      <Navbar />
      <Box
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="introMain"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexGrow: 1,
        }}
      >
        <Box sx={{ flex: 1, p: 4 }}>
          <Typography
            sx={{
              p: 2,
              fontSize: "60px",
              fontWeight: "bold",
            }}
            className="name"
          >
            BI MIGRATOR
          </Typography>
          <Typography
            sx={{
              p: 2,
              pt: 0,
              textAlign: "justify",
              color: "text.secondary",
              fontFamily: "Georgia, serif",
              fontSize: "16px",
              lineHeight: "25px",
              fontWeight: "500",
            }}
            variant="body2"
          >
            As businesses evolve and expand, their need for widespread access to
            business intelligence (BI) grows. This often entails modernizing
            their applications and platforms, and migrating their BI systems
            from one platform to another is a common requirement. BI Migration
            involves automating the transfer of analytical applications and data
            from one BI platform to another, allowing companies to leverage the
            benefits of the new platform and improve their analytical
            capabilities. In summary, BI Migration has become a vital process
            for companies seeking to enhance their BI infrastructure and better
            serve their user base.
          </Typography>
          <Box sx={{ zIndex: 10, p: 2 }}>
            <Dialog />
          </Box>
        </Box>
        <Box sx={{ flex: 1 }}>
          <Lottie height={400} width={400} options={defaultOptions} />
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Intro;
