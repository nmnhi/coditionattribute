import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'conditionattribute';
  videos = [
    {
      title: 'My video 1',
      share: 415,
      likes: 257,
      dislikes: 12,
      thumnail: '../assets/images/image1.jpg',
    },
    {
      title: 'My video 2',
      share: 215,
      likes: 207,
      dislikes: 12,
      thumnail: '../assets/images/image2.jpg',
    },
    {
      title: 'My video 3',
      share: 150,
      likes: 109,
      dislikes: 12,
      thumnail: '../assets/images/image3.jpeg',
    },
  ];
  mostliekedVideo = this.getmostlikedVideo();
  getmostlikedVideo() {
    let videoCopy = [...this.videos];
    return videoCopy.sort((curr, next) => next.likes - curr.likes)[0];
  }
}
