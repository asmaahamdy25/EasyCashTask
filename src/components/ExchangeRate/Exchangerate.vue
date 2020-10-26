<template>
  <div class="container">
    <h3>Welcome To Currency Converter</h3>
    <div class="input-container">
      <label>From</label>
      <div class="inputs">
        <input v-model="fromValue" type="number" min="1"  />
        <select v-model="from_currency">
          <option
            v-for="(item, index) in currencyArray"
            :key="index"
            :value="item"
            >{{ item }}</option
          >
        </select>
      </div>
    </div>
    <div class="input-container">
      <label>To</label>
      <div class="inputs">
        <input v-model="toValue" type="text" readonly />
        <select v-model="to_currency">
          <option
            v-for="(item, index) in currencyArray"
            :key="index"
            :value="item"
            >{{ item }}</option
          >
        </select>
      </div>
    </div>

    <button v-on:click="convert()">
      Convert
    </button>
  </div>
</template>

<style>
@import url("./Exchangerate.scss");
</style>

<script src="./Exchangerate.js"></script>
