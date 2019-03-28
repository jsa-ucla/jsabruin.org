<?php
mb_language("Japanese");
mb_internal_encoding("UTF-8");

if (mb_send_mail('jsa.ucla@gmail.com', 'test', 'test body')) {
echo '送信完了';
} else {
echo '送信失敗';
}
?>
