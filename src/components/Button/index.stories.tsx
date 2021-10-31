import { Meta, Story } from '@storybook/react';
import { Button, Props } from '.';

export default {
  title: 'Button',
  component: Button,
  args: {
    className:
      'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded',
    hoge: 1,
  },
} as Meta;

const Template: Story<Props> = (args: Props) => (
  <Button {...args}>Button</Button>
);

export const Default = Template.bind({});
