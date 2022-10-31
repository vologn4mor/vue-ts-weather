<template>
    <button class="btn" @click="$emit('action')">
        <slot></slot>
    </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent ({
    emits: ['action']
})
</script>

<style scoped>
.btn {

    display: inline-block;

    box-sizing: border-box;

    padding: 0 16px;

    /* margin: 0 15px 15px 0; */

    outline: none;

    border: none;

    border-radius: 4px;

    height: 30px;

    line-height: 30px;

    font-size: 12.5px;

    font-weight: normal;

    text-decoration: none;

    vertical-align: top;

    color: #55677d;

    background-color: #dfe6ed;

    cursor: pointer;

    user-select: none;

    appearance: none;

    touch-action: manipulation;

    overflow: hidden;

}

.btn:focus-visible {

    box-shadow: 0 0 0 3px lightskyblue;

}

.btn:hover {

    opacity: 0.88;

}

.btn:active {

    line-height: 32px;

}

.btn:disabled {

    pointer-events: none;

    opacity: 0.65;

}
</style>