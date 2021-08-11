/*
- 猫 35、犬 30、きりん 20、その他 15
- 円グラフのオプションには 幅100、高さ300px を指定
*/

var pieData = {
  labels: ['猫', '犬', 'きりん', 'その他'],
  series: [35, 30, 20, 15]
  // seriesに含める数値は％ならそのまま入力で良い※10%なら10
}

var pieOptions = {
  width: '100%',
  height: '440px'
};

new Chartist.Pie('.animal-chart', pieData, pieOptions);