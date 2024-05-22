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
    errorMessage: { control: 'text', description: '에러 메세지' },
    iconAlt: { control: 'text', description: '아이콘 이미지의 alt 속성' },
    iconPath: { control: 'text', description: '아이콘 이미지의 경로' },
    // onIconClick: { action: 'onIconClick', description: 'onIconClick' },
    placeholder: { control: 'text', description: 'placeholder' },
    onChange: { action: 'onChange', description: 'onChange 이벤트' },
    value: { control: 'text', description: 'value 값' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  // args: { onClick: fn() },
} satisfies Meta<typeof DefaultTextField>;

export default meta;
type Story = StoryObj<typeof meta>;

// import cancelIcon from '../assets/icons/cancel.svg';

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    id: 'testid',
    errorMessage: 'error message',
    iconAlt: 'delete-icon',
    iconPath: '/icons/cancel.svg',
    onIconClick: () => { console.log('icon clicked'); },
    placeholder: '값을 입력해주세요.',
    onChange: () => {
      console.log('changed');
    },
    value: '',
  },
};
