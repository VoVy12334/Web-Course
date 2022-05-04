import { Component, OnInit } from '@angular/core';
import { TutorialService } from 'src/app/_services/tutorial.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Tutorial } from 'src/app/models/tutorial.model';
import { TokenStorageService } from 'src/app/_services/token-storage.service';



@Component({
  selector: 'app-tutorial-details',
  templateUrl: './tutorial-details.component.html',
  styleUrls: ['./tutorial-details.component.css']
})
export class TutorialDetailsComponent implements OnInit {

  currentTutorial: Tutorial = {
    title: '',
    description: '',
    published: false
  };
  message = '';
  currentUser: any;
  submitted = false;

  constructor(
    private tutorialService: TutorialService,
    private route: ActivatedRoute,
    private router: Router,
    private token: TokenStorageService
  ) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    this.message = '';
    this.getTutorial(this.route.snapshot.paramMap.get('id'));
  }

  getTutorial(id: string | null): void {
    this.tutorialService.get(id)
      .subscribe(
        data => {
          this.currentTutorial = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  

  updatePublished(status: any): void {
    const data = {
      title: this.currentTutorial.title,
      description: this.currentTutorial.description,
      published: status
    };

   

    this.tutorialService.update(this.currentTutorial.id, data)
      .subscribe(
        response => {
          this.currentTutorial.published = status;
          console.log(response);
          this.message = response.message ? response.message : 'This tutorial was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  onSubmitForm(frAdd: any){

    frAdd.updateTutorial();
  }

    updateTutorial(frAdd: any): void {

    this.tutorialService.update(this.currentTutorial.id, this.currentTutorial)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message ? response.message : 'This tutorial was updated successfully!';
          setTimeout(()=>{
            this.router.navigate(['/feature/tutorials']);
          }, 3000)
        },
        error => {
          console.log(error);
        });
  }

  deleteTutorial(): void {
    this.tutorialService.delete(this.currentTutorial.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/feature/tutorials']);
        },
        error => {
          console.log(error);
        });
  }
}
