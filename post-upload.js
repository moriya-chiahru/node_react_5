//282P
//Postで値を表示する

//Expressのモジュールを取り込んで作成
const express = require('express')
const app = express()

//multerをインストール
//npm install --save multer
//multerを読み込む
const multer = require('multer')
// pathを読み込む
const path = require('path')


// アップロード場所を指定する
const tmpDir = path.join(__dirname, 'tmp')
// ☆pubフォルダは手動作成
const pubDir = path.join(__dirname, 'pub')
// const uploader = multer({dest: tmpDir})

var uploader = multer({ dest: tmpDir }).single('aFile');

//待ち受ける、サーバーを起動
app.listen(3000, ()=>{
  console.log('起動しました')
})


// アップロードフォームを表示
app.get('/', (req, res) => {
    res.send('<form action="/" method="post" enctype="multipart/form-data">' +
    '<br><input type="file" name="aFile">' +
    '<br><input type="submit" value="アップロード">' +
    '</form>')
})

// 静的ファイルは勝手に返すようにする
app.use('/pub', express.static(pubDir))

// アップロードを受け付ける
app.post('/', (req, res) => {
// app.post('/', uploader.single('aFile'), (req, res) => {
  uploader(req, res, function(err) {

    console.log('ファイルを受け付けました')
    console.log('オリジナルファイル名：'+req.file.originalname)
    console.log('保存したパス：'+req.file.path)
    // MIMEでのファイル形式チェック
    if(req.file.mimetype !== 'image/png') {
      res.send('PNG画像以外はアップロードしません')
      return
    }
    //TODO:本当にPNGかここでチェックする
    // ファイルを移動する
    const fname = req.file.filename + '.png'
    const des = pubDir + '/' + fname
    const fs = require('fs')
    fs.rename(req.file.path, des)
    // HTMLを出力
    res.send('ファイルを受信しました' + 
      `<img src="pub/${fname}" />`)
  });
})

// $>node post-upload.js
//アクセス
//http://localhost:3000
