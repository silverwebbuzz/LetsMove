import { Injectable } from '@angular/core';
import { ToastController, LoadingController, ModalController } from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token'),
    responseType: 'JSON'
  })
};


@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;
  authenticationState = new BehaviorSubject(false);

  NormalUser = 2;
  Agents = 3;
  Developer = 4;

  isLoading = false;
  isModalOpen = false;
  constructor(public toastCtrl: ToastController,
    public loadingController: LoadingController,
    private http: HttpClient,
    public modal: ModalController) {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  async presentToastWithOptions(message?, cssClass?, position?) {
    const toast = await this.toastCtrl.create({
      message: message ? message : null,
      duration: 3000,
      position: position ? position : 'bottom',
      cssClass: cssClass ? cssClass : 'dark-trans login-toster',
      buttons: [
        {
          text: 'Ok',
          role: 'cancel',
          handler: () => {
          }
        }
      ]
    });
    toast.present();
  }

  async presentLoading() {
    this.isLoading = true;
    return await this.loadingController.create({
      message: 'Please wait...',
      translucent: true,
      cssClass: 'custom-class custom-loading'
    }).then(a => {
      a.present().then(() => {
        if (!this.isLoading) {
          a.dismiss();
        }
      });
    });
  }

  async dismissLoading() {
    this.isLoading = false;
    return await this.loadingController.dismiss();
  }

  async presentModal(PageName) {
    this.isModalOpen = true;
    return await this.modal.create({
      component: PageName,
    }).then(a => {
      a.present().then(() => {
        if (!this.isModalOpen) {
          a.dismiss();
        }
      })
    });
  }

  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }

  async dismissModal() {
    this.isModalOpen = false;
    return await this.modal.dismiss();
  }

  public isCheckMethod(methodName) {
    if (localStorage.getItem("permission")) {
      const currentUser = JSON.parse(localStorage.getItem("permission"));
      const userpermissionArray = currentUser.permission;
      return userpermissionArray.indexOf(methodName) != -1;
    }
  }

  isAuthenticated() {
    return this.authenticationState.value;
  }

  // api call
  user_roll() {
    return this.http.get(environment.base_url + 'roleList')
  }

  signin(body) {
    return this.http.post(environment.base_url + 'login', body)
  }

  signup(body) {
    return this.http.post(environment.base_url + 'registration', body)
  }

  searchLocation() {
    return this.http.get(environment.base_url + 'getSearchLocation')
  }

  fetured() {
    return this.http.get<any>(environment.base_url + 'feturedPropertyList');
  }

  investors() {
    return this.http.get<any>(environment.base_url + 'investors');
  }

  WithoutTokenAdd(data) {
    return this.http.post(environment.base_url + 'searchProperty', data)
  }
  getPriceInterval(){
    return this.http.get(environment.base_url + 'getPriceInterval')
  }
  isUserlogin() {
    return localStorage.getItem('userToken') ? true : false;
  }

  filterProperty(data) {
    return this.http.post(environment.base_url + 'filterProperty', data)
  }

  getLanguage(){
    return localStorage.getItem('prefered-language-id') || 1;
  }

  DataGet() {
    return this.http.get<any>(environment.base_url + 'newsList');
  }

  allLanguageList() {
    return this.http.get<any>(environment.base_url + 'allLanguageList');
  }

  getOptionValue(URL) {
    return this.http.get<any>(environment.base_url + 'propertyTypeList');
  }

  ResidentialList(languageId) {
    return this.http.get<any>(environment.base_url + 'ResidentialCategoryList' + "/" + languageId);
  }
  CommercialList(languageId) {
    return this.http.get<any>(environment.base_url + 'CommercialCategoryList' + "/" + languageId);
  }
  LandList(languageId) {
    return this.http.get<any>(environment.base_url + 'LandCategoryList' + "/" + languageId);
  }
  
  AdvertiseBanner(property_content_id) {
    return this.http.get<any>(environment.base_url + 'getAdvertiseBanner' + "/" + property_content_id);
  }

  cmsPages() {
    return this.http.get<any>(environment.base_url + 'cmsPages');
  }

  forgot(data) {
    return this.http.post<any>(environment.base_url + 'forgetPassword', data);
  }

  sliderGet() {
    return this.http.get<any>(environment.base_url + 'investors');
  }

  getimageUrl(FolderName, imageName) {
    return environment.image_url + FolderName + imageName;
  }
  public getIPAddress() {
    return this.http.get("http://api.ipify.org/?format=json");
  }

  getToken1() {
    return localStorage.getItem('userToken') ? true : false ;
  }

  getToken() {
    return localStorage.getItem("userToken")
      ? localStorage.getItem("userToken")
      : null;
  }
  favouriteProperty(Id, data) {
    return this.http.post<any>(environment.base_url + 'favouriteProperty' + "/" + Id, data);
  }

  PropertyCounter(data) {
    return this.http.post<any>(environment.base_url + 'storeViewPropertyCounter', data);
  }

  forgotEmailCheck(data) {
    return this.http.post<any>(environment.base_url + 'AppForgetPassword', data);
  }

  reset(data) {
    return this.http.post<any>(environment.base_url + 'updatePassword', data);
  }

  contactus(data) {
    return this.http.post<any>(environment.base_url + 'support', data);
  }

  propertyDetail(Id) {
    return this.http.get<any>(environment.base_url + 'propertyDetail' + "/" + Id);
  }

  RecomandationGet(Id) {
    return this.http.post<any>(environment.base_url + 'recommendationProperty', Id);
  }

  Negotitation(data) {
    return this.http.post<any>(environment.base_url + 'storePriceNegotitation', data);
  }

  verifytoken(Id) {
    return this.http.get<any>(environment.base_url + 'verifytoken' + "/" + Id);
  }

  teamMember() {
    return this.http.get<any>(environment.base_url + 'teamMember');
  }
  advertisement(Id) {
    return this.http.get<any>(environment.base_url + 'advertisement' + "/" + Id);
  }
  
  allnewsList() {
    return this.http.get<any>(environment.base_url + 'allnewsList');
  }

  getNewsDetails(Id) {
    return this.http.get<any>(environment.base_url + 'getNewsDetails' + "/" + Id);
  }

  siteSetting() {
    return this.http.get<any>(environment.base_url + 'siteSetting');
  }

  propertyUserDetail(languageId) {
    return this.http.get<any>(environment.base_url + 'propertyUserDetail' + "/" + languageId);
  }

  
}