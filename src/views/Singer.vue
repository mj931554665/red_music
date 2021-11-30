<template>
  <div class="singer wrapper">
    <div class="singer-nav">
      <div class="content">
        <h2>推荐</h2>
        <ul>
          <li @click="handelChange(-1, -1, '推荐歌手')"><a href="#" :class="{cur: navCur==='推荐歌手'}">推荐歌手</a></li>
          <li @click="handelChange(-1, -2, '入驻歌手')"><a href="#" :class="{cur: navCur==='入驻歌手'}">入驻歌手</a></li>
        </ul>
        <div class="blk" v-for="nav in navListData" :key="nav.areaId">
          <h2>{{ nav.area }}</h2>
          <ul>
            <li
              v-for="type in nav.type"
              :key="type.id"
              @click.prevent="handelChange(nav.areaId, type.id, nav.area + type.value)"
            >
              <a href="#" :class="{cur: navCur===nav.area + type.value}">{{ nav.area + type.value }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="singer-content">
      <SingerList
        v-if="navCur==='推荐歌手'||navCur==='入驻歌手'"
        :data="ResidentSingerData"
        title="入驻歌手"
        :limit="navCur==='入驻歌手' ? 100 : 10"
      />
      <SingerList
        v-if="navCur!=='入驻歌手'"
        :isScreen="navCur!=='推荐歌手'"
        :isList="true"
        :data="data"
        :title="navCur"
        @handel-screen="handelScreen"
      />
    </div>
  </div>
</template>

<script>
import api from '@/api/index.js';

import SingerList from '@/components/SingerList';
import ResidentSingerData from '../assets/data/residentSinger.json'

export default {
  components: {
    SingerList,
  },
  data() {
    return {
      ResidentSingerData,
      data: [],
      navCur: '推荐歌手',
      areaId: -1,
      typeId: -1,
      navListData: [
        {area: '华语', type: [{value: '男歌手',id: 1}, {value: '女歌手',id: 2}, {value: '组合/乐队',id: 3}] ,areaId: 7, },
        {area: '欧美', type: [{value: '男歌手',id: 1}, {value: '女歌手',id: 2}, {value: '组合/乐队',id: 3}] ,areaId: 96, },
        {area: '日本', type: [{value: '男歌手',id: 1}, {value: '女歌手',id: 2}, {value: '组合/乐队',id: 3}] ,areaId: 8, },
        {area: '韩国', type: [{value: '男歌手',id: 1}, {value: '女歌手',id: 2}, {value: '组合/乐队',id: 3}] ,areaId: 16, },
        {area: '其它', type: [{value: '男歌手',id: 1}, {value: '女歌手',id: 2}, {value: '组合/乐队',id: 3}] ,areaId: 0, },
      ]
    }
  },
  methods: {
    async handelChange(area, type, value) {
      this.areaId = area;
      this.typeId = type;
      this.navCur = value;
      if (area===-1 && type===-1) {
        this.initData()
      } else {
        const result = await api.getSingerList({
          type,
          area,
          limit: 100,
        })
        this.data = result.artists;
      }
    },
    async handelScreen(initial) {
      const result = await api.getSingerList({
        type: this.typeId,
        area: this.areaId,
        limit: 100,
        initial,
      })
      this.data = result.artists;
    },
    async initData() {
      const result = await api.getSingerList({
        type: -1,
        area: -1,
        limit: 100,
      });
      console.log(this.data);
      this.data = result.artists;
    }
  },
  async mounted() {
    this.initData();
  }
}
</script>

<style lang="less" scoped>
.singer {
  display: flex;

  .singer-nav {
    width: 180px;
    background-color: #F9F9F9;

    .content {
      margin-top: 51px;
      padding: 0 10px 40px;

      h2 {
        height: 25px;
        padding-left: 14px;
        font-size: 16px;
        font-family: "Microsoft Yahei";
        font-weight: bold;
      }

      ul > li {
        margin-bottom: 2px;
        height: 29px;
        line-height: 29px;

        a {
          width: 133px;
          font-size: 12px;
          display: inline-block;
          padding-left: 27px;
          color: #333;
          background: url(https://s2.music.126.net/style/web2/img/singer.png?24abc725c8fb8424c362d23816e31500) no-repeat;
          background-position: 0 -30px;
          text-decoration: none;

          &:hover {
            text-decoration: underline;
          }

          &.cur {
            background-position: 0 0;
            text-decoration: none;
            color: #c20c0c;
          }
        }
      }

      .blk {
        margin: 5px 0 0;
        padding-top: 16px;
        border-top: 1px solid #d3d3d3;
      }
    }
  }

  .singer-content {
    flex-grow: 1;
    background: #FFFFFF;
    padding: 40px;
  }
}
</style>