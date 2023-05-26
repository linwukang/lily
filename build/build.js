/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./dist/index.js":
/*!***********************!*\
  !*** ./dist/index.js ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst Render_1 = __webpack_require__(/*! ./vdom/Render */ \"./dist/vdom/Render.js\");\nconst VNode_1 = __webpack_require__(/*! ./vdom/VNode */ \"./dist/vdom/VNode.js\");\nconst Change_1 = __webpack_require__(/*! ./vdom/diff/Change */ \"./dist/vdom/diff/Change.js\");\nconst Diff_1 = __webpack_require__(/*! ./vdom/diff/Diff */ \"./dist/vdom/diff/Diff.js\");\n// 测试 `VNode`\nfunction testVNode() {\n    console.log(\"================测试 `VNode`================\");\n    let vnode1 = VNode_1.VElementNode.create(\"div\", { class: \"DIV1111\", style: { color: \"red\" } });\n    vnode1.addChildElementNode(\"div\", {}).addChildTextNode(\"这是文本节点1\");\n    vnode1.addChildElementNode(\"div\", {}).addChildTextNode(\"这是文本节点2\");\n    vnode1.addChildTextNode(\"这是文本节点3\");\n    vnode1.addChildTextNode(\"这是文本节点4\");\n    let vnode2 = VNode_1.VElementNode.create(\"div\", { class: \"DIV2222\", style: { color: \"green\" } });\n    vnode2.addChildElementNode(\"div\", {}).addChildTextNode(\"这是文本节点A\");\n    vnode2.addChildElementNode(\"div\", {}).addChildTextNode(\"这是文本节点B\");\n    vnode2.addChildTextNode(\"这是文本节点C\");\n    vnode2.addChildTextNode(\"这是文本节点D\");\n    console.log(vnode1);\n    let node1 = (0, Render_1.renderTo)(vnode1, document.getElementById(\"root1\"));\n    let node2 = (0, Render_1.renderTo)(vnode2, document.getElementById(\"root2\"));\n    // 移除最后一个子节点\n    let change1 = new Change_1.RemoveLastChildNodeChange(node1);\n    console.log(change1.apply());\n    // 移除第一个子节点\n    let change2 = new Change_1.RemoveFirstChildNodeChange(node2);\n    console.log(change2.apply());\n}\n// 测试 `propsPatch`\nfunction testPropsPatch01() {\n    console.log(\"================测试 `propsPatch` 01================\");\n    let vnode1 = VNode_1.VElementNode.create(\"div\", {\n        class: \"DIV1\",\n        \"width\": \"100px\",\n        style: {\n            color: \"red\",\n            \"background-color\": \"blue\"\n        }\n    });\n    let vnode2 = VNode_1.VElementNode.create(\"div\", {\n        class: \"DIV2\",\n        \"v-if\": \"???\",\n        style: {\n            color: \"green\",\n            \"background-color\": \"lightyellow\"\n        }\n    });\n    vnode1.addChildTextNode(\"Node1 我的属性将发生变化\");\n    vnode2.addChildTextNode(\"Node2\");\n    let node1 = (0, Render_1.renderTo)(vnode1, document.getElementById(\"root1\"));\n    let node2 = (0, Render_1.renderTo)(vnode2, document.getElementById(\"root2\"));\n    setTimeout(() => {\n        console.log(\"================CHANGE================\");\n        let changes = (0, Diff_1.propsPatch)(vnode2, vnode1);\n        for (const change of changes) {\n            console.log(change);\n            change.apply();\n        }\n    }, 3000);\n}\n// 测试 `propsPatch`\nfunction testPropsPatch02() {\n    console.log(\"================测试 `propsPatch` 02================\");\n    let props = {\n        class: \"DIV1\",\n        style: {\n            color: \"red\",\n            \"background-color\": \"blue\",\n            width: \"100px\",\n            height: \"100px\",\n            margin: \"10px\",\n        }\n    };\n    let vnode1 = VNode_1.VElementNode.create(\"div\", props);\n    let vnode2 = VNode_1.VElementNode.create(\"div\", props);\n    let vnode3 = VNode_1.VElementNode.create(\"div\", props);\n    let vnode4 = VNode_1.VElementNode.create(\"div\", props);\n    vnode1.addChildTextNode(\"Node1\");\n    vnode2.addChildTextNode(\"Node2\");\n    vnode3.addChildTextNode(\"Node3\");\n    vnode4.addChildTextNode(\"Node4\");\n    let node1 = (0, Render_1.renderTo)(vnode1, document.getElementById(\"root1\"));\n    let node2 = (0, Render_1.renderTo)(vnode2, document.getElementById(\"root1\"));\n    let node3 = (0, Render_1.renderTo)(vnode3, document.getElementById(\"root1\"));\n    let node4 = (0, Render_1.renderTo)(vnode4, document.getElementById(\"root1\"));\n    setTimeout(() => {\n        console.log(\"================CHANGE================\");\n        let changedProps = {\n            class: \"DIV1\",\n            style: {\n                color: \"blue\",\n                \"background-color\": \"#f0f0f0\",\n                width: \"120px\",\n                height: \"120px\",\n                margin: \"10px\",\n            }\n        };\n        let changedVNode = VNode_1.VElementNode.create(\"div\", changedProps);\n        console.log(\"changedVNode: \", changedVNode);\n        let changes1 = (0, Diff_1.propsPatch)(changedVNode, vnode1);\n        let changes2 = (0, Diff_1.propsPatch)(changedVNode, vnode2);\n        let changes3 = (0, Diff_1.propsPatch)(changedVNode, vnode3);\n        let changes4 = (0, Diff_1.propsPatch)(changedVNode, vnode4);\n        for (const change of changes1) {\n            console.log(change);\n            change.apply();\n        }\n        for (const change of changes2) {\n            change.apply();\n        }\n        for (const change of changes3) {\n            change.apply();\n        }\n        for (const change of changes4) {\n            change.apply();\n        }\n    }, 3000);\n}\n// 测试 `textNodePatch`\nfunction testTextNodePatch() {\n    let node1 = VNode_1.VElementNode.create(\"div\", {});\n    let node2 = VNode_1.VElementNode.create(\"div\", {});\n    let textVNode1 = node1.addChildTextNode(\"Text Node 1\");\n    let textVNode2 = node2.addChildTextNode(\"Text Node 2: 我将替换为 Text Node 1\");\n    (0, Render_1.renderTo)(node1, document.getElementById(\"root1\"));\n    (0, Render_1.renderTo)(node2, document.getElementById(\"root2\"));\n    let changes = (0, Diff_1.textNodePatch)(textVNode1, textVNode2);\n    setTimeout(() => {\n        for (const change of changes) {\n            console.log(change);\n            change.apply();\n        }\n    }, 5000);\n}\n// 测试 `patch`\nfunction testPatch() {\n    var _a;\n    console.log(\"================测试 `patch` ================\");\n    let props = {\n        class: \"DIV1\",\n        style: {\n            color: \"red\",\n            \"font-size\": \"30px\",\n            \"line-height\": \"100px\",\n            \"text-align\": \"center\",\n            \"background-color\": \"skyblue\",\n            width: \"100px\",\n            height: \"100px\",\n            margin: \"10px\",\n        }\n    };\n    let old_vnodeParent = VNode_1.VElementNode.create(\"div\", {});\n    let old_ch1 = old_vnodeParent.addChildElementNode(\"div\", props);\n    let old_ch2 = old_vnodeParent.addChildElementNode(\"div\", props);\n    let old_ch3 = old_vnodeParent.addChildElementNode(\"div\", props);\n    let old_ch4 = old_vnodeParent.addChildElementNode(\"div\", props);\n    let old_ch5 = old_vnodeParent.addChildElementNode(\"div\", props);\n    old_ch1.addChildTextNode(\"Ch01\");\n    old_ch2.addChildTextNode(\"Ch02\");\n    old_ch3.addChildTextNode(\"Ch03\");\n    old_ch4.addChildTextNode(\"Ch04\");\n    old_ch5.addChildTextNode(\"Ch05\");\n    (0, Render_1.renderTo)(old_vnodeParent, document.getElementById(\"root1\"));\n    let new_vnodeParent = VNode_1.VElementNode.create(\"div\", {});\n    new_vnodeParent.setKey(old_vnodeParent.getKey());\n    let new_ch1 = new_vnodeParent.addChildElementNode(\"div\", props);\n    let new_ch2 = new_vnodeParent.addChildElementNode(\"div\", props);\n    let new_ch3 = new_vnodeParent.addChildElementNode(\"div\", props);\n    let new_ch4 = new_vnodeParent.addChildElementNode(\"div\", props);\n    let new_ch5 = new_vnodeParent.addChildElementNode(\"div\", props);\n    new_ch1.setKey(old_ch1.getKey());\n    new_ch2.setKey(old_ch2.getKey());\n    new_ch3.setKey(old_ch3.getKey());\n    new_ch4.setKey(old_ch4.getKey());\n    new_ch5.setKey(old_ch5.getKey());\n    function clickButton() {\n        let changes = (0, Diff_1.patch)(new_vnodeParent, old_vnodeParent);\n        for (const change of changes) {\n            change.apply();\n        }\n    }\n    (_a = document.getElementById(\"btn\")) === null || _a === void 0 ? void 0 : _a.addEventListener(\"click\", (event) => {\n        console.log(\"开始变化\");\n        clickButton();\n    });\n}\ntestPatch();\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack://lily/./dist/index.js?");

