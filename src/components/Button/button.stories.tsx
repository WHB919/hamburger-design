import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import Button from './button'
// import { fn } from '@storybook/test';
// import Icon from '../Icon'

export default {
    title: '组件/Button 按钮',
    component: Button,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: {
        size: 'mid',
        btnType: 'default',
        disabled: false,
        onClick: () => alert('click')
    },
} as Meta<typeof Button>
type Story = StoryObj<typeof Button>;

// // template
// const Template: ComponentStory<typeof Button> = args => (
//     <Button onClick={() => alert('click')} {...args}></Button>
// )
const Template: Story = {
    render: (args) => <Button {...args}></Button>,
};

export const Default: Story = {
    ...Template,
    args: {
        children: 'Default Button',
    }
}
Default.storyName = 'Defalut Button 默认按钮'

export const Primary: Story = {
    ...Template,
    args: {
        btnType: 'primary',
        children: 'Primary Button',
    }
}
Primary.storyName = 'Primary Button 主按钮'

export const Danger: Story = {
    ...Template,
    args: {
        btnType: 'danger',
        children: 'danger Button',
    }
}
Danger.storyName = 'Danger Button 危险按钮'

export const Link: Story = {
    ...Template,
    args: {
        btnType: 'link',
        children: 'link Button',
        href: 'https://google.com',
    }
}
Link.storyName = 'Link Button 链接按钮'

export const DashButton: Story = {
    ...Template,
    args: {
        btnType: 'dash',
        children: 'dash Button',
    }
}
DashButton.storyName = 'Dash Button 虚线按钮'

export const Large: Story = {
    ...Template,
    args: {
        size: 'lg',
        children: 'large Button',
    }
}
Large.storyName = 'Large Button 大按钮'

export const Small: Story = {
    ...Template,
    args: {
        size: 'sm',
        children: 'small Button',
    }
}
Small.storyName = 'Small Button 小按钮'
