import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // property/variable

  header="Welcome to Our Bank......"
  accPlaceholder ="Account please"
  //acno 
  acno=""
  //pswd
  pswd=""



  constructor(private router:Router,private dataService:DataService) { }

  ngOnInit(): void {
  }

  //user defined function


  login(){

    //fetch acno 
    var acno = this.acno
    //fetch pswd
    var pswd = this.pswd
    
    const result = this.dataService.login(acno,pswd)

    if(result){
      alert("Log In successfull")
      this.router.navigateByUrl('dashboard')
    }

  }

  

}


