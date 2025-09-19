import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  imports: [],
  templateUrl: './clock.html',
  styleUrl: './clock.css'
})
export class Clock implements OnInit,OnDestroy{
  currentTime: string = '';
  tloop: any;

  ngOnInit(): void {
    this.tloop = setInterval(() => {
      this.currentTime = new Date().toLocaleTimeString();
    }, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.tloop);
    console.log('Clock stopped');
  }
}

