import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Example1Store } from './example1.store';

import { ID, guid } from '@datorama/akita';

export interface ICountListObject {
  tagname: string;
  count: number;
}

export interface IExample1CountListObject {
  id: ID;
  tagname: string;
  count: number;
}

import { map } from 'rxjs/operators';

const endpoint = 'http://127.0.0.1:3001/api';

@Injectable({ providedIn: 'root' })
export class Example1Service {
  isLoading: true;
  //taglist: string[];
  //countList: ICountListObject[];
  //readonly entities: IExample1CountListObject[];

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
        num: 100,
      },
    });
  }

  setTagList(res: any) {
    const taglist: string[] = res.data.getTweets.map((val) => {
      return val.hashtags;
    });
    return taglist;
  }

  setCountArray(taglist) {
    const taglistFlated = taglist.flat();
    const counts = {};
    for (let i = 0; i < taglistFlated.length; i++) {
      const key = taglistFlated[i];
      counts[key] = counts[key] ? counts[key] + 1 : 1;
    }

    const countList = [];
    for (const property in counts) {
      const obj: ICountListObject = {
        tagname: property,
        count: counts[property],
      };
      countList.push(obj);
    }

    countList.forEach((val) => {
      console.log({
        id: guid(),
        tagname: val.tagname,
        count: val.count,
      } as IExample1CountListObject);

      this.example1Store.add({
        id: guid(),
        tagname: val.tagname,
        count: val.count,
      } as IExample1CountListObject);
    });

    return;
  }

  getList() {
    return this.getTweets().pipe(
      map((res) => this.setTagList(res)),
      map((taglist) => this.setCountArray(taglist))
    );
  }
}
