<template>
    <v-conainer>
        <v-row justify="center">
            <v-col cols="6">
                <v-card>
                    <v-card-title class="text-h5 text-center">
                        회원가입
                    </v-card-title>
                    <v-card-text>
                        <v-form>
                            <v-text-field
                                label="name"
                                type="text"
                                v-model="name"
                                prepend-icon="mdi-account"
                            />
                            <v-text-field
                                label="email"
                                type="email"
                                v-model="email"
                                prepend-icon="mdi-email"
                            />
                            <v-text-field
                                label="password"
                                type="password"
                                v-model="password"
                                prepend-icon="mdi-lock"
                            />
                            <v-row>
                                <v-col>
                                    <!-- block : 속한 row에서 너비를 꽉채우는 옵션 -->
                                    <v-btn color="primary" block @click="memberCreate()">
                                        등록
                                    </v-btn>
                                </v-col>
                            </v-row>
                        </v-form>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-conainer>
</template>

<script>
import axios from 'axios';

    export default{
        data(){
            return{
                name:"",
                email:"",
                password:"",
            }
        },
        methods:{
            async memberCreate(){
                try{
                    const data = {name:this.name,email:this.email,password:this.password};
                    await axios.post(`${process.env.VUE_APP_API_BASE_URL}/member/create`, data);
                    this.$router.push("/");
                }catch(e){
                    alert(e.response.data.status_message);
                }
                
            }
        }
    }
</script>