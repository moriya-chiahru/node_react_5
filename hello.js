//276P
//Expressのモジュールを取り込んで作成
const express = require('express')
const app = express()
const portNo = 3000

//アクセスがあった場合
app.get('/', (req, res, next) => {
  res.send('Hello Word!')
})

//サーバーを起動
app.listen(portNo, ()=>{
  console.log('起動しました')
})

//実行
// $>node hello.js
//アクセス
//http://localhost:3000
