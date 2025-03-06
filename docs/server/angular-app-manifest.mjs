
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
    'index.csr.html': {size: 1051, hash: 'ca52354339b4191d591b834bbdeded03fe1ea5a754c64e7da1a2882a2cde4d2b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1320, hash: '0a4f7ff4b1402484879438d4793d8057da3127efed0dbf5a305a349d7bc5bf31', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 38395, hash: '875452671f4404f0374fe9b0dff171074c2c37d6084394c531595c775365ca5b', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 7826, hash: 'afc97a0d9d4bf97ffa3b63c9ef3d347370520f1aeb44372479a534e7937450e4', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 9907, hash: '8b90920eadffb6f2463fd3e5eac3dba43f74bc97dac789bdce237406d330b531', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'styles.css': {size: 1367, hash: 'd+D7FeENMkw', text: () => import('./assets-chunks/styles_css.mjs').then(m => m.default)}
  },
};
