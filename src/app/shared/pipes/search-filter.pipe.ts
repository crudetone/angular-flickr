import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})

export class SearchFilterPipe implements PipeTransform {
  transform(images, searchTerms: string) {
    if (!images || !searchTerms) {
      return images;
    }

    return images.filter(image => {
      return image.title.toLowerCase().indexOf(searchTerms.toLowerCase()) !== -1;
    });
  }
}
