<template>
  <div>
      <!-- <dv-percent-pond :config="config1" style="width:200px;height:100px;" />
      <div class="box1">
          <dv-active-ring-chart :config="config" style="width:300px;height:300px" />
          
      </div>
      <div>
          <dv-decoration-9 style="width:150px;height:150px;">66%</dv-decoration-9>
      </div> -->
      <div>
          <dv-water-level-pond :config="config2" style="width:400px;height:200px" />
      </div>
  </div>
</template>

<script>
export default {
    name: 'dataVTest',
    data() {
        return {
            config: {
                data: [
                        {
                        name: '周口',
                        value: 55
                        },
                        {
                        name: '南阳',
                        value: 120
                        },
                        {
                        name: '西峡',
                        value: 78
                        },
                        {
                        name: '驻马店',
                        value: 66
                        },
                        {
                        name: '新乡',
                        value: 80
                        }
                    ],
                lineWidth: 10,
                digitalFlopStyle: {
                    fontSize: 25,
                    fill: '#0ff'
                    }
            },
            config1: {
                value: 5,
                localGradient: true,
                textColor: '#0ff'
            },
            config2: {
                data: [40, 0],
                waveNum: 1,
                waveHeight: 90
            }
        }
    }
}
</script>

<style scoped>
.box1 .dv-active-ring-chart .active-ring-info .active-ring-name {
    color: bisque;
}


</style>>

