# Lapozható képgaléria

## Installáció

```bash
npm i
```

Az app futtatása lokálisan

```bash
npm start
```

Build készítése

```bash
npm build
```

## Gallery használata

```typescript
# a kijelölt node amihez rá akarjuk csapni a galleryt.

var nodeToAppend = document.querySelector("body") as HTMLElement;
var gallery = new Gallery(nodeToAppend);

# event-ek hozzáadása

Aktuálisan csak két event lett hozzáadva :

GalleryEvents.onCurrentIdexChange
GalleryEvents.onImageAdded

gallery.addEventListener(GalleryEvents.onCurrentIdexChange, (index: number) => {
  // a hozzáadott modulok ki értesítése a váltzoásokrol
});

# kép hozzáadása.
gallery.addImages([
  { [GalleryImageProp.url]: "https://picsum.photos/id/237/0" },
]);

# html node hozzáadása.
gallery.addNode("domNode");

# a gallery build-elése és elindítása.
gallery.build();
```

## SimpleEvent használata modulok képzésekor

```typescript
# a kijelölt node amihez rá akarjuk csapni a galleryt.

import SimpleEvent from "../SimpleEvent/SimpleEvent";

# event-ek hozzáadása a kívánt modulhoz


export default class Akarmi
  extends SimpleEvent<AkarmiEvents>{
     constructor() {
       super();
     }

  }
}

Így az aktuális modul ereditálja a következő típusos metódusokat

  /**
   * Emits simple event
   * @param method
   * @param [payload]
   */
  emit(method: T, payload?: any) {})


/**
   * Adds event listener
   * @param method: T
   * @param callback: (arg: any) => void
   * @returns void
   */
  addEventListener(method: T, callback: (arg: any) => void): void {}


/**
   * Removes event listener
   * @param method
   */
  removeEventListener(method: T): void {}
```

## License

Nincs :)
