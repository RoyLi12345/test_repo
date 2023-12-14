<template>
    <div>
        首页
    </div>
    </template>
    
    <script>
    import {getProducts, getUserData} from '@/api/getData'
    import Axios from 'axios'
    export default {

        async mounted(){

            const result = await getProducts()
            console.log(result)

            // const res = await Axios.get('http://localhost:8080/api/test.php')
            // console.log(res)
        }

        
    
    }
    </script>
    
    <style scoped>
    
    </style>