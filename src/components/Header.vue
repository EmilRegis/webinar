<template>
  <header class="header">
    <div class="header__container">
      <div class="header__logo">
        <img src="@/assets/logo.svg" alt="">
      </div>
      <div class="header__text">
        <p>
          Бесплатный мастер-класс <br>
          19 августа в 20:00 (нур)
        </p>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss" scoped>
  .header {
    color: #FFFFFF;
    height: 96px;
    width: 100%;
    padding: 30px 14px;
    .header__container {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .header__logo {
        display: flex;
      }
      .header__text {
        display: flex;
        p {
          font-family: Exo 2;
          font-style: normal;
          font-weight: bold;
          font-size: 12px;
          line-height: 14px;
          text-align: right;
        }
      }
    }
  }
</style>
