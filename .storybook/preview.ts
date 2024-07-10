import type { Preview } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    locale: 'zh',
    locales: {
      en: 'English',
      zh: '中文',
    },
    layout: 'centered',
    // 配置移动端区域
    viewport: {
      viewports: INITIAL_VIEWPORTS, // 使用默认的视口配置
      defaultViewport: 'responsive', // 默认视口
    },
  },
};

export default preview;
