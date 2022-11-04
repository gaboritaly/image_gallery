import IStyleAdapter from "../interfaces/IStyleAdapter";

/**
 * CssAdapter
 *
 * @remarks
 * Adds className to html node
 */
export default class CssAdapter implements IStyleAdapter {
  /**
   * Applys style
   * @param node: HTMLElement
   * @param  style: string
   */
  applyStyle(node: HTMLElement, style: string) {
    node.className = style;
  }
}
