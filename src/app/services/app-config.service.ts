import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {

  private configData: any;

  constructor(private http: HttpClient) { }

  public async loadConfig() {
    const data = await this.http
    .get<any>('./assets/config/config.json')
    .toPromise();
    this.configData = data;
    console.log(`****** AppConfigService.loadConfig data: ${JSON.stringify(data)}) ******`);
    return data;
  }

  get config(): string {
    if (!this.configData)
      console.log(`****** AppConfigService.config error: config property could not be loaded ******`);
    return this.configData;
  }

}
