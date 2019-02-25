<template>
    <div>
            <h1>Filters Demo</h1>

            <input v-model="costs" type="number" />

            

            costs: {{costs | currency}}
    </div>
</template>

<script>
    

    export default {
        data() {
            return {
                costs: 10000
            }
        },
    }
</script>

<style scoped>

</style>