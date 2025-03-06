
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/my-website/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/my-website/about",
    "route": "/my-website"
  },
  {
    "renderMode": 2,
    "route": "/my-website/about"
  },
  {
    "renderMode": 2,
    "route": "/my-website/projects"
  },
  {
    "renderMode": 2,
    "route": "/my-website/contact"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1087, hash: '093b3128b74fca48de15711ccc338d5698884055e9bc063c6afc38ff77f4e0bf', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1347, hash: '611390c26e5e10ac1d9cd6abdfd07e2b4aa82ae71421eba028fcb2271d4bc210', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 38369, hash: '96de9b6c69d01b0988675e11768db5e473596cc06386f5adb7c365652b82cc03', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 7862, hash: 'b2d6ad712aa36de656aaf6b5c55848a610650dabea70eaf63868a81f4f56335e', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 9943, hash: 'd7c42232fa8b259c47c5480f715ad8d1fc7ac9a72e9423d4fb0e791024ed6761', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'styles-7DYX5JOD.css': {size: 1367, hash: 'd+D7FeENMkw', text: () => import('./assets-chunks/styles-7DYX5JOD_css.mjs').then(m => m.default)}
  },
};
