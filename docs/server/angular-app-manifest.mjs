
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
    'index.csr.html': {size: 1087, hash: '31d6de3d42182aa539098f2a2ecc4a013097906ebc54e41d91c9dde0008f9545', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1347, hash: 'c09e08e13856d690b7aac079597ba63269c038984b89722e912ec68452901af7', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 38431, hash: 'f6d2a16cbae6011b0feb9696aa3caa7dd9e536a49b6fbf180b0f7bcfbacce9cc', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 7862, hash: 'ef8cc36df56957d3728a21264b9065ebed584ed1e140bfbedceb358a31e59c42', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 9943, hash: '8cfd41ec8f664c932727d338ab97133da3febb2d66cc11fdedccd25a53615dfb', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'styles-7DYX5JOD.css': {size: 1367, hash: 'd+D7FeENMkw', text: () => import('./assets-chunks/styles-7DYX5JOD_css.mjs').then(m => m.default)}
  },
};
