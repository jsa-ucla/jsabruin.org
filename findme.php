<?php
header("Content-type: text/html; charset=utf-8");

//パスワードとIDを設定
define("PASSWORD", "rom_o");
$post_password  = @$_POST["password"];

if ($post_password == PASSWORD) {
  header("Location: thankyou.html");
}

/**************************************************
**                ログインフォームの表示             **
**************************************************/
?>

<!DOCTYPE html>
<html lang="ja">
  <head>
  <style>
.top {
  display: block;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, 0.6) 80%, rgba(255, 255, 255, 1) 100%);
  position: relative;
  width: 100%;
  height: 100%;
}

.top input {
  text-align: left;
  position: absolute;
  width: 80%;
  left: 50%;
  top: 50%;
  font-size: 3em;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  padding: 1%;
  background: transparent;
    border: none;
    border-bottom: solid black 2px;
    color: black;
    outline: none;
    margin-bottom: 3%;
    letter-spacing: 1px;

}

.top::after {
  content: "";
  background-image: url("./img/jsa officers 2.jpg");
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: 50% 30%;
  background-attachment: fixed;
  opacity: 1;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  z-index: -1;
}
::placeholder {
   color: rgb(64,64,64);
}

    </style>
    <meta charset="UTF-8">
    <link rel="icon" href="../img/jsa icon.png">
    <link rel="stylesheet" href="../css/base.css">
    <link href='https://fonts.googleapis.com/css?family=Nunito Sans:300,700' rel='stylesheet'>
    <link href='https://fonts.googleapis.com/css?family=Roboto:300' rel='stylesheet'>
    <link href="https://fonts.googleapis.com/earlyaccess/notosansjapanese.css" rel="stylesheet" />
  </head>
  <body>
    <div class="top">
    <form action="" method="post" id="login">
      <input type="password" name="password" placeholder="find me">
    </form>
</div>
  </body>
</html>
