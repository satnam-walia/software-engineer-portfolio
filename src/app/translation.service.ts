import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private translations: any = {};

  constructor(private http: HttpClient) {}

  public loadTranslations(lang: string): Promise<any> {
    return this.http.get(`/assets/i18n/${lang}.json`)
      .toPromise()
      .then(data => {
        this.translations = data;
      });
  }

  public translate(key: string): string {
    return this.translations[key] || key;
  }
}
