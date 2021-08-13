<template>
  <div class="btn">
    <a class="simple-btn button" href="https://lab.tb7.kz/invest" >Зарегистрироваться</a>
  </div>
</template>

<script>
export default {
  name: 'Button.vue',
  data() {
    return {
    }
  },
  methods: {
  },
  computed: {
  }
}
</script>

<style lang="scss" scoped>
.btn {
  display: flex;
  .simple-btn {
    display: inline-block;
    padding: 1.625rem 2.625rem 1.625rem 2.625rem;
    border: 1px solid #8800ff;
    border-radius: 25px;
    background-color: #8800ff;
    color: #000000;
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 0;
    text-decoration: none;
    transition: all 0.2s;
    height: 56px;
    text-align: center;
    @media(max-width: 1140px) {
      width: 100%;
    }
  }
  .simple-btn:hover {
    border-color: #FFED69;
    color: #ffffff;
  }
}

</style>
