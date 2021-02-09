import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../global/language.service';
import { CommonService } from '../global/common_service';

export interface LanguageList {
    abbreviation: string;
    name: string;
    gap: string;
    image :string;
}

@Component({
    selector: 'app-language-buttons',
    templateUrl: './language-buttons.component.html',
    styleUrls: ['./language-buttons.component.scss'],
})
export class LanguageButtonsComponent implements OnInit {
    
    public languages: LanguageList[] = [
        {
            abbreviation: 'en',
            name: 'English',
            gap: '',
            image: 'us-svg.png'
        },
        {
            abbreviation: 'el',
            name: 'Greek',
            gap: 'ml-1',
            image : 'greec.png'
        }
    ];
    img: CommonService;

    constructor(public translate: TranslateService, public languageService: LanguageService,public api: CommonService) {
        this.api.allLanguageList().subscribe((data: any) => {
            if (data.status == 1) {
              this.languages = data.data;
              console.log("lanukjj",this.languages)
            }
          });
          this.img = api
    }

    ngOnInit() {}
}
