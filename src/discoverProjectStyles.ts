import { readFile } from 'fs';
import { extname, join, relative } from 'path';

import { promisify } from 'util';

// @ts-ignore
import scanDirectory from 'scan-directory';

import { loadStyleDefinitions, passAll } from './loadStyleDefinitions';
import { StyleDefinition } from './types';

const RESOLVE_EXTENSIONS = ['.css'];

const pReadFile = promisify(readFile);

export const getFileContent = (file: string) => pReadFile(file, 'utf8');

/**
 * auto discovers style files in a given dir applying a given "ordering" filter
 * @see Use {@link loadStyleDefinitions} as a full customizable variant
 * @param rootDir - location of the build artefact
 * @param fileFilter - filter and ordering, return false to skip the file, return true or null to not change file order, sort index otherwise
 */
export function discoverProjectStyles(
  rootDir: string,
  fileFilter: (fileName: string) => boolean | number | null = passAll
): StyleDefinition {
  return loadStyleDefinitions(
    async () =>
      ((await scanDirectory(rootDir, undefined, () => false)) as string[])
        .filter((name) => RESOLVE_EXTENSIONS.indexOf(extname(name)) >= 0)
        .map((file) => relative(rootDir, file))
        .sort(),
    (fileName) => getFileContent(join(rootDir, fileName)),
    fileFilter
  );
}