/***/ }),

/***/ "./dist/vdom/Render.js":
/*!*****************************!*\
  !*** ./dist/vdom/Render.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n/**\n * @author linwukang\n */\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.renderStyles = exports.renderProps = exports.render = exports.renderTo = void 0;\nconst VNode_1 = __webpack_require__(/*! ./VNode */ \"./dist/vdom/VNode.js\");\n/**\n * 将虚拟节点渲染到真实 DOM 元素上\n * @param vnode 需要渲染的虚拟节点\n * @param target 渲染目标\n * @returns 渲染得到的真实 DOM 节点\n *\n * @author linwukang\n */\nfunction renderTo(vnode, target) {\n    return target.appendChild(render(vnode));\n}\nexports.renderTo = renderTo;\n/**\n * 将虚拟节点渲染为真实 DOM 元素\n * @param vnode 需要渲染的虚拟节点\n * @returns 渲染得到的真实 DOM 节点\n *\n * @author linwukang\n */\nfunction render(vnode) {\n    if (vnode instanceof VNode_1.VTextNode) {\n        // 虚拟文本节点\n        let vTextNode = vnode;\n        let textNode = document.createTextNode(vTextNode.getText());\n        vTextNode.node = textNode;\n        return textNode;\n    }\n    else if (vnode instanceof VNode_1.VElementNode) {\n        // 虚拟元素节点\n        let vElement = vnode;\n        let element = document.createElement(vElement.getTagName());\n        renderProps(element, vElement.getTagProps());\n        vElement\n            .getChildren()\n            .map(childNode => render(childNode))\n            .forEach(node => element.appendChild(node));\n        vElement.node = element;\n        return element;\n    }\n    throw new Error('unknown node type');\n}\nexports.render = render;\n/**\n * 向真实 DOM 元素上渲染属性\n * @param element 真实 DOM 元素\n * @param props 需要渲染的属性\n * @returns 真实 DOM 节点\n *\n * @author linwukang\n */\nfunction renderProps(element, props) {\n    for (const propName in props) {\n        if (propName === 'style') {\n            renderStyles(element, props[propName]);\n        }\n        else if (props[propName] instanceof Object) {\n            element.setAttribute(propName, JSON.stringify(props[propName]));\n        }\n        else {\n            element.setAttribute(propName, props[propName]);\n        }\n    }\n    return element;\n}\nexports.renderProps = renderProps;\n/**\n * 向真实 DOM 元素上渲染样式\n * @param element 真实 DOM 元素\n * @param styles 需要渲染的样式\n * @returns 真实 DOM 节点\n *\n * @author linwukang\n */\nfunction renderStyles(element, styles) {\n    for (const styleName in styles) {\n        if (Object.prototype.hasOwnProperty.call(styles, styleName)) {\n            element.style.setProperty(styleName, styles[styleName]);\n        }\n    }\n    return element;\n}\nexports.renderStyles = renderStyles;\n//# sourceMappingURL=Render.js.map\n\n//# sourceURL=webpack://lily/./dist/vdom/Render.js?");

