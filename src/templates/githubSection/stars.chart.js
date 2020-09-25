import * as echarts from 'echarts'
import 'echarts-wordcloud'
import { checkIfMobile } from '../../helpers/helper'
// dark-fresh-cut, dark-mushroom jazz
import 'echarts/theme/dark-mushroom'
import { sexyMainColor } from '../colorsHelper/colors.helper'
const mapPieData = (data = []) =>
  data
    .map(({ name, stargazers_count, created_at }) => ({
      name: name,
      value: stargazers_count,
      created_at,
    }))
    .filter(({ value }) => value > 0)

export const createStarsByRepChart = (data) => {
  const chart = echarts.init(
    document.getElementById('stars-by-repos'),
    'dark-mushroom',
    null,
    {
      renderer: 'svg',
    }
  )
  const { chartsz } = window
  window.chartsz.push(chart)
  chart.setOption({
    color: [
      sexyMainColor,
      '#241c30',
      '#3c2f50',
      '#554270',
      '#6d5590',
      '#866faa',
      '#a18fbd',
      '#6d5590',
      // '#c62828', red
      // '#ff8a80', red
      // '#ef5350', red
      // '#e57373', red
      // '#ef9a9a', red
      // '#ff1744', red
      // '#00d4ff', // cyan
      // '#1daabd', // cyan
      // '#1daebd', // cyan
      // '#205155', // cyan
      // '#1ca6b4', // cyan
      // '#6CC6E5', // cyan
      // '#00BFDB', // cyan
      // '#3C6E7F', // cyan
      // '#78DCFF', // cyan
      // '#00D5F5', // cyan
    ],
    // background-image: linear-gradient(to right top, #1a939d, #00aea0, #00c78b, #52dc62, #a8eb12);
    backgroundColor: 'transparent',
    title: {
      text: 'Stars By Repository',
      subtext: '"small partition"',
      left: 'center',
      textStyle: {
        fontFamily: 'Roboto Slab, serif',
      },
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
      pageTextStyle: {
        fontFamily: 'Roboto Slab, serif',
      },
    },
    textStyle: {
      color: '#fff',
      fontFamily: 'Roboto Slab, serif',
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
  })
}
