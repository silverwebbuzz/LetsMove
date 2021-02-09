import { Component, OnInit, NgZone } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { CommonService } from '../global/common_service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.page.html',
  styleUrls: ['./aboutus.page.scss'],
})
export class AboutusPage implements OnInit {

  slideOptsTeam = {
    zoom: false,
    slidesPerView: 1,
    spaceBetween: 16,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    loopFillGroupWithBlank: true,
  };
  content: any;
  title: any;
  img: any;
  searchLocationForm : FormGroup;
  locationArry: any = [];
  selected_employee: any ;
  ourTeam: any;

  constructor(private statusBar: StatusBar,private formBuilder: FormBuilder,public zone: NgZone,
    private api :CommonService,private router: Router) { }

  ngOnInit() {

    this.searchLocationForm = this.formBuilder.group({
      search: ["",null],
    })

    this.api.teamMember()
    .subscribe((data: any) => {
      if (data.status == 1) {
        this.ourTeam = data.data;
        //this.loader = false;
      }
    });

    this.api.cmsPages()
      .subscribe((data: any) => {
        if (data.status == 1) {
          this.title = data.data.about_us.page_title;
          this.content = data.data.about_us.content;
          this.img = data.data.about_us.image;
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

  ionViewWillEnter() {
    this.statusBar.show();
    this.statusBar.styleLightContent();
    this.statusBar.backgroundColorByHexString('#c41a3b');
  }

}
