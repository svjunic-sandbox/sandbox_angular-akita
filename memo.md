# TODO
[] EntityStore
[] フォームバリデーション
[] アニメーション関連
[] モジュール

# akita
angular全般で言えるっぽいが、cliで最初作れば色々やってくれて楽
app.module.tsだけは自分でさわらないといけなから、そこだけは忘れがち

https://angular.jp/guide/cheatsheet

# 今後ハマりやすそう？なメモ
基本的に、データをComponentのテンプレートで扱う場合にはObserbableで取り、async pipeを使う

## rest apiと連携できるっぽい？
```
? Use Http Entity Service ? (from @datorama/akita-ng-entity-service) Yes
```
今回はapiがないので試してない

## その他
setIntervalだすとtimersモジュールをimportしようとするけど、rxjsが正解

# 参考
## store
https://qiita.com/massa142/items/271e7821b17ca59dbc76

## entity-store
https://engineering.datorama.com/introducing-akitas-new-entity-service-at-your-service-c511a82fba22  
https://medium.com/angular-in-depth/state-management-in-angular-using-akita-82f117d282dd


- EntityStoreを試すときにサービスをEntityStoreで作るとファイルは作られるけどクラスがかぶっておかしくなるので試すときは注意

# 謎
implements ちゃんと書いていないことも多い、全体的にゆるく使ってく感じ？
sort機能あるけどangular側のsortよりこっち？
akita等サービスの格納先はstate？object


```
import { Component, OnInit, OnChanges, Input } from '@angular/core';

// NOTE: DoCheckとかもimplementsに入れる必要がありそうだけど大変だ

@Component({
  selector: 'app-example1-child',
  templateUrl: './example1-child.component.html',
  styleUrls: ['./example1-child.component.scss']
})
export class Example1ChildComponent implements OnInit, OnChanges {
  private _text = '';
  changelog = '';

  // @Input()
  // set text(text: string) {
  //   this._text = (text && text.trim()) || '<no text set>';
  // }
  // get text(): string {
  //   return this._text;
  // }
  @Input() text: string;

  ngOnInit(): void {
    console.log('0. ngOnInit, コンポーネントが生成された');
  }

  // NOTE: https://angular.jp/guide/lifecycle-hooks
  // propsが変更されたときに動く
  ngOnChanges() {
    this.changelog = `確認用: ${Date()}`;
    console.log('1. ngOnChanges, propsが変更された');
    // SimpleChanges を使って変更前の値と変更後の値、そして変更されているかをログ出力する
  }

  ngDoCheck() {
    // NOTE
    // Angularが検出できない、または検出できない変更を検出して、それに基づいて実行します。
    // 変更検知の実行中に毎回、そして ngOnChanges() と ngOnInit() の直後に呼び出されます。
    console.log('2. ngDoCheck, propsが変更された,検知できない処理用');
  }

  ngAfterContentInit() {
    // NOTE
    // Angularがコンポーネントのビューあるいはディレクティブが存在するビューに、外部コンテンツを投影した後に応答します。
    // 最初の ngDoCheck() の後に 1度 呼び出されます。
    console.log('3. ngAfterContentInit, ngDoCheckのあと一度だけ呼び出させる');
  }

  ngAfterContentChecked() {
    // NOTE
    // Angularがディレクティブ/コンポーネントに投影された外部コンテンツをチェックした後に応答します。
    console.log('4. ngAfterContentChecked, ngAfterContentInit() とその後全ての ngDoCheck() の後に呼び出されます。');
  }

  ngAfterViewInit() {
    // NOTE
    // Angularがコンポーネントのビューと子のビュー、あるいはディレクティブが存在するビューを初期化した後に応答します。
    // 最初の ngAfterContentChecked() の後に 1度 呼び出されます。
    console.log('5. ngAfterViewInit, 最初の ngAfterContentChecked() の後に 1度 呼び出されます。');
  }

  ngAfterViewChecked() {
    // NOTE
    // Angularがコンポーネントのビューと子のビュー、あるいはディレクティブが存在するビューをチェックした後に応答します。
    // ngAfterViewInit() とその後のすべての ngAfterContentChecked() の後に呼び出されます。
    console.log('6. ngAfterViewChecked, ngAfterViewInit() とその後のすべての ngAfterContentChecked() の後に呼び出されます。');
  }

  ngOnDestroy() {
    // NOTE
    // Angularがディレクティブ/コンポーネントを破棄する直前に、クリーンアップします。 メモリリークを回避するためにObservableの購読を解除し、イベントハンドラをデタッチしましょう。
    // Angularがディレクティブ/コンポーネントを破棄する 直前 に呼び出されます。
    console.log('-1. ngOnDestroy, Angularがディレクティブ/コンポーネントを破棄する 直前 に呼び出されます');
  }
}
```
