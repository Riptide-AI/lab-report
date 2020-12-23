<!DOCTYPE html>
<html lang="en">
<head>
  <title>Feedback</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
  <link rel="stylesheet" href="style.css">
</head>
<body>
   <div class="wrapper">
      <h2>Feedback</h2>
      <form action="action.php" method="POST" > 
      <div class="form-group">
        <label for="email">Email address:</label>
        <input type="email" class="form-control" id="email" name="email" required>
      </div>
      <div class="form-group">
         <label for="usr">Name:</label>
         <input type="text" class="form-control" id="username" name="username" required>
      </div>
      <div class="form-group">
         <label for="usr">Topic:</label>
         <input type="text" class="form-control" id="topic" name="topic" required>
      </div>
      <div class="form-group">
         <label for="comment">Comment:</label>
         <textarea class="form-control" rows="5" id="comment" name="comment" required></textarea>
      </div>
      <button type="submit" class="btn btn-success" name="submit">Submit</button>
    </form>
   </div>
</body>
</html>