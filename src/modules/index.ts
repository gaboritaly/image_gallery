import Container from "../Gallery/accessories/container/Container";
import ImageViewer from "./ImageViewer/ImageViewer";
import ImageViewerStepper from "./ImageViewerStepper/ImageViewerStepper";
import ThumbNail from "./ThumbNail/ThumbNail";

const imageViewerContainerStyle = new Container("div", {
  backgroundColor: "#000",
  padding: "1rem",
  height: "80vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
} as CSSStyleDeclaration);

export const imageViewer = new ImageViewer(imageViewerContainerStyle);

/* 
    Extra funkció/modul
*/
export const imageViewerStepper = new ImageViewerStepper();
imageViewerStepper.addNode(imageViewer.node);

const thumbNailContainerStyle = new Container("div", {
  backgroundColor: "#1d1d1d",
  padding: "1rem",
  height: "20vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
} as CSSStyleDeclaration);

export const thumbNail = new ThumbNail(thumbNailContainerStyle, "200px");
