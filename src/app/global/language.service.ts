import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { StorageService } from './storage.service';
import { Router } from '@angular/router';
import { CommonService } from './common_service';

@Injectable({
    providedIn: 'root',
})
export class LanguageService {
    public languagePreference: string = StorageService.getItem('prefered-language') || 'en';
    public languageName: string = StorageService.getItem('prefered-language-name') || 'English';
    public languageId: any = StorageService.getItem('prefered-language-id') || 1;
    public languageImage :  string = StorageService.getItem('prefered-language-image') || 'us-svg.png';
    languageMenuShow : boolean = true;
    constructor(public translate: TranslateService,public api: CommonService,private router: Router,) {
        //translate.addLangs(['en', 'tr', 'nl']);

        translate.setDefaultLang(StorageService.getItem('prefered-language') || 'en');

        translate.use(StorageService.getItem('prefered-language') || 'en');

        StorageService.setItem(
            'prefered-language',
            StorageService.getItem('prefered-language') || this.languagePreference,
        );

        StorageService.setItem(
            'prefered-language-name',
            StorageService.getItem('prefered-language-name') || this.languageName,
        );
    }

    changeLanguage(language: string,image: string,language_id : any,language_name : any) {
        this.languagePreference = language;
        this.languageName = language_name;
        this.languageImage = image;
        this.languageId = language_id;
        this.translate.use(language);
        // this.languageMenuShow = false;
        // setTimeout(() => {
        //     this.languageMenuShow = true;
        //   },300);
        StorageService.setItem('prefered-language', language);
        StorageService.setItem('prefered-language-name', language_name);
        StorageService.setItem('prefered-language-image', image);
        StorageService.setItem('prefered-language-id', language_id);
        // this.router.navigate(["/signin"]);
    }
}
