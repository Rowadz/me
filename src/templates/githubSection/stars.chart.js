import * as echarts from 'echarts';
import 'echarts-wordcloud';
// dark-fresh-cut
import 'echarts/theme/dark-mushroom';
const mapPieData = (data = []) =>
  data
    .map(({ name, stargazers_count, created_at }) => ({
      name: name,
      value: stargazers_count,
      created_at,
    }))
    .filter(({ value }) => value > 0);
const checkIfMobile = () =>
  /Mobi/.test(navigator.userAgent) || /Mobi|Android/i.test(navigator.userAgent);

export const createStarsByRepChart = (data) => {
  const chart = echarts.init(
    document.getElementById('stars-by-repos'),
    'dark-mushroom'
    // {
    //   renderer: 'svg',
    // }
  );
  chart.setOption({
    backgroundColor: 'transparent',
    title: {
      text: 'Stars By Repository',
      subtext: '"small partition"',
      left: 'center',
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : <b>{c}</b> stars ({d}%)',
    },
    legend: {
      type: 'scroll',
      show: checkIfMobile(),
      orient: 'horizontal',
      right: checkIfMobile() ? null : 10,
      top: checkIfMobile() ? null : 20,
      bottom: 20,
      data: data.legendData,
      selected: data.selected,
    },
    series: [
      {
        name: 'Stars:',
        type: 'pie',
        label: {
          show: !checkIfMobile(),
        },
        radius: checkIfMobile() ? '100%' : '75%',
        // center: ['40%', '50%'],
        data: mapPieData(data)
          .sort((a, b) =>
            b.value === a.value
              ? new Date(b.created_at) - new Date(a.created_at)
              : b.value - a.value
          )
          .slice(0, 10),
        roseType: checkIfMobile() ? null : 'area',
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
        animationType: 'scale',
        animationEasing: 'elasticOut',
        animationDelay: (idx) => Math.random() * 200,
      },
    ],
  });
};
