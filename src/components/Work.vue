<template>
  <div class="work__container">
    <div class="work__header">
      <h1>
        как это <br>
        работает?
      </h1>
    </div>
    <div class="work__body">
      <div class="block">
        <div class="block__img">
          <img src="@/assets/first.png" alt="">
        </div>
        <div class="block__text">
          Вы вкладываете <br>
          деньги в компанию <br>
          «Тендерная Биржа»
        </div>
      </div>
      <div class="block">
        <div class="block__img">
          <img src="@/assets/second.png" alt="">
        </div>
        <div class="block__text">
          Мы закупаем товар <br>
          для реализации <br>
          в тендерах.
        </div>
      </div>
      <div class="block">
        <div class="block__img">
          <img src="@/assets/third.png" alt="">
        </div>
        <div class="block__text">
          Из заработанных денег <br>
          компания «Тендерная Биржа» <br>
          отдаёт вам <br>
          вклад+проценты.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Work'
}
</script>

<style lang="scss" scoped>
.work__container {
  display: flex;
  flex-direction: column;
  padding: 0 15px;
  position: relative;
  top: 70px;
  color: #FFFFFF;
  margin-top: 44px;
  height: 600px;
  .work__header {
    display: flex;
    margin: 0 11px;
    font-weight: 500;
    line-height: 41px;
    text-transform: uppercase;
  }
  .work__body {
    display: flex;
    flex-direction: column;
    .block {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-top: 30px;
      .block__text {
        padding-left: 35px;
      }
    }
  }
}
</style>
