import "../styles/globals.css";

import type { AppProps } from "next/app";

import { Provider } from "react-redux";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import ThemeProvider from "@mui/material/styles/ThemeProvider";
import CssBaseline from "@mui/material/CssBaseline";

import { Layout } from "../components";
import { store, useGetCompanies, useGetJobs, useGetJobTypes } from "../store";
import { theme } from "../styles/theme";
import React from "react";

const client = new ApolloClient({
  uri: "http://localhost:3000/graphql",
  cache: new InMemoryCache(),
});

interface Props extends AppProps {
  cookie: string;
}

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={store}>
        {/* <PersistGate loading={null} persistor={persistor}> */}
        {/* <LocalizationProvider dateAdapter={AdapterDayjs}> */}
        <ApolloProvider client={client}>
          <Layout>
            <Root>
              <Component {...pageProps} />
            </Root>
          </Layout>
        </ApolloProvider>
        {/* </LocalizationProvider> */}
        {/* </PersistGate> */}
      </Provider>
    </ThemeProvider>
  );
};

const Root: React.FC<React.PropsWithChildren> = ({ children }) => {
  useGetJobs();
  useGetCompanies();
  useGetJobTypes();

  return <>{children}</>;
};

export default App;
