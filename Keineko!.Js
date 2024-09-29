
 var a=40;
 var b=100;
 var a=8000;
 var b=10000;
 var acat=0;
 var bcat=0;

const start = document.getElementById('start'); 
const image = document.getElementById('image'); // ロゴ画像

start.addEventListener('click', () => {
// 画像を左端から200px右に動かす
image.animate(
// 途中の状態を表す配列

  [     
    
    { transform: 'translateX(0)'}, // 開始時の状態（左端）
    { transform: 'translateX(700px)' },
     // 終了時の状態（左端から200pxの位置）
  ], 
  // タイミングに関する設定
  {
    
    fill: 'backwards', // 再生前後の状態（再生前、開始時の状態を適用）
    duration: Math.floor(Math.random() * (b + 1 -a)) +  a,
    
    // 再生時間（1000ミリ秒）
    
  },
  
);
});



const start2 = document.getElementById('start2'); 
const image2 = document.getElementById('image2'); // ロゴ画像

start.addEventListener('click', () => {
// 画像を左端から200px右に動かす
image2.animate(
// 途中の状態を表す配列
  [
    { transform: 'translateX(0)'}, // 開始時の状態（左端）
    { transform: 'translateX(700px)' } // 終了時の状態（左端から200pxの位置）
  ], 
  // タイミングに関する設定
  {
    fill: 'backwards', // 再生前後の状態（再生前、開始時の状態を適用）
    duration: Math.floor(Math.random() * (b + 1 -a)) +  a, // 再生時間（1000ミリ秒）
    // アニメーションの繰り返し回数（ずっと繰り返す）
  },
);
});

setInterval(() => {
  if (bcat > 0) {
    alert('下の猫がゴールしました');
  } else {
    if (acat > 0) {
      alert('上の猫がゴールしました');
    }
  }
}, 500);