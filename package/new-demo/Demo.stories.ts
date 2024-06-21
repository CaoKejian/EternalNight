import type { Meta, StoryObj } from '@storybook/react';
import { Demo } from '.';

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
  args: {}, // 放props
} satisfies Meta<typeof Demo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {label: '123'},
};