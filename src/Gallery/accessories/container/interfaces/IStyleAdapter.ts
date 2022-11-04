/**
 * IStyleAdapter
 *
 * @remarks
 * Interface for styled Adapters
 *
 */
export default interface IStyleAdapter {
  applyStyle(node: HTMLElement, style: string | CSSStyleDeclaration): void;
}
