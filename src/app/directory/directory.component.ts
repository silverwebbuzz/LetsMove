import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CommonService } from '../global/common_service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.scss'],
})
export class DirectoryComponent implements OnInit {
  searchLocationForm : FormGroup;
  locationArry: any = [];
  selected_employee: any ;
  title: any;
  content: any;
  img: any;


  constructor(private formBuilder: FormBuilder,public zone: NgZone,
    private api :CommonService,private router: Router) {  this.getSearchLocation();}

  ngOnInit() {
    this.searchLocationForm = this.formBuilder.group({
      search: ["",null],
    })

    this.api.cmsPages()
      .subscribe((data: any) => {
        if (data.status == 1) {
          this.title = data.data.directory.page_title;
          this.content = data.data.directory.content;
          this.img = data.data.directory.image;
        }
    });
  }
  getSearchData(type,keyword){
    if(type != '' && keyword.data[0].address != ''){
      this.router.navigate(["/listing"], {
        queryParams: { t:type, k:keyword.data[0].address }
      });
    }
  }

  selectEvent(event) {
    this.selected_employee = JSON.stringify(event)
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
