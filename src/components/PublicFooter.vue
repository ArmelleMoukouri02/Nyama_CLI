<template>
  
    <footer class="section footer d-none">
            <div class="footer-container container">
                    <div class="footer-content">
                        <a href="#" class="logo-content flex">
                                <i class='bx bx-coffee logo-icon'></i>
                                <span class="logo-text">Nyama</span>
                            </a>

                            <p class="content-description">Nyama est là pour vous aider</p>

                            <div class="footer-location flex">
                                <i class='bx bx-map map-icon'></i>
                                
                                <div class="location-text">
                                        Douala, Cameroun Bonamoussadi Carrefour le Kostit
                                </div>
                            </div>
                    </div>

                    <div class="footer-linkContent">
                            <ul class="footer-links">
                                    <h4 class="footerLinks-title">Facility</h4>

                                    <li><a href="#" class="footer-link">Commander</a></li>
                                    <li><a href="#" class="footer-link">Livraison</a></li>
                                    <li><a href="#" class="footer-link">Super marché</a></li>
                                    <li><a href="#" class="footer-link">Restaurants</a></li>
                            </ul>
                            <ul class="footer-links">
                                    <h4 class="footerLinks-title">Facility</h4>

                                    <li><a href="#" class="footer-link">Coffee</a></li>
                                    <li><a href="#" class="footer-link">Beverages</a></li>
                                    <li><a href="#" class="footer-link">Dishes</a></li>
                            </ul>
                            <ul class="footer-links">
                                    <h4 class="footerLinks-title">Support</h4>

                                    <li><a href="#" class="footer-link">About Us</a></li>
                                    <li><a href="#" class="footer-link">FAQs</a></li>
                                    <li><a href="#" class="footer-link">Private Policy</a></li>
                                    <li><a href="#" class="footer-link">Help Us</a></li>
                            </ul>
                    </div>
            </div>
            <div class="footer-copyRight">&#169; AFARIK All rigths reserved</div>
        </footer>

</template>

<script>
export default {

}
</script>

<style>

    /* Footer */
.footer{
  padding: 4rem 2rem 3rem;
  background-color: #2C3034;
;
}
.footer .content-description,
.footer .map-icon,
.footer .location-text{
  color: #888682;
}
.footer-container{
  display: grid;
  grid-template-columns: 1fr 2fr;
  column-gap: 2rem;
  align-items: center;
}
.footer-content{
  display: grid;
  row-gap: 3rem;
}
.footer .logo-text,
.footer .logo-icon{
  color: #888682;
  font-size: 2rem;
  font-weight: 500;
}
.footer .logo-icon{
  font-size: 3rem;
}
.footer .content-description,
.footer .location-text{
  text-align: left;
  font-size: 1.4rem;
}
.footer .map-icon{
  font-size: 3rem;
  margin-right: 1rem;
}
.footer-linkContent{
  display: grid;
  grid-template-columns: repeat(3,1fr);
  justify-items: end;
}
.footer-links{
  display: grid;
  row-gap: 1rem;
  font-weight: 500;
  color: #FFF;
}
.footer-link{
  font-size: 1.4rem;
  color: rgba(255, 255, 255, 0.5);
  transition: 0.3s;
}
.footer-link:hover{
  color: rgba(255, 255, 255, 0.8);
}
.footer-copyRight{
  max-width: 970px;
  margin: 0 auto;
  text-align: center;
  padding-top: 3rem;
  margin-top: 3rem;
  font-size: 1.4rem;
  border-top: 2px solid #888682;
  color: rgba(255, 255, 255, 0.8);;
}

</style>