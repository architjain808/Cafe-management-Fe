import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  resCode!: any;
  ngOnInit(): void {
    fetch('https://cafe-management-be-brrg.onrender.com/')
    .then(response => {
      if (response.ok) {
        return response.text(); // Convert response body to text
      }
      throw new Error('Network response was not ok');
    })
    .then(data => {
      this.resCode = data
      console.log(data); // This is your expected string
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
  }
  title = 'cafe-management-fe';
}
