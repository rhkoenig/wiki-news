<html>
<body>
 <h1>Forgot Password<h1>
 <form action='#' method='post'>
 <table cellspacing='5' align='center'>
 <tr><td>Email id:</td><td><input type='text' name='email'/></td></tr>
 <tr><td></td><td><input type='submit' name='submit' value='Submit'/></td></tr>
 </table>
 </form>
<?php
 if(isset($_POST['submit']))
 {
  $servername = "localhost";
  $username = "username";
  $password = "password";
  $dbname = "testdb";

  // Create connection
  $conn = mysqli_connect($servername, $username, $password, $dbname);
 // Check connection
 if (!$conn)
 {
  die("Connection failed: " . mysqli_connect_error());
 }

 $email=$_POST['email'];

 $sql = "select * from users where email='".$email."' ";
 $q = mysqli_query($conn, $sql);

 $p=mysqli_affected_rows();
 if($p!=0)
 {
  $res=mysqli_fetch_array($q);
  $to=$res['email'];
  $subject='Remind password';
  $message='Your password : '.$res['password'];
  $headers='From:Admin120@xxx.com';
  $m=mail($to,$subject,$message,$headers);
  if($m)
 {
   echo'Check your inbox in email';
 }
 else
 {
  echo'email is not send';
 }
}
 else
 {
   echo'You entered email id is not present';
 }
 }
 ?>
 </body>
