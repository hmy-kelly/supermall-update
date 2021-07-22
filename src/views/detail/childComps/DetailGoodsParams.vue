<template>
    <div v-if='Object.keys(params).length!==0' class="param-info">
        <table v-for='(table,index) in params.sizes' class="info-size" :key='index'>
            <tr v-for='(tr,indey) in table' :key='indey'>
                <td v-for='(td,indez) in tr' :key='indez'>{{td}}</td>
            </tr>
        </table>
        <table class="info-param">
            <tr v-for='(info,index) in params.info'>
                <td class="info-param-key">{{info.key}}</td>
                <td class="param-value">{{info.value}}</td>
            </tr>

        </table>
        <div v-if='params.image.length!==0' class='info-img'>
<img :src="params.image" alt="">
        </div>

    </div>
      
</template>

<script>
    export default {
        name: 'DetailGoodsParams',
        props: {
            params: {
                type: Object,
                default() {
                    return {}
                }

            }
        }
    }
</script>

<style scoped>
.param-info{
    padding: 20px 15px;
    font-size: 14px;
    border-bottom: 5px solid #f2f5f8;
}
.param-info table{
    width: 100%;
    border-collapse:collapse;
}
.param-info table tr{
    height: 42px;
}
.param-info table tr td{
    border-bottom: 1px solid rgba(100,100,100,.1);
}
.info-param-key{
    width: 95px;
}
.info-param{
    border-top: 1px solid rgba(0,0,0,.1);
}
.param-value{
    color: #eb4868;
}
.info-img img{
    width: 100%;
}
</style>