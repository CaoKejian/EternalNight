import type { Meta, StoryObj } from '@storybook/react';
import { Demo } from './Demo';

const meta = {
  title: 'CaoKejian/Demo',
  component: Demo,
  parameters: {
    layout: 'centered',
    viewport: {
      defaultViewport: 'iphonex',
    },
  },
  tags: ['autodocs'],
  args: { xxx: '123'}, // 放props
} satisfies Meta<typeof Demo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};