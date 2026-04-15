import fs from 'fs';
import path from 'path';

export default function sitemap() {
  const baseUrl = 'https://www.connectskool.com';

  const pagesDir = path.join(process.cwd(), 'src/app');

  const getRoutes = (dir, base = '') => {
    const files = fs.readdirSync(dir);

    let routes = [];

    files.forEach((file) => {
      const fullPath = path.join(dir, file);

      // Skip special folders
      if (file.startsWith('(') || file.startsWith('[')) return;

      if (file.startsWith('page.')) {
        routes.push(base || '');
      }

      if (fs.statSync(fullPath).isDirectory()) {
        routes = routes.concat(getRoutes(fullPath, `${base}/${file}`));
      }
    });

    return routes;
  };

  const routes = getRoutes(pagesDir);

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));
}
