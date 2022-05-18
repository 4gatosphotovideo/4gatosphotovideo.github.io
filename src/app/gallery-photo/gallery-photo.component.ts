import { AfterViewInit, Component, Input } from '@angular/core';

// jQuery
declare var $: any;

@Component({
  selector: 'app-gallery-photo',
  templateUrl: './gallery-photo.component.html',
  styleUrls: ['./gallery-photo.component.scss']
})
export class GalleryPhotoComponent implements AfterViewInit {

  @Input("galleryData")
  galleryData: {id: string, size: number}
  
  pictures: any[] = [];
  
  constructor() {
  }
  ngAfterViewInit(): void {
    $("#nanogallery-photos-"+this.galleryData.id).nanogallery2('destroy');
     // populate pictures array
     for (var i = 1; i <= this.galleryData.size; i++) {
      var picturePath = "assets/img/gallery/" + this.galleryData.id + "/" + i + ".jpg";
      this.pictures.push({ src: picturePath, srct: picturePath });
    }
    
    $("#nanogallery-photos-"+this.galleryData.id).nanogallery2({
      items: this.pictures,
      galleryFilterTags: false,
      eventsDebounceDelay: 0,
      locationHash: false,
      thumbnailWidth: "300",
      thumbnailHeight: "auto",
      thumbnailBorderVertical: 0,
      thumbnailBorderHorizontal: 0,
      thumbnailDisplayOutsideScreen: true,
      gallerySorting: "random",
      galleryTheme: {
        navigationFilter: { color: '#222', background: '#FFF', colorSelected: '#fff', backgroundSelected: '#18d26e', borderRadius: '4px' },
      },
      thumbnailLabel: {
        position: "overImageOnBottom",
        display: false
      },
      thumbnailHoverEffect2: "toolsAppear|imageSepiaOff",
      thumbnailAlignment: "center",
      thumbnailDisplayTransitionDuration: 0,
      thumbnailDisplayTransition: "fadeIn",
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
