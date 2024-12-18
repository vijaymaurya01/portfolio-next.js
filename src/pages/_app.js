import "../styles/globals.css";
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import '@mantine/core/styles.css';

function MyApp({ Component, pageProps }) {
  return (
    <MantineProvider defaultColorScheme="dark">
      <ColorSchemeScript defaultColorScheme="dark" />
      <Component {...pageProps} />
    </MantineProvider>
  );
}

export default MyApp;
