<template>
  <div class="art">
    <div class="art__container">
      <div class="art__block first">
        <img src="@/assets/main.svg" alt="">
        <div class="block__title">
          <div class="block__purple">
            <h1>
              ИСКУССТВО
            </h1>
          </div>
          <div class="block__black">
            <h1>
              ИНВЕСТИРОВАНИЯ
            </h1>
          </div>
        </div>
      </div>
      <div class="art__block second">
        <div class="block__body">
          <div class="title">
            <h3>
              На мастер классе  вы узнаете:
            </h3>
          </div>
          <div class="text__wrapper">
            <p>
              <span class="arrow">&#8594;</span>  Что такое инвестиции. <br>
              <span class="arrow">&#8594;</span>  Куда выгодно инвестировать.<br>
              <span class="arrow">&#8594;</span>  Как начать инвестировать.
            </p>
          </div>
          <div class="img__wrapper">
            <img src="@/assets/arrow.svg" alt="">
          </div>
        </div>
        <div class="block__img">
          <img src="@/assets/art-head.svg" alt="">
        </div>
      </div>
      <div class="art__block third">
        <div class="third__title">
          <h2>
            «Тендерная Биржа»  платит <br>
            за просмотр вебинара!
          </h2>
        </div>
        <div class="third__header">
          <h3>
            Среди самых активных участников <br>
            мы разыграем денежные призы!
          </h3>
        </div>
        <div class="third__body">
          <p>
            <span class="arrow">&#8594;</span>  1 место – 30 000 тенге.<br>
            <span class="arrow">&#8594;</span>  2 место – 20 000 тенге.<br>
            <span class="arrow">&#8594;</span>  3 место – 10 000 тенге.
          </p>
        </div>
      </div>
      <Button/>
      <div class="question">
        <div class="question__wrapper">
          <a href="#reviews">Сомневаетесь?</a>
        </div>
        <div class="question__arrow">
          &#8595;
        </div>
      </div>
    </div>
  </div>
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
.art {
  dispalay: flex;
  .art__container {
    display: flex;
    flex-direction: column;
    padding: 0 14px;
    .art__block {
      display: flex;
      color: #FFFFFF;
    }
    .first {
      width: 100%;
      height: 138px;
      display: flex;
      justify-content: flex-start;
      position: relative;
      flex-direction: column;
      align-items: flex-start;
      img {
        width: 100%;
      }
      .block__title {
        position: relative;
        top: -36px;
        .block__purple {
          background-color: #8800ff;
          opacity: 0.7;
          width: 80%;
          h1 {
            font-style: normal;
            font-weight: bold;
            font-size: 30px;
            line-height: 36px;
          }
        }
        .block__black {
          h1 {
            font-style: normal;
            font-weight: bold;
            font-size: 30px;
            line-height: 36px;
          }
        }
      }
    }
    .second {
      display: flex;
      flex-direction: row;
      position: relative;
      top: 22px;
      align-items: flex-end;
      .block__body {
        display: flex;
        flex-direction: column;
        .title {
          color: #FFFFFF;
          font-style: normal;
          font-weight: bold;
        }
        .text__wrapper {
          margin-top: 16px;
          p {
            font-family: PT Sans;
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            line-height: 20px;
            .arrow {
              color: #8800ff;
            }
          }
        }
        .img__wrapper {
          display: flex;
          margin-top: 10px;
        }
      }
    }
    .third {
      display: flex;
      flex-direction: column;
      position: relative;
      margin-top: 40px;
      margin-bottom: 35px;
      .third__title {
        font-style: normal;
        font-weight: bold;
        line-height: 27px;
        text-transform: uppercase;
      }
      .third__header {
        font-family: PT Sans;
        margin: 20px 0;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 18px;
      }
      .third__body {
        .arrow {
          color: #8800ff;
        }
      }
    }
    .question {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 19px;
      .question__wrapper {
        display: flex;
        color: #8800ff;
        a {
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          text-transform: uppercase;
          color: #8800ff;
        }
      }
      .question__arrow {
        display: flex;
        color: #8800ff;
        height: 1px;
      }
    }
  }
}
</style>
