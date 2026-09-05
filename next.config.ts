import createMDX from '@next/mdx'
import type { NextConfig } from 'next'
import { basePath } from './lib/url'

const nextConfig: NextConfig = {
  output: 'export',
  basePath,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  pageExtensions: ['ts', 'tsx', 'mdx'],
}

export default createMDX()(nextConfig)
