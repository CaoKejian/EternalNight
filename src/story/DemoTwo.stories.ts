import type { Meta, StoryObj } from '@storybook/react'
import { DemoTwo } from '../../package/demo-two'
import props from '../../package/demo-two/model/props'

const meta = {
  title: 'CaoKejian/DemoTwo',
  component: DemoTwo,
  parameters: {
    layout: 'centered',
    viewport: {
      defaultViewport: 'iphonex',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DemoTwo>

export default meta

type Story = StoryObj<typeof meta>;

export const DemoTwoComponent: Story = {
  args: props,
}