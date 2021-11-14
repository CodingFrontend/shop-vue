<template> 
  <div class="card cart-item-card">
   <img :src="product.image" class="product-image" alt="product image" />
    <div class="card-content">
      <span>{{ product.category }}</span>
      <h3>{{ product.title }}</h3>
      <h4>In Cart: {{ product.quantity }}</h4>
      <h4>Total Cost: {{ item_cost.toFixed(2) }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product"],
  computed: {
    description() {
      return this.product.description.substring(0, 120);
    },
    item_cost() {
      return this.product.price * this.product.quantity;
    },
  },
};
</script>

<style lang="scss">
.cart-item-card {
  margin: 5%;
  background-color: #fff;
  box-shadow: 0 0 5px gray;
  border-radius: 5px;
  padding: 10px;
  text-align: left;
  display: flex;
  flex-direction: row;
  img {
    margin: 10px 40px 10px 10px;
    max-height: 200px;
  }
}
</style>