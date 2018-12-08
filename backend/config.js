/* @flow */

import path from 'path';
import fs from 'fs';

export const expressPort = process.env.PORT || 4000;
export const mongoUri =
  process.env.MONGODB_URI || 'mongodb://localhost:27017/shopdux';
export const examplesPath = './module';

export function getDirectories(srcPath: string): string[] {
  return fs
    .readdirSync(srcPath)
    .filter(file => fs.statSync(path.join(srcPath, file)).isDirectory());
}

export function resolveExamplePath(...args: any) {
  return path.resolve(examplesPath, ...args);
}

export function getExampleNames() {
  const preferableOrder = ['shopdux'];
  const dirs = getDirectories(examplesPath);

  const result = [];
  preferableOrder.forEach(name => {
    const idx = dirs.indexOf(name);
    if (idx !== -1) {
      result.push(name);
      dirs.splice(idx, 1);
    }
  });
  dirs.forEach(name => {
    result.push(name);
  });

  return result;
}
