import { Button } from "@chakra-ui/core";
import { boolean, text } from "@storybook/addon-knobs";

export default {
  title: "Chakra/Button",
  component: Button,
  argTypes: {
    onClick: { action: "clicked" },
    onMouseOver: { action: "hovered" },
  },
};

const Template = (args) => <Button {...args} />;

export const Success = Template.bind({});
Success.args = {
  variantColor: "green",
  children: "Success",
};
export const Danger = Template.bind({});
Danger.args = {
  variantColor: "red",
  children: "Danger",
};

export const Log = () => (
  <Button
    variantColor="blue"
    onClick={() => console.log("Button Clicked", process.env.STORYBOOK_THEME)}
  >
    Log
  </Button>
);

export const Knobs = () => (
  <Button
    variantColor={text("Button Color", "purple")}
    onClick={() => console.log("Button Clicked")}
    disabled={boolean("Disabled", false)}
  >
    {text("Label", "Button Label")}
  </Button>
);
