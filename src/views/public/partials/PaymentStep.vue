<template lang="">
    <div>
        PayementStep
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="css">
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