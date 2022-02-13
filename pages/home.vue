<template>
  <div>
    <p>Hello world</p>
    <bar-chart :chart-data="chartData" :options="chartOptions" />
  </div>
</template>
<script>
import BarChart from "../components/atoms/BarChart.vue";
export default {
  name: "Home",
  components: {
    BarChart,
  },
  layout: "dashboard",
  data() {
    return {
      chartData: {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            label: "doremi",
            backgroundColor: "#48A497",
            borderColor: "#48A4D1",
            data: [456, 479, 324, 569, 702, 600],
          },
          {
            label: "fasola",
            backgroundColor: "rgba(73,188,170,0.4)",
            borderColor: "rgba(72,174,209,0.4)",
            data: [364, 504, 605, 400, 345, 320],
          },
        ],
      },
      chartOptions: {
          maintainAspectRatio: false,
          responsive: true
      },
    };
  },
  watch: {},
  async beforeMount() {},
  async mounted() {},
  methods: {},
};
</script>
