# TODO
[] EntityStore（あと表示するだけっぽい？
[] フォームバリデーション
[] アニメーション関連

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
