import { Component, OnInit } from '@angular/core';

// jQuery
declare var $: any;

@Component({
  selector: 'app-gallery-photo',
  templateUrl: './gallery-photo.component.html',
  styleUrls: ['./gallery-photo.component.scss']
})
export class GalleryPhotoComponent implements OnInit {

  constructor() {}

  pictures = [
    {src:'assets/img/gallery/embarazo/1.jpg',srct:'assets/img/gallery/embarazo/1.jpg',tags:"Embarazo"},
    {src:'assets/img/gallery/navidad/1.jpg',srct:'assets/img/gallery/navidad/1.jpg',tags:"Navidad"},
    {src:'assets/img/gallery/bebes/1.jpg',srct:'assets/img/gallery/bebes/1.jpg',tags:"Bebes"},
    {src:'assets/img/gallery/comunion/1.jpg',srct:'assets/img/gallery/comunion/1.jpg',tags:"Comunion"},
    {src:'assets/img/gallery/newborn/1.jpg',srct:'assets/img/gallery/newborn/1.jpg',tags:"Newborn"},
    {src:'assets/img/gallery/smashcake/1.jpg',srct:'assets/img/gallery/smashcake/1.jpg',tags:"Smashcake"},
    {src:'assets/img/gallery/comunion/2.jpg',srct:'assets/img/gallery/comunion/2.jpg',tags:"Comunion"},
    {src:'assets/img/gallery/smashcake/2.jpg',srct:'assets/img/gallery/smashcake/2.jpg',tags:"Smashcake"},
    {src:'assets/img/gallery/smashcake/3.jpg',srct:'assets/img/gallery/smashcake/3.jpg',tags:"Smashcake"},
    {src:'assets/img/gallery/smashcake/4.jpg',srct:'assets/img/gallery/smashcake/4.jpg',tags:"Smashcake"},
    {src:'assets/img/gallery/smashcake/5.jpg',srct:'assets/img/gallery/smashcake/5.jpg',tags:"Smashcake"},
  ];

  ngOnInit() {
    $("#nanogallery-photos").nanogallery2({
      items: this.pictures,
      galleryFilterTags: true,
      locationHash: false,
      thumbnailWidth: "200",
      thumbnailHeight: "auto",
      thumbnailBorderVertical: 0,
      thumbnailBorderHorizontal: 0,
      thumbnailDisplayTransition: "scaleUp",
      thumbnailDisplayTransitionDuration: 500,
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
      viewerTools:      {
        topLeft:   "label",
        topRight:  "playPauseButton, zoomButton, fullscreenButton, closeButton"
      }
    });
  }

  
}
