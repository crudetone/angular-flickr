import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image-item',
  templateUrl: './image-item.component.html',
  styleUrls: ['./image-item.component.scss']
})
export class ImageItemComponent implements OnInit {

  imageUrl: string;
  @Input() imageItem: any;

  ngOnInit() {
    // tslint:disable-next-line:max-line-length
    this.imageUrl = this.imageUrl ?
      `https://farm${this.imageItem.farm}.staticflickr.com/${this.imageItem.server}/${this.imageItem.id}_${this.imageItem.secret}_m.jpg` :
      '';
  }

}
