import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';

import { getEntityType } from '@datorama/akita';

//import { MatSort } from '@angular/material/sort';
//import { MatTableDataSource } from '@angular/material/table';

import { IExample1CountListObject, Example1Service, Example1Query } from '~/service/example1';

@Component({
  selector: 'app-example1',
  templateUrl: './example1.component.html',
  styleUrls: ['./example1.component.scss'],
})
export class Example1Component implements OnInit {
  isLoading = false;

  //コレもホントはstoreへ
  displayedColumns = ['tagname', 'count'];

  //countListDataSource = new MatTableDataSource();
  //@ViewChild(MatSort, { static: true }) sort: MatSort;
  //readonly allState$: Observable<getEntityType<IExample1CountListObject>[]>;
  allState$: Observable<getEntityType<IExample1CountListObject>[]>;

  constructor(private example1Service: Example1Service, private example1Query: Example1Query) {
    this.isLoading = true;
    example1Service.getList().subscribe(() => {
      this.isLoading = false;
      console.log(this);
      console.log(this.example1Service);
      this.allState$ = this.example1Query.selectAll();

      //this.countListDataSource.data =
    });

    //tagsService.getList().subscribe(() => {
    //  this.isLoading = false;
    //  this.countListDataSource.data = this.countList;
    //});
  }

  ngOnInit(): void {
    //this.countListDataSource.sort = this.sort;
  }
}
