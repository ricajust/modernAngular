import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  imports: [],
  templateUrl: './hello.html',
  styleUrl: './hello.scss',
})
export class Hello {

  protected title: string = "Welcome to Modern Angular!";
  protected isDisabled: boolean = false;

  protected onClick(): void {
    console.log("button clicked");
    this.isDisabled = !this.isDisabled;
  }

}
