import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CommonService } from '../global/common_service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.page.html',
  styleUrls: ['./news-details.page.scss'],
})
export class NewsDetailsPage implements OnInit {
  news_process: boolean;
  news: any;
  description: any;
  img: any;
  title: any;

  constructor(private navCtrl: NavController,private api : CommonService, private route: ActivatedRoute,) { }

  ngOnInit() {
    let reqData = this.route.snapshot.queryParams;
    this.api.presentLoading();
    this.news_process = true;
    this.api.getNewsDetails(reqData.id)
    .subscribe((data: any) => {
      if (data.status == 1) {
        this.img = data.data.image;
        this.title = data.data.title;
        this.description = data.data.description;
        this.news_process = false;
        this.api.dismissLoading();
      }
      else{
        this.news_process = false;
  this.api.dismissLoading();
      }
    });
     
  }

  back() {
    this.navCtrl.pop();
  }

}
