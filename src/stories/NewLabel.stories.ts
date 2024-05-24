import type { Meta, StoryObj } from '@storybook/react';
// import { fn } from '@storybook/test';
import NewLabel from '../components/NewLabel';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/NewLabel',
  component: NewLabel,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    htmlFor: { control: 'text', description: 'label의 htmlFor 속성' },
    children: { control: 'text', description: 'label의 내용' },
  },
  // args: { onClick: fn() },
} satisfies Meta<typeof NewLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    htmlFor: 'username',
    children: '이메일',
  },
};