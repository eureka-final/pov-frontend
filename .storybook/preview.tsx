import type { Preview } from '@storybook/react';
import React from 'react';

import { PovProvider } from 'pov-design-system';

export const decorators = [
  (Story) => (
    <>
      <PovProvider>
        <Story />
      </PovProvider>
    </>
  ),
];

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
