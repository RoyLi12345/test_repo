<template>
    <div>
        首页
    </div>
    </template>
    
    <script>
    import {getProducts, getUserData,getCart} from '@/api/getData'
    export default {

        async mounted(){

            const result = await getProducts()
            console.log(result.data)

            // const res = await Axios.get('http://localhost:8080/api/test.php')
            // console.log(res)

        }

        
    
    }
    </script>
    
    <style scoped>
    
    </style>