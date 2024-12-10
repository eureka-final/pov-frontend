// In the Storybook file
import { Meta, StoryFn } from '@storybook/react';
import Profile, { ProfileProps } from '../components/common/Profile';

export default {
  component: Profile,
  title: 'components/Profile',
  tags: ['autodocs'],
} as Meta<ProfileProps>;

const Template: StoryFn<ProfileProps> = (args) => <Profile {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  user: {
    name: 'Dominic Nyugen',
    avatarUrl: 'https://avatars2.githubusercontent.com/u/263385',
  },
};
