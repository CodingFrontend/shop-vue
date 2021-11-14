<template>
  <div class="card">
    <div class="card-top">
      <h3>{{ product.title }}</h3>
      <p>Rate: {{ product.rating.rate }}</p>
    </div>
    <img :src="product.image" class="product-image" alt="product image" />
    <h5 class="price">Price: ${{ product.price.toFixed(2) }}</h5>
    <p class="description">Description: {{ description }}</p>
    <p class="text-muted">{{ product.category }}</p>
    <button class="view-product-button" @click="$emit('view-product', product)">
      View
    </button>
  </div>
</template>

<script>
export default {
  props: ["product"],
  computed: {
    description() {
      return this.product.description.substring(0, 150);
    },
  },
};
</script>

<style lang="scss">
.card {
  display: flex;
  flex-direction: column;
  min-height: 100%;
  align-items: center;
  h5.price {
    color: gray;
  }

  p.description {
    font-size: 0.85rem;
  }

  p.text-muted {
    color: gray;
  }
}

.card-top {
  flex-grow: 1;
}

button.view-product-button {
  padding: 10px;
  background-color: rgb(79, 160, 187);
  border: none;
  color: white;
  font-weight: bold;
  font-size: 1.15rem;
  border-radius: 5px;
  cursor: pointer;
}

.product-image {
  max-height: 300px;
  max-width: 100%;
}
</style>