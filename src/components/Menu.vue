<script>
export default {
    data: {
        active: false
    },
    methods: {
        onBlur: function() {
            this.active = false;
        }
    }
}
</script>

<template>
    <div class="menu" v-if="active" @blur="onBlur">
        <slot></slot>
    </div>
</template>

<style lang="sass" scoped>
    .menu {
        background-color: white;
    }
</style>