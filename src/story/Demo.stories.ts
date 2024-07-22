import type { Meta, StoryObj } from '@storybook/react'
import { Demo } from '../../package/demo'
import props from '../../package/demo/model/props'

const meta = {
  title: 'CaoKejian/Demo',
  component: Demo,
  parameters: {
    layout: 'centered',
    viewport: {
      defaultViewport: 'iphonex'
    }
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Demo>

export default meta

type Story = StoryObj<typeof meta>;

export const DemoComponent: Story = {
  args: props,
}