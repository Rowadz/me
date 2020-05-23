import * as echarts from 'echarts';
import 'echarts-wordcloud';
// dark-fresh-cut, dark-mushroom jazz
import 'echarts/theme/dark-mushroom';
import { sexyMainColor } from '../colorsHelper/colors.helper';
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
    'dark-mushroom',
    null,
    {
      renderer: 'svg',
    }
  );
  chart.setOption({
    color: [
      sexyMainColor,
      '#c62828',
      '#ff8a80',
      '#ef5350',
      '#e57373',
      '#ef9a9a',
      '#ff1744',
      // '#00d4ff',
      // '#1daabd',
      // '#1daebd',
      // '#205155',
      // '#1ca6b4',
      // '#6CC6E5',
      // '#00BFDB',
      // '#3C6E7F',
      // '#78DCFF',
      // '#00D5F5',
    ],
    // background-image: linear-gradient(to right top, #1a939d, #00aea0, #00c78b, #52dc62, #a8eb12);
    backgroundColor: 'transparent',
    title: {
      text: 'Stars By Repository',
      subtext: '"small partition"',
      left: 'center',
    },
    tooltip: {
      trigger: 'item',
      formatter: '{b}<br/> <b>☆{c}☆</b>',
      // formatter: '{b}<br/> <b>{c}🌟</b> ({d}%)',
    },
    legend: {
      type: 'scroll',
      show: checkIfMobile(),
      orient: 'horizontal',
      right: checkIfMobile() ? null : 10,
      top: checkIfMobile() ? null : 20,
      bottom: 20,
      textStyle: {
        color: '#fff',
      },
      data: data.legendData,
      selected: data.selected,
    },
    textStyle: {
      color: '#fff',
    },
    series: [
      {
        title: {
          color: '#fff',
        },
        isBiggerOrEqual: true,
        // name: 'Stars:',
        type: 'pie',
        smooth: true,
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
        roseType: 'area',
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
