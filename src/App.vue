<template>
  <div id="nav">
    <div class="home-container container">
      <router-link :class="{ active: $route.name === 'Home' }" to="/"
        >Home</router-link
      >
      <router-link :class="{ active: $route.name === 'Cart' }" to="/cart">
        <img src="./assets/cart.svg" class="cart-icon" />
        <span>{{ product_total }}</span>
      </router-link>
    </div>
  </div>
  <router-view />
</template>

<script>
export default {
  mounted() {
    this.$store.commit("updateCartFromLocalStorage");
  },
  computed: {
    product_total() {
      return this.$store.state.cart.reduce((sum, current) => {
        return sum + current.quantity;
      }, 0);
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

html,
body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

body {
  background-color: rgb(245, 245, 245);
}

#nav {
  padding: 10px;
  width: 100%;
  height: 30px;
  background-color: #fff;
  line-height: 30px;

  a {
    font-weight: bold;
    color: darkgray;
    text-decoration: none;
    margin: 0 5px;
    font-size: 1.25rem;

    &.active {
      color: #2c3e50;
    }
  }
}

.text-center {
  text-align: center;
}

.cart-icon {
  width: 20px;
  height: 20px;
}

.container {
  max-width: 1170px;
  padding: 0 20px;
  margin: 0 auto;
 
}

.home-container {
  display: flex;
  justify-content: space-between;
}
</style>
