import { Component } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.scss'],
})
export class HelloWorldComponent {
  title: string = 'Timon';
  color: string = 'red';
  isDisabled: boolean = false;
  clickCount: number = 0;
  value: string = '';
  movieTitle: string = 'BlockBuster Movies';
  movies: string[] = ['Sura', 'Kochadayan', 'Kuruvi', 'Aegan'];

  clickMe() {
    this.clickCount++;
  }

  inputhandler(event: any) {
    return (this.value = (event.target as HTMLInputElement).value);
  }
}
