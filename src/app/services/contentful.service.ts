import { Injectable } from '@angular/core';
import { createClient, Entry} from 'contentful';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {

  constructor() { }

  private client = createClient({
    space: 'gwnmxecw2kja',
    accessToken: 'U4MlJ4wBNF2vmSPmLdcYBYvavKsWEnKVFcfCBwoLqpc'
  });

  getAllEntries(){
    //this.client.getEntries()
    const promise = this.client.getEntries();
    return from(promise);
    //.then(entries => console.log(entries));
  }

  getEntryById(id: string){
    const promise = this.client.getEntry(id);
    return from(promise);
  }
}
