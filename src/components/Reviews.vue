<template>
  <div id="reviews" class="reviews">
    <div class="reviews__container">
      <div class="reviews__header">
        <h1>
          Отзыв действующего инвестора:
        </h1>
      </div>
      <div class="reviews__body">
        <iframe width="100%" src="https://www.youtube.com/embed/uoYXmTMmLKg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div class="reviews__telegram">
        <div class="header">
          Примеры тендерных <br>
          проектов:
        </div>
        <div class="btn">
          <a href="https://t.me/Tender889" target="_blank">
            <span>Перейти в телеграмм-канал </span>
            <img src="@/assets/telegram.svg" alt="">
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Reviews',
  components: {
  }
}
</script>

<style lang="scss" scoped>
.reviews {
  position: relative;
  top: 70px;
  height: 660px;
  margin-top: 130px;
  .reviews__container {
    display: flex;
    flex-direction: column;
    padding: 0 14px;
    margin-top: 40px;
    color: #FFFFFF;
    text-transform: uppercase;
    .reviews__header {
      display: flex;
      margin: 0 11px;
    }
    .reviews__body {
      display: flex;
      margin-top: 47px;
    }
    .reviews__telegram {
      margin-top: 88px;
      .header {
        font-weight: 500;
        font-size: 24px;
        line-height: 29px;
        text-transform: uppercase;
      }
      .btn {
        display: flex;
        margin-top: 40px;
        width: 100%;
        height: 60px;
        background-color: #19C8FF;
        border-radius: 25px;
        text-align: center;
        align-items: center;
        a {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          margin: 0 auto;
          text-decoration: none;
          color: #FFFFFF;
          span {
            margin-right: 7px;
          }
        }
      }
    }
  }
}
.btn_bot {
  margin-top: 42px;
  position: relative;
  top: 70px;
}
</style>
