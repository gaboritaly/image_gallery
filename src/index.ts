import Gallery from "./Gallery/Gallery";
import GalleryImageType from "./Gallery/types/GalleryImageType";
import ThumbNailEvents from "./modules/ThumbNail/ThumbImage/constants/ThumbNailEvents";
import "./assets/style.css";
import { imageViewer, imageViewerStepper, thumbNail } from "./modules";
import ImageViewerStepperEvents from "./modules/ImageViewerStepper/constants/ImageViewerStepperEvents";
import GalleryEvents from "./Gallery/constants/GalleryEvents";
import GalleryImageProp from "./Gallery/constants/GalleryImageProp";

/* 
  Gallery
*/
var nodeToAppend = document.querySelector("body") as HTMLElement;
var gallery = new Gallery(nodeToAppend);

/* 
  ImageViewer / ImageViewerStepper (Extra funkció)
*/

imageViewerStepper.addEventListener(
  ImageViewerStepperEvents.onNextButtonClicked,
  (index: number) => {
    gallery.setCurrentIndex(index);
  }
);
imageViewerStepper.addEventListener(
  ImageViewerStepperEvents.onPrevButtonClicked,
  (index: number) => {
    gallery.setCurrentIndex(index);
  }
);

/* 
  ThumbNail
*/

thumbNail.addEventListener(ThumbNailEvents.onImageSelected, (index: number) => {
  gallery.setCurrentIndex(index);
});
/* 
  Gallery
*/
function populateImageViewer(index: number) {
  imageViewer.setCurrentImage(gallery.galleryImages[index]);
}
gallery.addEventListener(GalleryEvents.onCurrentIdexChange, (index: number) => {
  imageViewerStepper.updateCurrentIndex(index);
  populateImageViewer(index);
});
gallery.addEventListener(
  GalleryEvents.onImageAdded,
  (img: GalleryImageType) => {
    const index = gallery.galleryImages.length - 1;
    thumbNail.addImage(img, index);
    imageViewerStepper.updateGalleryLength(index);
    if (index == 0) {
      populateImageViewer(index);
    }
  }
);

gallery.addImages([
  { [GalleryImageProp.url]: "https://picsum.photos/id/237/0" },
  { [GalleryImageProp.url]: "https://picsum.photos/id/23/0" },
  { [GalleryImageProp.url]: "https://picsum.photos/id/145/0" },
  { [GalleryImageProp.url]: "https://picsum.photos/id/197/0" },
]);

gallery.addNode(imageViewerStepper.node);
gallery.addNode(thumbNail.node);
gallery.build();
