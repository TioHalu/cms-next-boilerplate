import createJITI from "jiti";
import { fileURLToPath } from "node:url";
import bundleAnalyzer from "@next/bundle-analyzer"

const jiti = createJITI(fileURLToPath(import.meta.url));

jiti('./src/utils/env');

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
  openAnalyzer: false,
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  output: "standalone",
  images: {
    unoptimized: false,
  },
  compress: true,
  transpilePackages: [
    "antd",
    "@ant-design/colors",
    "@ant-design/cssinjs",
    "@ant-design/icons",
    "@ant-design/icons-svg",
    "@rc-component/color-picker",
    "@rc-component/mutate-observer",
    "@rc-component/tour",
    "@rc-component/trigger",
    "rc-cascader",
    "rc-checkbox",
    "rc-collapse",
    "rc-dialog",
    "rc-drawer",
    "rc-dropdown",
    "rc-field-form",
    "rc-image",
    "rc-input",
    "rc-input-number",
    "rc-mentions",
    "rc-menu",
    "rc-motion",
    "rc-notification",
    "rc-pagination",
    "rc-picker",
    "rc-progress",
    "rc-rate",
    "rc-resize-observer",
    "rc-segmented",
    "rc-select",
    "rc-slider",
    "rc-steps",
    "rc-switch",
    "rc-table",
    "rc-tabs",
    "rc-textarea",
    "rc-tooltip",
    "rc-tree",
    "rc-tree-select",
    "rc-upload",
    "rc-util",
  ]
};

export default withBundleAnalyzer(nextConfig);
