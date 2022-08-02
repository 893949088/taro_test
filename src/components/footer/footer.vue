<template>
    <view>
        <nut-tabbar
            :bottom="true"
            unactive-color="#7D7E80"
            active-color="#7D7E80"
        >
            <nut-tabbar-item
                v-for="(item,index) in items"
                :key="index"
                :tab-title="item.title"
                :img="item.img"
                :active-img="item.activeImg"
                @click="goPage(item)"
            >
            </nut-tabbar-item>
        </nut-tabbar>
    </view>
</template>
<script lang="ts" setup>

import { ref } from 'vue'
import Taro from '@tarojs/taro'

const items=ref([
        {
            title:'首页',
            img:require('../../assets/images/toolbar/home.png'),
            activeImg:require('../../assets/images/toolbar/home_active.png'),
            url:'/pages/home/index/index'
        },
        {
            title:'会议预定',
            img:require('../../assets/images/toolbar/meeting.png'),
            activeImg:require('../../assets/images/toolbar/meeting_active.png'),
            url:'/pages/meeting/index/index'
        },
        {
            title:'商城',
            img:require('../../assets/images/toolbar/shop.png'),
            activeImg:require('../../assets/images/toolbar/shop_active.png'),
            url:'/pages/shop/index/index'
        },
        {
            title:'我的',
            img:require('../../assets/images/toolbar/my.png'),
            activeImg:require('../../assets/images/toolbar/my_active.png'),
            url:'/pages/my/index/index'
        }
    ])

const goPage=(item)=>{
    Taro.redirectTo({
        url: item.url
    })
}

</script>
