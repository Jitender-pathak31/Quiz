<?php
$host = "localhost";
$user = "root";
$pass = "";
$dbname = "quiz";
$dsn = "mysql:host=$host;dbname=$dbname;";

//try{
//    $connection = new PDO($dsn, $user, $pass);
//
//    $json_data = file_get_contents("php://input");
//
//    $data = json_decode($json_data, true);
//
//    if($data){
//        // Loop through each card in the data array
//        foreach($data as $card) {
//            $stmt = $connection->prepare("INSERT INTO questions (id, questionHeader, categories, questionText, descriptionText)
//                    VALUES (?, ?, ?, ?, ?)");
//
//            // Convert categories array to JSON string if it's an array
//            $categories = is_array($card['categories']) ? json_encode($card['categories']) : $card['categories'];
//
//            $stmt->execute([
//                $card['id'],
//                $card['questionHeader'],
//                $categories,
//                $card['questionText'],
//                $card['descriptionText']
//            ]);
//
//            // Insert answers if they exist
//            if(isset($card['possibleAnswers']) && is_array($card['possibleAnswers'])) {
//                foreach($card['possibleAnswers'] as $answer) {
//                    $answerStmt = $connection->prepare("INSERT INTO answers (question_id, content, correct)
//                            VALUES (?, ?, ?)");
//
//                    $answerStmt->execute([
//                        $card['id'],
//                        $answer['content'],
//                        $answer['correct']
//                    ]);
//                }
//            }
//        }
//
//        echo "Data successfully inserted into database";
//    } else {
//        echo "No valid data received";
//    }
//} catch (PDOException $e){
//    echo $e->getMessage();
//}


try{
    $connection = new PDO($dsn, $user, $pass);
    if(isset($_GET['action'])){
        if($_GET['action'] === 'questions'){
            if(isset($_GET['category']) && $_GET['category'] !== '') {
                $stmt = $connection->prepare("select id, questionText, categories from questions where categories = ?");
                $stmt->execute([$_GET['category']]);
            } else {
                $stmt = $connection->prepare("select id, questionText, categories from questions");
                $stmt->execute();
            }
            $question = $stmt->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode(['questions' => $question]);
        } else if($_GET['action'] === 'questionAnswer') {
            $questionId = isset($_GET['id']) ? (int)$_GET['id'] : 1;
            $stmt = $connection->prepare("Select questionHeader, questionText from questions where id=?");
            $stmt->execute([$questionId]);
            $question = $stmt->fetchAll(PDO::FETCH_ASSOC);

            if (!$question) {
                echo json_encode(['Error: ' => "Question not found!"]);
                exit;
            }

            // fetch options for the questions
            $stmt = $connection->prepare("select a.id, a.content from answers a
                                            join questions q on a.question_id = q.id where q.id = ?  ");
            $stmt->execute([$questionId]);
            $answers = $stmt->fetchAll(PDO::FETCH_ASSOC);
            if (count($answers) !== 4) {
                echo json_encode(['answers' => 'There should be exactly four options']);
                exit;
            }
            echo json_encode(['question' => $question, 'answers' => $answers, 'question_id' => $questionId]);

        } elseif ($_GET['action'] === 'checkAnswer') {
            // Get selected answer ID and question ID
            $selectedAnswerId = isset($_GET['selectedAnswerId']) ? (int)$_GET['selectedAnswerId'] : 0;
            $questionId = isset($_GET['question_id']) ? (int)$_GET['question_id'] : 1;
            $description = isset($_GET['descriptionText']) ? (string)$_GET['descriptionText'] : 'No Description!';

            // Fetch correct answer ID for the question
            $stmt = $connection->prepare("SELECT a.id FROM answers a WHERE a.question_id = ? AND correct = true");
            $stmt->execute([$questionId]);
//            $correctAnswerId = $stmt->fetch(PDO::FETCH_ASSOC);
            $correctAnswerId = $stmt->fetch(PDO::FETCH_COLUMN);

            // Check if selected answer is correct
            $isCorrect = $selectedAnswerId === $correctAnswerId;

            // fetching description for the right answer
            $stmt1 = $connection->prepare("Select descriptionText from questions where id=?");
            $stmt1->execute([$questionId]);
            $desc = $stmt1->fetch(PDO::FETCH_ASSOC);

            // Return result
            echo json_encode(['isCorrect' => $isCorrect,
                'message' => $isCorrect ? 'Wunderbar! '.$desc['descriptionText'] : 'Versuch nochmal du Trottel!'
                ]);

        }

        exit;

    }
}catch (PDOException $e){
    echo $e->getMessage();
}
