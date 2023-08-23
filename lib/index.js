'use strict';

var fs = require('node:fs');
var process$1 = require('node:process');

function _interopNamespaceDefault(e) {
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n.default = e;
    return Object.freeze(n);
}

var process__namespace = /*#__PURE__*/_interopNamespaceDefault(process$1);

function buildGraph(path, dept, devFlag) {
    const NodeList = [];
    const EdgeList = [];
    const NodeMap = new Map();
    const dep = 0;
    const graphBuild = (path, depth) => {
        if (depth >= dept)
            return;
        const packageJSONPath = `${path}/package.json`;
        let json;
        try {
            json = fs.readFileSync(packageJSONPath);
        }
        catch (e) {
            console.log(e);
        }
        const root = JSON.parse(json);
        if (NodeMap.get(root.name)) {
            // TODO 多版本问题&&环形依赖
            return;
        }
        NodeMap.set(root.name, root.version);
        NodeList.push({
            name: root.name,
            nodeId: root.name,
            version: root.version,
        });
        const dependencies = devFlag
            ? {
                ...root.dependencies,
                ...root.devDependencies,
            }
            : root.dependencies;
        if (dependencies == null)
            return;
        Object.keys(dependencies).forEach((key) => {
            EdgeList.push({
                edgeId: `${root.name}-${key}`,
                source: {
                    name: root.name,
                    nodeId: root.name,
                    version: root.version,
                },
                target: {
                    name: key,
                    nodeId: key,
                    version: dependencies[key],
                },
            });
            graphBuild(`${process__namespace.cwd()}/node_modules/${key}`, depth + 1);
        });
    };
    graphBuild(path, dep);
    return {
        NodeList,
        EdgeList,
    };
}

function analyze(path = '', dept = 2, devFlag = false) {
    const result = buildGraph(process.cwd(), dept, devFlag);
    console.log(result.NodeList.length, result.EdgeList.length);
}

exports.analyze = analyze;
