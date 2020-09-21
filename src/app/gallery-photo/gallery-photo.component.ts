import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxMasonryOptions, NgxMasonryComponent } from 'ngx-masonry';
import { Lightbox } from 'ngx-lightbox';


@Component({
  selector: 'app-gallery-photo',
  templateUrl: './gallery-photo.component.html',
  styleUrls: ['./gallery-photo.component.scss']
})
export class GalleryPhotoComponent implements OnInit {

  public masonryOptions: NgxMasonryOptions = {
    gutter: 20,
    fitWidth: true
  };

  @ViewChild(NgxMasonryComponent) masonry: NgxMasonryComponent;

  categories = [
    {label:"Bebés", value:"bebes"},
    {label:"Comunión", value:"comunion"},
    {label:"Embarazo", value:"embarazo"},
    {label:"Navidad", value:"navidad"},
    {label:"Newborn", value:"newborn"},
    {label:"Smashcake", value:"smashcake"},
  ]

  masonryImages = [];

  constructor(private _lightbox: Lightbox) {}

  open(index: number): void {
    // open lightbox
    this._lightbox.open(this.masonryImages, index);
  }
 
  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }

  pictures = [
    {src:'assets/img/gallery/embarazo/1.jpg',thumb:'assets/img/gallery/embarazo/1.jpg',category:"embarazo"},
    {src:'assets/img/gallery/navidad/1.jpg',thumb:'assets/img/gallery/navidad/1.jpg',category:"navidad"},
    {src:'assets/img/gallery/bebes/1.jpg',thumb:'assets/img/gallery/bebes/1.jpg',category:"bebes"},
    {src:'assets/img/gallery/comunion/1.jpg',thumb:'assets/img/gallery/comunion/1.jpg',category:"comunion"},
    {src:'assets/img/gallery/newborn/1.jpg',thumb:'assets/img/gallery/newborn/1.jpg',category:"newborn"},
    {src:'assets/img/gallery/smashcake/1.jpg',thumb:'assets/img/gallery/smashcake/1.jpg',category:"smashcake"},
    {src:'assets/img/gallery/comunion/2.jpg',thumb:'assets/img/gallery/comunion/2.jpg',category:"comunion"},
    {src:'assets/img/gallery/smashcake/2.jpg',thumb:'assets/img/gallery/smashcake/2.jpg',category:"smashcake"},
    {src:'assets/img/gallery/smashcake/3.jpg',thumb:'assets/img/gallery/smashcake/3.jpg',category:"smashcake"},
    {src:'assets/img/gallery/smashcake/4.jpg',thumb:'assets/img/gallery/smashcake/4.jpg',category:"smashcake"},
    {src:'assets/img/gallery/smashcake/5.jpg',thumb:'assets/img/gallery/smashcake/5.jpg',category:"smashcake"},
  ];

  ngOnInit() {
    this.masonryImages = this.pictures;
  }

  filterByCategory(category){
    this.masonryImages = category?this.pictures.filter(i => i.category==category):this.pictures;
    this.masonry.reloadItems()
    this.masonry.layout();
  }
  
  itemsLoaded() {
    // console.log('itemsloaded');
  }
  
}
