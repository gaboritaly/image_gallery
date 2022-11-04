import GalleryImageProp from "../constants/GalleryImageProp";
/**
 * GalleryImageType
 *
 * @remarks
 * This type define GalleryImageProp types. If you need to manage more type for value, ad example Date, you need to add : string | Date
 */
type GalleryImageType = {
  [key in GalleryImageProp]: string;
};
export default GalleryImageType;
