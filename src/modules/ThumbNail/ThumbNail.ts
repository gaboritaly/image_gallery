import Container from "../../Gallery/accessories/container/Container";
import SimpleEvent from "../../SimpleEvent/SimpleEvent";
import GalleryImageType from "../../Gallery/types/GalleryImageType";
import IHtmlNode from "../../Gallery/interfaces/IHtmlNode";
import ThumbNailEvents from "./ThumbImage/constants/ThumbNailEvents";
import ThumbImage from "./ThumbImage/ThumbImage";

/**
 * Thumb nail
 */
export default class ThumbNail
  extends SimpleEvent<ThumbNailEvents>
  implements IHtmlNode
{
  /**
   * Container  of thumb nail
   */
  private _container: Container;

  /**
   * Thumb width of thumb nail
   */
  private _thumbWidth: string;

  /**
   * Creates an instance of thumb nail.
   * @param [container = new Container("div")]
   * @param [thumbWidth = "300"]
   */
  constructor(container: Container = new Container("div"), thumbWidth = "300") {
    super();
    this._container = container;
    this._thumbWidth = thumbWidth;
  }

  get node() {
    return this._container.node;
  }
  addNode(node: HTMLElement): void {
    this._container.addNode(node);
  }

  addImage(image: GalleryImageType, index: number) {
    const thumbImage = new ThumbImage({
      imageUrl: image.url,
      width: this._thumbWidth,
    });
    this._container.addNode(thumbImage.img);
    this._addClickEvent(thumbImage, index);
  }

  private _addClickEvent(thumbImage: ThumbImage, index: number) {
    thumbImage.img.addEventListener("click", (event) => {
      if (!event.target) return;
      this.emit(ThumbNailEvents.onImageSelected, index);
    });
  }
}
