<template lang="">
    <div class="overflow-hidden">
        <div class="d-flex justify-content-between py-2">
            <h2>Liste des utilisateurs Actifs</h2>
            <button class="btn button" @click="show = !show">Nouveau utilisateur</button>
        </div>
        <div class="pt-2">
            <div class="w-100 card-header d-flex justify-content-between">
                                <div class="">
                                    <i class="fas fa-table me-1"></i>
                                    DataTable Product
                                </div>
                                <div class="border w-25">
                                    <input type="text" class="w-100 py-2 px-2 rounded text-secondary" placeholder="rechercher..." 
                                    v-model="searchK"/>
                                </div>
                            </div>
            <table id="datatablesSimple" class="w-100 table">
                                    <thead>
                                        <tr class="border-bottom">
                                            <th>Image</th>
                                            <th>Nom</th>
                                            <th>Email</th>
                                            <th>Telephone</th>
                                            <th>Date de creation</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr class="border-bottom">
                                            <th>Image</th>
                                            <th>Nom</th>
                                            <th>Email</th>
                                            <th>Telephone</th>
                                            <th>Date de creation</th>
                                            <th>Actions</th>
                                        </tr>
                                    </tfoot>
                                    <tbody>
                                       
                                        <tr class="border-bottom" v-for="(user, id) in search" ::key="id">
                                            <td>{{ user.name }}</td>
                                            <td>{{ user.name }}</td>
                                            <td>{{ user.email }}</td>
                                            <td>678907865</td>
                                            <td>2009/01/12</td>
                                            <td class="d-flex">
                                                <button class="btn" ><i class="fa-solid fa-trash-can text-danger"></i></button>
                                                <button class="btn button"  @click="show = !show"><i class="fa-solid fa-pen"></i></button>
                                            </td>
                                        </tr>
                                    </tbody>
            </table>
        </div>
        <Transition name="bounce">
            <div class="form-add d-flex justify-content-center position-absolute top-0 left-0 right-0 z-12 
            zindex-modal w-100 overlay align-items-center p-4" v-if="show">
            <button class="btn position-absolute right-0 top-0 bg-white m-2" 
            @click="show = !show">X</button>
                <div class=" bg-white overlay-content">
                    <h3>Nouvelle Utilisateur</h3>
                    <form>
                        <div class="form-group py-1">
                            <label for="exampleInputEmail1">Email</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                        </div>
                        <div class="form-group py-2">
                            <label for="exampleInputPassword1">Telephone</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                        </div>
                        <div class="form-group py-2">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                        </div>
                        <button type="submit" class="btn button w-100">Enregister</button>
                    </form>
                </div>
            </div>
        </Transition>
    </div>
</template>
<script>
import { userService } from "@/services";

export default {
    name: 'usersIndex',
    data(){
        return{
            show: false,
            users: [],
            SearchK: "",
        }
    },
    mounted() {
        userService.getAllUsers()
            .then(res => {
                console.log("ici",res.data.Categorie)
                let users = [];
                res.data.Categorie.forEach(i => {
                    console.log("i", i.name);
                    users.push({
                        name: i.name,
                        email: i.email,
                        created_at: i.created_at,
                        telephone: i.telephone
                    })
                });
                this.users = users;
                console.log("nouveau tab", this.users);
                console.log(this.users, 'ioo');
            })
            .catch(err => console.log(err))
    },
    computed: {
        search(){
             const query = this.SearchK.toLowerCase()
            if(this.SearchK === ""){
                    console.log("ici search", this.users);
                    return this.users;
                }
                return this.users.filter((user) => {
                    console.log(user.name);
                    return user.name.toLowerCase().includes(query)
                })
        }
    }
}
</script>
<style lang="css">
    .overlay{
        z-index: 1000;
        height: 100%;
        background: rgba(51, 51, 51, 0.336);
    }
    .overlay-content{
        max-width: 500px;
        width: 100%;
        padding: 2rem;
        border-radius: .4rem;
    }
     .button{
      background: #e6571ef1 !important;
      color: #fff !important;
  }

  .bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>