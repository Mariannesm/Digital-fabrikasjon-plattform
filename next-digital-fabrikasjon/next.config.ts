import type { NextConfig } from 'next'
import path from 'path'

const schemasPath = path.resolve(__dirname, '../server/schemaTypes')

const nextConfig: NextConfig = {
  turbopack: {
    resolveAlias: {
      '@schemas': schemasPath,
    },
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@schemas': schemasPath,
    }
    return config
  },
}

export default nextConfig
