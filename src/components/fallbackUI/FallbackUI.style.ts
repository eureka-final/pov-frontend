import { css } from '@emotion/react';

import { themes } from 'pov-design-system';

export const containerStyling = css({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const headingStyling = css({
  marginTop: themes.dark.spacer.spacing6,
});

export const textStyling = css({
  width: '300px',
  marginTop: themes.dark.spacer.spacing3,
  fontSize: '16px',
  textAlign: 'center',
});

export const buttonStyling = css({
  width: '300px',
  marginTop: themes.dark.spacer.spacing4,
});
