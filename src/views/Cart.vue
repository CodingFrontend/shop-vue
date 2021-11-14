<template>
  <div>
    <h1>Your cart</h1>
    {{ products }}
    <CartItem
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
    <CartSumaryPaymentCard :products="products" />
  </div>
</template>

<script>
import CartItem from "../components/CartItem.vue";
import CartSumaryPaymentCard from "../components/CartSumaryPaymentCard.vue";

export default {
  components: {
    CartItem,
    CartSumaryPaymentCard,
  },
  computed: {
    products() {
      return this.$store.getters.cartItems;
    },
  },
};
</script>
