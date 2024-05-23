import Radio from './radio.component'
import { Meta, StoryObj } from "@storybook/angular";

const meta: Meta<Radio> = {
  title: 'Example/Radio',
  component: Radio,
  tags: ['autodocs'],
  render: (args: Radio) => ({
    props: {
      ...args,
    },
    argTypes: {
      backgroundColor: {
        control: 'color',
      },
    },
  }),
};

export default meta;
type Story = StoryObj<Radio>;

export const Squared: Story = {
  args: {
    squared: true,
    label: 'Radio button',
  },
};

export const Rounded: Story = {
  args: {
    squared: false,
    label: 'RadioButton',
  },
};

export const CheckedSquared: Story = {
  args: {
    squared: true,
    label: 'Radio button',
    defaultValue: true
  }
}

export const CheckedRounded: Story = {
  args: {
    squared: false,
    label: 'Radio button',
    defaultValue: true
  }
};
