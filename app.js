// 問題、解答、正解を定義
const quiz = [
  {
    question: "問題1：一番大きいものは？",
    answers: [
      "りんご",
      "みかん",
      "いちご",
      "キウイ",
      "メロン"
    ],
    correct: "メロン"
  },
  {
    question: "問題2：一番首が長いのは？",
    answers: [
      "スッポン",
      "キリン",
      "マサイ族",
      "象",
      "フクロウ"
    ],
    correct: "キリン"
  },
  {
    question: "問題3：ジョジョ3部の主人公は誰？",
    answers: [
      "ジョセフ・ジョースター",
      "空条徐倫",
      "ジョナサン・ジョースター",
      "空条承太郎",
      "ジョルノ・ジョバーナ"
    ],
    correct: "空条承太郎"
  },
  {
    question: "問題4：「毳毛」の読み方はどれ？",
    answers: [
      "ぜいもう",
      "けけけけ",
      "そうもう",
      "よんけー",
      "ごうもう"
    ],
    correct: "ぜいもう"
  }
];

// 問題数の定義
const quizLength = quiz.length;
// 現在何番目の問題か定義
let quizIndex = 0;
// スコアを定義
let score = 0;
// HTMLのボタンタグをわかりやすく定義
$button = document.getElementsByTagName("button");
// ボタンの数を定義
const buttonLength = $button.length;

// クイズのセット関数
const setQuiz = () => {
  document.getElementById("js-question").textContent = quiz[quizIndex].question;
  // 解答のセット
  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex ++;
  }  
};

setQuiz();

// 問題の正誤判定、次の問題へ関数
const quizJudge = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent){
    // 正解
    window.alert("正解！");
    score ++;
  } else{
    // 不正解
    window.alert("不正解！");
  }

  quizIndex ++;
  if(quizIndex < quizLength){
    // 問題がまだあれば実行
    setQuiz();
  } else{
    // 問題数がもうなければスコアを表示
    window.alert("お疲れ様でした。あなたの正解数は" + score + "/" + quizLength + "です！");
  }

};

// ボタンを押したときの反応
let buttonClickIndex = 0;
while(buttonClickIndex < buttonLength){
  $button[buttonClickIndex].addEventListener("click", (e) => {
    quizJudge(e);
  });
  buttonClickIndex ++;
};
