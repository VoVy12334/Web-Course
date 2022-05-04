import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componentview',
  templateUrl: './componentview.component.html',
  styleUrls: ['./componentview.component.css']
})
export class ComponentviewComponent implements OnInit {

  en = 'hello';
  vn  = 'xin chao';
  imageUrl = 'https://bachasoftware.com/wp-content/uploads/elementor/thumbs/nodejslogo-p3zvdhaajh0bxurlgqp1gszveuzuf58gd4auf7uve8.png';
  forgot = false;

  toggleForgot() {
    this.forgot = !this.forgot;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
