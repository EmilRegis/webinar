<template>
  <div class="dividends">
    <div class="dividends__container">
      <div class="block__img">
        <img src="@/assets/header.png" alt="">
      </div>
      <div class="block__text">
        <div class="header">
          <h1>
            Инвестируйте <br>
            в тендеры <br>
            и богатейте <br>
          </h1>
        </div>
        <div class="body">
          <p>
            Возвращаем ваши деньги <br>
            + до 10% дивидендов <br>
            за 60-120 дней.
          </p>
        </div>
      </div>
    </div>
  </div>
  <Button/>
</template>

<script>
import Button from "./UI/Button";
export default {
  name: 'Art',
  components: {
    Button
  }
}

</script>

<style lang="scss" scoped>
.dividends {
  dispalay: flex;
  position: relative;
  top: 80px;
  margin-top: 44px;
  height: 700px;
  .dividends__container {
    display: flex;
    flex-direction: column;
    padding: 0 15px;
    .block__img {
      display: flex;
      width: 100%;
      img {
        width: 100%;
      }
    }
    .block__text {
      display: flex;
      flex-direction: column;
      color: #FFFFFF;
      margin: 0 11px;
      margin-top: 44px;
      padding: 0 2px;
      .header {
        font-weight: 500;
        //font-size: 34px;
        line-height: 41px;
        text-transform: uppercase;
      }
      .body {
        margin: 0 11px;
        margin-top: 20px;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 28px;
      }
    }
  }
}
</style>
