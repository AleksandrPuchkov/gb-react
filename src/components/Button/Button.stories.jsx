import React from 'react';

import { Button } from './Button';

export default {
  title: 'SubmitButton',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  // label: 'Submit',
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
