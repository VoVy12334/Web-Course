import { Component, OnInit } from '@angular/core';
import { UserService } from '../../_services/user.service';
import { TokenStorageService } from '../../_services/token-storage.service';
import { User } from 'src/app/models/user/user.model';

@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css']
})
export class BoardAdminComponent implements OnInit {
  content?: string;
  currentUser = {
    username: '',
    email: '',
    password: ''
  }

  CurrentUser : User[]=[];
  
  
  
  constructor(private userService: UserService,
    private token: TokenStorageService) { }

  ngOnInit(): void {
    this.userService.getAdminBoard().subscribe(
      data => {
        this.currentUser = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );

    this.currentUser = this.token.getUser();
    this.gettUser();
    
  }



  gettUser(){
     this.userService.getPublicContent()
     .subscribe(
       respone => {
         this.currentUser = this.currentUser;
       },
       error => {
        console.log(error);
      });

  }

}
