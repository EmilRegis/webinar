<template>
  <div class="cause__container">
    <div class="block__img">
      <img src="@/assets/cause.png" alt="">
    </div>
    <div class="block__question">
      <p>Почему мы так можем?</p>
    </div>
    <div class="block__text">
      <div class="header">
        <h1>
          Потому что в <br> компании всегда <br> есть деньги.
        </h1>
      </div>
      <div class="body">
        <p>
          «Тендерная Биржа» еженедельно выигрывает <br> новые договора на поставку товаров в <br> Казахстанском госсекторе свыше 2 337 647
          <br> долларов США. За четыре года с момента <br> основания нам удалось вырасти в двадцать пять раз по чистой прибыли.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cause'
}

</script>

<style scoped lang="scss">
.cause__container {
  display: flex;
  flex-direction: column;
  padding: 0 15px;
  position: relative;
  top: 70px;
  color: #FFFFFF;
  margin-top: 44px;
  height: 600px;
  .block__img {
    display: flex;
    width: 100%;
    img {
      width: 100%;
    }
  }
  .block__question {
    display: flex;
    margin: 0 11px;
    margin-top: 29px;
    margin-right: 5px;
    padding: 20px 0;
    background-color: #A947FF;
    border-radius: 25px;
    width: 215px;
    height: 32px;
    //text-align: center;
    align-items: center;
    p {
      margin: 0 auto;
    }
  }
  .block__text {
    margin: 0 11px;
    margin-top: 10px;
    .header {
      font-weight: 500;
      line-height: 41px;
      text-transform: uppercase;
    }
    .body {
      margin-top: 20px;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 20px;
    }
  }
}
</style>
