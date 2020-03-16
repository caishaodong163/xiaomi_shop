<template>
  <div class="header">
    <!-- 顶部导航 -->
    <div class="nav_topbar">
      <div class="container d_f j_sb a_center">
        <div class="topbar_menu">
          <a href="#">小米商城</a>
          <a href="#">MUI</a>
          <a href="#">云服务</a>
          <a href="#">协议规则</a>
        </div>
        <div class="topbar_user">
          <a href="#">登录</a>
          <a href="#" class="my_cat text_center mr_0">
            <span class="icon_cart"></span>
            购物车({{cartCount}})
          </a>
        </div>
      </div>
    </div>
    <!-- 顶部导购 -->
    <div class="nav_header">
      <div class="container d_f j_sb a_center">
        <!-- 导购的logo -->
        <div class="header_logo">
          <a href="/#/index"></a>
        </div>
        <!-- 导购导航 -->
        <div class="header_menu">
          <div class="item_menu">
            <span>小米手机</span>
            <div class="children border_top">
              <ul>
                <li class="product" v-for="(item, index) in phoneList" :key="index">
                  <a href="/#/index" target="_blank">
                    <div class="pro_img">
                      <img :src="item.mainImage" lazy="loaded">
                    </div>
                    <div class="product_name font_weight">
                      {{ item.name }}
                    </div>
                    <div class="product_price">
                      ￥{{ item.price }}.00元
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="item_menu">
            <span>RedMi红米</span>
          </div>

          <div class="item_menu">
            <span>电视</span>
          </div>

        </div>
        <!--  导购的搜索 -->
        <div class="header_search">
          <div class="wrapper d_f a_center">
            <input type="text" name="keyword">
            <a href="javascript:;"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { products } from '@/api/home'
export default {
  name: 'nav-header',
  data () {
    return {
      cartCount: 0,
      phoneList: []
    }
  },
  created () {
    this.getProductList()
  },
  methods: {
    getProductList () {
      products({
        categoryId: '100012',
        pageSize: 6
      }).then((res) => {
        console.log(res, '获取图片')
        this.phoneList = res.list
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/variables.scss"; // 变量
@import "~@/styles/mixin.scss"; // 公共方法

.header {
  /* 小米图标 */
  & .nav_topbar {
    height: 39px;
    line-height: 39px;
    background-color: $black;
    color: $gray;

    .container {
      & a {
        display: inline-block;
        color: $gray;
        margin-right: 17px;
      }

      & .my_cat{
        width: 110px;
        background-color: $orange;
        color: $white;

        .icon_cart{
          @include bgImg (16px, 12px, '../assets/imgs/icon-cart-checked.png');
          margin-right:4px;
        }
      }
    }
  }
  /* 划过下显示 */
  & .header_menu{
    display: inline-block;
    width: 643px;
    padding-left: 209px;

    & .item_menu {
      display: inline-block;
      color: $black;
      font-weight: bold;
      font-size: 16px;
      line-height: 112px;
      margin-right: 20px;

      span {
        cursor: pointer;
      }

      &:hover .children{
        height:220px;
        opacity:1;
        z-index: 10
      }

      .children {
        position: absolute;
        top: 112px;
        left: 0;
        width: $containerWidth;
        height: 0;
        opacity: 0; // 动态显示opacity
        box-shadow: 0px 7px 6px 0px rgba(0, 0, 0, 0.11);
        z-index: -1;
        transition: all .5s;
        background-color: $white;

        & .product {
          position: relative;
          float: left;
          width: 16.6%;
          height: 220px;
          font-size: 12px;
          line-height: 12px;
          text-align: center;

          &:before{
            content: ' ';
            position: absolute;
            top: 28px;
            right: 0;
            border-left: 1px solid #d7d7d7;
            height: 100px;
            width: 1px;
          }

          .pro_img{
            height: 137px;

            img {
              width: auto;
              height: 111px;
              margin-top: 26px;
            }
          }

          .product_name{
            margin-top: 19px;
            margin-bottom: 8px;
            color: $black;
          }

          .product_price {
            color: $orange;
          }

        }
      }

    }
  }
  /* 搜索 */
  & .header_search{

    & .wrapper {
      height: 50px;
      border: 1px solid $lightgray;

      input {
        border: none;
        box-sizing: border-box;
        border-right: 1px solid $lightgray;
        width: 264px;
        height: 50px;
        padding-left: 14px;
      }

      a {
        display: inline-block;
        width: 18px;
        height: 18px;
        background: url('../assets/imgs/icon-search.png') no-repeat center;
        background-size: contain;
        margin: 17px;
      }
    }
  }
}

</style>
