<template>
  <!--分类查找 商品  -->
  <div class="itemCategory">

    <div class="filterBox">

      <div>

        <ul class="filterList">
          <span>分类:</span>
          <li>全部</li>
          <li>小米手机</li>
        </ul>

        <ul class="filterList">
          <span>拍照像素:</span>
          <li>四摄像头</li>
          <li>三摄像头</li>
        </ul>

        <ul class="filterList">
          <span>屏幕大小:</span>
          <li>外屏：6.56英寸丨内屏：8.03英寸</li>
          <li>外屏：6.56英寸丨内屏：8.03英寸</li>
          <li>6.36英寸</li>
          <li>6.55英寸</li>
          <li>6.73英寸</li>
          <li>6.92英寸</li>
        </ul>

        <ul class="filterList">
          <span>运行内存:</span>
          <li>最高12GB</li>
          <li>最高16GB</li>
          <li>12GB</li>
        </ul>

        <ul class="filterList">
          <span>电池续航:</span>
          <li>4050mAh</li>
          <li>4500mAh</li>
          <li>4600mAh</li>
          <li>4610mAh</li>
          <li>4800mAh</li>
          <li>4820mAh</li>
        </ul>

      </div>

    </div>

    <div class="filterResult">

        <div class="itemCard">
            <img src="@/assets/phone.png" width="200" height="200" alt="">
            <span>Xiaomi 13 Ultra 12GB+256GB</span>
            <span>5999元</span>
            <ul>
                <li><img src="@/assets/phone.png" width="34" height="34" alt=""></li>
                <li><img src="@/assets/phone.png" width="34" height="34" alt=""></li>
                <li><img src="@/assets/phone.png" width="34" height="34" alt=""></li>
            </ul>
            <ul>
                <li><img src="@/assets/juan.png" width="27" height="18" alt=""></li>
                <li><img src="@/assets/jiagou.png" class="marginLabel" width="56" height="18" alt=""></li>
            </ul>
        </div>

    </div>

    <!--  -->
    <div class="hiddenFooter"></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.itemCategory {
  background: #f5f5f5;
}

.filterBox {
  width: 100%;
  background: white;
}
.filterBox div {
  padding: 10px 0 15px 0;
  width: 1226px;
  font-size: 15px;
  background: white;
  margin: 0 auto;
}


.filterList {
  padding: 18px 0;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
}

.filterBox .filterList:nth-last-child(1){
    border-bottom: none;
}

.filterList span {
  color: #b0b0b0;
  width: 100px;
}

.filterList li {
  width: 150px;
  text-overflow: ellipsis;
  white-space: nowrap; /* 防止换行 */
  overflow: hidden; /* 文字溢出隐藏 */
  text-overflow: ellipsis; /* 显示省略号 */
  margin-right: 15px;
  cursor: pointer;
}

.filterList li:hover {
  color: #f60;
}
.filterList li .active {
  color: #f60;
}

.filterResult{
    width: 1226px;
    margin: 20px auto;
}

.itemCard{
    width: 296px;
    height: 400px;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.itemCard ul{
    display: flex;
    align-items: center;
}

.itemCard>*:not(.itemCard span:nth-child(3)){
    margin-top: 10px;
}

.marginLabel{
    margin-left: 10px;
}

.hiddenFooter{
    margin-top: 10px;
    height: 30px;
}
</style>