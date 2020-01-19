import { Configuration } from 'webpack'
import merge from 'webpack-merge'

import { config } from './webpack.common'

const prodConfig: Configuration = merge(config, {
  mode: 'production'
})

export default prodConfig
