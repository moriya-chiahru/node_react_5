//282P
//Postで値を表示する

//Expressのモジュールを取り込んで作成
const express = require('express')
const app = express()

//body-parserをインストール
//npm install --save body-parser
const bodyparser = require('body-parser')
app.use(bodyparser.urlencoded({extended: true}))

//待ち受ける、サーバーを起動
app.listen(3000, ()=>{
  console.log('起動しました')
})


// GETメソッドならWebフォームを表示
app.get('/', (req, res, next) => {
    res.send('<form method="POST">' +
    '<textarea name="memo">テスト</textarea>' +
    '<br><input type="text" name="text" value="テキスト">' +
    '<br><input type="submit" value="送信">' +
    '</form>')
})

// POSTメソッドでを受け付ける
app.post('/', (req, res) => {
  //POSTの値を取得
  const s = JSON.stringify(req.body)
  res.send('POSTを受信'+ s)
})

//サイコロのランダムを算出する関数
function dice(n) {
  return Math.floor(Math.random() * n) +1
}

// $>node post-show.js
//アクセス
//http://localhost:3000
