import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../../_services/token-storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  imgUrl = 'https://www.yong.vn/Content/images/travels/song-lam-nui-hong-linh.jpg';
  currentUser: any;
  constructor(private token: TokenStorageService) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
  }

}
