import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { CommonService } from '../global/common_service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {

  login_form: FormGroup;
  login_process: boolean;
  val: any;
  private currentUserSubject: BehaviorSubject<any>;


  constructor(private statusBar: StatusBar,
    private formBuilder: FormBuilder, private api: CommonService,
    private router: Router, ) {

    this.login_fb();
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.statusBar.overlaysWebView(false);
    this.statusBar.show();
    this.statusBar.styleLightContent();
    this.statusBar.backgroundColorByHexString('#c41a3b');
  }

  login_fb() {
    this.login_form = this.formBuilder.group({
      email: [null, Validators.required],
      password: [null, Validators.required],
    });
  }

  login() {
    for (let v in this.login_form.controls) {
      this.login_form.controls[v].markAsTouched();
    }
    if (this.login_form.valid) {
      this.api.presentLoading();
      this.login_process = true;

      var body = {
        email: this.login_form.value.email,
        password: this.login_form.value.password,

      };
      this.api.signin(body).subscribe(val => {
        this.val = val
        this.login_process = false;
        this.api.dismissLoading();

        if (this.val['status'] == 1) {
          this.login_process = false;
          this.api.dismissLoading();
          if (this.val && this.val.data.token) {
            localStorage.setItem("userToken", this.val.data.token);
            localStorage.setItem("currentUser", JSON.stringify(this.val));
            localStorage.setItem(
              "permission",
              JSON.stringify(this.val.user_permission)
            );
          }
          this.api.presentToastWithOptions(this.val['message']);
          this.router.navigate(['/home']);
        }
       
        else if(this.val['status'] == 0 && this.val['message'] == "Invalid credential"){
          this.api.presentToastWithOptions(this.val['message']);
        }
        else if(this.val['status'] == 0 && this.val.data.email){
          this.api.presentToastWithOptions(this.val.data['email']);
        }
      },
        err => {
          this.login_process = false;
          this.api.dismissLoading();
          this.api.presentToastWithOptions("Internal Server Error Please try again after sometime.");
        }
      )
    }
  }

  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }

  signup() {
    this.router.navigate(['/signup']);
  }

  forgot() {
    this.router.navigate(['/forgot']);
  }

}
