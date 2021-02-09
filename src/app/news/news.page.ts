import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CommonService } from '../global/common_service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  news: any = [];
  news_process: boolean;

  constructor(private navCtrl: NavController,private api : CommonService,private router: Router) { }

  ngOnInit() {
    this.api.presentLoading();
    this.news_process = true;
    this.api.allnewsList()
    .subscribe((data: any) => {
      if (data.status == 1) {
        this.news = data.data;
        this.news_process = false;
        this.api.dismissLoading();
      }
      else{
        this.news_process = false;
  this.api.dismissLoading();
      }
    });
     

  }

  newsDetails(id)
  {
      this.router.navigate(["/news-details"], {
        queryParams: { id:id,
          }
      });
  }

  back()  {
    this.navCtrl.pop();
  }

}
