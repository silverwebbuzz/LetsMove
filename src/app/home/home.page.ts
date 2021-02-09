import { Component, NgZone } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { CommonService } from '../global/common_service';
import { LanguageService } from 'src/app/global/language.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  slideOptsFeatured = {
    zoom: false,
    slidesPerView: 1.2,
    spaceBetween: 16,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    loopFillGroupWithBlank: true,
  };

  slideOpts = {
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

  slideOptsNews = {
    zoom: false,
    slidesPerView: 1.3,
    spaceBetween: 16,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    loopFillGroupWithBlank: true,
  };

  loading: boolean;
  news: any;
  listSlider: any;
  investors: any;
  locationArry: any = [];
  selected_employee: any ;
  img: any ;
  len: boolean;
  searchLocationForm : FormGroup;
  fb: any;
  searchErrorMsg : any = "";
  languages: any;
  defaultImg = '../../assets/images/default.jpg';

  constructor(private statusBar: StatusBar, private router: Router,
    private formBuilder: FormBuilder,public zone: NgZone,private languageService: LanguageService,
    private api :CommonService) {
      this.featuredDataGet();
      this.InvestorsDataGet();
      this.getSearchLocation();
      this.NewsDataGet();
      this.img = this.api.getimageUrl
    }

  ionViewWillEnter() {
    this.statusBar.show();
    this.statusBar.styleLightContent();
    this.statusBar.backgroundColorByHexString('#c41a3b');
  }  

  ngOnInit() {
    this.searchLocationForm = this.formBuilder.group({
      search: ["",null],
    })
  }

 
  NewsDataGet(){
    this.loading = true;
    this.api.DataGet().subscribe((data: any) => {
      if (data.status == 1) {
        this.news = data.data;
        this.loading = false;
      }
    });
  }

  PropertyDetails(propertyId)
  {
    if(propertyId){
      this.router.navigate(["/details"], {
        queryParams: { pid:propertyId,
          }
      });
    }
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

  featuredDataGet(){
    this.loading = true;
    this.api.fetured().subscribe((data: any) => {
      if (data.status == 1) {
        this.listSlider = data.data;
        this.len = this.listSlider.length > 0
        this.loading = false;
      }
    });
  }

  listing_redirect(){
    this.router.navigate(["/listing"])
  }

  InvestorsDataGet() {
    this.loading = true;
    this.api.investors().subscribe((data: any) => {
      if (data.status == 1) {
        this.investors = data.data;
        this.loading = false;
      }
    });
  }

  onSearchChange(searchValue: string): void {  
    this.locationArry.sort(function(a, b){
      return a.address.length - b.address.length;
    });
  }

  newsDetails(id)
  {
      this.router.navigate(["/news-details"], {
        queryParams: { id:id,
          }
      });
  }


  newsList() {
    this.router.navigate(['/news']);
  }
  
}