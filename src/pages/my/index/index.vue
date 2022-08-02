<template>
  <view class="my">
    <view class="my-head" :style="`background-image:url(${img_bg})`">
      <view class="h-person">
        <view class="h-person-avatar">
          <img :src="img_avatar"/>
        </view>
        <view class="h-persion-info">
          <view class="h-persion-name">
            点击登录
          </view>
          <view class="h-persion-address">
            <img :src="img_location"/>
            地址管理
          </view>
        </view>
      </view>
      <view class="h-help">
        <img :src="img_service"/>
        客服反馈
      </view>
      <view class="h-menu">
        <view class="h-menu-left">
          <view class="h-menu-item">
            <img :src="img_icon_order1"/>
            <view class="h-menu-item-name">会议订单</view>
          </view>
          <view class="h-menu-item">
            <img :src="img_icon_order2"/>
            <view class="h-menu-item-name">商品订单</view>
          </view>
          <view class="h-menu-item">
            <img :src="img_icon_time"/>
            <view class="h-menu-item-name">参观预约</view>
          </view>
        </view>
        <view class="h-menu-right">
          <view class="h-menu-item">
            <view class="h-menu-item-number">- -</view>
            <view class="h-menu-item-name">我的积分</view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { reactive, toRefs } from 'vue';

import img_bg from '@/assets/images/my/mine-bg.png'
import img_avatar from '@/assets/images/my/avatar.png'
import img_service from '@/assets/images/my/service.png'
import img_location from '@/assets/images/my/location.png'

import img_icon_order1 from '@/assets/images/my/order1.png'
import img_icon_order2 from '@/assets/images/my/order2.png'
import img_icon_time from '@/assets/images/my/time.png'




</script>

<style lang="scss">
.my{
}

.my-head{
  position:relative;
  padding:0 20px;
  height:150px;
  background-position: bottom;
  background-size: cover;
  background-repeat: no-repeat;
}

.h-person{
  padding-top:25px;
  display:flex;
}

.h-person-avatar{
  width:70px;
  height:70px;
  border-radius:50%;  
  border:4px solid #fff;
}

.h-person-avatar img{
  width:70px;
  height:70px;
  border-radius:50%;  
}

.h-persion-info{
  margin-left:16px;
  width:100%
}

.h-persion-name{
  margin-top:10px;
  font-size:18px;
  font-weight: 500;
}

.h-persion-address{
  margin-top:10px;
  height:24px;
  font-size:14px;
  border-radius:12px;
  background-color:#333;
  color:#fff;
  padding: 0px 10px 0px 5px;
  display: flex;
  width: fit-content;
  align-items:center;
}

.h-persion-address img{
  width:16px;
  height:16px;
}

.h-help{
  position:absolute;
  right:0;
  top:25px;
  height:35px;
  line-height:35px;
  background-color:#D3E1CA;
  border-radius:50px 0 0 50px;
  color: #333333;
  font-size:16px;
  padding:0 12px;
  display:flex;
  align-items:center;
}

.h-help img{
  width:20px;
  height:20px;
  margin-right:4px;
}


.h-menu{
  height:60px;
  width:100%;
  background-color:#fff;
  box-shadow: 0px 3px 15px 0px rgba(37,68,112,0.1000);
  border-radius: 8px;
  margin-top:15px;
  display: flex;
}

.h-menu-left{
  display: flex;
  flex:1;
}

.h-menu-right{
  position:relative;
  padding-left:2px;
  width:90px;
}

.h-menu-right::before{
  position: absolute; 
	top: 26px; 
	transform: translatey(-40%); 
	left: 0; 
	content: ''; 
	width: 2px; 
	height: 40px; 
	background-color: #D8D8D8; 
}

.h-menu-item{
  flex:1;
  display: flex;
  height:100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.h-menu-item img{
  width:20px;
  height:20px;
  margin-bottom: 5px;
}

.h-menu-item .h-menu-item-number{
  height: 20px;
  line-height: 20px;
  font-size: 18px;
  font-weight: 600;
  color: #9FBB8C;
  margin-bottom: 5px;
}

.h-menu-item .h-menu-item-name{
  color:#333;
  font-weight: 400;
  font-size: 14px;
}

</style>