/***/ }),

/***/ "./dist/vdom/VNode.js":
/*!****************************!*\
  !*** ./dist/vdom/VNode.js ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n/**\n * @author linwukang\n */\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.VTextNode = exports.VElementNode = exports.AbstractVElementNode = exports.AbstractVNode = void 0;\nconst KeyUtil_1 = __webpack_require__(/*! ./util/KeyUtil */ \"./dist/vdom/util/KeyUtil.js\");\nlet keyCounter = new KeyUtil_1.KeyCounter();\n/**\n * 抽象 DOM 虚拟节点\n * 定义了通用的属性和方法\n *\n * @author linwukang\n */\nclass AbstractVNode {\n    constructor() {\n        /**\n         * 父虚拟节点属性\n         * 类型只能是 AbstractVElementNode 的派生类或者null\n         */\n        this.parentVNode = null;\n        /**\n         * 真实 DOM 节点\n         * 未对虚拟节点进行渲染时为 null\n         * 对虚拟节点进行渲染后为对应的真实 DOM 节点\n         */\n        this.node = null;\n        /**\n         * 是否为注释\n         */\n        this.comment = false;\n        this.key = keyCounter.next();\n    }\n    setParentVNode(parentVNode) {\n        this.parentVNode = parentVNode;\n    }\n    getParentVNode() {\n        return this.parentVNode;\n    }\n    getKey() {\n        return this.key;\n    }\n    setKey(key) {\n        this.key = key;\n    }\n    getNode() {\n        return this.node;\n    }\n    isComment() {\n        return this.comment;\n    }\n}\nexports.AbstractVNode = AbstractVNode;\n/**\n * 虚拟 DOM 元素接口\n *\n * @author linwukang\n */\nclass AbstractVElementNode extends AbstractVNode {\n    getNode() {\n        return this.node;\n    }\n}\nexports.AbstractVElementNode = AbstractVElementNode;\n/**\n * 虚拟 DOM 元素类\n *\n * @author linwukang\n */\nclass VElementNode extends AbstractVElementNode {\n    constructor(tagName, props, parentNode, childNodes) {\n        super();\n        this.tagName = tagName;\n        this.props = props;\n        super.parentVNode = parentNode != undefined ? parentNode : null;\n        this.childNodes = childNodes == undefined ? [] : childNodes;\n        this.node = null;\n    }\n    /**\n     * 工厂方法创建一个虚拟节点\n     * @param name 虚拟节点的标签名\n     * @param props 虚拟节点的属性\n     * @returns 新建的虚拟节点\n     */\n    static create(name, props) {\n        return new VElementNode(name, props);\n    }\n    addChildElementNode(name, props) {\n        let newChildNode = VElementNode.create(name, props);\n        newChildNode.setParentVNode(this);\n        this.childNodes.push(newChildNode);\n        return newChildNode;\n    }\n    addChildTextNode(text) {\n        let newTextNode = VTextNode.create(text, this);\n        this.childNodes.push(newTextNode);\n        return newTextNode;\n    }\n    getTagName() {\n        return this.tagName;\n    }\n    getTagProps() {\n        return this.props;\n    }\n    getChildren() {\n        // 返回子节点数组的副本，防止在外部修改数组\n        return this.childNodes.slice();\n    }\n}\nexports.VElementNode = VElementNode;\n/**\n * 虚拟文本节点\n *\n * @author linwukang\n */\nclass VTextNode extends AbstractVNode {\n    constructor(text, parentNode) {\n        super();\n        this.text = text;\n    }\n    getText() {\n        return this.text;\n    }\n    static create(text, parentNode) {\n        return new VTextNode(text, parentNode);\n    }\n}\nexports.VTextNode = VTextNode;\n//# sourceMappingURL=VNode.js.map\n\n//# sourceURL=webpack://lily/./dist/vdom/VNode.js?");

