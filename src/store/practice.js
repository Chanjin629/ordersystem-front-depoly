function initState(){
    return {
        count:0
    }
}

// 상태 유효범위와 리셋 시점
// 리셋시점 : 페이지 새로고침, 브라우저 종료시
// 유효시점 : SPA라우팅시
export const practice = {
    // 상태초기화
    state : initState,
    // 상태값을 변경하는 메서드
    mutations: {
        incrementCount(state){
            state.count++;
        }
    },
    // 컴포넌트에서 mutaiton을 직접호출하기 보다는, actions를 통해 mutation을 호출
    actions:{
        incrementCount(context){
            // vuex 에서 actions 에서 mutations 를 호출할때는 commit 함수를 사용
            // 이와같은 구조는 여러 mutiaions 의 조합을 actions 에서 호출할수 있기 때문
            context.commit("incrementCount");
        }
    },
    getters:{
        getCount: state => state.count,
    }
    // 상태값을 가져가기위한 메서드

}