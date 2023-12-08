<template>
  <div>
    <div class="header">
      <img src="@/assets/pfp.jpg" alt="" />
      <div class="usertext">
        <h2>666</h2>
        <span>{{timeText}}好 ~</span>
      </div>
    </div>

    <div class="line"></div>

    <ul class="labelBox">
      <li>
        <img src="@/assets/portal-icon-1.png" alt="" />
        <div>
          <div class="pending">
            待支付的订单：
            <span>0</span>
          </div>
          <span class="check">查看待支付订单 ></span>
        </div>
      </li>
      <li>
        <img src="@/assets/portal-icon-2.png" alt="" />
        <div>
          <div class="pending">
            待收货的订单：
            <span>0</span>
          </div>
          <span class="check">查看待支付订单 ></span>
        </div>
      </li>
      <li>
        <img src="@/assets/portal-icon-3.png" alt="" />
        <div>
          <div class="pending">
            待评价商品数：
            <span>0</span>
          </div>
          <span class="check">查看待评价商品 ></span>
        </div>
      </li>
      <li>
        <img src="@/assets/portal-icon-4.png" alt="" />
        <div>
          <div class="pending">
            喜欢的商品：
            <span>0</span>
          </div>
          <span class="check">查看喜欢的商品 ></span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timeText: "",
    };
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      var now = new Date();
      var hour = now.getHours();

      if (hour < 12) {
        this.timeText = '早上'
      } else if (hour < 18) {
        this.timeText = '中午'
      } else {
        this.timeText = '晚上'
      }
    },
  },
};
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
}
.header img {
  width: 150px;
  height: 150px;
  border: 1px solid #e0e0e0;
  border-radius: 150px;
  padding: 4px;
  margin-right: 10px;
  box-sizing: border-box;
}
.usertext {
  display: flex;
  flex-direction: column;
  /* align-items: center; */
}
.usertext h2 {
  color: #616161;
  font-weight: normal;
  font-size: 24px;
}
.usertext span {
  font-size: 12px;
  margin: 5px 0;
  color: #b7b7cc;
}
.line {
  margin: 20px 0;
  border-bottom: 1px solid #e0e0e0;
}

.labelBox {
  margin: 0 20px;
  display: flex;
  flex-wrap: wrap;
}
.labelBox li {
  display: flex;
  align-items: center;
  width: 50%;
}

.labelBox li:nth-child(1),
.labelBox li:nth-child(2) {
  margin-bottom: 40px;
}

.labelBox li img {
  margin-right: 20px;
}

.pending {
  margin-bottom: 10px;
  font-size: 18px;
  color: #757575;
}
.pending span {
  color: #ff6700;
}

.check {
  cursor: pointer;
  color: #757575;
}
.check:hover {
  color: #ff6700;
}
</style>