<template>
    <div id="wrap">
        <p>초기화면</p>
        <p>{{ msg }}</p>
    </div>
</template>

<script>
export default {
    name: "IndexPage",
    props: {
        msg: String
    }
}
</script>

<style scoped>
    
</style>