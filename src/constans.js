export const ORTIONS_GR_2 = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      // Use axis to trigger tooltip
      type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
    },
    backgroundColor: '#1b1b1e',
    borderColor: '#1b1b1e'
  },
  barWidth: 40,
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    top: 0,
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

      emphasis: {
        focus: 'series'
      },
      data: [552, 2000]
    },
    {
      name: 'Продукт 2',
      type: 'bar',
      stack: 'total',

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
export const ORTIONS_GR_3 = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985'
      }
    },
    backgroundColor: '#1b1b1e',
    borderColor: '#1b1b1e',
    formatter: function (params) {
      // Use formatter attribute directly here
      console.log(params) // print data
      let plan = params[0]
      let fact = params[1]
      // Return data according to your needs
      return `
      <div style="display:flex; gap:10px;">
        <div style="display:flex; flex-direction:column">
          <div>${[plan.seriesName]}</div>
          <div style="display:flex;align-items:center; gap:3px">
            <div style="height:10px; width:10px; border-radius:50%;background-color:${plan.color}"></div>
            <div>${plan.value}</div>
          </div>
        </div>
        <div style="display:flex; flex-direction:column">
          <div>${fact.seriesName}</div>
          <div style="display:flex;align-items:center; gap:3px">
            <div style="height:10px; width:10px; border-radius:50%;background-color:${fact.color}"></div>
            <div>${fact.value}</div>
          </div>
        </div>
      </div>
                     
`
    }
  },
  color: ['#0077F7', '#13D6FF'],

  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },

  grid: {
    left: 0,
    right: 10,
    bottom: '3%',
    top: 10,
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
        0, 20, 25, 80, 100, 110, 150, 160, 180, 240, 260, 280, 290, 300, 300, 300, 320, 350, 380,
        400, 430, 450, 470, 495, 500, 510, 520, 550, 560, 590, 600
      ]
    },
    {
      name: 'Факт',
      type: 'line',

      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: [
        0, 10, 10, 200, 200, 200, 100, 120, 140, 120, 140, 120, 220, 200, 120, 130, 120, 220, 210,
        150, 160, 150, 150, 160, 220, 250, 290, 270, 280, 290, 300
      ]
    }
  ]
}
const rawData = [
  [90, 190, 90, 70, 140, 200, 205, 190, 180, 120, 135, 150],
  [100, 200, 145, 100, 50, 110, 190, 70, 50, 120, 120, 120],
  [130, 20, 30, 90, 130, 120, 100, 70, 30, 70, 150, 150]
]
const totalData = []
for (let i = 0; i < rawData[0].length; ++i) {
  let sum = 0
  for (let j = 0; j < rawData.length; ++j) {
    sum += rawData[j][i]
  }
  totalData.push(sum)
}
const grid = {
  left: 30,
  right: 0,
  top: 40,
  bottom: 20
}

const series = ['Деньги за мясо', 'Расходы на зп', 'Прочее'].map((name, sid) => {
  return {
    name,
    type: 'bar',
    stack: 'total',
    barWidth: '60%',

    data: rawData[sid]
  }
})
const color = ['#9747FF', '#0077F7', '#13D6FF']
const elements = []

export const ORTIONS_GR_1 = {
  grid,
  yAxis: {
    type: 'value'
  },
  xAxis: {
    type: 'category',
    data: ['Янв', 'Фев', 'Март', 'Апр', 'Май', 'Июнь', 'Июль', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек']
  },
  series,
  graphic: {
    elements
  },
  rawData,
  color,

  totalData,
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985'
      }
    },
    backgroundColor: '#1b1b1e',
    borderColor: '#1b1b1e',
    formatter: function (params) {
      // Use formatter attribute directly here
      console.log(params) // print data
      let beaf = params[0]
      let sallary = params[1]
      let all = params[2]
      // Return data according to your needs
      return `
      <div style="display:flex; gap:15px;align-items:flex-start; ">
       
        <div style="display:flex; flex-direction:column">
          <div>Прочее</div>
          <div style="display:flex;align-items:center; gap:3px">
            <div style="height:10px; width:10px; border-radius:50%;background-color:${all.color}"></div>
            <div>${all.value}</div>
          </div>
        </div>
        <div style="display:flex; flex-direction:column">
        <div>ЗП</div>
        <div style="display:flex;align-items:center; gap:3px">
          <div style="height:10px; width:10px; border-radius:50%;background-color:${sallary.color}"></div>
          <div>${sallary.value}</div>
        </div>
      </div>
      <div style="display:flex; flex-direction:column">
      <div>Мясо</div>
      <div style="display:flex;align-items:center; gap:3px">
        <div style="height:10px; width:10px; border-radius:50%;background-color:${beaf.color}"></div>
        <div>${beaf.value}</div>
      </div>
    </div>
  
      </div>
                     
`
    }
  }
}
