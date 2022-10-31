<template>
    <div :key="city.id" class="city">
        <img :src="city.iconUrl" />
        <div class="city__info">           
            <div>
                <p>{{ city.cityName }}</p>&nbsp;
                <p>{{ city.temp }}</p>&nbsp;
            </div>
            <small>{{ city.description }}</small>&nbsp;
        </div>
        <div class="city__btn">
            <AppButton  @action="$emit('delete', city.id)">Удалить</AppButton>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppButton from "./ui/AppButton.vue"
    
export default defineComponent({
    props: ['city'],
    emits: ['delete'],
    components: {
        AppButton
    }
})
</script>

<style scoped>
p {
        margin: 0
    }
    .city{
        display: flex;
        justify-content: space-between;
        max-width: 300px;
        margin: 10px auto;
    }
    .city__info {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .city__info div {
        display: flex;
    }
    .city__btn {
        display: flex;
        align-items: center;
    }
</style>