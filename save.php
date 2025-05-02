<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST["name"]);
    $mobile = htmlspecialchars($_POST["mobile"]);
    $email = htmlspecialchars($_POST["email"]);

    $line = "Name: $name | Mobile: $mobile | Email: $email" . PHP_EOL;
    file_put_contents("data.txt", $line, FILE_APPEND);
    echo "Saved";
}
?>
