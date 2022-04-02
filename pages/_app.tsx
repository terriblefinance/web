import type { ReactElement } from "react";
import type { AppProps } from "next/app";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";

import type { Page } from "../src/types/page";
import createEmotionCache from "../src/utilities/createEmotionCache";
import lightThemeOptions from "../src/theme/lightThemeOptions";

import "../styles/globals.css";

type AppPropsWithLayout = AppProps & {
  Component: Page;
  emotionCache?: EmotionCache;
};

const clientSideEmotionCache = createEmotionCache();
const lightTheme = createTheme(lightThemeOptions);

const MyApp = ({ Component, pageProps, emotionCache = clientSideEmotionCache }: AppPropsWithLayout) => {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page: ReactElement) => page);

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        {getLayout(<Component {...pageProps} />)}
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MyApp;
