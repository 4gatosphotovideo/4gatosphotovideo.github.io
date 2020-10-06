import { Component, OnInit } from '@angular/core';

// jQuery
declare var $: any;

@Component({
  selector: 'app-gallery-photo',
  templateUrl: './gallery-photo.component.html',
  styleUrls: ['./gallery-photo.component.scss']
})
export class GalleryPhotoComponent implements OnInit {

  categories: any[] = [
    { name: "bebes", tag: "Bebés", files: 4 },
    { name: "comunion", tag: "Comunión", files: 4 },
    { name: "embarazo", tag: "Embarazo", files: 7 },
    { name: "familias", tag: "Familias", files: 2 },
    { name: "individual", tag: "Individual", files: 6 },
    { name: "navidad", tag: "Navidad", files: 5 },
    { name: "newborn", tag: "Newborn", files: 3 },
    { name: "peques", tag: "Peques", files: 4 },
    { name: "smashcake", tag: "Smashcake", files: 6 },
  ]

  pictures: any[] = [];

  constructor() { }

  ngOnInit() {
    // populate pictures array
    this.categories.forEach((c, index) => {
      for (var i = 1; i <= c.files; i++) {
        var picturePath = "assets/img/gallery/" + c.name + "/" + i + ".jpg";
        this.pictures.push({ src: picturePath, srct: picturePath, tags: c.tag });
      }
    });

    $("#nanogallery-photos").nanogallery2({
      items: this.pictures,
      galleryFilterTags: true,
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
      icons:{
        navigationFilterSelectedAll:'Todas',
        navigationFilterUnselected:'',
        navigationFilterSelected:''
      }
    });
  }


}
