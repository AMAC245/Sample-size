import babel from 'rollup-plugin-babel'
import uglify from 'rollup-plugin-uglify'

const env = process.env.NODE_ENV

const config = {
  input: './src/index',
  output: {
    file: 'build/bundle.js',
    format: 'umd',
    sourcemap: 'inline'
  },
  plugins: [
    babel({
      exclude: 'node_modules/**'
    })
  ]
}

if(env === 'production') {
  config.plugins.push(
    uglify()
  )
}

export default config