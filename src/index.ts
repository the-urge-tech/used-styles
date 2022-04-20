import { enableReactOptimization } from './config';
import { createLink } from './createLink';
// import { discoverProjectStyles } from './discoverProjectStyles';
import { getCriticalRules, extractCriticalRules, getCriticalStyles, getUsedStyles } from './getCSS';
import { loadStyleDefinitions, parseProjectStyles } from './loadStyleDefinitions';
import { alterProjectStyles } from './operations';
import { createCriticalStyleStream } from './reporters/critical';
import { createStyleStream } from './reporters/used';

import { createUsedFilter as createUsedSelectorsFilter } from './utils/cache';

export { UsedTypes, StyleDefinition, SelectionFilter } from './types';

export {
  createUsedSelectorsFilter,
  loadStyleDefinitions,
  // discoverProjectStyles,
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
