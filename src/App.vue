<template>
  <div class="app">
    <router-view/>
  </div>
</template>

<style style="css">
@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@1,9..144,600&family=Poppins&display=swap');
  .app{
    font-family: 'Poppins', sans-serif;
  }
  h2{
      color: #e6571ef1;
      font-family: 'Fraunces', serif;
  }
  .page-width{
    gap: 1rem;
  }
  .button{
      background: #e6571ef1;
      color: #fff;
  }
  a{
    text-decoration: none;
    color: #333 !important;
  }
</style>
