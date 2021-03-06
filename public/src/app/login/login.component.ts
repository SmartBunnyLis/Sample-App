import { Component, OnInit } from '@angular/core';
import { Poll } from './../poll';
import { Router } from "@angular/router";
import { PollApiService } from './../poll-api.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  newUser = {
    name: ""
  }
  constructor(private _pollApiService: PollApiService, private _router: Router) { }

  ngOnInit() {
  }

  //on login we like to redirect to dashboard and save the current User
  login() {
    console.log("I was clicked")
    this._pollApiService.currentUser = this.newUser.name;
    console.log("This is currentUser", this._pollApiService.currentUser)
    this._router.navigate(["/dashboard"])
  }

}
