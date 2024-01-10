import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  private translations: any = {};

  constructor(private http: HttpClient) {}

  public loadTranslations(lang: string): Promise<any> {
    return this.http.get(`./assets/i18n/${lang}.json`)
      .toPromise()
      .then((data: any) => {
        this.translations = data;
        console.log('Translations loaded:', data);
        return data;
      })
      .catch(error => {
        console.error('Error loading translations:', error); // Log the error
        throw 'Error loading translations'; // Throw a consistent error message
      });
  }

  public translate(key: string): string {
    return this.translations[key] || key;
  }
}
