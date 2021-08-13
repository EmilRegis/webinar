<template>
  <div id="reviews" class="reviews">
    <div class="reviews__container">
      <div class="reviews__header">
        <h3>
          посмотрите отзывы людей <br>
          которые заработали больше <br>
          30 000 тенге
        </h3>
      </div>
      <div class="reviews__body">
        <iframe width="100%" src="https://www.youtube.com/embed/uoYXmTMmLKg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Reviews',
  }
</script>

<style lang="scss" scoped>
.reviews {
  .reviews__container {
    display: flex;
    flex-direction: column;
    padding: 0 14px;
    margin-top: 40px;
    color: #FFFFFF;
    text-transform: uppercase;
    .reviews__header {
      display: flex;
    }
    .reviews__body {
      display: flex;
      margin-top: 20px;
    }
  }
}
</style>
