import { Meta, Story } from '@storybook/react';
import { Text, Props } from './index';

export default {
  title: 'InputBox',
  component: Text,
  args: {
    className:
      'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded',
    hoge: 1,
  },
} as Meta;

const Template: Story<Props> = (args: Props) => <Text {...args} />;

export const Default = Template.bind({});
