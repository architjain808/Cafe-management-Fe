import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    fetch('https://cafe-management-be-brrg.onrender.com').then((res) => {
      console.log(res)
      debugger;
    });
  }
  title = 'cafe-management-fe';
}
