import React from 'react';
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import Table from '@site/src/components/Custom/Table';
import May from '@site/src/components/Custom/May';
import Cody from '@site/src/components/Custom/Cody';
import Either from '@site/src/components/Custom/Either';

export default {
  // Re-use the default mapping
  ...MDXComponents,
  // Map the "<Highlight>" tag to our Highlight component
  // `Highlight` will receive all props that were passed to `<Highlight>` in MDX
  Table,
  May,
  Cody,
  Either,
};