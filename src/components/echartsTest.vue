<template>

    <div id="main" :style="{width: '300px', height: '300px'}"></div>
      
</template>

<script>
export default {
    methods: {
        plot() {
            let myChart = this.$echarts.init(document.getElementById('main'));
            myChart.setOption({
                title: {
                             text: 'ECharts 入门示例'
                        },
                            tooltip: {},
                            xAxis: {
                            data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
                        },
                             yAxis: {},
                            series: [{
                            name: '销量',
                            type: 'bar',
                            data: [5, 20, 36, 10, 10, 20]
                        }]
            });

        }
    },
    mounted() {
        this.plot();
    }

}
</script>

<style>

</style>