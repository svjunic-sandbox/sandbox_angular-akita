import { Component, OnInit, OnDestroy } from '@angular/core';
import { Example4Service } from '~/service/example4.service';

@Component({
  selector: 'app-example4',
  templateUrl: './example4.component.html',
  styleUrls: ['./example4.component.scss'],
})
export class Example4Component implements OnInit, OnDestroy {
  textarea = '';
  textarea2 = '';

  constructor(private example4Service: Example4Service) {}

  ngOnInit(): void {
    // serviceでEventEmitterはアンチパターンらしく、rxjsで購読する
    // https://qiita.com/musou1500/items/941464943b547ca7674f
    this.textarea2 = this.example4Service.text;
    this.example4Service.textChange$.subscribe((_text) => {
      this.textarea2 = _text;
    });
  }

  ngOnDestroy() {
    this.example4Service.textChange$.unsubscribe();
  }

  handleTextareaInput(e) {
    this.example4Service.text = e.target.value;
  }

  handleTextarea2Input(e) {
    this.example4Service.text = e.target.value;
  }
}
