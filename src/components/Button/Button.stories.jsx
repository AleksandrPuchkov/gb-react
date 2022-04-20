import React from 'react';

import { Button } from './Button';

export default {
  title: 'SubmitButton',
  component: Button,
  argTypes: {
    onClick: { action: 'click' },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const RedButton = Template.bind({});
RedButton.args = {
  color: 'red',
};
