import config from '../config/roc.config.js';
import meta from '../config/roc.config.meta.js';

export default {
    config,
    meta,
    packages: [
        require.resolve('roc-abstract-package-base-dev')
    ]
};
