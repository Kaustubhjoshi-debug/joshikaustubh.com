// theme.js

// 1. import `extendTheme` function
import { extendTheme } from "@chakra-ui/react";

// 2. Add your color mode config
const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

// 3. extend the theme
const theme = extendTheme({
  config,
  fonts: {
    heading: "'Source Serif 4', Georgia, serif",
    body: "'IBM Plex Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  },
  colors: {
    gray: {
      950: "#0f0f12",
    },
    red: {
      950: "#1f0808",
    },
    pink: {
      950: "#2c0514",
    },
    purple: {
      950: "#1a032e",
    },
    cyan: {
      950: "#051b24",
    },
    blue: {
      950: "#0c142e",
    },
    teal: {
      950: "#021716",
    },
    green: {
      950: "#03190c",
    },
    yellow: {
      950: "#281304",
    },
    orange: {
      950: "#220a04",
    },
  },
  styles: {
    global: {
      body: {
        color: "brand.900",
        bg: "brand.50",
      },
      "::selection": {
        bg: "brand.200",
        color: "brand.900",
      },
    },
  },
  components: {
    Heading: {
      baseStyle: {
        letterSpacing: "-0.02em",
        fontWeight: 600,
      },
    },
    Text: {
      baseStyle: {
        lineHeight: 1.75,
      },
    },
  },
});

export default theme;
