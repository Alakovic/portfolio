import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private activeLang: string = 'en';
  private readonly selectedLanguage = 'language'

  constructor(private translate: TranslateService) {
    const savedLanguage = localStorage.getItem(this.selectedLanguage)
    this.activeLang = savedLanguage || 'en';
    this.translate.use(this.activeLang)
  }

  switchLanguage(lang:string) {
    this.activeLang = lang;
    this.translate.use(lang);
    localStorage.setItem(this.selectedLanguage, lang);
  }

  get currentLang():string {
    return this.activeLang;
  }
}
