<template>
  <footer class="footer">
    <div class="footer__container">
      <Button class="btn"/>
    </div>
  </footer>
</template>

<script>
import Button from "./UI/Button";
export default {
  components: {
    Button
  }
}

</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  margin-top: 10px;
  padding: 0 14px;
  .footer__container {
    display: flex;
    flex-direction: column;
    width: 100%;
    .footer__txt {
      background-color: #151516;
      border: solid #8800ff;
      border-radius: 50%;
      color: #8800ff;
      width: 137px;
      height: 32px;
    }
    .footer__img {
      position: relative;
      width: 100%;
      .bg {
        width: 100%;
      }
      .man {
        width: 100%;
        position: absolute;
        left: 0;
        top: -70px;
        z-index: 2;
      }
    }
    .btn {
      z-index: 99;
    }
  }
}
</style>
