import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { CommonService } from '../global/common_service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.page.html',
  styleUrls: ['./contactus.page.scss'],
})
export class ContactusPage implements OnInit {

  contact_form: FormGroup;
  contact_process: boolean;
  contactInfo: any;
  address: any;
  phone_no: any;
  telephone: any;
  email: any;

  constructor(
    private statusBar: StatusBar,
    private formBuilder: FormBuilder,
    private router: Router,
    private api: CommonService
  ) { 

    this.contact_fb();
  }

  ngOnInit() {

    this.api
    .siteSetting()
    .subscribe((data: any) => {
      if(data.status == 1)
      {
        this.address = data.data.address;
        this.phone_no = data.data.phone_no;
        this.telephone = data.data.telephone;
        this.email = data.data.email;
      }
    });
  }

  ionViewWillEnter() {
    this.statusBar.show();
    this.statusBar.styleLightContent();
    this.statusBar.backgroundColorByHexString('#c41a3b');
  }

  contact_fb() {
    this.contact_form = this.formBuilder.group({
      name: [null, Validators.required],
      email: [null, Validators.required],
      subject: [null, Validators.required],
      message: [null, Validators.required],
    });
  }

  send() {
    for (let v in this.contact_form.controls) {
      this.contact_form.controls[v].markAsTouched();
    }
    if (this.contact_form.valid) {
      this.api.presentLoading();
      this.contact_process = true;
      var body = {
        name: this.contact_form.value.name,
        email: this.contact_form.value.email,
        subject: this.contact_form.value.subject,
        message: this.contact_form.value.message,
      };
      this.api.contactus(body).subscribe(
        (data: any) => {
          this.contact_process = false;
        this.api.dismissLoading();
          if (data.status == 1) {
            this.api.presentToastWithOptions(data.message);
          } else {
            this.api.presentToastWithOptions(data.message);
          }
          
      },
      err => {
        this.contact_process = false;
        this.api.dismissLoading();
        this.api.presentToastWithOptions("Internal Server Error Please try again after sometime.");
      });
    }
  }

}