import { createVuetify } from "vuetify";
import 'vuetify/styles'
// components 는 뷰피파이에서 사용할수있는 UI 컴포넌트를 의미
import * as components from 'vuetify/components';
// directives 는 뷰이파이가 제공하는 추가 디자인 요소
import * as directives from 'vuetify/components';
import {mdi} from 'vuetify/iconsets/mdi'

export default createVuetify({
    components, directives,
    icons: {defaultSet: 'mdi', sets: {mdi}}
})