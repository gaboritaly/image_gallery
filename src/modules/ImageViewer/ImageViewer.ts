import Container from "../../Gallery/accessories/container/Container";
import GalleryImageType from "../../Gallery/types/GalleryImageType";
import IHtmlNode from "../../Gallery/interfaces/IHtmlNode";

/**
 * ImageViewer
 *
 * @remarks
 * Show a big selected image.
 *
 */
export default class ImageViewer implements IHtmlNode {
  /**
   * Image  of image viewer
   */
  private _image: HTMLImageElement;

  /**
   * Container  of image viewer
   */
  private _container: Container;

  /**
   * Creates an instance of image viewer.
   * @param [container = new Container("div")]
   */
  constructor(container = new Container("div")) {
    this._container = container;
    this._image = this._getImage();
    this._container.addNode(this._image);
  }

  /**
   * Gets node
   */
  get node() {
    return this._container.node;
  }

  /**
   * Adds node
   * @param node
   */
  addNode(node: HTMLElement): void {
    this._container.addNode(node);
  }

  /**
   * Sets current image
   * @param img
   */
  setCurrentImage(img: GalleryImageType) {
    this._image.src = img.url;
  }

  /**
   * Gets image
   * @returns image
   */
  private _getImage(): HTMLImageElement {
    var image = document.createElement("img");
    image.style.maxWidth = "100%";
    image.style.maxHeight = "100%";
    return image;
  }
}
