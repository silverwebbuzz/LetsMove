import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { CommonService } from '../global/common_service';
import { PasswordValidation } from '../global/password_validation';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.page.html',
  styleUrls: ['./reset.page.scss'],
})
export class ResetPage implements OnInit {

  reset_form: FormGroup;
  res_process: boolean;
  reset_token: any;
  data: any;

  constructor(
    private statusBar: StatusBar,
    private formBuilder: FormBuilder,
    private router: Router,
    private navCtrl: NavController,
    public route: ActivatedRoute,
    private api: CommonService
  ) {

    this.route.queryParams.subscribe(params => {
      if (params.t) {
        this.isvalidToken(params.t)
      }
    });
    this.reset_fb();
  }

  ngOnInit() {}

  isvalidToken(token) {
    this.api.verifytoken(token).subscribe((data: any) => {
      if (data.token == true) {
        this.reset_token = token;
        return true;
      }
    });
  }

  ionViewWillEnter() {
    this.statusBar.show();
    this.statusBar.styleLightContent();
    this.statusBar.backgroundColorByHexString('#c41a3b');
  }

  reset_fb() {
    this.reset_form = this.formBuilder.group({
      new_password: [null, Validators.required],
      confirm_password: [null, Validators.required],
    }, {
      validator: PasswordValidation.ResetPassword
    });
  }

  submit() {
    for (let v in this.reset_form.controls) {
      this.reset_form.controls[v].markAsTouched();
    }
    if (this.reset_form.valid) {
      var body = {
        token: this.reset_token,
        password: this.reset_form.value.new_password,
        confirm_password: this.reset_form.value.confirm_password,
      };
      this.api.reset(body).subscribe(data => {
        this.data = data
        if (data['status'] == 1) {
          this.api.presentToastWithOptions(this.data['message']);
          this.router.navigate(['/signin']);
        } else {
          this.api.presentToastWithOptions(this.data['message']);
        }
      },
        err => {
          this.res_process = false;
          this.api.dismissLoading();
          this.api.presentToastWithOptions("Internal Server Error Please try again after sometime.");
        }
      );
    }
  }

  back() {
    this.router.navigate(['/signin']);
  }

}
