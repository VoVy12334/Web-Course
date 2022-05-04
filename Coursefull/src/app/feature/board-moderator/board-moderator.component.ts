import { Component, OnInit } from '@angular/core';
import { UserService } from '../../_services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenStorageService } from '../../_services/token-storage.service';
@Component({
  selector: 'app-board-moderator',
  templateUrl: './board-moderator.component.html',
  styleUrls: ['./board-moderator.component.css']
})
export class BoardModeratorComponent implements OnInit {
  currentUser: any;

  content?: string;

  constructor(private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private token: TokenStorageService) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();

    this.getUser(this.route.snapshot.paramMap.get('id'));

    this.userService.getModeratorBoard().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
      
    );
  }
  getUser(id: string | null): void {
    this.userService.get(id)
      .subscribe(
        data => {
          this.currentUser = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateUser(): void {

    this.userService.update(this.currentUser.id, this.currentUser)
      .subscribe(
        data => {
          console.log(data);
          //this.message = response.message ? response.message : 'This tutorial was updated successfully!';
          this.router.navigate(['/feature/profile']);
        },
        error => {
          console.log(error);
        });
  }
}
