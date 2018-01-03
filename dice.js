//280P
//ルーティングを設定
//正規表現を使ったルーティングのアクセス

//Expressのモジュールを取り込んで作成
const express = require('express')
const app = express()
const portNo = 3000

// URLに応じた処理を行う
// ルートへのアクセス
app.get('/', (req, res, next) => {
  res.send('<p><a href="/dice/6">6面のサイコロ</a><br>' + 
    '<a href="/dice/12">12面のサイコロ</a><br>')
})

// サイコロへのアクセス
//正規表現:num
app.get('/dice/:num', (req, res) => {
  //取得する場合は req.params.num
  res.send('今回の値は...' + dice(req.params.num))
})

//サイコロのランダムを算出する関数
function dice(n) {
  return Math.floor(Math.random() * n) +1
}

//落ち受ける、サーバーを起動
app.listen(portNo, ()=>{
  console.log('起動しました')
})

//実行
// $>node dice.js
//アクセス
//http://localhost:3000
