import { Injectable } from '@angular/core';
import { _BACKEND_HOST } from './constants';

@Injectable()
export class DataGetter {

  async dataByUrl(url:string) {
    //url='https://gbfs.citibikenyc.com/gbfs/en/station_information.json';
    const resp = await fetch(url);
    let data;
    try{
      data = await resp.json(); 
      return data
    }
    catch{
      
      data=null;
    }
    return data;
  }

  async postData(url:string, p_data:any) {
    //console.log("service:",url,p_data)
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(p_data)
    });
    //console.log(response)
    return response.json();
  }
}