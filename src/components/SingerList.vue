<template>
  <div class="singer-list">
    <div class="title">
      <h3>{{ title }}</h3>
    </div>
    <ul class="screen clearfix" v-if="isScreen">
      <li
        v-for="item in screenArr"
        :key="item"
        :class="{cur: screenCur === item}"
      >
        <a href="#" @click.prevent="handelScreen(item)">{{ item }}</a>
      </li>
    </ul>
    <div class="singer-card-group">
      <div v-for="data in singerData" :key="data.id" class="singer-card">
        <img :src="data.img1v1Url" alt="">
        <p>
          <span>{{ data.name }}</span>
          <i class="singer-icon"></i>
        </p>
      </div>
    </div>
    <ul class="list clearfix" v-if="isList">
      <li v-for="item in lsitData" :key="item.id">
        <a href="#">{{ item.name }}</a>
        <i class="singer-icon" v-if="item.accountId"></i>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    isScreen: {
      type: Boolean,
      default: false, 
    },
    isList: {
      type: Boolean,
      default: false,
    },
    data: {
      type: Array,
      required: true,
    },
    limit: {
      type: Number,
    },
    title: {
      type: String,
      required: true,
    }
  },
  data() {
    return {
      screenCur: '热门',
      screenArr: ['热门','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','其它']
    }
  },
  methods: {
    handelScreen(item) {
      this.screenCur = item;
      item = item === '热门' ? -1 : item;
      item = item === '其它' ? 0 : item;
      this.$emit('handel-screen', item);
    }
  },
  computed: {
    singerData() {
      return this.limit ? this.data.slice(0, this.limit) : this.data.slice(0,10);
    },
    lsitData() {
      return this.data.slice(20)
    }
  },
}
</script>

<style lang="less" scoped>
.singer-list {
  .title{
    height: 40px;
    border-bottom: 2px solid #c20c0c;

    h3 {
      font-size: 24px;
      font-weight: normal;
    }
  }

  .screen {
    margin-top: 20px;
    margin-left: -3px;

    li {
      font-size: 14px;
      float: left;
      margin-left: 3px;

      a {
        display: inline-block;
        width: 21px;
        line-height: 24px;
        text-align: center;
        height: 24px;

        &:hover {
          text-decoration: underline;
        }
      }

      &:first-child>a,&:last-child>a{
        width: 45px;
      }

      &.cur>a{
        background: #c20c0c;
        border-radius: 2px;
        color: #fff;
      }
    }
  }

  .list {
    border-top: 1px #000 dotted;
    padding-top: 12px;
    font-size: 0;

    li {
      font-size: 12px;
      float: left;
      padding-left: 17px;
      height: 30px;
      width: 130px;
      line-height: 30px;
    }

    li>i{
      vertical-align: middle;
      margin-left: 2px;
    }
  }
}

.singer-card-group {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .singer-card {
    width: 130px;
    height: 154px;
    padding-bottom: 30px;

    img {
      width: 130px;
      height: 130px;
    }
    p {
      margin-top: 8px;
      display: flex;
      justify-content: space-between;
      
      span {
        line-height: 18px;
      }
    }
  }
}

.singer-icon {
  display: inline-block;
  width: 17px;
  height: 18px;
  background: url('~@/assets/images/icon.png') no-repeat 0 9999px;
  background-position: 0 -740px;
}

</style>