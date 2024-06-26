import type { Meta, StoryObj } from '@storybook/react';
import { Index } from '../../package/demo';
import props from '../../package/demo/model/props';

const meta = {
  title: 'CaoKejian/Demo',
  component: Index,
  parameters: {
    layout: 'centered',
    viewport: {
      defaultViewport: 'iphonex',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Index>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Demo: Story = {
  args: props,
};