/***/ }),

/***/ "./dist/vdom/diff/Change.js":
/*!**********************************!*\
  !*** ./dist/vdom/diff/Change.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.DeleteAttributeChange = exports.SetAttributeChange = exports.RemoveFirstChildNodeChange = exports.RemoveLastChildNodeChange = exports.AppendChildNodeChange = exports.ReplaceTextChange = exports.ReplaceNodeChange = exports.NoChange = void 0;\n/**\n * @author linwukang\n */\nconst Render_1 = __webpack_require__(/*! ../Render */ \"./dist/vdom/Render.js\");\n/**\n * 无变化\n *\n * @author linwukang\n */\nclass NoChange {\n    constructor(target) {\n        this.target = target;\n    }\n    getTarget() {\n        return this.target;\n    }\n    apply() {\n        return true;\n    }\n}\nexports.NoChange = NoChange;\n/**\n * 节点替换\n *\n * @author linwukang\n */\nclass ReplaceNodeChange {\n    constructor(targetNode, newNode) {\n        this.targetNode = targetNode;\n        this.newNode = newNode;\n    }\n    getTarget() {\n        return this.targetNode;\n    }\n    apply() {\n        if (this.targetNode.parentNode != null) {\n            let node = this.newNode.getNode();\n            this.targetNode.parentNode.replaceChild(node == null ? (0, Render_1.render)(this.newNode) : node, this.targetNode);\n            return true;\n        }\n        return false;\n    }\n}\nexports.ReplaceNodeChange = ReplaceNodeChange;\n/**\n * 文本节点的文本替换\n *\n * @author linwukang\n */\nclass ReplaceTextChange {\n    constructor(target, text) {\n        this.target = target;\n        this.text = text;\n    }\n    getTarget() {\n        return this.target;\n    }\n    apply() {\n        this.target.nodeValue = this.text;\n        return true;\n    }\n}\nexports.ReplaceTextChange = ReplaceTextChange;\n/**\n * 向最后添加一个子节点\n *\n * @author linwukang\n */\nclass AppendChildNodeChange {\n    constructor(targetNode, newChildNode) {\n        this.targetNode = targetNode;\n        this.newChildNode = newChildNode;\n    }\n    getTarget() {\n        return this.targetNode;\n    }\n    apply() {\n        this.targetNode.appendChild((0, Render_1.render)(this.newChildNode));\n        return true;\n    }\n}\nexports.AppendChildNodeChange = AppendChildNodeChange;\n/**\n * 移除最后一个子节点\n *\n * @author linwukang\n */\nclass RemoveLastChildNodeChange {\n    constructor(targetNode) {\n        this.targetNode = targetNode;\n    }\n    getTarget() {\n        return this.targetNode;\n    }\n    apply() {\n        if (this.targetNode.lastChild != null) {\n            this.targetNode.removeChild(this.targetNode.lastChild);\n            return true;\n        }\n        return false;\n    }\n}\nexports.RemoveLastChildNodeChange = RemoveLastChildNodeChange;\n/**\n * 移除第一个子节点\n *\n * @author linwukang\n */\nclass RemoveFirstChildNodeChange {\n    constructor(targetNode) {\n        this.targetNode = targetNode;\n    }\n    getTarget() {\n        return this.targetNode;\n    }\n    apply() {\n        if (this.targetNode.firstChild != null) {\n            this.targetNode.removeChild(this.targetNode.firstChild);\n            return true;\n        }\n        return false;\n    }\n}\nexports.RemoveFirstChildNodeChange = RemoveFirstChildNodeChange;\n//////////////////////////\n/**\n * 向目标元素添加或修改属性\n *\n * @author linwukang\n */\nclass SetAttributeChange {\n    constructor(target, key, value) {\n        let node = target.getNode();\n        if (node != null) {\n            this.targetNode = node;\n            this.key = key;\n            this.value = value;\n        }\n        else {\n            throw new Error(target + \"不是一个已被渲染的虚拟元素节点\");\n        }\n    }\n    getTarget() {\n        return this.targetNode;\n    }\n    apply() {\n        (0, Render_1.renderProps)(this.targetNode, { [this.key]: this.value });\n        return true;\n    }\n}\nexports.SetAttributeChange = SetAttributeChange;\n/**\n * 向目标元素删除属性\n *\n * @author linwukang\n */\nclass DeleteAttributeChange {\n    constructor(target, key) {\n        this.targetNode = target;\n        this.key = key;\n    }\n    getTarget() {\n        return this.targetNode;\n    }\n    apply() {\n        this.targetNode.removeAttribute(this.key);\n        return true;\n    }\n}\nexports.DeleteAttributeChange = DeleteAttributeChange;\n//# sourceMappingURL=Change.js.map\n\n//# sourceURL=webpack://lily/./dist/vdom/diff/Change.js?");

