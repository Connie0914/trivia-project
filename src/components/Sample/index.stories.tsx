import { Meta, Story } from '@storybook/react';
import { Sample, Props } from '.';

export default {
  title: 'Sample',
  component: Sample,
  args: {},
} as Meta;

const Template: Story<Props> = () => {
  return (
    <>
      <Sample />
      <p>Image Sample</p>
    </>
  );
};

export const Default = Template.bind({});
