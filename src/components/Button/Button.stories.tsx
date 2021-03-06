import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Button } from './Button';

export default {
  title: 'SubmitButton',
  component: Button,
  argTypes: {
    onClick: { action: 'click' },
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
