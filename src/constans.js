export const ORTIONS_GR_1 = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      // Use axis to trigger tooltip
      type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
    }
  },

  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'value'
  },
  yAxis: {
    type: 'category',
    data: ['Факт', 'План']
  },
  color: ['#0077F7', '#13D6FF'],
  series: [
    {
      name: 'Продукт 1',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [552, 2000]
    },
    {
      name: 'Продукт 2',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [440, 2500]
    }
  ]
}

function generateDays() {
  const arr = []
  for (let index = 1; index <= 31; index++) {
    arr.push(index)
  }
  return arr
}
export const ORTIONS_GR_2 = {
  title: {
    text: 'График 3'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985'
      }
    }
  },
  color: ['#0077F7', '#13D6FF'],

  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      data: generateDays()
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: [
    {
      name: 'План',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: [
        120, 132, 101, 134, 90, 230, 210, 120, 132, 101, 134, 90, 230, 210, 120, 132, 101, 134, 90,
        230, 210, 120, 132, 101, 134, 90, 230, 210, 101, 134
      ]
    },
    {
      name: 'Факт',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: [
        220, 182, 191, 234, 290, 330, 310, 220, 182, 191, 234, 290, 330, 310, 220, 182, 191, 234,
        290, 330, 310, 220, 182, 191, 234, 290, 330, 310, 330, 310
      ]
    }
  ]
}
