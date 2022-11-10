import { CssBaseline, GlobalStyles, ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Provider } from "react-redux";
import store from "../store/store";
import "../styles/globals.css";
import { globalStyles } from "../styles/GlobalStyle";
import theme from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:wght@300;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <GlobalStyles styles={globalStyles} />
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default MyApp;
