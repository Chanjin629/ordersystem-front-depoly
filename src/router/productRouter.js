import ProductListComponent from "@/components/ProductListComponent.vue";
import ProductCreate from "@/views/ProductCreate.vue";


export const productRouter = [
    {
        path: "/product/list",
        name: "productListComponent",
        component: ProductListComponent,
        props:{pageTitle:"상품목록", isAdmin:false}
    },
    {
        path: "/product/manage",
        name: "productManageComponent",
        component: ProductListComponent,
        props:{pageTitle:"상품관리", isAdmin:true}
    },
    {
        path: "/product/create",
        name: "productCreate",
        component: ProductCreate,
        props:{pageTitle:"상품관리", isAdmin:true}
    },
    
]   