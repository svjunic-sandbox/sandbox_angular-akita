import { Component, OnInit, ViewChild, ViewChildren, AfterViewInit } from '@angular/core';

declare global {
  interface Window {
    selectedMogetan: any;
    mogetas: any;
  }
}

@Component({
  selector: 'app-viewchild',
  templateUrl: './viewchild.component.html',
  styleUrls: ['./viewchild.component.scss'],
})
export class ViewchildComponent implements OnInit, AfterViewInit {
  // 単体の参照確認用
  @ViewChild('mogeta') public mogeta: HTMLDivElement;

  // 表示が切り替わるタイプの確認用
  @ViewChild('mogetan') public mogetan: HTMLDivElement;

  // ViewChildrenの動作確認用
  @ViewChildren('mogetas') public mogetas: HTMLDivElement;

  //optionがselectedになるわけじゃない
  mogetanState = 1;

  //mogetasList = ['mogetas1', 'mogetas2', 'mogetas3', 'mogetas4', 'mogetas5', 'mogetas6', 'mogetas7', 'mogetas8', 'mogetas9', 'mogetas10', 'mogetas11', 'mogetas12', 'mogetas13', 'mogetas14', 'mogetas15', 'mogetas16', 'mogetas17', 'mogetas18', 'mogetas19', 'mogetas20'];
  mogetasList = [];

  constructor() {
    console.log('constructor', this.mogeta);
  }

  ngOnInit(): void {
    console.log('ngOnInit', this.mogeta);
  }

  ngAfterViewInit(): void {
    // ここで初めて参照できる
    console.log('ngOnInit', this.mogeta);
    window.mogetas = this.mogetas;
  }

  handleOptionChange() {
    console.log(this.mogetanState);
    window.selectedMogetan = this.mogetan;
  }
}
