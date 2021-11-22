import { Meta, Story } from '@storybook/react';
import { UserVotePage, Props } from './index';
import { Text } from 'components/InputBox';

export default {
  title: 'UserVotePage',
  component: UserVotePage,
  args: {
    className:
      'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded',
    hoge: 1,
  },
} as Meta;

const Template1: Story<Props> = (args: Props) => (
  <div>
    {' '}
    <UserVotePage {...args} />
    <Text {...args} />;
  </div>
);
export const Default1 = Template1.bind({});
