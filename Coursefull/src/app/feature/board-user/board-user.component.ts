import { Component, OnInit } from '@angular/core';
import { UserService } from '../../_services/user.service';
import { AuthService } from '../../_services/auth.service';
import { TokenStorageService } from '../../_services/token-storage.service';
import { TutorialService } from 'src/app/_services/tutorial.service';
import { Tutorial } from 'src/app/models/tutorial.model';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-board-user',
  templateUrl: './board-user.component.html',
  styleUrls: ['./board-user.component.css']
})
export class BoardUserComponent implements OnInit {
  currentTutorial: Tutorial = {
    title: '',
    description: '',
    published: false,
    videoid: '',
    price: '',
    teacher: '',
    image: '',
    category: '',
    language: '',
    time: '',
    number:'',
  };
  tutorial = {
    title: '',
    description: '',
    published: false,
    videoid: '',
    price: '',
    teacher: '',
    image: '',
    category: '',
    language: '',
    time: '',
    number:'',
  };

  form: any = {
    username: null,
    password: null
  };
  
  isLoginFailed = false;
  
  
  
  submitted = false;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  tutorials: Tutorial[] = [];
  currentIndex = -1;
  title = '';
  message='';
  currentUser: any;

  page = 1;
  count = 0;
  pageSize = 4;
  pageSizes = [4, 6, 8];

  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;

  const?: string;
  content: any;
  constructor( private userService: UserService,
    private authService: AuthService, 
    private tokenStorage: TokenStorageService,
    private route: ActivatedRoute,
    private router: Router,
    private tutorialService: TutorialService,
    private tokenStorageService: TokenStorageService,
    
   ) { }

  ngOnInit(): void {

    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
    this.message = '';
    this.getTutorial(this.route.snapshot.paramMap.get('id'));
    this.retrieveTutorials(); 
  }
  onSubmit(): void {
    const { username, password } = this.form;
    this.authService.login(username, password).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);
        
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        
        setTimeout(()=>{
          this.reloadPage();
        }, 3000)
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );

    this.userService.getUserBoard().subscribe(
      data=> {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
    

   this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');
     this.username = user.username;
    }
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

  saveTutorial(frAdd: any): void {

    const data = {
      title: this.tutorial.title,
      description: this.tutorial.description,
      videoid: this.tutorial.videoid,
      price: this.tutorial.price,
      teacher: this.tutorial.teacher,
      image: this.tutorial.image,
      category: this.tutorial.category,
      language: this.tutorial.language,
      time: this.tutorial.time,
      number: this.tutorial.number,

    };

    this.tutorialService.create(data) 
     .subscribe(
        response => {
          console.log(response);
          this.reloadPage();
         
        },
        error => {
          console.log(error);
        });
  }
  newTutorial(): void {
    this.submitted = false;
    this.tutorial = {
      title: '',
      description: '',
      published: false,
      videoid: '',
       price: '',
      teacher: '',
      image: '',
      category: '',
      language: '',
      time: '',
      number:'',
    };
  }

  //Update 
  updateTutorial(frAdd: any): void {

    this.tutorialService.update(this.currentTutorial.id, this.currentTutorial)
      .subscribe(
        response => {
          console.log(response);
          
          this.message = response.message ? response.message : 'This tutorial was updated successfully!';
         
             this.reloadPage();
        },
        error => {
          console.log(error);
        });
  }

  getRequestParams(searchTitle: string, page: number, pageSize: number ): any {
    
    let params: any = {};

    if (searchTitle) {
      params[`title`] = searchTitle;
    }

    if (page) {
      params[`page`] = page - 1;
    }

    if (pageSize) {
      params[`size`] = pageSize;
    }

    return params;
  }

  retrieveTutorials(): void {
    const params = this.getRequestParams(this.title, this.page, this.pageSize);

    this.tutorialService.getAll(params)
    .subscribe(
      response => {
        const { tutorials, totalItems } = response;
        this.tutorials = tutorials;
        this.count = totalItems;
        console.log(response);   
      },
      error => {
        console.log(error);
      });
  }
  handlePageChange(event: number): void {
    this.page = event;
    this.retrieveTutorials();
  }

  handlePageSizeChange(event: any ): void {
    this.pageSize = event.target.value;
    this.page = 1;
    this.retrieveTutorials();
  }

  refreshList(): void {
    this.retrieveTutorials();
    this.currentTutorial = {};
    this.currentIndex = -1;
  }

  setActiveTutorial(tutorial : any, index: number): void {
    this.currentTutorial = tutorial;
    this.currentIndex = index;
  }

  removeAllTutorials(): void {
    this.tutorialService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
    
  }
  searchTitle(): void {

    this.tutorialService.findByTitle(this.title)
      .subscribe(
        data => {
          this.tutorials = data;
          console.log(data);
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
          this.retrieveTutorials();
        },
        error => {
          console.log(error);
        });
  }
  reloadPage(): void {
    window.location.reload();
    //this.router.navigate(['/feature/add']);
  }

  listUser() : void { 
    this.userService.getUserBoard();

  }
  
}
