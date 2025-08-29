<!-- 화면의 요소는 template안에 코딩 -->
<template>
  <!-- vue(vuetify) 에서는 모든 태그의 최상단에 v-app으로 감싸져 있어야 정상적으로 동작 -->
  <v-app>
    <HeaderComponent/>
    <!-- header, footer 를 제외한 실질적인 화면의 내용 v-main 안에 들어감 -->
    <v-main>
      <router-view/>
    </v-main>
    <FooterComponent/>
  </v-app>
</template>

<!-- script 에는 js 코드를 코딩 -->
<script>
import FooterComponent from './components/FooterComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue';


// vue 는 export를 통하여 해당 요소를 다른 화면에서도 improt 할수 있도록 설정
// 즉 아래 문법은 App.vue 라는 화면을 다른 파일에서도 import 할수 있도록 컴포넌트화 시킨것
export default {
  name: 'App',
  // 다른 화면을 import 한 이후에 template 에서 사용하려고 할때는 components 라는 변수에 나열
  components: {
    FooterComponent, HeaderComponent
  }
}
</script>

<!-- 디자인 요소는 style 태그 안에 코딩 -->
<style>

</style>
