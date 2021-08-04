<template>
  <div id="mainBox1">
    <div id="box1"></div>
    <div id="box2">
      <img src="../assets/pie.png" alt="旋转的图片" class="tp" />
    </div>
  </div>
</template>

<script>
export default {
  name: "rotate",
  data() {
    return {};
  },
  methods: {
    m1() {
      let myRotate = this.$echarts.init(document.getElementById("box1"));
      let hcolor = [
        "#d61616",
        "#00f948",
        "#12b4ff",
        "#fef119",
        "#ff5b00",
        "#ffaf00",
      ];
      let option = {
        color: hcolor,
        tooltip: {
          show: false,
        },
        title: {
          zlevel: 0,
          text: "总数",
          subtext: 100,
          textStyle: {
            color: "#00b5f3",
            fontSize: 12,
          },
          subtextStyle: {
            align: "center",
            fontSize: 12,
            color: ["#85c7e3"],
            fontWeight: 800,
          },

          x: "center",
          y: "center",
        },
        toolbox: {
          show: true,
        },

        series: [
          {
            name: "警告",
            type: "pie",
            radius: ["60%", "65%"],
            avoidLabelOverlap: true,

            itemStyle: {
              borderRadius: 20,
              shadowBlur: 30,
              label: true,
            },
            label: {
              show: true,
              position: "outside",
              color: "#f4fff7",
            },
            emphasis: {
              label: {
                // show: true,
                // fontSize: '20',
                // fontWeight: 'bold'
              },
              scaleSize: 1,
            },
            labelLine: {
              show: true,
              lineStyle: {
                color: "#0ff",
              },
              length: 20,
              length2: 20,
            },

            data: [
              {
                value: 5,
                name: "五级警告",
                itemStyle: {
                  shadowColor: hcolor[0],
                },
                label: {
                  formatter: "五级警告" + ":" + 5 + "\n   占比5%",
                },
              },
              {
                value: 2,
                name: "",
                itemStyle: {
                  color: "rgba(0,0,0,0)",
                },
                tooltip: {
                  show: false,
                },
                labelLine: {
                  lineStyle: {
                    color: "rgba(0,0,0,0)",
                  },
                },
              },
              {
                value: 10,
                name: "四级警告",
                itemStyle: {
                  shadowColor: hcolor[1],
                },
                label: {
                  formatter: "四级警告" + ":" + 10 + "\n   占比10%",
                },
              },
              {
                value: 2,
                name: "",
                itemStyle: {
                  color: "rgba(0,0,0,0)",
                },
                tooltip: {
                  show: false,
                },
                labelLine: {
                  lineStyle: {
                    color: "rgba(0,0,0,0)",
                  },
                },
              },
              {
                value: 20,
                name: "三级警告",
                itemStyle: {
                  shadowColor: hcolor[2],
                },
                label: {
                  formatter: "三级警告" + ":" + 20 + "\n   占比20%",
                },
              },
              {
                value: 2,
                name: "",
                itemStyle: {
                  color: "rgba(0,0,0,0)",
                },
                tooltip: {
                  show: false,
                },
                labelLine: {
                  lineStyle: {
                    color: "rgba(0,0,0,0)",
                  },
                },
              },
              {
                value: 65,
                name: "二级警告",
                itemStyle: {
                  shadowColor: hcolor[3],
                },
                label: {
                  formatter: "二级警告" + ":" + 65 + "\n   占比65%",
                },
              },
              {
                value: 2,
                name: "",
                itemStyle: {
                  color: "rgba(0,0,0,0)",
                },
                tooltip: {
                  show: false,
                },
                labelLine: {
                  lineStyle: {
                    color: "rgba(0,0,0,0)",
                  },
                },
              },
            ],
          },
        ],
      };
      myRotate.setOption(option);
    },
  },
  mounted() {
    this.m1();
  },
};
</script>

<style scoped>
@-webkit-keyframes rotation {
  from {
    -webkit-transform: rotate(0deg);
  }

  to {
    -webkit-transform: rotate(360deg);
  }
}

/* 兼容不同版本浏览器 */
/* 3s 为转速 值越小 速度越快 */
.tp {
  -webkit-transform: rotate(360deg);

  animation: rotation 3s linear infinite;

  -moz-animation: rotation 3s linear infinite;

  -webkit-animation: rotation 3s linear infinite;

  -o-animation: rotation 3s linear infinite;
}
#mainBox1 {
    position: relative; 
}
#box1 {
  width: 426px;
  height: 222px;
  position: absolute;
  z-index: 1;
}
#box2 {
  position: absolute;
  z-index: 0;
  top: 60px;
  left: 163px;
}
img  {
    width: 100px;
    height: auto;
}
</style>