<template>
  <div className="container">
    <Header/>
    <Art/>
    <Work/>
    <Cause/>
    <Reviews/>
    <Footer/>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Work from "./components/Work";
import Art from "@/components/Art";
import Cause from "./components/Cause";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";

export default {
  name: "App",
  components: {
    Header,
    Art,
    Work,
    Cause,
    Reviews,
    Footer
  },
  metaInfo: {
    title: 'My Example App',
    titleTemplate: '%s - Yay!',
    htmlAttrs: {
      lang: 'en',
      amp: true
    }
  }
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@300;400;500;700&display=swap');

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Exo 2";
  font-weight: 400;
}

html {
  scroll-behavior: smooth;
}

body {
  background-color: #151516;
}

.container {

}
</style>
