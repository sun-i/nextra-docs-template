import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: (
    <>
      <img src="https://cdn.jsdelivr.net/gh/sun-i/pic/redefine-avatar.svg" alt="description" width="24" height="24" />
      <span style={{ marginLeft: '.4em', fontWeight: 800 }}>
        青砖生存手册
      </span>
    </>
  ),
  // docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
    text: '青砖生存手册',
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="青砖生存手册" />
      <meta property="og:description" content="青山湖带砖生存指南" />
      <link rel="icon" href="https://cdn.jsdelivr.net/gh/sun-i/pic/redefine-avatar.svg" />
    </>
  ),
  editLink: {
    component: null,
  },
  feedback: {
    content: null,
  }
}

export default config
