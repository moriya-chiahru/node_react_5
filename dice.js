//280P
//クエリの内容を取得する

//Expressのモジュールを取り込んで作成
const express = require('express')
const app = express()
const portNo = 3000

// URLに応じた処理を行う
// ルートへのアクセス
app.get('/', (req, res, next) => {
  //?q=数字 は　req.query.q　で取得できる
  if(!req.query.q){
    res.send('<p><a href="?q=6">6面のサイコロ</a><br>' + 
      '<a href="?q=12">12面のサイコロ</a><br>')
  } else {
    const q = parseInt(req.query.q, 10)
    res.send('今回の値は...' + dice(q))
  }
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
