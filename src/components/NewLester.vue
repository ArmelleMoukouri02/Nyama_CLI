<template lang="">
    <div>
        <section class="subscription bg-white my-5 w-100">
        <div class="container">
            <div class="row">
            <div class="col-lg-12">
                <div class="subscription-wrapper">
                <div class="d-flex subscription-content justify-content-between align-items-center flex-column flex-md-row text-center text-md-left">
                    <h3 class="flex-fill">Subscribe <br> to our newsletter</h3>
                    <form action="#" class="row flex-fill">
                    <div class="col-lg-7 my-md-2 my-2">
                        <input type="email" class="form-control px-4 border-0 w-100 text-center text-md-left" id="email" placeholder="Your Email" name="email">
                    </div>
                    <div class="col-lg-5 my-md-2 my-2">
                        <button type="submit" class="btn btn-primary btn-lg border-0 w-100">Subscribe Now</button>
                    </div>
                    </form>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
    

.subscription.bg-white {
    background: none;
}

.bg-white {
    background-color: #fff!important;
}

.subscription.bg-white .subscription-wrapper {
    background: #fff;
}

/* .subscription-wrapper {
    border-radius: 0% 5% 10% 3%/10% 20% 0% 17%;
    -webkit-transform: perspective(1800px) rotateY(20deg) skewY(1deg) translateX(50px);
    transform: perspective(1800px) rotateY(20deg) skewY(1deg) translateX(50px);
    padding: 70px 50px;
    z-index: 1;
    width: 100%;
    background: linear-gradient(80deg, #0030cc 0%, #00a4db 100%);
    
} */

/* .subscription-wrapper {
    box-shadow: 0px 15px 39px 0px rgba(8, 18, 109, 0.1) !important;
} */

.subscription-content {
    -webkit-transform: skewY(-1deg);
    transform: skewY(-1deg);
}

h3, .h3 {
    font-size: 30px;
}

.flex-fill {
    -ms-flex: 1 1 auto!important;
    flex: 1 1 auto!important;
}

.subscription.bg-white .form-control {
    border: 1px solid #ebebeb !important;
}

.subscription-wrapper .form-control {
    height: 60px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 45px;
}

.subscription-wrapper .form-control:focus {
    background: rgba(255, 255, 255, 0.1);
    outline: 0;
    box-shadow: none;
}

.btn:not(:disabled):not(.disabled) {
    cursor: pointer;
}

.btn-primary {
    border: 0;
    color: #fff;
}



.btn {
    font-size: 16px;
    font-family: "Poppins", sans-serif;
    text-transform: capitalize;
    padding: 18px 45px;
    border-radius: 45px;
    font-weight: 500;
    border: 1px solid;
    position: relative;
    z-index: 1;
    transition: .3s ease-in;
    overflow: hidden;
}

.btn-primary:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 102%;
    height: 100%;
    background: linear-gradient(45deg, #00a8f4 0%, #02d1a1 100%);
    z-index: -1;
    transition: ease 0.3s;
}
</style>