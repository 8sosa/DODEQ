export function importAllCollectionImages(context) {
    // context.keys() might return e.g.:
    // ['./ankara/p1x1.jpg', './ankara/p1x2.jpg', './adire/p1x1.jpg', …]
    return context.keys().map((filePath) => {
      return {
        /** 
         * `context(filePath)` is the bundled URL, e.g.
         * '/static/media/p1x1.abcd1234.jpg' 
         **/
        src: context(filePath),
        /**
         * We strip the leading './' so we end up with:
         *   "ankara/p1x1.jpg", "adire/p1x1.jpg", etc.
         **/
        filename: filePath.replace('./', ''),
      }
    })
  }