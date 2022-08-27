    <template lang="">
        <div>
            <div class="py-2">
                <div class="d-flex justify-content-between py-2">
                <h2>Liste des Produits</h2>
                <router-link to="/productAdd" class="btn button">Nouveau produits</router-link>
            </div>
            <div class="w-100 card-header d-flex justify-content-between">
                    <div class="">
                        <i class="fas fa-table me-1"></i>
                        DataTable Produits
                    </div>
                    <div class="border w-25">
                        <input type="text" v-model="query" class="w-100 py-2 px-2 rounded text-secondary" placeholder="rechercher..." 
                            />
                    </div>
                </div>
                <table id="datatablesSimple" class="w-100 table">
                        <thead>
                            <tr class="border-bottom">
                                <th>Image</th>
                                <th>Nom</th>
                                <th>Description</th>
                                <th>prix</th>
                                <th>Date de creation</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr class="border-bottom">
                                <th>Image</th>
                                <th>Nom</th>
                                <th>Description</th>
                                <th>prix</th>
                                <th>Date de creation</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </tfoot>
                        <tbody v-if="products && products.data">
                        
                            <tr class="border-bottom" v-for="product in search.data" :key="product.id">
                                <td>
                                    <div class="h-12 w-12">
                                        <img class="rounded-full  object-cover" v-if="product.image !=null" :src="'' + product.image " alt="" />
                                        <img class="rounded-full h-12 w-12  object-cover" v-else src="https://images.unsplash.com/photo-1613588718956-c2e80305bf61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80" alt="unsplash image">
                                    </div>
                                </td>
                                <td>{{ product.data.name }}</td>
                                <td>{{ product.description }}</td>
                                <td>{{ product.price }}cfa</td>
                                <td>{{ formattedDate(product.created_at) }}</td>
                                <td>
                                    <span class="bg-green-400 rounded py-1 px-2" v-if="product.active == 1">{{active.inStock}}</span>
                                    <span class="bg-red-400 rounded py-1 px-2" v-else>{{active.endStock}}</span>
                                </td>
                                <td class="d-flex">
                                    <button class="btn"   @click="del(idx)"><i class="fa-solid fa-trash-can text-danger"></i></button>
                                    <router-link to="/productAdd" class="btn button"><i class="fa-solid fa-pen"></i></router-link>
                                </td>
                            </tr>
                        </tbody>
                </table>
            </div>
                            <Pagination :data="products" @pagination-change-page="getResults" class="bg-primary"/>

            <Transition name="bounce">
                <div class="form-add d-flex justify-content-center position-absolute top-0 left-0 right-0 z-12 
                zindex-modal w-100 overlay align-items-center p-4" v-if="deleteM">
                <button class="btn position-absolute right-0 top-0 bg-white m-2" 
                @click="deleteM = !deleteM">X</button>
                    <div class=" bg-white overlay-content text-center">
                            <div class="form-group py-1">
                                <p>Confirmer la suppression</p>
                                <button class="btn btn-info mx-2">Annuler</button>
                                <button class="btn btn-danger" >Confirmer</button>
                            </div>
                    </div>
                </div>
            </Transition>  
        </div>
</template>
<script>
    import { productService } from "@/services";
    import LaravelVuePagination from 'laravel-vue-pagination'
    import moment from 'moment';
    export default {
        components:{
            Pagination : LaravelVuePagination
        },
        data() {
            return {
                products: {},
                deleteM: false,
                show: false,
                active: {
                    inStock: 'disponible',
                    endStock: 'indisponible',
                },
                query: '',
            }
        },

        methods: {
            del(idx) {
                console.log(idx);
                productService.deleteProduct(this.products[idx].id)
                    .then(res => this.products.splice(idx, 1))
                    .catch(err => console.log(err))
                // this.products.splice(idx, 1);
            },

            formattedDate(date){
                if(moment(date).isValid()){
                    return moment(date).format("DD-MM-YYYY");
                }else{
                    return date;
                }
            },

            //methode pour pagination
            getResults(page = 1) {
                axios.get('http://127.0.0.1:8000/api/produits?page=' + page)
                .then(res => {
                    this.products = res.data;
                });
            }
        },

        computed: {
            // products(){
            //     console.log(this.$store.state.products.message);
            //     return this.$store.state.products;
            // },
            search() {
                if (this.query === '') {
                    return this.products
                }
                return this.products.filter((product) => product.name.toLowerCase().includes(this.query))
            }
        },

        created() {
            productService.getAllprod()
                .then(res => {this.products = res.data, console.log(this.products)})
                .catch(err => console.log(err));
        }
    }
</script>
<style scoped>
    .bg-green-400 {
        --tw-bg-opacity: 1;
        background-color: rgb(74 222 128 / var(--tw-bg-opacity));
    }

    .bg-red-400 {
        --tw-bg-opacity: 1;
        background-color: rgb(248 113 113 / var(--tw-bg-opacity));
    }

    .text-gray-400 {
        --tw-text-opacity: 1;
        color: rgb(156 163 175 / var(--tw-text-opacity));
    }

    .w-12 {
        width: 3rem
            /* 48px */
        ;
    }

    .h-12 {
        height: 3rem
            /* 48px */
            !important;
    }

    .rounded-full {
        border-radius: 9999px;
    }

    img {
        width: 100% !important;
        height: 100%;
        object-fit: fill;
    }
</style>