import webpack from 'webpack'
import merge from 'webpack-merge'

import { config } from './webpack.common'

const devConfig: webpack.Configuration = merge(config, {
  mode: 'development',
  devtool: 'inline-source-map',
  bail: true
})

export default devConfig