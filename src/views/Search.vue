<template>
  <div class="search">
    <div class="g-bd">
      <div class="g-wrap n-srch">
        <div class="pgsrch f-pr j-suggest" id="auto-id-8vQt8Q4LSaUB4sPX">
          <input
            id="m-search-input"
            type="text"
            class="srch j-flag"
            value=""
            v-model="searchValue"
            style="opacity: 1"
            @keydown.enter="search"
          />
          <span
            class="j-flag"
            style="display: none"
            id="auto-id-dAtCy2neSRT1ymNM"
            >&nbsp;</span
          >
          <a
            hidefocus="true"
            href="javascript:void(0)"
            class="btn j-flag"
            title="搜索"
            id="auto-id-m6EBrVi4KuJ4XWTJ"
            @click="search"
            >搜索</a
          >
          <div
            class="u-lstlay j-flag"
            style="display: none"
            id="auto-id-O1tcfDwJ08dwRlvG"
          ></div>
        </div>
        <div id="m-search">
          <div class="snote s-fc4 ztag">
            搜索“{{ searchValue }}”，找到 <em class="s-fc6">20</em> 首单曲
          </div>
          <ul
            class="m-tabs m-tabs-srch f-cb ztag"
            data-xname=""
            id="auto-id-htSM11524XFXTBEe"
            style="margin-bottom: auto"
          >
            <li class="fst">
              <a data-type="1" href="javascript:void(0)" class="z-slt"
                ><em>单曲</em></a
              >
            </li>
            <li>
              <a hidefocus="true" data-type="100" href="javascript:void(0)"
                ><em>歌手</em></a
              >
            </li>
            <li>
              <a hidefocus="true" data-type="10" href="javascript:void(0)"
                ><em>专辑</em></a
              >
            </li>
            <li>
              <a hidefocus="true" data-type="1014" href="javascript:void(0)"
                ><em>视频</em></a
              >
            </li>
            <li>
              <a hidefocus="true" data-type="1006" href="javascript:void(0)"
                ><em>歌词</em></a
              >
            </li>
            <li>
              <a hidefocus="true" data-type="1000" href="javascript:void(0)"
                ><em>歌单</em></a
              >
            </li>
            <li>
              <a hidefocus="true" data-type="1009" href="javascript:void(0)"
                ><em>声音主播</em></a
              >
            </li>
            <li>
              <a hidefocus="true" data-type="1002" href="javascript:void(0)"
                ><em>用户</em></a
              >
            </li>
          </ul>
          <div class="ztag j-flag" id="auto-id-NsgTRwWQs59UOCFt">
            <div class="n-srchrst">
              <div class="srchsongst">
                <div
                  class="item f-cb h-flag"
                  :class="i % 2 == 0 ? '' : 'even'"
                  v-for="(item, i) in searchResult"
                  :key="i"
                >
                  <div class="td">
                    <div class="hd">
                      <a id="song_1425661318" class="ply" title="播放"></a>
                    </div>
                  </div>
                  <div class="td w0">
                    <div class="sn">
                      <div class="text">
                        <router-link :to="'/song?id=' + item.id"
                          ><b :title="item.name"
                            ><span class="s-fc7">{{ item.name }}</span></b
                          ></router-link
                        >
                      </div>
                    </div>
                  </div>
                  <div class="td">
                    <div class="opt hshow">
                      <a
                        class="u-icn u-icn-81 icn-add"
                        href="javascript:;"
                        title="添加到播放列表"
                      ></a
                      ><span class="icn icn-fav" title="收藏"></span
                      ><span class="icn icn-share" title="分享"></span
                      ><span class="icn icn-dl" title="下载"></span>
                    </div>
                  </div>
                  <div class="td w1">
                    <div class="text">
                      <a href="/artist?id=32990712">{{
                        item.artists[0].name
                      }}</a>
                    </div>
                  </div>
                  <div class="td w2">
                    <div class="text">
                      <a
                        class="s-fc3"
                        href="/album?id=85954015"
                        title="《Sweet Dance》"
                        >《<span class="s-fc7">{{ item.album.name }}</span
                        >》</a
                      >
                    </div>
                  </div>
                  <div class="td">
                    {{
                      Math.floor(Math.round(item.duration / 1000) / 60) +
                      ":" +
                      (Math.round(item.duration / 1000) % 60)
                    }}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="ztag j-flag auto-1637053402977-parent"
            style="display: none"
          >
            <div class="auto-1637053402977 u-page">
              <a
                href="#"
                class="zbtn zprv js-p-1637053402975 js-disabled"
                id="auto-id-7DLmIpWn6KvmRSQ4"
                >上一页</a
              ><a
                href="#"
                class="zpgi zpg1 js-i-1637053402975 js-selected"
                id="auto-id-9ao9OOg7z55nM2bK"
                >1</a
              ><a
                href="#"
                class="zpgi zpg2 js-i-1637053402975"
                id="auto-id-zhgJZ0UMCJ73tND7"
                style="display: none"
              ></a
              ><a
                href="#"
                class="zpgi zpg3 js-i-1637053402975"
                id="auto-id-vpiwCXRZvXrMoywG"
                style="display: none"
              ></a
              ><a
                href="#"
                class="zpgi zpg4 js-i-1637053402975"
                id="auto-id-S15wqdLwTFlVTi6K"
                style="display: none"
              ></a
              ><a
                href="#"
                class="zpgi zpg5 js-i-1637053402975"
                id="auto-id-cAQaF2b2coO0438a"
                style="display: none"
              ></a
              ><a
                href="#"
                class="zpgi zpg6 js-i-1637053402975"
                id="auto-id-pk5DKQQq4pGKEIic"
                style="display: none"
              ></a
              ><a
                href="#"
                class="zpgi zpg7 js-i-1637053402975"
                id="auto-id-PybrwnbcuEPBwIPv"
                style="display: none"
              ></a
              ><a
                href="#"
                class="zpgi zpg8 js-i-1637053402975"
                id="auto-id-c9T8JcFvsdEhaHov"
                style="display: none"
              ></a
              ><a
                href="#"
                class="zpgi zpg9 js-i-1637053402975"
                id="auto-id-43fRcWWDyJimTo8n"
                style="display: none"
              ></a
              ><a
                href="#"
                class="zbtn znxt js-n-1637053402975 js-disabled"
                id="auto-id-57bocSgOrvSs6uug"
                >下一页</a
              >
            </div>
          </div>
          <div class="j-flag"></div>
        </div>
      </div>
    </div>
    <Top></Top>
  </div>
