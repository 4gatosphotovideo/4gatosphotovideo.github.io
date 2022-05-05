import { Component, Input, OnInit } from '@angular/core';

// jQuery
declare var $: any;

@Component({
  selector: 'app-gallery-photo',
  templateUrl: './gallery-photo.component.html',
  styleUrls: ['./gallery-photo.component.scss']
})
export class GalleryPhotoComponent implements OnInit {

  @Input("category")
  category: String;

  @Input("size")
  size: number;

  pictures: any[] = [];

  constructor() { }

  ngOnInit() {
    // populate pictures array
      for (var i = 1; i <= this.size; i++) {
        var picturePath = "assets/img/gallery/" + this.category + "/" + i + ".jpg";
        this.pictures.push({ src: picturePath, srct: picturePath });
      }


    $("#nanogallery-photos").nanogallery2({
      items: this.pictures,
      galleryFilterTags: false,
      locationHash: false,
      thumbnailWidth: "200",
      thumbnailHeight: "auto",
      thumbnailBorderVertical: 0,
      thumbnailBorderHorizontal: 0,
      thumbnailDisplayTransition: "scaleUp",
      gallerySorting: "random",
      thumbnailDisplayTransitionDuration: 500,
      galleryTheme: {
        navigationFilter: { color: '#222', background: '#FFF', colorSelected: '#fff', backgroundSelected: '#18d26e', borderRadius: '4px' },
      },
      thumbnailLabel: {
        position: "overImageOnBottom",
        display: false
      },
      thumbnailHoverEffect2: "toolsAppear|imageSepiaOff",
      thumbnailAlignment: "center",
      thumbnailGutterWidth: 10,
      thumbnailGutterHeight: 10,
      displayBreadcrumb: false,
      thumbnailOpenImage: true,
      viewerTools: {
        topLeft: "label",
        topRight: "playPauseButton, zoomButton, fullscreenButton, closeButton"
      },
      icons: {
        navigationFilterSelectedAll: 'Todas',
        navigationFilterUnselected: '',
        navigationFilterSelected: ''
      }
    });
  }


}