/***/ }),

/***/ "./dist/vdom/diff/Diff.js":
/*!********************************!*\
  !*** ./dist/vdom/diff/Diff.js ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n/**\n * @author linwukang\n */\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.childNodePatch = exports.textNodePatch = exports.propsPatch = exports.patch = void 0;\nconst VNode_1 = __webpack_require__(/*! ../VNode */ \"./dist/vdom/VNode.js\");\nconst Change_1 = __webpack_require__(/*! ./Change */ \"./dist/vdom/diff/Change.js\");\nconst SameVNode_1 = __webpack_require__(/*! ./SameVNode */ \"./dist/vdom/diff/SameVNode.js\");\nfunction* patch(newNode, oldNode) {\n    console.log(\"===============0\");\n    if (!(0, SameVNode_1.sameVNode)(newNode, oldNode)) {\n        console.log(\"===============1\");\n        yield new Change_1.ReplaceNodeChange(oldNode.getNode(), newNode);\n        return;\n    }\n    if (newNode instanceof VNode_1.VTextNode && oldNode instanceof VNode_1.VTextNode) {\n        console.log(\"===============1\");\n        yield* textNodePatch(newNode, oldNode);\n        return;\n    }\n    if (newNode instanceof VNode_1.VElementNode && oldNode instanceof VNode_1.VElementNode) {\n        console.log(\"===============3\");\n        yield* propsPatch(newNode, oldNode);\n        yield* childNodePatch(newNode, oldNode);\n        return;\n    }\n    throw new Error(\"not implemented\");\n}\nexports.patch = patch;\n/**\n * 比较两个虚拟节点属性的变化，并返回 {@link IChange} 的序列\n * {@link IChange} 序列中的 {@link IChange} 对象的目标是旧的虚拟节点所对应的真实 DOM 节点\n * @param newVNode 新的虚拟节点\n * @param oldVNode 旧的虚拟节点。必须是已渲染的节点，即 `oldVNode.getNode()` 不为 `null`\n * @returns 序列 {@link Generator<IChange>}\n *\n * @author linwukang\n */\nfunction* propsPatch(newVNode, oldVNode) {\n    let oldNode = oldVNode.getNode();\n    let newProps = newVNode.getTagProps();\n    let oldProps = oldVNode.getTagProps();\n    for (const prop in newProps) {\n        if (oldProps.hasOwnProperty(prop)) {\n            // 新的 props 有，旧的 props 也有的属性 prop\n            let newValue = newProps[prop];\n            let oldValue = oldProps[prop];\n            if (typeof newValue !== typeof oldValue) {\n                yield new Change_1.SetAttributeChange(oldVNode, prop, newValue);\n            }\n            else if (newValue === oldValue) {\n                // 不发生 Change \n                // yield new NoChange(oldProps)\n            }\n            else {\n                yield new Change_1.SetAttributeChange(oldVNode, prop, newValue);\n            }\n        }\n        else {\n            // 新的 props 有，旧的 props 没有的属性 prop\n            yield new Change_1.SetAttributeChange(oldVNode, prop, newProps[prop]);\n        }\n    }\n    for (const key in oldProps) {\n        if (!newProps.hasOwnProperty(key)) {\n            // 旧的 props 有，新的 props 没有的属性 key\n            // 删除操作\n            yield new Change_1.DeleteAttributeChange(oldNode, key);\n        }\n    }\n    return;\n}\nexports.propsPatch = propsPatch;\n/**\n * 比较两个虚拟文本节点的变化，并返回 {@link IChange} 的序列\n * {@link IChange} 序列中的 {@link IChange} 对象的目标是旧的虚拟文本节点所对应的真实 DOM 节点\n * @param newTextVNode 新的虚拟文本节点\n * @param oldTextVNode 旧的虚拟文本节点。必须是已渲染的节点，即 `oldTextVNode.getNode()` 不为 `null`\n * @returns 序列 {@link Generator<IChange>}\n *\n * @author linwukang\n */\nfunction* textNodePatch(newTextVNode, oldTextVNode) {\n    if (newTextVNode.getText() === oldTextVNode.getText()) {\n        return;\n    }\n    else {\n        yield new Change_1.ReplaceTextChange(oldTextVNode.getNode(), newTextVNode.getText());\n        return;\n    }\n}\nexports.textNodePatch = textNodePatch;\nfunction* childNodePatch(newVNode, oldVNode) {\n    let newChildren = newVNode.getChildren();\n    let oldChildren = oldVNode.getChildren();\n    let newStartIdx = 0; // 新前\n    let newEndIdx = newChildren.length - 1; // 新后\n    let oldStartIdx = 0; // 旧前\n    let oldEndIdx = oldChildren.length - 1; // 旧后\n    while (newStartIdx <= newEndIdx && oldStartIdx <= oldEndIdx) {\n        let newStartVNode = newChildren[newStartIdx]; // 新前虚拟节点\n        let newEndVNode = newChildren[newEndIdx]; // 新后虚拟节点\n        let oldStartVNode = newChildren[oldStartIdx]; // 旧前虚拟节点\n        let oldEndVNode = newChildren[oldEndIdx]; // 旧后虚拟节点\n        if ((0, SameVNode_1.sameVNode)(newStartVNode, oldStartVNode)) {\n            // 新前-旧前 命中\n            console.log(\"新前-旧前 命中\");\n            newStartIdx++;\n            oldStartIdx++;\n        }\n        else if ((0, SameVNode_1.sameVNode)(newEndVNode, oldEndVNode)) {\n            // 新后-旧后 命中\n            console.log(\"新后-旧后 命中\");\n            newEndIdx--;\n            oldEndIdx--;\n        }\n        else if ((0, SameVNode_1.sameVNode)(newStartVNode, oldEndVNode)) {\n            // 新前-旧后 命中\n            console.log(\"新前-旧后 命中\");\n            newStartIdx++;\n            oldEndIdx--;\n        }\n        else if ((0, SameVNode_1.sameVNode)(newEndVNode, oldStartVNode)) {\n            // 新后-旧前 命中\n            console.log(\"新后-旧前 命中\");\n            newEndIdx--;\n            oldStartIdx++;\n        }\n        else {\n            console.log(\"未命中\");\n        }\n    }\n}\nexports.childNodePatch = childNodePatch;\n//# sourceMappingURL=Diff.js.map\n\n//# sourceURL=webpack://lily/./dist/vdom/diff/Diff.js?");

