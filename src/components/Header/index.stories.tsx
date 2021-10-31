import { Meta, Story } from '@storybook/react';
import { Header, Props } from '.';

export default {
  title: 'Header',
  component: Header,
  args: {},
} as Meta;

const Template: Story<Props> = (args: Props) => <Header />;

export const Default = Template.bind({});
