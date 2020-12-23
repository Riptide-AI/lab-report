<?php
if(isset($_POST['submit'])){

   $email_from = $_POST['email'];
   $username = $_POST['username'];
   $topic = $_POST['topic'];
   $comment = $_POST['comment'];

   
   $email_to = 'Razor5826@gmail.com';
   
   $headers = "From: ".$email_from;
   $content = "You have recieved message from ".$username."\n\n".$comment; 

   mail($email_to,$topic,$content,$headers);
   header("Location: index.php?mailsend");

}
   

?>
