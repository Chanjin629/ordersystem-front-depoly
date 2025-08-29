<template>
    <!-- 내 정보 조회 -->
     <!-- 문자열로 props를 넘길경우 변수명="값", 그외에는 :변수명 형태로 전달 -->
    <MemberDetailCompnent
    :isMyPage="true" pageTitle="내회원정보"/>
    <!-- 내 주문내역 조회 -->
    <OrderListComponent
    :isMyOrder="true" pageTitle="내주문정보"/>
</template>

<script>
import MemberDetailCompnent from '@/components/MemberDetailCompnent.vue';
import OrderListComponent from '@/components/OrderListComponent.vue';
    export default{
        data(){
            return{

            }
        },
        components:{
            MemberDetailCompnent, OrderListComponent
        }
    }
</script>