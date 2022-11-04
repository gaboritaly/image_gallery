import IHtmlNode from "../../interfaces/IHtmlNode";
import CssAdapter from "./adapters/CssAdapter";
import InlineAdapter from "./adapters/InlineAdapter";
import IStyleAdapter from "./interfaces/IStyleAdapter";

/**
 * Container
 *
 * @remarks
 * Micro class to manage html nodes, and node styles
 */
export default class Container implements IHtmlNode {
  /**
   * HTML node  of container
   */
  private _node: HTMLElement;

  /**
   * Adapter  of container
   */
  private _adapter: IStyleAdapter;

  /**
   * Creates an instance of container.
   * @param nodeName: string
   * @param [style:CSSStyleDeclaration]
   */
  constructor(
    nodeName: string,
    style: string | CSSStyleDeclaration = {} as CSSStyleDeclaration
  ) {
    this._node = document.createElement(nodeName);

    switch (typeof style) {
      case "string":
        this._adapter = new CssAdapter();
        break;
      case "object":
        this._adapter = new InlineAdapter();
        break;
    }
    this._adapter.applyStyle(this._node, style);
  }

  /**
   * Gets html node
   */
  get node() {
    return this._node;
  }

  /**
   * Adds node
   * @param node
   */
  addNode(node: HTMLElement): void {
    this._node.appendChild(node);
  }
}
