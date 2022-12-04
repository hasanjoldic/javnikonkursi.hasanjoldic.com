import styled from "@mui/material/styles/styled";
import useTheme from "@mui/material/styles/useTheme";
import Box from "@mui/material/Box";

import { Header } from "../header";
import { Footer } from "../footer";

const Container = styled(Box)(() => ({
  width: "100vw",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  overflowX: "hidden",
}));

const Content = styled(Box)(({ theme }) => ({
  padding: theme.spacing(0, 3),
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(0, 0.5),
  },
}));

export const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  const theme = useTheme();

  return (
    <Container
      className="Layout"
      width="100vw"
      minHeight="100vh"
      display="flex"
      flexDirection="column"
    >
      <Header height={theme.spacing(8)} />
      <Content className="Content" mt={8}>
        {children}
      </Content>
      <Footer />
    </Container>
  );
};
