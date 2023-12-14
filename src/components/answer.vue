<template>
  <div class="content">

    <div class="kefu-dialog">
        <img src="@/assets/kefupfp.png" width="40" height="40" alt="">
        <div class="chatInfo chat-answer">


            <span v-if="answer==1">
                
            <strong>下单后通常于48小时内发货，特殊说明请查看。</strong>部分大家电商品：如电视、空调、冰箱、洗衣机等为预约发货配送，
                会根据物流和您预约的配送时间进行发货。
                📍 如受不可抗力因素影响，发货及到货可能存在一定延期，派送时间及上门信息以快递实际为准，具体地区您可查询。

            </span>

            <span v-else-if="answer==2">
                当前<strong>人工客服</strong>服务暂时繁忙，如您需要请扫描下面的二维码添加主管联系方式 将会在12-48小时回复
                <img class="image" :src="qrImg" width="200" height="200" alt="">
            </span>
            <span v-else-if="answer==3">
                <strong>如果您购买的产品下错单或填错地址，需要取消订单或修改订单收货信息</strong>
                可以 <a @click="goTo('/service/myOrder')">点击这里</a><strong>选择对应订单修改或申请退款。</strong>商品颜色，版本、赠品、尺码等是无法修改的，拍错了可以取消重新订购哦~
                如您修改地址无法操作，需要您可扫码联系客服进入人工处理。
            </span>

            <span v-else-if="answer==4">
                想加入我们团队，请扫码联系下方我们的主管
                <img class="image" width="200" height="200" :src="qrImg" alt="">
            </span>

            <span v-else-if="answer==5">
                <strong>申请退换修或安装服务，请进入我们的官方小程序，通过手机操作更方便哟~。</strong>
                温馨提示：非小米销售渠道购买的产品，退换建议优先联系购买方，具体以售后政策为准。
                门店支持线上预约维修服务，可以>选择商品>选择到店>填写相应信息>提交服务单。
            </span>

            <span v-else-if="answer==6">
                <span class="answer-title">小米承诺:</span>
                <strong>7日内无理由退货</strong>
                <br>
                <strong>质量问题15日内包换</strong>
                <br>
                <strong>1年质保</strong>

                <br>
                ⏰温馨提示：非小米销售渠道购买的产品，退换建议优先联系购买方，具体以售后政策为准。
                门店支持线上预约维修服务，可以>选择商品>选择到店>填写相应信息>提交服务单。

                <br>📱如因产品质量问题，凭厂商授权服务中心的检测证明，享受7日内退货，手机类15天换货、电视30日内换货，在质保期内享受1年内免费维修等三包服务！
                （注：部分商品由厂家提供售后，或者服务周期存在日期差异，具体详则请查看对应品类的售后政策说明）
            </span>


            <span v-else-if="answer==7">

               <strong>下单后通常于48小时内发货。</strong> 
               <br>部分大家电商品：如电视、空调、冰箱、洗衣机等为预约发货配送，会根据物流和您预约的配送时间进行发货。
                📍 如受不可抗力因素影响，发货及到货可能存在一定延期，派送时间及上门信息以快递实际为准，具体地区您可查询。

            </span>

            <span v-else-if="answer==8">
               <strong> ●小米商城购买的产品一般情况下：</strong>支持7天无理由退货，15天质量问题换货，1年质保维修服务。
               <br> 📍 部分产品服务周期存着日期差异，建议您搜索产品名称，了解具体政策。已购买产品保修时间可查询。
               <br><strong> ●小米商城购买门店取货、小米之家购买的商品：</strong>在商品完好无损、整机包装未拆封情况下，支持7天无理由退货，到取货或购买门店进行退货处理；
               <br><strong>●授权店购买的商品：</strong>不支持7天无理由退货，支持7天质量问题退货，需拿检测单至购买的授权店进行退货处理。

                温馨提示：产品是否存在人为损坏/是否可退均需以小米之家/网点检测为准。
            </span>

            <span v-else-if="answer == 9">

                小米商城中小件商品订单由顺丰、京东、EMS、中通、丹鸟（菜鸟速递）进行配送；
                大家电商品是由京东、日日顺、小米物流进行配送的。

                <br>📍暂不支持指定快递~

            </span>
            

            <span v-else-if="answer==10">

                <strong>小米在全国各区域有20个中小件仓库和接近50个大家电仓库，会优先选取离您最近的仓库进行发货。</strong>
                    在发货前无法获取发货地点，您可以在产品发货后，
                <a @click="goTo('/service/myOrder')">点击这里</a>查看该产品物流详情中的发货地。

                温馨提示：有可能因为最近仓库无货而从其他仓库发货；暂时不支持港澳台地址的配送。

            </span>

                
            <span v-else-if="answer == 11">

                <strong>小米商城销售的产品在中国大陆大部分地区都支持配送上门入户。</strong>无法选择地址下单购买，则说明该区域不在安装或配送区域内。
                <br>📍大家电免费提供送货上门服务，如冰箱因尺寸无法入户，需评估拆门是否可入户。

            </span>



            <span v-else-if="answer == 12">

                <strong>如您需要使用小米之家闪购服务:</strong>
                <br>【门店闪送】您可以从小米商城下单，按照以下方法选择物流方式为门店闪送，配送费及送达时间以页面显示为准。

                <img src="@/assets/shansu.jpeg" class="image" width="300" height="300" alt="" srcset="">

                <br>【美团闪购】您可以在美团外卖APP搜索小米之家选择附近门店下单。

                <br>温馨提示：如选择后提示无法闪送，您可选择快递配送或自取，具体请以页面显示为准。

            </span>


              <span v-else-if="answer == 13">

                <strong>物流查询请走以下程序:</strong>
                <br>通过点击 <strong>售后服务</strong>><strong>快递查询</strong>，随后输入快递单号即可查询
                <br>📍注: 不是所有快递订单都支持公开，若您的快递查询不到，请不要灰心，试着联系客服


                <br>请点<a @click="goTo('/deliverySearch')">点击这里</a>查看物流情况

                <br>📍注: 不是所有快递订单都支持公开，若您的快递查询不到，请不要灰心，试着联系客服

            </span>


        </div>
    </div>

  </div>
</template>

<script>
import QrCode from 'qrcode'
import router from '../router/index'
export default {
    props:['answer'],
    data(){
        return{
            qrImg:''
        }
    },
    mounted(){
        this.makeQRCode()
    },
    methods:{
        async makeQRCode(){
            this.qrImg = await QrCode.toDataURL('https://u.wechat.com/MDpUDAv1Zuz9hiHy99daYlY')
        },
        goTo(path){
            router.push(path)
        }
    }
}
</script>

<style scoped>

.content{
    margin: 30px 0;
}

.image{
    display: block;
}

a{
    color: #0086CF;
    margin: 0 5px 0 0px;
    cursor: pointer;
}
.answer-title{
    font-size: 20px;
    display: block;
    font-weight: bold;
    text-align: center;
    color: #666666;
}
</style>