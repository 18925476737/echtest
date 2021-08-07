<template>
  <div id="wavebox">
    <div id="wave1"></div>
    <div id="wave2"></div>
  </div>
</template>

<script lang = "ts">
export default {
  name: "wave",
  data() {
    return {};
  },
  methods: {
    liquidFill(): void {
      let myWave = this.$echarts.init(document.getElementById("wave1"), null, {
        renderer: "svg",
      });
      let option = {
        series: [
          {
            type: "liquidFill",
            data: [0.7, 0.6],
            shape: "container",
            // color: ["#002654","#014c5c"],
            label: {
              show: false,
            },
            outline: {
              show: false,
            },
            silent: true,
            backgroundStyle: {
              color: "#000f1e",
            },
            itemStyle: {
              opacity: 0.4,
            },
          },
        ],
      };
      myWave.setOption(option);
    },
    m1() {
      let myimg = this.$echarts.init(document.getElementById("wave2"), null, {
        renderer: "svg",
      });
      let option = {
        xAxis: [
          {
            type: "category",
            axisLine: {
              show: true,
              lineStyle: {
                color: "#01e7f2",
              },
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            name: "",
            min: 0,
            max: 100,
            position: "right",
            axisLabel: {
              color: "#01e7f2",
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: "#01e7f2",
              },
            },
            splitLine: {
              show: false,
            },
            axisTick: {
                show: true
            },
          },
          {
            type: "value",
            name: "",
            min: 0,
            max: 100,
            position: "left",
            axisLine: {
              show: true,
              lineStyle: {
                color: "#01e7f2",
              },
            },
            splitLine: {
              show: false,
            },
            axisTick: {
                show: true
            },
          },
        ],
      };
      myimg.setOption(option);
    },
  },
  mounted() {
    this.liquidFill();
    this.m1();
  },
};
</script>

<style scoped>
#wave1 {
  height: 100px;
  width: 294px;
  overflow: hidden;
  background-color: "#000f1e";
  position: absolute;
  left: 37px;
  top: 100px;
}
#wave2 {
    height: 270px;
  width: 367px;
  position: absolute;
}
#wavebox {
    position: relative;
}
</style>