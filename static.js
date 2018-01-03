//286P
//画像ファイルなどの静的ファイルを、そのまんま返す
//htmlディレクトリは返す静的ファイルが入っているフォルダ
//Expressのモジュールを取り込んで作成
const express = require('express')
const app = express()

// 待受開始
app.listen(3000, ()=>{
  console.log('起動しました')
})

// 静的htmlファイルを自動的に返す用に設定
app.use('/', express.static('./html'))

// $>node static.js
//アクセス
//http://localhost:3000
