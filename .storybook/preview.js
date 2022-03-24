import React from "react";
import { addDecorator } from "@storybook/react";
import { withConsole } from "@storybook/addon-console";
import { CSSReset, theme, ThemeProvider } from "@chakra-ui/core";
import { withKnobs } from "@storybook/addon-knobs";
import { withA11y } from "@storybook/addon-a11y";
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  decorators: [
    addDecorator((story) => (
      <ThemeProvider theme={theme}>
        <CSSReset />
        {story()}
      </ThemeProvider>
    )),
    addDecorator((storyFn, context) => withConsole()(storyFn)(context)),
    addDecorator(withKnobs),
    addDecorator(withA11y),
  ],
};
