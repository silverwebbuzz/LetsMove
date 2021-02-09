import { Component, ViewChildren, QueryList } from '@angular/core';

import { Platform, AlertController, MenuController, IonRouterOutlet } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
import { CommonService } from './global/common_service';
import { Deeplinks } from '@ionic-native/deeplinks/ngx';
import { ResetPage } from './reset/reset.page';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  pages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home',
    },
    {
      title: 'Contact Us',
      url: '/contactus',
      icon: 'call',
    },
    {
      title: 'About Us',
      url: '/aboutus',
      icon: 'information-sharp',
    },
    {
      title: 'Agents',
      url: '/agent',
      icon: 'body',
    },
    {
      title: 'Developers',
      url: '/developers',
      icon: 'code',
    },
    {
      title: 'Individuals',
      url: '/individuals',
      icon: 'man',
    },    
  ]

  @ViewChildren(IonRouterOutlet) routerOutlets: QueryList<IonRouterOutlet>;
  usertoken: string;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private alertCtrl: AlertController,
    private menuCtrl: MenuController,
    private router: Router,
    private api: CommonService,
    private deeplinks: Deeplinks,
    private location: Location,
    private alertController: AlertController,
  ) {
    this.backButtonEvent();
    this.initializeApp();
    if (!localStorage.getItem('userToken') || !localStorage.getItem('prefered-language')) {
      this.router.navigate(['/home']);
    }
    if (localStorage.getItem('userToken')|| localStorage.getItem('prefered-language')) {
        this.router.navigate(['/home']);
      }

      this.router.events.subscribe((event: Event) => {
        if (event instanceof NavigationStart) {
           window.scrollTo(0,0);  
        }

       
    });
    
  }

  backButtonEvent() {
    this.platform.backButton.subscribeWithPriority(0, () => {
      this.routerOutlets.forEach(async (outlet: IonRouterOutlet) => {
          if (this.router.url != '/home') {
            await this.location.back();
          }
          else if (this.router.url === '/home') {
            if (this.router.url === '/home') {
              this.presentAlertConfirm();
            }
            else {
              navigator['app'].exitApp();
            }
          }
               
      });
    });
  }
  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      // header: 'Confirm!',
      message: 'Are you sure you want to exit the app?',
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => { }
      }, {
        text: 'Close App',
        handler: () => {
          navigator['app'].exitApp();
        }
      }]
    });

    await alert.present();
  }
  ngOnInit(){}

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.show();
      this.statusBar.styleLightContent();
      this.statusBar.backgroundColorByHexString('#c41a3b');

      setTimeout(() => {
        this.splashScreen.hide();
      }, 3000);

    });
    
    this.platform.ready().then(() => {
      this.deeplinks.route({
        '/reset' : {}
      }).subscribe( (match)=> {
        if (match.$args.t) {
          this.router.navigate(["/reset"], {
            queryParams: { t: match.$args.t },
          });
        }
        }, (nomatch) => {
         
        });
      this.statusBar.styleDefault();
      setTimeout(() => {
        this.splashScreen.hide();
      }, 3000);
    });

  }

  login() {
    this.menuCtrl.close();
    this.router.navigate(['/landing']);
  }

  async logout() {

    this.menuCtrl.close();
    const alert = await this.alertCtrl.create({
      // mode: 'md',
      header: 'Confirm !',
      message: 'Are you sure you want to logout ?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
        }, {
          text: 'Logout',
          handler: () => {
            localStorage.clear();
            this.api.presentToastWithOptions('Logout successfully!');
            this.router.navigate(['/home']);
          }
        }
      ]
    });
    await alert.present();
  }
}
