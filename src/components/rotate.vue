<template>
  <div id="mainBox1">
    <div id="rotatebox1"></div>
    <div id="rotatebox2">
      <img src="../assets/pie.png" alt="旋转的图片" class="tp" />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "rotate",
  data() {
    return {
      arrayData: [
        {
          value: 1,
          name: "五级警告",
        },

        {
          value: 3,
          name: "四级警告",
        },

        {
          value: 5,
          name: "三级警告",
        },

        {
          value: 43,
          name: "二级警告",
        },
      ],

    };
  },
  methods: {
    //直接传入拿到的数组进入m1（）函数，即可显示效果
    m1(arr: any[]): void{
      let myRotate = this.$echarts.init(document.getElementById("rotatebox1"));
      let hcolor = [
        "#fef119",  //yellow 黄
        "#12b4ff",  //wathet 浅蓝
        "#00f948",  //green 绿
        "#d61616", // red 红
        "#ff5b00",  //tangerine 橘红
        "#ffaf00",  //orange 橘黄
      ];
      let mydata = arr;
      let mydata2 = [];
      let count = 0;
      for(let i = 0; i < mydata.length; i++){
        count += mydata[i].value;
      }
      for (let i = 0; i < mydata.length; i++) {
        

        mydata[i].itemStyle = {
          shadowColor: hcolor[i],
        };
        // console.log(mydata);
        mydata[i].label = {
          formatter:
            mydata[i].name +
            ":" +
            mydata[i].value +
            "\n" +
            "占比:" +
            ((mydata[i].value / count) * 100).toFixed(0) +
            "%",
        };
        mydata2.push(mydata[i]);
        mydata2.push({
          value: 1,
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
        });
      }

      // console.log(mydata2);
      // console.log(mydata);
      let option = {
        color: hcolor,
        tooltip: {
          show: false,
        },
        title: {
          zlevel: 0,
          text: "总数",
          subtext: count || 0,
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
        series: [
          {
            name: "警告",
            type: "pie",
            radius: ["59%", "65%"],
            avoidLabelOverlap: true,

            itemStyle: {
              borderRadius: 50,
              borderWidth: 0,
              shadowBlur: 10,
            },
            label: {
              show: true,
              position: "outside",
              color: "#f4fff7",
              // formatter: function(mydata) {
              //   return ["ssadsa","fasdfds","dsadsa","sadwawd"]
              // },
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
            data: mydata2,
          },
        ],
      };
      myRotate.setOption(option);
    },
  },
  mounted() {
    this.m1(this.arrayData);
  },
};
</script>

<style scoped>
@keyframes rotation {
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
  transform: rotate(360deg);

  animation: rotation 3s linear infinite;

  -moz-animation: rotation 3s linear infinite;

  -webkit-animation: rotation 3s linear infinite;

  -o-animation: rotation 3s linear infinite;
}
#mainBox1 {
  position: relative;
  width: 426px;
  height: 222px;
}
#rotatebox1 {
  width: 426px;
  height: 222px;
  position: absolute;
  z-index: 1;
}
#rotatebox2 {
  position: absolute;
  z-index: 0;
  top: 60px;
  left: 163px;
}
img {
  width: 100px;
  height: auto;
}
</style>