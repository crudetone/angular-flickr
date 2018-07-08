import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map, flatMap } from 'rxjs/operators';

import { FLICKR_API_KEY, FLICKR_API_URL } from '../constant';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  private API_URL: string = FLICKR_API_URL;
  private API_KEY: string = FLICKR_API_KEY;
  private perPage = 'per_page=10';
  private url = `${this.API_URL}/?method=flickr.photos.search&api_key=${this.API_KEY}&nojsoncallback=1&format=json&${this.perPage}&text=`;
  // tslint:disable-next-line:max-line-length
  private imageInfoUrl = `${this.API_URL}/?method=flickr.photos.getInfo&api_key=${this.API_KEY}&nojsoncallback=1&format=json&${this.perPage}&photo_id=`;

  constructor(private http: Http) { }

  getImages(query, pageNumber) {
    return this.http.get(`${this.url}${query}&page=${pageNumber}`)
      .pipe(map(res => {
        const images = res.json() && res.json().photos && res.json().photos.photo;
        if (images) {
          return images.map(image => {
            this.getImageInfo(image.id).subscribe(imageInfo => image.imageInfo = imageInfo);
            return image;
          });
        }
        return res.json();
      }));
  }

  getImageInfo(id) {
    return this.http.get(`${this.imageInfoUrl}${id}`).pipe(map(res => {
      return res.json();
    }));
  }
}
