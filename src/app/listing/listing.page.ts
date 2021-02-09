import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { CommonService } from '../global/common_service';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router, ActivatedRoute } from '@angular/router';
import { ActionSheetController, PopoverController, ModalController } from '@ionic/angular';
import { SatPopover } from '@ncstate/sat-popover';
interface MenuItem {
  val: string;
  children?: MenuItem[];
}

@Component({
  selector: 'app-listing',
  templateUrl: './listing.page.html',
  styleUrls: ['./listing.page.scss'],
})
export class ListingPage implements OnInit {

  listing_form: FormGroup;
  loading: boolean = true;
  findLoading: boolean = false;
  image_url = environment.property_image_url;
  thumb_url = environment.property_thumb_url;
  defaultImg = '../../assets/images/default.jpg';


  PropertyContent: any;
  submitted: boolean;
  categoryArry: any = [];
  propertyType: any = [];
  searchLocation: any;

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
  test: any;
  list_process: boolean = false;

  @ViewChildren(SatPopover) allPopovers: QueryList<SatPopover>;

  selection: any;
  news_process: boolean;
  interval: any;
  constructor(
    private api: CommonService,
    private statusBar: StatusBar,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    public actionSheetCtrl: ActionSheetController,
    private popoverCtrl: PopoverController,
    private modal: ModalController,
    private modalCtrl: ModalController,

  ) {
    var newRelated = [];
    var newarray = [];

    this.api
      .getOptionValue("/propertyTypeList")
      .subscribe((data: any) => {
        if (data.status == 1) {
          this.propertyType = data.data;
        }
      });

    this.api.presentLoading();
    this.news_process = true;
    this.route.queryParams.subscribe(params => {
      var token = this.api.isUserlogin() ? this.api.getToken() : "";
      var body = {
        is_available: params.t, search: params.k, token: token,
        language_id: this.api.getLanguage()
      };
      this.searchLocation = params.k;
      this.api.WithoutTokenAdd(body).subscribe(
        (data: any) => {
          if (data.status == 1) {
            this.PropertyContent = data.data.map(x => {
              if (x.property_content) {
                x.property_content.primary_key = x.id;
                return x.property_content;
              }

              setTimeout(() => {
                this.news_process = false;
                this.api.dismissLoading();
              }, 2000);


            });
            this.news_process = false;
            this.api.dismissLoading();
          }
          else {
            this.news_process = false;
            this.api.dismissLoading();
          }
        },
        err => { }
      );
    });
    this.news_process = false;
    this.api.dismissLoading();

    this.listing_fb();
    this.getPriceInterval()
  }

  ngOnInit() {
  }

  getPriceInterval() {
    this.api.getPriceInterval().subscribe((data: any) => {
      if (data.status == 1) {
        this.interval = data.data;
      }
    });
  }

  ionViewWillEnter() {
    this.statusBar.show();
    this.statusBar.styleLightContent();
    this.statusBar.backgroundColorByHexString('#c41a3b');
  }

  listing_fb() {
    this.listing_form = this.formBuilder.group({
      radius: [null, Validators.required],
      pRange1: [null, Validators.required],
      pRange2: [null, Validators.required],
      pType: [null, Validators.required],
      site: [null, Validators.required],
      category: [null, Validators.required],
    });
  }

  getimageUrl(imageName) {
    return this.image_url + imageName;
  }

  getthumbUrl(imageName) {
    return this.thumb_url + imageName;
  }

  submit() {
    for (let v in this.listing_form.controls) {
      this.listing_form.controls[v].markAsTouched();
    }
    this.list_process = true;

    if (this.listing_form.valid) {
      var token = this.api.isUserlogin() ? this.api.getToken() : "";

      var body = {
        property_type_id: this.listing_form.value.category,
        location: this.searchLocation,
        radius: this.listing_form.value.radius,
        catgory_id: this.listing_form.value.pType,
        min_price: Number(this.listing_form.value.pRange1),
        max_price: Number(this.listing_form.value.pRange2),
        added_to_site: this.listing_form.value.site,
        token: token,
        language_id: this.api.getLanguage()

      };
      this.PropertyContent = [];
      this.api.filterProperty(body).subscribe(
        (data: any) => {
          this.list_process = false;
          this.api.dismissLoading();
          if (data.status == 1) {
            this.PropertyContent = data.data.map(x => {
              x.property_content.primary_key = x.id;
              return x.property_content;
            });
          }
          this.list_process = false;
          this.loading = false;
        },
        err => {
          this.list_process = false;
          this.api.dismissLoading();
          this.api.presentToastWithOptions("Internal Server Error Please try again after sometime.");
        }
      );
    }
  }

  onChangePropertyType(e) {
    if (e.target.value) {
      var typeId = e.target.value;
      if (typeId == 1) {
        this.api.ResidentialList(1).subscribe(
          (data: any) => {
            if (data.status == 1) {
              this.categoryArry = data.data;

            }
          });
      }

      if (typeId == 2) {
        this.api.CommercialList(1).subscribe(
          (data: any) => {
            if (data.status == 1) {
              this.categoryArry = data.data;
            }
          });
      }

      if (typeId == 3) {
        this.api.LandList(1).subscribe(
          (data: any) => {
            if (data.status == 1) {
              this.categoryArry = data.data;

            }
          });
      }
    }
  }

  PropertyDetails(propertyId) {
    localStorage.setItem("propertyMainId", propertyId.primary_key)
    localStorage.setItem("property_type_id", propertyId.property_type_id)
    if (propertyId) {
      this.router.navigate(["/details"], {
        queryParams: {
          pid: propertyId.primary_key
        }
      });
    }
  }

  menuItems: MenuItem[] = [
    { val: 'Price (Low to High)' },
    { val: 'Price (High to Low)' },

  ];

  select(values) {
    if (values == 'Price (Low to High)') {
      this.PropertyContent.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    } else if (values == 'Price (High to Low)') {
      this.PropertyContent.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    }
    // close all popovers
    this.allPopovers.forEach(p => p.close());
  }
}
