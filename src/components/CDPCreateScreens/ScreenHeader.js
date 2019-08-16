import React from 'react';
import { Box } from '@makerdao/ui-components-core';
import { TextBlock } from 'components/Typography';

const ScreenHeader = ({ title, text, text1 }) => {
  return (
    <Box textAlign="center" pt="m">
      <Box pb="m">
        <TextBlock t="h2">{title}</TextBlock>
      </Box>
      <TextBlock t="body" fontSize="1.8rem">
        {text}
      </TextBlock>
      <TextBlock t="body" fontSize="1.8rem">
        {text1}
      </TextBlock>
    </Box>
  );
};

export default ScreenHeader;
