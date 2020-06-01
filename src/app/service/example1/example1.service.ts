import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Example1Store } from './example1.store';

import { ID, guid } from '@datorama/akita';

interface ICountListObject {
  tagname: string;
  count: number;
}

interface IExample1CountListObject {
  id: ID;
  tagname: string;
  count: number;
}

import { map } from 'rxjs/operators';

const endpoint = 'http://127.0.0.1:3001/api';

@Injectable({ providedIn: 'root' })
export class Example1Service {
  isLoading: true;
  taglist: string[];
  countList: ICountListObject[];

  constructor(private example1Store: Example1Store, private http: HttpClient) {}

  private getTweets() {
    return this.http.post(endpoint, {
      query: `
query($id:Int, $created_at:String, $num:Int, $newest:Boolean) {
  getTweets(id:$id, created_at:$created_at, num:$num, newest:$newest) {
    hashtags
  }
}`,
      variables: {
        num: 10
      }
    });
  }

  setTagList(res: any) {
    this.taglist = res.data.getTweets.map(val => {
      return val.hashtags;
    });
    return this.taglist;
  }

  setCountArray(taglist) {
    const taglistFlated = taglist.flat();
    const counts = {};
    for (let i = 0; i < taglistFlated.length; i++) {
      const key = taglistFlated[i];
      counts[key] = counts[key] ? counts[key] + 1 : 1;
    }

    this.countList = [];
    for (const property in counts) {
      const obj: ICountListObject = {
        tagname: property,
        count: counts[property]
      };
      this.countList.push(obj);
    }

    this.countList.forEach(val => {
      this.example1Store.add({
        id: guid(),
        tagname: val.tagname,
        count: val.count
      } as IExample1CountListObject);
      this.example1Store.add(this.countList);
    });

    return taglist;
  }

  getList() {
    return this.getTweets().pipe(
      map(res => this.setTagList(res)),
      map(taglist => this.setCountArray(taglist))
    );
  }

  getTaglist() {
    return this.taglist;
  }

  getCountList() {
    return this.countList;
  }
}
