import IStyleAdapter from "../interfaces/IStyleAdapter";

/**
 * Inline Adapter
 *
 * @remarks
 * Adds inline style to html node
 */
export default class InlineAdapter implements IStyleAdapter {
  /**
   * Applys style
   * @param node: HTMLElement
   * @param style: CSSStyleDeclaration
   */
  applyStyle(node: HTMLElement, style: CSSStyleDeclaration) {
    for (const property in style) {
      node.style[property] = style[property];
    }
  }
}
