import Container from "../../Gallery/accessories/container/Container";
import SimpleEvent from "../../SimpleEvent/SimpleEvent";
import IHtmlNode from "../../Gallery/interfaces/IHtmlNode";
import ImageViewerStepperEvents from "./constants/ImageViewerStepperEvents";

/**
 * ImageViewerStepper
 */
export default class ImageViewerStepper
  extends SimpleEvent<ImageViewerStepperEvents>
  implements IHtmlNode
{
  /**
   * Container  of image viewer stepper
   */
  private _container: Container;

  /**
   * Prev button of image viewer stepper
   */
  private _prevButton: Container;

  /**
   * Next button of image viewer stepper
   */
  private _nextButton: Container;

  /**
   * Gallery length of image viewer stepper
   */
  private _galleryLength = 0;

  /**
   * Current index of image viewer stepper
   */
  private _currentIndex = 0;
  constructor(
    container = new Container("div", {
      position: "relative",
    } as CSSStyleDeclaration)
  ) {
    super();
    this._container = container;
    this._nextButton = new Container("div", "btn-slide next");
    this._initNextButton();
    this._prevButton = new Container("div", "btn-slide prev");
    this._initPrevButton();
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
   * Inits next button
   */
  private _initNextButton() {
    this._container.addNode(this._nextButton.node);
    this._nextButton.node.addEventListener("click", (_) => {
      this.emit(
        ImageViewerStepperEvents.onNextButtonClicked,
        this._calculateNextIndex()
      );
    });
  }

  /**
   * Inits prev button
   */
  private _initPrevButton() {
    this._container.addNode(this._prevButton.node);
    this._prevButton.node.addEventListener("click", (_) => {
      this.emit(
        ImageViewerStepperEvents.onPrevButtonClicked,
        this._calculatePrevIndex()
      );
    });
  }

  /**
   * Calculates next index
   * @returns
   */
  private _calculateNextIndex() {
    if (this._currentIndex === this._galleryLength) {
      return 0;
    }
    return ++this._currentIndex;
  }

  /**
   * Calculates prev index
   * @returns
   */
  private _calculatePrevIndex() {
    if (this._currentIndex === 0) {
      return this._galleryLength;
    }
    return --this._currentIndex;
  }

  /**
   * Updates local gallery length
   * @param length
   */
  updateGalleryLength(length: number) {
    this._galleryLength = length;
  }

  /**
   * Updates local current index
   * @param index
   */
  updateCurrentIndex(index: number) {
    this._currentIndex = index;
  }
}
