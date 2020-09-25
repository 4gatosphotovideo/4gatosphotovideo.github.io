import { Component, OnInit } from '@angular/core';
// jQuery
declare var $: any;

@Component({
  selector: 'app-gallery-video',
  templateUrl: './gallery-video.component.html',
  styleUrls: ['./gallery-video.component.scss']
})
export class GalleryVideoComponent implements OnInit {

  
  

  constructor() {}

  videos = [
    {src:'https://www.youtube.com/watch?v=P41ARJy6y-c',srct:'http://i3.ytimg.com/vi/P41ARJy6y-c/hqdefault.jpg',title:'Comunión'},
    {src:'https://www.youtube.com/watch?v=1Iq425psadE',srct:'http://i3.ytimg.com/vi/1Iq425psadE/hqdefault.jpg',title:'Vídeo resumen'}
  ];

  ngOnInit() {
    $("#nanogallery-video").nanogallery2({
      items: this.videos,
      locationHash: false,
      thumbnailWidth: "200",
      thumbnailHeight: "auto",
      thumbnailBorderVertical: 0,
      thumbnailBorderHorizontal: 0,
      thumbnailDisplayTransition: "scaleUp",
      thumbnailDisplayTransitionDuration: 500,
      thumbnailLabel: {
        position: "OnBottom",
        display: true
      },
      thumbnailHoverEffect2: "toolsAppear|imageSepiaOff",
      thumbnailAlignment: "center",
      thumbnailGutterWidth: 10,
      thumbnailGutterHeight: 10,
      displayBreadcrumb: false,
      thumbnailOpenImage: true,
      viewerTools:      {
        topLeft:   "label",
        topRight:  "closeButton"
      }
    });
  }


}
