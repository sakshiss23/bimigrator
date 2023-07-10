import { Box } from "@mui/system";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const Intro = () => {
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
      <div className="introMain">Hello</div>
      <Footer />
    </Box>
  );
};

export default Intro;
