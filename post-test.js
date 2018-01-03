//281P
//Postで値を受け取る

//Expressのモジュールを取り込んで作成
const express = require('express')
const app = express()

//落ち受ける、サーバーを起動
app.listen(3000, ()=>{
  console.log('起動しました')
})

// GETメソッドならWebフォームを表示
app.get('/', (req, res, next) => {
    res.send('<form method="POST">' +
    '<textarea name="memo">テスト</textarea>' +
    '<br><input type="submit" value="送信">' +
    '</form>')
})

// POSTメソッドでを受け付ける
app.post('/', (req, res) => {
  res.send('POSTされました')
})

//サイコロのランダムを算出する関数
function dice(n) {
  return Math.floor(Math.random() * n) +1
}

// $>node post-test.js
//アクセス
//http://localhost:3000
