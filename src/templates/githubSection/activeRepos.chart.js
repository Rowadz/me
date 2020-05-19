import * as echarts from 'echarts';
import 'echarts-wordcloud';
import 'echarts/theme/dark-mushroom';
const colors = [
  '#140826',
  '#F20732',
  '#135EF2',
  '#F5FFFF',
  '#72DCF7',
  '#CC432F',
  '#40010D',
  '#A63247',
  '#025959',
  '#BF5454',
  '#0378A6',
  '#011C40',
  '#F2B807',
  '#BF3F34',
  '#73022C',
  '#D90452',
  '#F2CB05',
  '#BF3A0A',
  '#8C0327',
  '#590212',
  '#8C034E',
  '#D90D7D',
  '#730217',
  '#BF3B5E',
];
export const createActiveReposCharts = () => {
  const chart = echarts.init(
    document.getElementById('active-repos-chart'),
    'dark-mushroom',
    {
      renderer: 'svg',
    }
  );
  chart.setOption({
    backgroundColor: 'transparent',
    series: [
      {
        type: 'wordCloud',

        // The shape of the "cloud" to draw. Can be any polar equation represented as a
        // callback function, or a keyword present. Available presents are circle (default),
        // cardioid (apple or heart shape curve, the most known polar equation), diamond (
        // alias of square), triangle-forward, triangle, (alias of triangle-upright, pentagon, and star.

        shape: 'circle',

        // A silhouette image which the white area will be excluded from drawing texts.
        // The shape option will continue to apply as the shape of the cloud to grow.

        // maskImage: maskImage,

        // Folllowing left/top/width/height/right/bottom are used for positioning the word cloud
        // Default to be put in the center and has 75% x 80% size.

        left: 'center',
        top: 'center',
        width: '70%',
        height: '80%',
        right: null,
        bottom: null,

        // Text size range which the value in data will be mapped to.
        // Default to have minimum 12px and maximum 60px size.

        sizeRange: [12, 60],

        // Text rotation range and step in degree. Text will be rotated randomly in range [-90, 90] by rotationStep 45

        rotationRange: [-90, 90],
        rotationStep: 45,

        // size of the grid in pixels for marking the availability of the canvas
        // the larger the grid size, the bigger the gap between words.

        gridSize: 8,

        // set to true to allow word being draw partly outside of the canvas.
        // Allow word bigger than the size of the canvas to be drawn
        drawOutOfBound: false,

        // Global text style
        textStyle: {
          normal: {
            fontFamily: 'sans-serif',
            fontWeight: 'bold',
            // Color can be a callback function or a color string
            color: () => colors[Math.floor(Math.random() * colors.length)],
          },
          emphasis: {
            shadowBlur: 10,
            shadowColor: '#333',
          },
        },

        // Data is an array. Each array item must have name and value property.
        data: [
          {
            name: 'Farrah Abraham',
            value: 366,
            // Style of single text
            textStyle: {
              normal: {},
              emphasis: {},
            },
          },
          {
            name: 'rowad',
            value: 134,
            // Style of single text
            textStyle: {
              normal: {},
              emphasis: {},
            },
          },
          { name: 'sarah', value: 439 },
          { name: 'sarah', value: 439 },
          { name: 'sarah', value: 439 },
          { name: 'sarah', value: 439 },
          { name: 'sarah', value: 439 },
          { name: 'sarah', value: 439 },
          { name: 'sarah', value: 439 },
          { name: 'sarah', value: 439 },
          { name: 'sarah', value: 439 },
          { name: 'sarah', value: 439 },
          { name: 'sarah', value: 439 },
          { name: 'sarah', value: 439 },
          { name: 'sarah', value: 439 },
          { name: 'sarah', value: 439 },
          { name: 'sarah', value: 439 },
          { name: 'sarah', value: 439 },
          { name: 'sarah', value: 439 },
          { name: 'sarah', value: 439 },
          { name: 'sarah', value: 439 },
          { name: 'sarah', value: 439 },
          { name: 'sarah', value: 439 },
          { name: 'sarah', value: 439 },
          { name: 'sarah', value: 439 },
          { name: 'sarah', value: 439 },
          { name: 'sarah', value: 439 },
          { name: 'sarah', value: 439 },
          { name: 'sarah', value: 439 },
          { name: 'sarah', value: 439 },
          { name: 'sarah', value: 439 },
          { name: 'sarah', value: 439 },
          { name: 'sarah', value: 439 },
          { name: 'sarah', value: 439 },
          { name: 'sarah', value: 439 },
          { name: 'sarah', value: 439 },
          { name: 'sarah', value: 439 },
          { name: 'sarah', value: 439 },
        ],
      },
    ],
  });
};
