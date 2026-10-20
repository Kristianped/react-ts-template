import { type CodeSplittingOptions } from 'rolldown';

const codeSplittingOptions: CodeSplittingOptions = {
  groups: [
    {
      name: 'react-vendor',
      test: /node_modules[\\/]react/,
      priority: 20,
    },
    {
      name: 'bootstrap-vendor',
      test: /node_modules[\\/]bootstrap/,
      priority: 15,
    },
    {
      name: 'vendor',
      test: /node_modules/,
      priority: 10,
    },
  ],
};

export default codeSplittingOptions;
