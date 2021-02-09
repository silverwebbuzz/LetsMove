import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CommonService } from '../global/common_service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-individuals',
  templateUrl: './individuals.component.html',
  styleUrls: ['./individuals.component.scss'],
})
export class IndividualsComponent implements OnInit {
  searchLocationForm : FormGroup;
  locationArry: any = [];
  selected_employee: any ;
  title: any;
  content: any;
  img: any;
  searchErrorMsg : any = "";
  news_process: boolean;


  constructor(private formBuilder: FormBuilder,public zone: NgZone,
    private api :CommonService,private router: Router) {  this.getSearchLocation();}

  ngOnInit() {
    this.searchLocationForm = this.formBuilder.group({
      search: ["",null],
    })
    this.api.presentLoading();
    this.news_process = true;
    this.api.cmsPages()
      .subscribe((data: any) => {
        if (data.status == 1) {
          this.title = data.data.individuals.page_title;
          this.content = data.data.individuals.content;
          this.img = data.data.individuals.image;
          this.news_process = false;
        this.api.dismissLoading();
        }
        else{
          this.news_process = false;
    this.api.dismissLoading();
        }
    });
    
  }
  selectEvent(event) {
    this.searchErrorMsg = "";
    this.selected_employee = JSON.stringify(event)
  }

  getSearchData(type,keyword){
    this.searchErrorMsg = "";
    if(keyword.data.length != 0){
      if(type != '' && keyword.data[0].address != ''){
        this.router.navigate(["/listing"], {
          queryParams: { t:type, k:keyword.data[0].address }
        });
      }
    }else{
      this.searchErrorMsg = "No property available related to what you have searched";
    }
  }

  getSearchLocation(){
    this.api.searchLocation().subscribe((data: any) => {
      if (data.status == 1) {
        this.locationArry = data.data;
      }
    });
  }

  onSearchChange(searchValue: string): void {  
    this.locationArry.sort(function(a, b){
      return a.address.length - b.address.length;
    });
  }

}
