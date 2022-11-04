import IThumbImage from "./interfaces/IThumbImage";

/**
 * ThumbImage
 *
 * @remarks
 * Simple thumb of images.
 * Actually carousel effect not implemented!
 */
export default class ThumbImage implements IThumbImage {
  /**
   * Img  of thumb image
   */
  private _img: HTMLImageElement;
  /**
   * Creates an instance of thumb image.
   * @param { imageUrl, width }
   */
  constructor({ imageUrl, width }: { imageUrl: string; width: string }) {
    this._img = document.createElement("img");
    this._img.src = imageUrl;
    this._img.style.width = width;
    this._img.style.height = "100%";
    this._img.style.objectFit = "cover";
    this._img.style.cursor = "pointer";
  }
  get img() {
    return this._img;
  }
}
