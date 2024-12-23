// In the Storybook file
import { Meta, StoryFn } from '@storybook/react';

import Profile, { UserProps } from '@/components/common/Profile/Profile';

export default {
  component: Profile,
  title: 'components/Profile',
  tags: ['autodocs'],
} as Meta<UserProps>;

const Template: StoryFn<UserProps> = (args) => <Profile {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  name: 'Dominic Nyugen',
  avatarUrl: 'https://avatars2.githubusercontent.com/u/263385',
};
