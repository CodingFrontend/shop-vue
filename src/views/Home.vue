<template>
  <div class="home">
    <ProductDescriptionDrawer
      :product="product"
      :active="active.product_drawer"
      @close-product-drawer="closeProductDrawer"
    />

    <div class="container">
      <ul class="product-cards-list">
        <li v-for="product in items" :key="product.id">
          <ProductSummaryCard
            :product="product"
            @view-product="viewProduct($event)"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import ProductSummaryCard from "../components/ProductSummaryCard.vue";
import ProductDescriptionDrawer from "../components/ProductDescriptionDrawer.vue";
import axios from "axios";

export default {
  name: "Home",
  components: {
    ProductSummaryCard,
    ProductDescriptionDrawer,
  },
  data() {
    return {
      product: null,
      items: [],
      active: {
        product_drawer: false,
      },
    };
  },
  mounted() {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      console.log(res.data);
      this.items = res.data;
    });
  },
  methods: {
    viewProduct(product) {
      this.product = product;
      this.active.product_drawer = true;
    },
    closeProductDrawer() {
      this.active.product_drawer = false;
    },
  },
};
</script>

<style lang="scss">
.product-cards-list {
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  list-style: none;
  width: 100%;
  li {
    width: calc(33.333% - 40px);
    margin: 10px;
    padding: 10px;
    border-radius: 5px;
    background-color: white;
    box-shadow: 0 0 5px gray;
    @media (min-width: 500px) {
      width: calc(33.333% - 40px);
    }
  }
}
</style>