</template>

<script>
import api from "../api/index";
import Top from '../components/Top.vue';
export default {
  name: "search",
  components:{
    Top
  },
  data() {
    return {
      searchValue: "",
      searchResult: [],
    };
  },
  methods: {
    async getSearchResult() {
      const result = await api.getSearchResult({
        keywords: this.searchValue,
        limit: 20,
        type: 1,
      });
      console.log(result.result.songs);
      this.searchResult = result.result.songs;
    },
    search() {
      this.getSearchResult();
    },
  },
  computed: {},
  created() {},
  mounted() {
    this.searchValue = this.$route.query.s;
    this.search()
  },
};
</script>

<style lang="less" scoped>
.g-bd,
.g-bd1,
.g-bd2,
.g-bd3,
.g-bd4,
.g-bd5,
.g-bd6,
.g-bd7 {
  width: 980px;
  min-height: 700px;
  _height: 700px;
  margin: 0 auto;
  background-color: #fff;
  border: 1px solid #d3d3d3;
  border-width: 0 1px;
}
.g-bd,
.g-bd1,
.g-bd2,
.g-bd3,
.g-bd4,
.g-bd5,
.g-bd6,
.g-bd7 {
  width: 980px;
  min-height: 700px;
  _height: 700px;
  margin: 0 auto;
  background-color: #fff;
  border: 1px solid #d3d3d3;
  border-width: 0 1px;
}
.g-wrap {
  padding: 40px;
}
.f-pr {
  position: relative;
  zoom: 1;
}
.n-srch .pgsrch,
.n-srch .pgsrch .btn {
  background: url("../assets/images/sprite.png") no-repeat 0 9999px;
}
.n-srch .pgsrch {
  width: 420px;
  height: 40px;
  margin: 0 auto;
  background-position: 0 0;
  z-index: 10;
}
.n-srch .pgsrch .srch {
  float: left;
  width: 320px;
  height: 17px;
  margin: 12px 0 0 20px;
  padding: 0;
  background: #fff;
  border: none;
}
.n-srch .pgsrch .btn {
  float: right;
  width: 50px;
  height: 40px;
  text-indent: -9999px;
}
.u-lstlay {
  position: absolute;
  z-index: 120;
  left: 0;
  box-sizing: border-box;
  border: 1px solid #bebebe;
  border-radius: 4px;
  background: #fff;
  box-shadow: 0 4px 7px #555;
  text-shadow: 0 1px 0 rgb(255 255 255 / 90%);
}
.n-srch .pgsrch .u-lstlay {
  top: 43px;
  width: 418px;
}
.s-fc4,
a.s-fc4:hover {
  color: #999;
}
.n-srch .snote {
  margin: 28px 0 17px;
}
.s-fc6,
a.s-fc6:hover {
  color: #c20c0c;
}
.m-tabs,
.m-tabs a,
.m-tabs em,
.m-tabs1 a,
.m-tabs1 em {
  background: url("../assets/images/tab.png") no-repeat 0 9999px;
}
.m-tabs {
  height: 39px;
  border: 1px solid #ccc;
  border-width: 0 1px;
  background-position: 0 0;
  background-repeat: repeat-x;
}
.m-tabs li,
.m-tabs a,
.m-tabs em {
  float: left;
  height: 39px;
  font-size: 14px;
}
.m-tabs li {
  position: relative;
  left: -1px;
}
.m-tabs li,
.m-tabs a,
.m-tabs em {
  float: left;
  height: 39px;
  font-size: 14px;
}
.m-tabs a {
  padding-left: 2px;
}
.m-tabs a.z-slt {
  background-position: left -90px;
}
.m-tabs em {
  height: 37px;
  width: 134px;
  padding: 2px 2px 0 0;
  line-height: 37px;
  cursor: pointer;
  text-align: center;
}
.m-tabs-srch em {
  width: 108px;
}
.m-tabs a.z-slt em {
  background-position: right -90px;
}
.f-cb:after {
  clear: both;
  content: ".";
  display: block;
  height: 0;
  visibility: hidden;
}
.n-srchrst {
  margin-top: 20px;
}
.n-srchrst .srchsongst .item {
  line-height: 18px;
  padding: 10px 10px 8px 18px;
  border: 1px solid #fff;
}
.n-srchrst .srchsongst .even {
  line-height: 19px;
  background: #f7f7f7;
  border-color: #f7f7f7;
}
.n-srchrst .srchsongst .td {
  float: left;
  margin-right: 5px;
}
.n-srchrst .srchsongst .hd {
  height: 17px;
  width: 17px;
}
.n-srchrst .srchsongst .hd .ply,
.n-srchrst .srchsongst .mv,
.n-srchrst .srchsongst .icn,
.m-plylist-rdi .icn,
.n-srchrst .srchsongst .mv-dis {
  background: url("../assets/images/table.png") no-repeat 0 9999px;
}
.n-srchrst .srchsongst .hd .ply {
  display: inline-block;
  width: 17px;
  height: 17px;
  margin-right: 15px;
  cursor: pointer;
  background-position: 0 -103px;
}
.n-srchrst .srchsongst .w0 {
  width: 370px;
}
.n-srchrst .srchsongst .text {
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.n-srchrst .w0 .text {
  position: relative;
  display: inline-block;
  *display: inline;
  *zoom: 1;
  padding-right: 25px;
  width: auto;
  max-width: 100%;
  height: 20px;
}
.n-srchrst .srchsongst b {
  font-weight: normal;
}
.u-icn,
.u-title-1 .out .icon {
  background: url("../assets/images/icon.png") no-repeat 0 9999px;
}
.u-icn,
.u-icn2,
.u-icn3 {
  display: inline-block;
  overflow: hidden;
  vertical-align: middle;
}
.s-fc7,
a.s-fc7:hover {
  color: #0c73c2;
}
.n-srchrst .srchsongst .hshow {
  visibility: hidden;
}
.u-icn-81 {
  width: 13px;
  height: 13px;
  background-position: 0 -700px;
}
.n-srchrst .srchsongst .u-icn-81 {
  margin-right: 8px;
  margin-bottom: 3px;
}
.n-srchrst .srchsongst .icn {
  display: inline-block;
  vertical-align: middle;
  width: 18px;
  height: 16px;
  cursor: pointer;
  margin: 0 7px 0 0;
}
.n-srchrst .srchsongst .icn-fav {
  margin-left: 0;
  background-position: 0 -174px;
}
.n-srchrst .srchsongst .icn-share {
  background-position: 0 -195px;
}
.n-srchrst .srchsongst .icn-dl {
  background-position: -81px -174px;
}
.n-srchrst .srchsongst .w1 {
  width: 15%;
  margin-right: 12px;
}
.n-srchrst .srchsongst .w2 {
  width: 18%;
  margin-right: 12px;
  min-height: 16px;
}
.s-fc3,
a.s-fc3:hover {
  color: #666;
}
.m-tabs a:hover {
  background-position: -5px -45px;
  text-decoration: none;
}
.n-srchrst .srchsongst .item:hover,
.n-srchrst .srchsongst .z-hover {
  border: 1px solid #e1e1e1;
  background: #f2f2f2;
}
</style>