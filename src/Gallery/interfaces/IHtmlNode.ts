/**
 * IHtmlNode
 *
 * @remarks
 * This interface for components who manipulate dom element
 */
export default interface IHtmlNode {
  node: HTMLElement;
  addNode(node: HTMLElement): void;
}
