<?php

ini_set('display_startup_errors', 1);
ini_set('display_errors', 1);
error_reporting(-1);

$servername = "db";
$username = "steve";
$password = "it635";
$dbname = "sis";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
	die("Connection failed: " . $conn->connect_error);
}

$stmt = $conn->prepare("SELECT name, phone FROM student_contacts WHERE id=?");
$id = $_GET["id"];
$stmt->bind_param('i', $id);
$stmt->execute();
$result = $stmt->get_result();

print("<html>");
if ($result->num_rows > 0) {
	// output data of each row
	while($row = $result->fetch_assoc()) {
		printf("<div>%s: %s</div>", $row["name"], $row["phone"]);
	}
} else {
	print("<div>No contacts found!</div>");
}
print("</html>");
$conn->close();

?>
