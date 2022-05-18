import { Box } from "@chakra-ui/react";
import { useRouter } from "next/router";

import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  const { pathname } = useRouter();
  return (
    <Box>
      {pathname !== "/admin" && <Header />}

      <Box margin="0 auto" transition="0.5s ease-out" as="main">
        {children}
      </Box>
      {pathname !== "/admin" && <Footer />}
    </Box>
  );
};

export default Layout;
