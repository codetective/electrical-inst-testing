import { Box } from "@chakra-ui/react";

import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <Box>
      <Header />

      <Box margin="0 auto" transition="0.5s ease-out" as="main">
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
