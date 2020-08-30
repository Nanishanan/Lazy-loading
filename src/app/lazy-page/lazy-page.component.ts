import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-lazy-page',
  templateUrl: './lazy-page.component.html',
  styleUrls: ['./lazy-page.component.css']
})
export class LazyPageComponent implements OnInit {

  @ViewChild("screen", {read: ElementRef}) screen: ElementRef;
  @ViewChild("screen1", {read: ElementRef}) screen1: ElementRef;
  
  public sections;
  public sections1;
  public scrolled;
  public scrolled1;

  constructor() { }

  ngOnInit(): void {
    this.sections = document.querySelectorAll<HTMLElement>('div.screen'); 
    this.sections1 = document.querySelectorAll<HTMLElement>('div.screen1'); 

    const config = { rootMargin: '0px 0px -50% 0px' };
    let observer = new IntersectionObserver((entries)=>{
      if (entries[0].intersectionRatio != 0){
        this.scrolled = false;
        this.scrolled1 = true;
      }
      else{
        this.scrolled = true;
        this.scrolled1 = false;
      }
    },config);

    this.sections.forEach(section =>{
      observer.observe(section);
    })

  }

  hidden(){
    return this.scrolled;
  }

  hidden1(){
    return this.scrolled1;
  }

}
