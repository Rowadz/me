import * as echarts from 'echarts'
// import 'echarts-wordcloud'
// dark-fresh-cut
import 'echarts/theme/dark-mushroom'
import { sexyMainColor } from '../colorsHelper/colors.helper'
const mapToArea = (data) => {
  const set = new Set()
  const map = new Map()
  data.forEach(({ created_at }) => set.add(new Date(created_at).getFullYear()))
  const years = Array.from(set).sort((a, b) => a - b)
  data.forEach(({ created_at }) => {
    const year = new Date(created_at).getFullYear()
    map.set(year, (map.get(year) || 0) + 1)
  })
  const dataToViz = years.map((year) => map.get(year))
  return { years, dataToViz }
}

export const createReposByYears = (data) => {
  const { dataToViz, years } = mapToArea(data)
  const isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  const rootStyles = getComputedStyle(document.documentElement)
  const mainColor = rootStyles.getPropertyValue('--main-color').trim() || (isDark ? '#f3f2f0' : '#0e0e0e')

  const chart = echarts.init(
    document.getElementById('repos-by-years'),
    isDark ? 'dark-mushroom' : undefined,
    {
      renderer: 'svg',
    }
  )
  window.chartsz.push(chart)
  chart.setOption({
    title: {
      text: 'Repositories creation rate by years',
      left: 'center',
      textStyle: {
        fontFamily: 'Roboto Slab, serif',
        color: mainColor,
      },
    },
    tooltip: {
      trigger: 'axis',
      textStyle: {
        fontFamily: 'Roboto Slab, serif',
      },
      axisPointer: {
        animation: true,
      },
      formatter: ([{ value, name }]) => {
        const colorSpan = `<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:${sexyMainColor}"></span>`
        return `${colorSpan} Created <b>${value}</b> repos in ${name}`
      },
    },
    animation: false,
    backgroundColor: 'transparent',
    xAxis: {
      type: 'category',
      data: years,
      splitLine: {
        show: false,
      },
      nameTextStyle: {
        fontFamily: 'Roboto Slab, serif',
      },
      axisLabel: {
        color: mainColor,
      },
      axisLine: {
        lineStyle: { color: mainColor },
      },
    },
    yAxis: {
      type: 'value',
      boundaryGap: false,
      splitLine: {
        show: false,
      },
      nameTextStyle: {
        fontFamily: 'Roboto Slab, serif',
      },
      axisLabel: {
        color: mainColor,
      },
      axisLine: {
        lineStyle: { color: mainColor },
      },
    },
    series: [
      {
        data: dataToViz,
        type: 'line',
        smooth: true,
        areaStyle: { color: sexyMainColor },
        // lineStyle: { color: '#a41304' },
        itemStyle: {
          color: sexyMainColor,
        },
      },
    ],
  })
}
