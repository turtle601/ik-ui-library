import babel from '@rollup/plugin-babel';

import dts from 'rollup-plugin-dts';
import svgr from '@svgr/rollup';
import typescript from '@rollup/plugin-typescript';

export default [
  {
    input: 'src/index.ts',
    output: {
      file: './dist/index.js', // 출력 경로
      format: 'esm', // esmodule로 output
    },
    plugins: [
      babel({
        babelHelpers: 'bundled',
        presets: [
          '@babel/preset-env',
          '@babel/preset-react',
          '@babel/preset-typescript',
        ],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      }),
      typescript(),
      svgr(),
    ],
  },
  {
    input: 'src/index.ts',
    output: {
      file: './dist/index.d.ts',
      format: 'esm',
    },
    plugins: [dts(), svgr()],
  },
];
