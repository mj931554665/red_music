<template>
  <div class="singer wrapper">
    <div class="singer-nav">
      <div class="content">
        <h2>推荐</h2>
        <ul>
          <li><a href="#" class="cur">推荐歌手</a></li>
          <li><a href="#" class="">入驻歌手</a></li>
        </ul>
        <div class="blk">
          <h2>华语</h2>
          <ul>
            <li><a href="#" class="">华语男歌手</a></li>
            <li><a href="#">华语女歌手</a></li>
            <li><a href="#">华语组合/乐队</a></li>
          </ul>
        </div>
        <div class="blk">
          <h2>欧美</h2>
          <ul>
            <li><a href="#">欧美男歌手</a></li>
            <li><a href="#">欧美女歌手</a></li>
            <li><a href="#">欧美组合/乐队</a></li>
          </ul>
        </div>
        <div class="blk">
          <h2>日本</h2>
          <ul>
            <li><a href="#">日本男歌手</a></li>
            <li><a href="#">日本女歌手</a></li>
            <li><a href="#">日本组合/乐队</a></li>
          </ul>
        </div>
        <div class="blk">
          <h2>韩国</h2>
          <ul>
            <li><a href="#">韩国男歌手</a></li>
            <li><a href="#">韩国女歌手</a></li>
            <li><a href="#">韩国组合/乐队</a></li>
          </ul>
        </div>
        <div class="blk">
          <h2>其它</h2>
          <ul>
            <li><a href="#">其它男歌手</a></li>
            <li><a href="#">其它女歌手</a></li>
            <li><a href="#">其它组合/乐队</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="singer-content">
      
    </div>
  </div>
</template>

<script>
import api from '@/api/index.js';
export default {
  async mounted() {
    const result = await api.getSingerList({
      type: -1,
      area: -1,
    });
    console.log(result);
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
  }
}
</style>