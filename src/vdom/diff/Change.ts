/**
 * @author linwukang
 */
import { render, renderProps } from "../Render"
import { IVNode, VElementNode, VNode } from "../VNode"

/**
 * 变化接口
 * 用于记录对象和值的变化
 * 
 * @author linwukang
 */
export interface IChange {
    /**
     * 获取目标对象
     */
    getTarget(): Node

    /**
     * 执行变化，修改真实 DOM
     */
    apply(): boolean
}

/**
 * 无变化
 * 
 * @author linwukang
 */
export class NoChange implements IChange {
    private target: any
    constructor(target: any) {
        this.target = target
    }

    getTarget(): any {
        return this.target
    }

    apply(): boolean {
        return true
    }
}

/**
 * 节点替换
 * 
 * @author linwukang
 */
export class ReplaceNodeChange implements IChange {
    private targetNode: Node
    private newNode: IVNode
    constructor(targetNode: Node, newNode: IVNode) {
        this.targetNode = targetNode
        this.newNode = newNode
    }
    getTarget(): Node {
        return this.targetNode
    }
    apply(): boolean {
        if (this.targetNode.parentNode != null) {
            let node = this.newNode.getNode()

            this.targetNode.parentNode.replaceChild(
                node == null ? render(this.newNode) : node, 
                this.targetNode)
            return true
        }
        return false
    }
}

/**
 * 文本节点的文本替换
 * 
 * @author linwukang
 */
export class ReplaceTextChange implements IChange {
    target: Text
    text: string
    constructor(target: Text, text: string) {
        this.target = target
        this.text = text
    }


    getTarget(): Text {
        return this.target
    }
    apply(): boolean {
        this.target.nodeValue = this.text
        return true
    }

}


/**
 * 向最后添加一个子节点
 * 
 * @author linwukang
 */
export class AppendChildNodeChange implements IChange {
    private targetNode: HTMLElement
    private newChildNode: IVNode

    constructor(target: VElementNode, newChildNode: IVNode) {
        this.targetNode = target.getNode() as HTMLElement
        this.newChildNode = newChildNode
    }

    getTarget(): HTMLElement {
        return this.targetNode
    }
    apply(): boolean {
        this.targetNode.appendChild(render(this.newChildNode))
        return true
    }

}

/**
 * 移除最后一个子节点
 * 
 * @author linwukang
 */
export class RemoveLastChildNodeChange implements IChange {
    private targetNode: HTMLElement
    constructor(targetNode: VElementNode) {
        this.targetNode = targetNode.getNode() as HTMLElement
    }

    getTarget(): HTMLElement {
        return this.targetNode
    }
    
    apply(): boolean {
        if (this.targetNode.lastChild != null) {
            this.targetNode.removeChild(this.targetNode.lastChild)
            return true
        }
        
        return false
    }
        
}

/**
 * 移除第一个子节点
 * 
 * @author linwukang
 */
export class RemoveFirstChildNodeChange implements IChange {
    private targetNode: HTMLElement
    constructor(target: VElementNode) {
        this.targetNode = target.getNode() as HTMLElement
    }

    getTarget(): Node {
        return this.targetNode
    }

    apply(): boolean {
        if (this.targetNode.firstChild != null) {
            this.targetNode.removeChild(this.targetNode.firstChild)
            return true
        }
        
        return false
    }
}

/**
 * 插入到子节点之前
 * 
 * @author linwukang
 */
export class InsertBeforeChildChange implements IChange {
    private targetNode: HTMLElement
    private targetChildVNode: VNode
    private insertVNode: VNode
    constructor(target: VElementNode, targetChildVNode: VNode, insertVNode: VNode) {
        this.targetNode = target.getNode() as HTMLElement
        this.targetChildVNode = targetChildVNode
        this.insertVNode = insertVNode
    }

    getTarget(): Node {
        return this.targetNode
    }

    apply(): boolean {
        let insertNode = this.insertVNode.getNode()

        if (insertNode == null) {
            insertNode = render(this.insertVNode)
        }
        this.targetNode.insertBefore(insertNode, this.targetChildVNode.getNode() as Node)

        return true
    }
}

/**
 * 插入到子节点之后
 * 
 * @author linwukang
 */
export class InsertAfterChildChange implements IChange {
    private targetNode: HTMLElement
    private targetChildVNode: VNode
    private insertVNode: VNode
    constructor(target: VElementNode, targetChildVNode: VNode, insertVNode: VNode) {
        this.targetNode = target.getNode() as HTMLElement
        this.targetChildVNode = targetChildVNode
        this.insertVNode = insertVNode
    }

    getTarget(): Node {
        return this.targetNode
    }

    apply(): boolean {
        let insertNode = this.insertVNode.getNode()

        if (insertNode == null) {
            insertNode = render(this.insertVNode)
        }
        const nextSibling = this.targetChildVNode.getNode()?.nextSibling

        if (nextSibling == null) {
            this.targetNode.appendChild(insertNode)
        }
        else {
            this.targetNode.insertBefore(insertNode, nextSibling)
        }

        return true
    }
}

/**
 * 移除子节点
 * 
 * @author linwukang
 */
export class RemoveChildChange implements IChange {
    private targetNode: HTMLElement
    private childNode: Node
    constructor(target: VElementNode, childNode: VNode) {
        this.targetNode = target.getNode() as HTMLElement
        this.childNode = childNode.getNode() as Node
    }

    getTarget(): Node {
        return this.targetNode
    }

    apply(): boolean {
        this.targetNode.removeChild(this.childNode)
        return true
    }
}

//////////////////////////

/**
 * 向目标元素添加或修改属性
 * 
 * @author linwukang
 */
export class SetAttributeChange implements IChange {
    private targetNode: HTMLElement
    private key: string
    private value: any
    constructor(target: VElementNode, key: string, value: any) {
        let node = target.getNode()
        if (node != null) {
            this.targetNode = node
            this.key = key
            this.value = value
        }
        else {
            throw new Error(target + "不是一个已被渲染的虚拟元素节点")
        }
    }

    getTarget() {
        return this.targetNode
    }
    apply(): boolean {
        renderProps(this.targetNode, { [this.key]: this.value })
        return true
    }
}

/**
 * 向目标元素删除属性
 * 
 * @author linwukang
 */
export class DeleteAttributeChange implements IChange {
    private targetNode: HTMLElement
    private key: string
    constructor(target: HTMLElement, key: string) {
        this.targetNode = target
        this.key = key
    }

    getTarget() {
        return this.targetNode
    }
    apply(): boolean {
        this.targetNode.removeAttribute(this.key)
        return true
    }
}