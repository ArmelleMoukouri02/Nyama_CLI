<template lang="">
    <div class="container">
        <div class="row checkout ">
            <div class="checkout_content checkout_contentd col-12 col-md-7 d-flex justify-content-center py-4">
                <div class="">
                    <div class="content-step d-flex justify-content-between">
                        <span class="text-primary">Compte</span>
                        <div class="mx-3">
                            <span><i class="fa-solid fa-circle-check mx-1"></i></span>
                        </div>
                        <span>Shipping</span>
                        <div class="mx-3">
                            <span><i class="fa-solid fa-circle-check mx-1"></i></span>
                        </div>
                        <span>Payment</span>
                    </div><br />
             
                    <component :is="steps[step]" 
                    :fromValue="values"></component>

                    <div class="text-end py-3">
                        <button class="btn mx-2" 
                        @click.prevent="previousStep">Precedant</button>
                        <button class="btn btn-login-checkout py-3" 
                        @click.prevent="nextStep">Shipping details</button>
                    </div>
                </div>
            </div>


            <div class="checkout_content checkout_contents col-12 col-md py-4 px-3 px-md-5 d-flex justify-content-center">
                <div>
                    <h5 class="mod-title">checkout</h5>
                    <div class="border-bottom py-3 pb-4 contentCh">
                        <div class="d-flex py-3 justify-content-between align-items-center chechp">
                            <div class="img-article w-25">
                                <img class="w-100 rounded" src="../../assets/nyama_image/jakub-kapusnak-4f4YZfDMLeU-unsplash.jpg" alt="">
                            </div>
                            <div class="info-article text-start mx-2">
                                <h5 class="name-article">Pizza au janbon</h5>
                                <span class="price-article">650fcfa</span>
                            </div>
                            <li class="prod-qty d-flex justify-content-center align-items-center">2</li>
                        </div>
                        <div class="d-flex py-3 justify-content-between align-items-center chechp">
                            <div class="img-article w-25">
                                <img class="w-100 rounded" src="../../assets/nyama_image/shop-2_600x.webp" alt="">
                            </div>
                            <div class="info-article text-start mx-2">
                                <h5 class="name-article">Spaghetti au boeuf</h5>
                                <span class="price-article">1650fcfa</span>
                            </div>
                            <li class="prod-qty d-flex justify-content-center align-items-center">1</li>
                        </div>
                    </div>
                    <div class="py-4 border-bottom mb-2">
                        <div class="d-flex justify-content-between py-2">
                            <span>Total Choix</span>
                            <span>2500fcfa</span>
                        </div>
                        <div class="d-flex justify-content-between py-2">
                            <span>Shipping</span>
                            <span>500fcfa</span>
                        </div>
                    </div>
                    <div class="py-2">
                        <h4 class="d-flex justify-content-between py-2">
                            <span>Total</span>
                            <span>3000fcfa</span>
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
    import Multiselect from '@vueform/multiselect'
    import CompteStep from '@/views/public/partials/CompteStep.vue'
    import ShippingStep from '@/views/public/partials/ShippingStep.vue'
    import PaymentStep from '@/views/public/partials/PaymentStep.vue'
    import useForm from '../../composables/formValue';
    import { ref } from '@vue/reactivity'

    //variable reactive
    const step = ref(0);

    const steps = [
        CompteStep,
        ShippingStep,
        PaymentStep,
    ];

    const {
        values
    } = useForm();

    const previousStep = () => {
        step.value--;
    };

    const nextStep = () => {
        step.value++;
    }
</script>
<style css>
.checkout {
    padding: 6rem 0;
    gap: 12px;
}

.checkout_content {
    background: #F7FAFC;
    border-radius: 10px;
}

.mod-title {
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;

    color: #000000;
}

.form-input {
    height: 59px;
    background: #E2E8F0;
    border-radius: 10px;
}

.form-input input {
    width: 100%;
    height: 100%;
    background-color: transparent;
    border: none;
    outline: none;
}
.form_content li{
    list-style: none;
}
.form_content label {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;

    /* 600 */

    color: #718096;
}

.btn-login-checkout {
    background: #e6571ef1;
    border-radius: 10px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    color: #fff;
}
.btn-update{
    color: #e6571ef1;
    outline: none;
}
.btn-update:hover{
    color: #e6571ef1;
}
.btn-login-checkout:hover {
    color: #fff !important;
}

.prod-qty {
    height: 32px;
    width: 32px !important;
    background: #E2E8F0;
    border-radius: 32px;
    list-style: none;
}
.chechp{
    border-bottom: 1px dashed #aaa;
}
.contentCh{
      max-height: 60%;
      height: 100%;
      overflow: hidden;
      overflow-y: scroll;
    }
.contentCh::-webkit-scrollbar {
        width: 8px;               /* width of the entire scrollbar */
      }

.contentCh::-webkit-scrollbar-thumb {
    background-color: #e6571ef1;    /* color of the scroll thumb */
}

@media screen and (min-width: 760px) {
    .form-input {
        width: 500px;
    }
    .content_shipping{
        width: 500px;
    }
}

@media screen and (max-width: 760px) {
    .checkout{
        flex-direction: column-reverse;
    }
}
</style>