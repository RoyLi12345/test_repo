<template>
    <div>
        首页
    </div>
    </template>
    
    <script>
    import {getProducts} from '@/api/getData'
    export default {

        async mounted(){
            const result = await getProducts()
            console.log(result)
        }
    
    }
    </script>
    
    <style scoped>
    
    </style>