/***/ }),

/***/ "./dist/vdom/diff/SameVNode.js":
/*!*************************************!*\
  !*** ./dist/vdom/diff/SameVNode.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n/**\n * @author linwukang\n */\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.sameVNode = void 0;\nconst VNode_1 = __webpack_require__(/*! ../VNode */ \"./dist/vdom/VNode.js\");\n/**\n * 判断两个虚拟节点是否为同样的节点\n * 同样的节点的依据：\n * - 两个虚拟节点的 `key` 相同\n * - 两个虚拟节点为 {@link VElementNode} 时，标签名相同\n * - 两个虚拟节点都为虚拟文本节点\n * @param vNode1 虚拟节点 1\n * @param vNode2 虚拟节点 2\n * @returns 相同返回 `ture`，不同返回 `false`\n *\n * @author linwukang\n */\nfunction sameVNode(vNode1, vNode2) {\n    return vNode1.getKey() === vNode2.getKey()\n        && ((vNode1 instanceof VNode_1.VElementNode\n            && vNode2 instanceof VNode_1.VElementNode\n            && vNode1.getTagName() === vNode2.getTagName())\n            ||\n                (vNode1 instanceof VNode_1.VTextNode\n                    && vNode2 instanceof VNode_1.VTextNode));\n}\nexports.sameVNode = sameVNode;\n//# sourceMappingURL=SameVNode.js.map\n\n//# sourceURL=webpack://lily/./dist/vdom/diff/SameVNode.js?");

/***/ }),

/***/ "./dist/vdom/util/KeyUtil.js":
/*!***********************************!*\
  !*** ./dist/vdom/util/KeyUtil.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.KeyCounter = void 0;\nclass KeyCounter {\n    constructor() {\n        this.count = 0;\n    }\n    next() {\n        return this.count++;\n    }\n}\nexports.KeyCounter = KeyCounter;\n//# sourceMappingURL=KeyUtil.js.map\n\n//# sourceURL=webpack://lily/./dist/vdom/util/KeyUtil.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./dist/index.js");
/******/ 	
/******/ })()
;