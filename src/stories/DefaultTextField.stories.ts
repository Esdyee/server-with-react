import type { Meta, StoryObj } from '@storybook/react';
// import { fn } from '@storybook/test';
import DefaultTextField from '../components/DefaultTextField.tsx';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/DefaultTextField',
  component: DefaultTextField,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    alt: { control: 'text', description: 'alt text' },
    iconPath: { control: 'text', description: 'icon path' },
    onClick: { action: 'onClick', description: 'onClick' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  // args: { onClick: fn() },
} satisfies Meta<typeof DefaultTextField>;

export default meta;
type Story = StoryObj<typeof meta>;

// import cancelIcon from '../assets/icons/cancel.svg';

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    alt: 'icon',
    iconPath: '../assets/icons/cancel.svg',
    onClick: () => {
      console.log('clicked');
    },
  },
};
