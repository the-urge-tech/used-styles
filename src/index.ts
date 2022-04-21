import { enableReactOptimization } from './config';
import { createLink } from './createLink';
import { getCriticalRules, extractCriticalRules, getCriticalStyles, getUsedStyles } from './getCSS';
import { alterProjectStyles } from './operations';
import { createCriticalStyleStream } from './reporters/critical';
import { createStyleStream } from './reporters/used';
import { loadStyleDefinitions, parseProjectStyles } from './scanForStylesWorker';

import { createUsedFilter as createUsedSelectorsFilter } from './utils/cache';

export { UsedTypes, StyleDefinition, SelectionFilter } from './types';

export {
  createUsedSelectorsFilter,
  loadStyleDefinitions,
  parseProjectStyles,
  alterProjectStyles,
  getUsedStyles,
  getCriticalStyles,
  getCriticalRules,
  extractCriticalRules,
  createStyleStream,
  createCriticalStyleStream,
  createLink,
  enableReactOptimization,
};
