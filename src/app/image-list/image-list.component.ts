import { Component } from '@angular/core';
import { ImagesService } from '../shared/images.service';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.scss']
})
export class ImageListComponent {
  images: any;
  isSearching = false;
  pageNumber = 1;

  constructor(private imagesService: ImagesService) { }

  handleSuccess(images) {
    if (!this.images) {
      return this.images = images;
    }

    this.images = [...this.images, ...images];
    return ;
  }

  handleError(err) {
    this.isSearching = false;
  }

  searchImages(query: string, pageNumber: number) {
    this.isSearching = true;
    return this.imagesService.getImages(query, pageNumber)
      .subscribe(
        res => this.handleSuccess(res),
        err => this.handleError(err),
        () => this.isSearching = false
      );
  }

  getImageUrl(image) {
    const imageUrl = `https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`;
    return imageUrl;
  }

  getAuthor(image) {
    const { imageInfo } = image;
    return imageInfo && imageInfo.photo && imageInfo.photo.owner && imageInfo.photo.owner.username ?
      imageInfo.photo.owner.username :
      'Unknown user';
  }

  getPostDate(image) {
    const { imageInfo } = image;
    return imageInfo && imageInfo.photo && imageInfo.photo.dates && imageInfo.photo.dates.posted ?
      imageInfo.photo.dates.posted :
      new Date();
  }

  onScroll(searchQuery) {
    this.pageNumber++;
    this.searchImages(searchQuery, this.pageNumber);
  }
}
