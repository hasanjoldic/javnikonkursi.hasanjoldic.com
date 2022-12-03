import styled from "@mui/material/styles/styled";
import Box from "@mui/material/Box";

import { Header } from "../header";
import { Footer } from "../footer";

const Container = styled(Box)(() => ({
  width: "100vw",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
}));

const Content = styled(Box)(({ theme }) => ({
  padding: theme.spacing(5, 3),
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(5, 0.5),
  },
}));

export const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Container
      className="Layout"
      width="100vw"
      minHeight="100vh"
      display="flex"
      flexDirection="column"
    >
      <Header />
      <Content className="Content" mt={5}>
        {children}
      </Content>
      <Footer />
    </Container>
  );
};
