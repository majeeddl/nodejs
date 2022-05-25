module.exports = {
    presets: [['@babel/preset-env', { "modules": "auto",targets: { node: 'current' } }]],
    "plugins": [
        "@babel/transform-runtime"
    ]
};