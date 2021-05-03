import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/user.model';
import { LoginService } from '../services/login.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  user:User;
  file:any;
  
  constructor(private router: Router,public loginService: LoginService, activatedRoute:ActivatedRoute,public userService: UserService){ 
    let id=activatedRoute.snapshot.params['id'];
    this.user={info:'',password:'',roles:["USER"],myGames:[],imagePath:"https://localhost:8443/api/profiles/0/images"};
  }

  createUser(){
    this.userService.createNewUser(this.user).subscribe(data => {
      this.user = data as User;
      this.uploadUserImage();
      this.router.navigate(['successPage']);
    },
    error => console.error('Error al crear el post '+error)
    );
  }

  uploadUserImage(){
    const image=this.file.nativeElement.files[0];
    if(image){
      let formData=new FormData();
      formData.append("imageFile",image);
      this.userService.setUserImage(this.user,formData);
    }
    this.router.navigate(['successPage']);
  }

}
