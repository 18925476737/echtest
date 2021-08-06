<template>
  <div>
    <div id="assetbox1"></div>
  </div>
</template>

<script>
export default {
  name: "asset",
  data() {
    return {
      arrayData: [
        {
          value: 16,
          name: "正常",
          itemStyle: {
            borderColor: "#4be1ff",
            color: "#4be1ff",
          },
        },

        {
          value: 1438,
          name: "故障",
          itemStyle: {

              borderColor: "#3087d6",
              color: "#3087d6",

          },
        },

        {
          value: 1438,
          name: "维修",
          itemStyle: {

              borderColor: "#f6ce54",
              color: "#f6ce54",
 
          },
        },
      ],
    };
  },
  methods: {
    m1(arrayData) {
      let myAsset = this.$echarts.init(document.getElementById("assetbox1"));

      let mycolor = ["#173852", "#0b2036", "#002e49"];
      let mydata = ["故障", "维修", "正常"];
      let mydata2 = arrayData;
      let mydata3 = [];
      let count = 0;
      for (let i = 0; i < mydata2.length; i++) {
        count += mydata2[i].value;
        mydata3.push(mydata2[i], {
          value: 5,
          name: "",
          itemStyle: {

              color: "transparent",
              borderWidth: 5,
              borderColor: "transparent",

          },
          tooltip: {
            show: !1,
          },
        });
      }

      let option = {
        title: {
          text: "设备总数",
          subtext: count,
          textStyle: {
            color: "#00b5f3",
            fontSize: 14,
          },
          subtextStyle: {
            align: "center",
            fontSize: 16,
            color: "#85c7e3",
            fontWeight: 800,
          },
          x: "33%",
          y: "center",
        },
        tooltip: {
          show: true,
          trigger: "item",
          formatter: "{a} : {b} <br> 数量 : {c} ",
        },
        legend: {
          data: mydata,
          icon: "vertical",
          right: "50px",
          top: "center",
          orient: "vertical",
          itemGap: 20,
          itemWidth: 15,
          itemHeight: 8,
          formatter: (mydata) => {
            for (let i = 0; i < mydata2.length; i++) {
              //   console.log(mydata);
              if (mydata2[i].name == mydata) {
                let j = ((mydata2[i].value / count) * 100).toFixed(1);
                // console.log(j);
                let k = [
                  j + "% {yellow|" + mydata2[i].value + "}",
                  "{blue|" + mydata + "}",
                ];
                // console.log(k.join("\n"));
                return k.join("\n");
              }
            }
          },
          textStyle: {
            lineHeight: 20,
            color: "#f0f4f6",
            align: "right",
            rich: {
              yellow: {
                color: "#00b5f3",
                fontWeight: "bold",
              },
              blue: {
                color: "#4be1ff",
                align: "right",
              },
            },
          },
        },

        series: [
          {
            name: "报警",
            type: "pie",
            center: ["40%", "50%"],
            radius: ["79%", "81%"],
            label: {
              show: false,
            },
            labelLine: {
              show: false,
            },
            itemStyle: {
              borderRadius: 20,
              borderWidth: 5,
              shadowBlur: 25,
              shadowColor: "rgba(7, 132, 250, 0.8)",
            },
            emphasis: {
              scaleSize: 1,
            },
            data: mydata3,
          },
          {
            name: "",
            type: "pie",
            selectedMode: "single",
            radius: ["35%", "58%"],
            center: ["40%", "50%"],
            hoverAnimation: false,
            label: {
              show: !1,
            },
            tooltip: {
              show: !1,
            },
            itemStyle: {
              borderWidth: 50,
              borderRadius: 50,
            },
            data: [
              {
                value: 1,
                name: "故障",
                itemStyle: {
                  color: "#173852",
                },
              },
              {
                value: 1,
                name: "维修",
                itemStyle: {
                  color: "#0b2036",
                },
              },
              {
                value: 1,
                name: "正常",
                itemStyle: {
                  color: "#002e49",
                },
              },
            ],
          },
        ],
      };
      myAsset.setOption(option);
    },
  },
  mounted() {
    this.m1(this.arrayData);
  },
};
</script>

<style scoped>
#assetbox1 {
  width: 426px;
  height: 222px;
}
</style>