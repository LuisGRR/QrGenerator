<script setup>
import { ref, computed } from "vue";
const value = ref("");
const selected = ref("L");
const size = 300;

const expression = /^(ftp|http|https):\/\/[^ "]+$/;

const textoQR = computed({
  get() {
    return value.value;
  },
  set(text) {
    if (expression.test(text)) {
      value.value = text;
    }
  },
});
</script>

<template>
  <header class="contentHeader">
    <h1>QR Generator</h1>
  </header>

  <main class="contentQR">
    <div class="contentQRCpontrol">
      <label class="controlesQR">
        <span>URL: </span>
        <input type="text" v-model="textoQR" />
      </label>
      <label class="controlesQR">
        <span> Level: </span>
        <select v-model="selected">
          <option value="">L</option>
          <option>M</option>
          <option>Q</option>
          <option>H</option>
        </select>
      </label>
    </div>

    <Transition>
      <div v-if="textoQR">
        <qr-code :value="value" :size="size" :level="selected" />
      </div>
    </Transition>
  </main>
</template>

<style scoped>
.contentHeader {
  display: flex;
  align-items: center;
  justify-content: center;
}
h1 {
  margin: 2em 0;
  color: wheat;
}

input {
  outline: none;
  border: none;
  background: transparent;
  border-radius: 2px;
  border-bottom: 2px solid wheat;
  transition: 180ms all ease-in-out;
}

input:focus {
  background: wheat;
  border-bottom: 3px solid wheat;
}

select {
  outline: none;
  border: none;
  background-color: wheat;
  border-radius: 2px;
}
option {
  background-color: wheat;
}

.contentQR {
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  align-items: center;
  justify-content: center;
}
.contentQRCpontrol {
  display: flex;
  column-gap: 30px;
}
.controlesQR {
  color: wheat;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
