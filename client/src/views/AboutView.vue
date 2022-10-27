<script setup lang="ts">
  const items = [
  {name: 'Shoes', cost: 30},
  {name: 'Belt', cost: 20},
  {name: 'Socks', cost: 10},

  ]

  const cart = recative([
     
  ]);
</script>


<template>
  <div class="about">
    <h1>This is an about page</h1>
    <ul>
      <li v-for="item in items" :key="item.name">
       <h3> {{item.name}}</h3>
        <h3>{{item.cost}}</h3>
      </li>
    </ul>
    <h2> Cart</h2>
    <table>
      <tr>
        <th>Item</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Cost</th>
      </tr>
      <tr v-for="item in cart" :key="item.name">
        <td>{{item.name}}</td>
        <td>{{item.cost}}</td>
      </tr>
    </table>
  </div>
</template>

<style lang="scss">
  ul{
    display:flex;
    li{
      width: 200px;
    padding: 5px;
    margin: 5px;

    }
  }
</style>
