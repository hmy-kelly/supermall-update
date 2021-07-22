<template>
    <div class="recommend">
        <div v-for="item in recommend" class="commend">
            <a :href="item.link">
                <img :src="item.image" alt="">
                <div>{{item.title}}</div>
            </a>
        </div>
    </div>
      
</template>

<script>
    export default {
        name: 'HomeRecommend',
        props: {
            recommend: Array,
            default() {
                return []
            },
        }
    }
</script>

<style scoped>
    .recommend{
        display: flex;
        width: 100%;
        padding: 10px 0 20px 0;
        border-bottom: 10px solid #eee;
        text-align: center;
        font-size: 12px;
    }
    .commend{
        flex: 1;
    }

    .commend img{
        width: 70px;
        height: 70px;
        margin-bottom: 10px;

    }

</style>