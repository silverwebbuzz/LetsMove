import { Component, OnInit, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController, IonContent } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonService } from '../global/common_service';
declare var google;
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  @ViewChild(IonContent) content: IonContent;

  storeDetails: any = '';
  tabs: string = "desc";
  detail_form: FormGroup;
  @ViewChild('mapElement', { static: true }) mapElement: ElementRef;

  submitted: boolean;
  loading: boolean;
  Imgloading: boolean;
  propertyMainId: any;
  property_content_id: any;
  propertyDetails: any = [];
  allLangpropertyDetails: any = [];
  propertyImages: any = [];
  slides: any = [];
  userLikeProperty: any = [];
  advertisementImage: any = "";
  ipAddress: string;
  tabName: any = "Description";
  checked: any;
  public LanguageName: string = localStorage.getItem('prefered-language-name') || 'English';

  slideOptsDetails = {
    zoom: true,
    slidesPerView: 1,
    spaceBetween: 16,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    loopFillGroupWithBlank: true,
  };

  slideOptsFeatured = {
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
  investors: any;
  listSlider: any;
  lat: string;
  long: string;
  like: number = 0;
  details_process: boolean;
  languageArray: any = [];
  bannerImage: any;
  add_url: any;
  role_name: any;
  first_name: any;
  last_name: any;
  contact_no: any;
  profile_image: any;
  social_profile_image: any;
  defaultImg = '../../assets/images/default.jpg';


  constructor(
    private navCtrl: NavController,
    private statusBar: StatusBar,
    private formBuilder: FormBuilder,
    private router: Router, private iab: InAppBrowser,
    private route: ActivatedRoute,
    private ref: ChangeDetectorRef,
    private api: CommonService
  ) {
    this.detail_fb();
    this.getpropertyDetail();

    this.route.queryParams.subscribe((params) => {
      this.api.propertyUserDetail(params.pid).subscribe(
        (data: any) => {
          this.role_name = data.data.role_name
          this.first_name = data.data.first_name
          this.last_name = data.data.last_name
          this.contact_no = data.data.contact_no
          this.profile_image = data.data.profile_image
          this.social_profile_image = data.data.social_profile_image
          if (data.status == 1) {
          }
        },
      );
    })
  }

  getAreaBanner(property_content_id) {
    this.api.AdvertiseBanner(property_content_id)
      .subscribe((data: any) => {
        if (data.status == 1) {
          this.bannerImage = data.bottomBanner ? data.bottomBanner.image : '';
        }
      });
  }
  mapproperty(lat, long) {
    const map = new google.maps.Map(this.mapElement.nativeElement, {
      center: { lat: Number(lat), lng: Number(long) },
      zoom: 14
    });
    const pos = {
      lat: Number(lat),
      lng: Number(long)
    };
    map.setCenter(pos);
    const icon = {
      url: './assets/icon/location-marker.png', // image url
      scaledSize: new google.maps.Size(35, 35), // scaled size
    };
    const marker = new google.maps.Marker({
      position: pos,
      map: map,
      title: 'Hello World!',
      icon: icon
    });

    let content = "<p>This is your current position !</p>";
    let infoWindow = new google.maps.InfoWindow({
      content: content
    });

    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(map, marker);
    });
  }
  ngAfterViewInit() {

    this.mapproperty('', '')

  }

  ngOnInit() {
  }



  saveProperty(property_content_id) {
    if (this.api.isUserlogin()) {
      var body = {
        type: 1,
        property_content_id: property_content_id,
      };
      this.api
        .favouriteProperty(this.api.getToken(), body)
        .subscribe((data: any) => {
          if (data.status == 1) {
            this.like = 1;
          }
        });
    }
  }


  recommendDetails(propertyId) {
    if (propertyId) {
      this.router.navigate(["/details"], {
        queryParams: {
          pid: propertyId,
        }
      });
    }
    this.content.scrollToTop(100);
  }

  ads() {
    this.iab.create(this.add_url, '_system', 'location=yes');
  }

  getadvertisement(property_content_id) {
    this.api.advertisement(property_content_id)
      .subscribe((data: any) => {
        data.data != null ? this.advertisementImage = data.data.image : '';
      });
  }

  openTab(name) {
    this.tabName = name;
  }

  getpropertyDetail() {
    this.Imgloading = true;
    this.route.queryParams.subscribe((params) => {
      this.propertyMainId = params.pid;
      this.getIpAddress(this.propertyMainId);
      this.api
        .propertyDetail(this.propertyMainId)
        .subscribe((data: any) => {
          if (data.status == 1) {
            this.languageArray = data.data.languages;
            // this.allLangpropertyDetails = data.data;
            // this.propertyDetails = data.data.English;
            this.languageArray = data.data.languages;
            this.allLangpropertyDetails = data.data;
            // this.allLangpropertyDetails = data.data;
            if (data.data.languages[0].title) {
              this.SwitchLanguage(this.LanguageName);
            } else {
              this.router.navigate(["/404"]);
            }


            if (this.propertyDetails.image) {
              var images = this.propertyDetails.image.split(",");
              images.forEach((image) => {
                this.propertyImages.push({
                  url: this.api.getimageUrl("propertyImage/", image),
                });
              });
              this.slides = this.propertyImages;
            }
            this.Imgloading = false;
          }
          else {
            // error part
            this.router.navigate(["/404"]);
          }
        });
    });

  }

  SwitchLanguage(LanguageName) {
    let i: number = 0;
    let languagesLength: number = this.languageArray.length;

    while (i < languagesLength) {
      if (LanguageName == this.languageArray[i].title) {
        this.propertyDetails = this.allLangpropertyDetails[LanguageName];
      }
      i++;
    }
    this.property_content_id = this.propertyDetails.id;
    this.getAreaBanner(this.property_content_id);
    this.getadvertisement(this.property_content_id);
    this.mapproperty(this.propertyDetails.latitude, this.propertyDetails.longitude)
    setTimeout(() => {
      this.RecomandationPropertyDataGet(this.property_content_id, this.propertyDetails.property_type_id,
        this.propertyDetails.location);
    }, 2000);

  }

  RecomandationPropertyDataGet(property_content_id,
    property_type_id, location) {
    var body = {
      id: property_content_id,
      propertyType: property_type_id,
      location: location,
      language_id: this.api.getLanguage()
    }
    this.loading = true;
    this.api.RecomandationGet(body).subscribe((data: any) => {
      if (data.status == 1) {
        this.listSlider = data.recommendationProperty;
        this.loading = false;
      }
    });

  }

  getIpAddress(propertyMainId) {
    this.api.getIPAddress().subscribe((res: any) => {
      var body = {
        token: this.api.getToken() ? this.api.getToken() : null,
        property_id: propertyMainId,
        ip: res.ip,
      };
      this.api
        .PropertyCounter(body)
        .subscribe((data: any) => {
        });
    });
  }

  back() {
    this.router.navigate(["/listing"]);
    this.navCtrl.pop();
  }

  ionViewWillEnter() {
    this.statusBar.show();
    this.statusBar.styleLightContent();
    this.statusBar.backgroundColorByHexString('#c41a3b');
  }
  checkbox(e) {
    if (e.detail.checked == true) {
      this.checked = '1'
    }
    else {
      this.checked = '0'
    }
  }
  detail_fb() {
    this.detail_form = this.formBuilder.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      number: [null, Validators.required],
      email: [null, Validators.required],
      price: [null, Validators.required],
      message: [null, Validators.required],
    });
  }

  send() {
    for (let v in this.detail_form.controls) {
      this.detail_form.controls[v].markAsTouched();
    }
    if (this.detail_form.valid) {
      this.api.presentLoading();
      this.details_process = true;
      var body = {
        property_content_id: this.property_content_id,
        first_name: this.detail_form.value.firstName,
        last_name: this.detail_form.value.lastName,
        phone: this.detail_form.value.number,
        email: this.detail_form.value.email,
        nagotiation_price: this.detail_form.value.price,
        comment: this.detail_form.value.message,
        agree: this.checked ? this.checked : '0',
      };
      this.loading = false;
      this.api.Negotitation(body).subscribe(
        (data: any) => {
          this.details_process = false;
          this.api.dismissLoading();
          if (data.status == 1) {
            this.api.presentToastWithOptions(data.message);
          } else {
            this.api.presentToastWithOptions(data.message);
          }
        },
        (err) => {
          this.details_process = false;
          this.api.dismissLoading();
          this.api.presentToastWithOptions("Internal Server Error Please try again after sometime.");
        }
      );
    }
  }
}