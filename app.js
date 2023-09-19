const quiz =[
  {
    question: "ゲーム市場、最も売れたゲーム機は次のうちどれ？",
    answers: [
      "スーパーファミコン",
      "プレイステーション2",
      "ニンテンドースイッチ",
      "ニンテンドーDS"
    ],
    correct: "ニンテンドーDS"
  }, {
    question: "糸井重里ば企画に関わった、任天堂の看板ゲームといえば？",
    answers: [
      "MOTHER2",
      "スーパーマリオブラザーズ3",
      "スーパードンキーコング",
      "星のカービィ"
    ],
    correct: "MOTHER2"
  }, {
    question: "ファイナルファンタジーⅣの主人公の名前は？",
    answers: [
      "フリオニール",
      "クラウド",
      "ティーダ",
      "セシル"
    ],
    correct: "セシル"
  }
];

// 問題文の長さ
const quizLength = quiz.length;
// 何番目の問題か
let quizIndex = 0;
// スコアを定義
let score = 0;

// HTMLのボタンをシンプルに定義
const $button = document.getElementsByTagName("button");
// ボタンの長さ
const buttonLength = $button.length;

// クイズの問題文、選択肢を定義
const setupQuiz = () => {
  document.getElementById("js-question").textContent = quiz[quizIndex].question;
  // 何個目のボタンか定義
  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
    // ボタンの数だけループ
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  };
}

setupQuiz();

// クイズの正誤判定を定義、次の問題へ
const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert("正解！");
    score++;
  } else{
    window.alert("不正解！");
  }

  quizIndex++;

  if(quizIndex < quizLength){
    // 問題数がまだあればこちらを実行
    setupQuiz();
  }else{
    // 問題数がもうなければこちらを実行
    window.alert("終了！あなたの正解数は" + score + "/" + quizLength + "です！");
  }
};

// ボタン押したときの反応
let handlerIndex = 0;
while(handlerIndex < buttonLength){
  $button[handlerIndex].addEventListener("click", (e) => {
    clickHandler(e);
  });
  handlerIndex++;
};


