/**
 * SimpleEventType
 *
 * @remarks
 * This type define SimpleEvent.
 */
type SimpleEventType<T extends string> = {
  [key in T]: (arg: any) => void;
};
export default SimpleEventType;
