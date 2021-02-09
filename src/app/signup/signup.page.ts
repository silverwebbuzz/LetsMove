import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { CommonService } from '../global/common_service';
import { PasswordValidation } from '../global/password_validation';
import { SearchCountryField, TooltipLabel, CountryISO } from 'ngx-intl-tel-input';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  reg_form: FormGroup;
  reg_process: boolean;
  rolllist: any = [];
  rlist: any;
  data: any;

  separateDialCode = true;
	SearchCountryField = SearchCountryField;
	TooltipLabel = TooltipLabel;
	CountryISO = CountryISO;
	preferredCountries: CountryISO[] = [CountryISO.UnitedStates, CountryISO.UnitedKingdom];
  chk: any;
  chkvalue: number;
  constructor(private statusBar: StatusBar,
    private formBuilder: FormBuilder,
    private router: Router, private api: CommonService) {

    this.reg_fb();
  }

  changePreferredCountries() {
		this.preferredCountries = [CountryISO.India, CountryISO.Canada];
  }
  ngOnInit() {
    this.rollList()
  }

  rollList() {
    this.api.user_roll().subscribe(data => {
      this.rolllist = data;
      this.rlist = this.rolllist.data
    },
    );
  }

  ionViewWillEnter() {
    this.statusBar.overlaysWebView(false);
    this.statusBar.show();
    this.statusBar.styleLightContent();
    this.statusBar.backgroundColorByHexString('#c41a3b');
  }

  radio(e){
    if(e.target.value === 'true'){
      this.chkvalue = 1;
    }else if(e.target.value === 'false'){
      this.chkvalue = 2;
    }
  }

  reg_fb() {
    this.reg_form = this.formBuilder.group({
      firstname: [null, Validators.required],
      lastname: [null, Validators.required],
      email: [null, Validators.compose([
        Validators.pattern('[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})'),
        Validators.required
      ])],
      gemh_number : [null],
      is_available_gemh: [null],
      reason: [null],
      phone: [null, Validators.required],
      password: [null, Validators.required],
      confirm_password: [null, Validators.required],
      // role: [null, Validators.required],
    }, {
      validator: PasswordValidation.MatchPassword // your custom validation method  
    });
  }

  signup() {
    for (let v in this.reg_form.controls) {
      this.reg_form.controls[v].markAsTouched();
    }
    if (this.reg_form.valid) {
     this.api.presentLoading();
      this.reg_process = true;
      var body = {
        first_name: this.reg_form.value.firstname,
        last_name: this.reg_form.value.lastname,
        email: this.reg_form.value.email,
        contact_no: this.reg_form.value.phone,
        password: this.reg_form.value.password,
        role_id: '2',
        gemh_number: this.reg_form.value.gemh_number,
        is_available_gemh: this.chkvalue,
        reason: this.reg_form.value.reason, 
        type : "application",   
      };
      this.api.signup(body).subscribe(
        (data: any) => {
          this.reg_process = false;
        this.api.dismissLoading();
          if (data.status == 1) {
            // success part
            this.api.presentToastWithOptions(data['message']);
            this.router.navigate(["/signin"]);
          } else {
            this.api.presentToastWithOptions(
              data['message']
            );
          }
        },
        err => {
          this.reg_process = false;
          this.api.dismissLoading();
          this.api.presentToastWithOptions("Internal Server Error Please try again after sometime.");
        }
      );
    }
  }

  telInputObject(obj) {
    obj.setCountry('in');
  }

  switchRole(){
    this.reg_form.get('role')
    .valueChanges.subscribe(
      (val: any) => {    
        const is_available_gemh = this.reg_form.get('is_available_gemh');
        const gemh_number = this.reg_form.get('gemh_number');
        const reason = this.reg_form.get('reason');

        is_available_gemh.patchValue(null);
        is_available_gemh.clearValidators();
        is_available_gemh.updateValueAndValidity();

        gemh_number.patchValue(null);
        gemh_number.clearValidators();
        gemh_number.updateValueAndValidity();
    
        reason.patchValue(null);
        reason.clearValidators();
        reason.updateValueAndValidity();
    
        reason.patchValue(null);
        reason.clearValidators();
        reason.updateValueAndValidity();

        if(val == this.api.Agents || val == this.api.Developer)
        {
          is_available_gemh.setValidators([Validators.required]);
        }else{
          is_available_gemh.patchValue(null);
          is_available_gemh.clearValidators();
          is_available_gemh.updateValueAndValidity();
        } 
       
    }); 
    
  }

  signin() {
    this.router.navigate(['/signin'])
  }

}
