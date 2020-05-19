import * as echarts from 'echarts';
import 'echarts-wordcloud';
// dark-fresh-cut
import 'echarts/theme/dark-mushroom';
export const createReposByYears = () => {
  const chart = echarts.init(
    document.getElementById('repos-by-years'),
    'dark-mushroom',
    {
      renderer: 'svg',
    }
  );
  chart.setOption({
    title: {
      text: 'Repositories creation rate by years',
      left: 'center',
    },
    tooltip: {
      show: true,
    },
    animation: false,
    backgroundColor: 'transparent',
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        smooth: true,
        lineStyle: { color: '#a41304' },
      },
    ],
  });
};
