<template lang="">
    <div>
               <form class="pb-5 border-bottom">
                        <h5 class="mod-title py-3">Compte detail</h5>
                        <div class="py-3">
                            <div class="form_content">
                                <label>Email address</label>
                                <div class="form-input d-flex align-items-center px-3">
                                    <input type="text" name="email" placeholder="Exemple@gmail.com" v-model="props.formValues"/>
                                    <i class="fa-solid fa-circle-check mx-1"></i>
                                </div>
                            </div>
                            <div class="form_content my-3">
                                <label>telephone</label>
                                <div class="form-input d-flex align-items-center px-3">
                                    <input type="text" name="telephone"  placeholder="facultatif" 
                                    v-model="props.formValues"/>
                                    <i class="fa-solid fa-circle-check mx-1"></i>
                                </div>
                            </div>
                            <div class="text-end py-3">
                                <button class="btn btn-login-checkout py-3">recevoir mon code</button>
                            </div>
                        </div>
                    </form>
    </div>
</template>
<script setup>
   const props = defineProps(['formValues']);
</script>
<style lang="">
    
</style>