import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

//databse
database:any={
  1000:{acno:1000,username:'Neer',password:1000,balance:5000},
  1001:{acno:1001,username:'Laisha',password:1001,balance:6000},
  1002:{acno:1002,username:'Vyom',password:1002,balance:5000}
}

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  //user defined function


  login(){

    //fetch acno 
    var acno = this.acno
    //fetch pswd
    var pswd = this.pswd
    
    let userDetails = this.database
    if(acno in userDetails){
      if(pswd == userDetails[acno]['password']){
        alert('Log in successfull')
        //navigate to dashboard
        this.router.navigateByUrl('dashboard')
      }
      else{
        alert('Incorrect password')
      }
    }
    else{
      alert('user does not exist')
    }

  }

  

}


