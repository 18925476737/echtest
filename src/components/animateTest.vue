<template>
  <div>
      <h1 class="animate__animated" id="h01" @click="hclick">This is a test</h1>
  </div>
</template>

<script>
export default {
    name: 'echartsTest',
    methods: {
        hclick() {
            let h01 = document.getElementById("h01");
            h01.classList.toggle("animate__swing");
        }
    }
}
</script>

<style>
h1 {
    color: bisque;
    font-size: 100px;
}

</style>