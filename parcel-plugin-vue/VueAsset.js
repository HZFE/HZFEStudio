const JSAsset = require('parcel-bundler/src/assets/JSAsset');
const parse = require('posthtml-parser');
const api = require('posthtml/lib/api');
const render = require('posthtml-render');
const compiler = require('vueify').compiler;
const path = require('path');

module.exports = class VueAsset extends JSAsset {
    constructor(name, pkg, options) {
        super(name, pkg, options);
    }

    async parse(code) {
        const js = await new Promise((r, j) => {
            // filePath should be an absolute path
            compiler.compile(code, path.resolve(__dirname), function (err, result) {
                console.log('[result]', err);
                r(result);
            });
        });
        return super.parse(js);
    }
}