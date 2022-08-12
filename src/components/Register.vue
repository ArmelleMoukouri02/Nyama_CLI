<template lang="">
    <div>
        <div class="limiter">
		<div class="container-login100">
			<div class="wrap-login100">
				<form class="login100-form validate-form" 
                @submit.prevent="register">
                    <span class="text-secondary">
                        <i class="fa-solid fa-house-chimney"></i>
                        <router-link to="/">Accueil</router-link>
                    </span>
					<span class="login100-form-title p-b-43">
						Connecter vous
					</span>

                    <div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
						<input class="input100" type="text" name="nmae" v-model="user.name" placeholder="name">
						<span class="focus-input100"></span>
					</div>


					<div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
						<input class="input100" type="text" name="email" v-model="user.email" placeholder="email">
						<span class="focus-input100"></span>
					</div>

                    <div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
						<input class="input100" type="text" name="telephone" v-model="user.telephone" placeholder="telephone">
						<span class="focus-input100"></span>
					</div>
					
					
					<div class="wrap-input100 validate-input" data-validate="Password is required">
						<input class="input100" type="password" name="pass" v-model="user.password" placeholder="mot de passe">
						<span class="focus-input100"></span>
					</div>

                    <div class="wrap-input100 validate-input" data-validate="Password is required">
						<input class="input100" type="password" name="c_password" v-model="user.c_password" placeholder="Confirme mot de passe">
						<span class="focus-input100"></span>
					</div>

					<div class="flex-sb-m w-full p-t-3 p-b-32">
						<div class="contact100-form-checkbox">
							<input class="input-checkbox100" id="ckb1" type="checkbox" name="remember-me">
							<label class="label-checkbox100" for="ckb1">
								Se souvenir de moi
							</label>
						</div>
					</div>
			

					<div class="container-login100-form-btn">
						<button class="login100-form-btn" type="submit">
							S'enregistrer
						</button>
					</div>
					
					<div class="text-center p-t-46 p-b-20">
						<span class="txt2">
							Se connecter
						</span>
					</div>

					<div class="login100-form-social flex-c-m">
						<a href="#" class="login100-form-social-item flex-c-m bg1 m-r-5 text-white">
							<i class="fa-brands fa-facebook-f"></i>
						</a>

						<a href="#" class="login100-form-social-item flex-c-m bg2 m-r-5 text-white">
                            <i class="fa-brands fa-linkedin-in" aria-hidden="true"></i>
						</a>
					</div>
				</form>

				<div class="login100-more">
				</div>
			</div>
		</div>
	</div>
	
    </div>
</template>
<script>
import { accountService } from "@/services";
export default {
      data(){
        return{
            user: {
                name: '',
                email: '',
                telephone: '',
                password: '',
                c_password: ''
            }
        }
    },
    methods:{
        register(){
            accountService.register(this.user)
            .then(res => {
                console.log(res.data);
                this.$router.push('/dashboard')
            })
            .catch(err => console.log(err))
        }
    }
}
</script>

<style src="./css/main.css"></style>
<style src="./css/util.css"></style>

<style css>
    .login100-more{
        background-image:linear-gradient(to bottom, rgba(63, 63, 63, 0.52), rgba(71, 57, 54, 0.623)),
         url('@/assets/nyama_image/instagram2.webp');
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
    }
</style>