<template>
    <v-conainer>
        <v-row justify="center">
            <v-col cols="6">
                <v-card>
                    <v-card-title class="text-h5 text-center">
                        상품등록
                    </v-card-title>
                    <v-card-text>
                        <v-form>
                            <v-text-field
                                label="상품명"
                                v-model="name"
                            />
                            <v-text-field
                                label="카테고리"
                                v-model="category"
                            />
                            <v-text-field
                                label="가격"
                                v-model.number="price"
                            />
                            <v-text-field
                                label="재고수량"
                                v-model.number="stockQuantity"
                            />
                            <v-file-input
                                label="상품이미지"
                                accept="image/**"
                                @change="fileUpload"
                                multiple
                            />
                            <v-row>
                                <v-col>
                                    <v-btn color="primary" block @click="productCreate()">
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
                category:"",
                price:null,
                stockQuantity:null,
                productImage:null,
            }
        },
        methods:{
            fileUpload(event){
                // 여러개의 상품일경우 for 문을 돌려서 실행하여 productImage에 값 할당
                this.productImage = event.target.files[0];
            },
            async productCreate(){
                try {
                    // multi-part-formdata 또는 url 인코딩 방식인경우에 FormData클래스 사용해서 객체 조립
                    let data = new FormData();
                    data.append("name", this.name);
                    data.append("category", this.category);
                    data.append("price", this.price);
                    data.append("stockQuantity", this.stockQuantity);
                    data.append("productImage", this.productImage);
                    await axios.post(`${process.env.VUE_APP_API_BASE_URL}/product/create`, data);
                    this.$router.push("/product/manage");
                } catch (e) {
                    console.log(e)
                }
                
            }
        }    
    }
</script>