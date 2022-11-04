import Container from "./accessories/container/Container";
import GalleryEvents from "./constants/GalleryEvents";
import SimpleEvent from "../SimpleEvent/SimpleEvent";
import GalleryImageType from "./types/GalleryImageType";
import IGalleryImages from "./interfaces/IGalleryImages";
import IHtmlNode from "./interfaces/IHtmlNode";

/**
 * Gallery
 */
export default class Gallery
  extends SimpleEvent<GalleryEvents>
  implements IGalleryImages, IHtmlNode
{
  /**
   * Gallery images of gallery
   */
  galleryImages: GalleryImageType[] = [];
  /**
   * Current index of gallery
   */
  private _currentIndex = 0;
  /**
   * Container  of gallery
   */
  private _container: Container;
  /**
   * Node to append of gallery
   */
  private _nodeToAppend: HTMLElement;

  /**
   * Creates an instance of gallery.
   * @param nodeToAppend: HTMLElement
   * @param [container = new Container("div")]
   */
  constructor(nodeToAppend: HTMLElement, container = new Container("div")) {
    super();
    this._container = container;
    this._nodeToAppend = nodeToAppend;
  }

  /**
   * Get HTML node of container
   */
  get node() {
    return this._container.node;
  }

  /**
   * Add HTML node to current container
   * @param node
   */
  addNode(node: HTMLElement): void {
    this._container.addNode(node);
  }

  /**
   * Set current index
   * @param index
   */
  setCurrentIndex(index: number) {
    if (index < 0 || index > this.galleryImages.length)
      throw "A kép index értéke határon kivüli.";
    this._currentIndex = index;
    this.emit(GalleryEvents.onCurrentIdexChange, index);
  }

  /**
   * Get current index
   */
  get currentIndex() {
    return this._currentIndex;
  }

  /**
   * Add image
   * @param image
   */
  addImage(image: GalleryImageType) {
    this.galleryImages.push(image);
    this.emit(GalleryEvents.onImageAdded, image);
  }

  /**
   * Add multiple images
   * @param images
   */
  addImages(images: GalleryImageType[]) {
    images.forEach((image) => this.addImage(image));
  }

  /**
   * Build gallery
   */
  build() {
    window.addEventListener("DOMContentLoaded", (_) => {
      this._nodeToAppend.appendChild(this._container.node);
    });
  }
}
