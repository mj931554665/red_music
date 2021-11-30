<template>
  <div class="recommend">
    <div class="block">
      <!-- <span class="demonstration">Click 指示器触发</span> -->
      <el-carousel
        trigger="click"
        height="285px"
        arrow="always"
        :interval="5000"
      >
        <el-carousel-item v-for="i in BannerImg" :key="i.imageUrl">
          <div class="wrap">
            <div class="ban f-pr" style="z-index: 10">
              <div class="ban-img">
                <a
                  href=""
                  class="active d-flag"
                  target="_blank"
                  style="overflow: hidden"
                >
                  <img
                    class="d-flag"
                    :src="i.imageUrl"
                    alt=""
                    style="transition: opacity 1s ease-out 0s; opacity: 1"
                  />
                  <div id="ad-tag" class="ban-tag" style="display: none">
                    广告
                  </div>
                </a>
              </div>
            </div>
            <div class="download f-pr">
              <a id="side-download" class="btn" href="#">下载客户端</a>
              <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
              <span class="shadow"></span>
              <span class="shadowr"></span>
            </div>
          </div>
          <img :src="i" alt="" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div id="discover-module" class="g-bd1 f-cb wrapper">
      <div class="g-mn1">
        <div class="g-mn1c">
          <div class="g-wrap3">
            <div class="n-rcmd">
              <div class="v-hd2">
                <a href="#" class="tit f-ff2 f-tdn" id="recommend_title"
                  >热门推荐</a
                >
                <div class="tab">
                  <a href="" class="s-fc3">华语</a>
                  <span class="line">|</span>
                  <a href="" class="s-fc3">流行</a>
                  <span class="line">|</span>
                  <a href="" class="s-fc3">摇滚</a>
                  <span class="line">|</span>
                  <a href="" class="s-fc3">民谣</a>
                  <span class="line">|</span>
                  <a href="" class="s-fc3">电子</a>
                  <span class="line">|</span>
                </div>
                <span class="more">
                  <a href="/discover/playlist/" class="s-fc3">更多</a>
                  <i class="cor s-bg s-bg-6">&nbsp;</i>
                </span>
              </div>
              <ul class="m-cvrlst f-cb">
                <li v-for="(item, i) in TopPicks" :key="i">
                  <div class="u-cover u-cover-1">
                    <img :src="item.picUrl" alt="" />
                    <a class="msk" :title="item.name" href=""></a>
                    <div class="bottom">
                      <a href="" class="icon-play f-fr" title="播放"></a>
                      <span class="icon-headset"></span>
                      <span class="nb">{{ item.playCount }}</span>
                    </div>
                  </div>
                  <p class="dec">
                    <a
                      :title="item.name"
                      class="tit s-fc0"
                      href="/playlist?id=3136952023"
                    >
                      {{ item.name }}
                    </a>
                  </p>
                </li>
              </ul>
            </div>
            <div class="n-rcmd" id="personalRec" v-if="islogin">
              <div class="v-hd2">
                <span class="tit f-ff2 f-tdn">个性化推荐</span>
              </div>
              <ul class="m-cvrlst m-cvrlst-idv f-cb">
                <li>
                  <a
                    href="/discover/recommend/taste"
                    title="每日歌曲推荐"
                    class="date u-date f-alpha"
                  >
                    <span class="head"> 星期四 </span>
                    <span class="bd"> 4 </span>
                    <span
                      class="mask f-alpha"
                      title="每日歌曲推荐"
                      href="/discover/recommend/taste"
                    >
                    </span>
                  </a>
                  <p class="dec">
                    <a
                      class="tit s-fc0"
                      title="每日歌曲推荐"
                      href="/discover/recommend/taste"
                      >每日歌曲推荐</a
                    >
                  </p>
                  <p class="idv s-fc4" title="根据你的口味生成，每天6:00更新">
                    根据你的口味生成，<br />每天6:00更新
                  </p>
                </li>
                <li>
                  <div class="u-cover u-cover-1">
                    <img
                      src="https://p2.music.126.net/3I-73aQn3YCw-2cZdK1fQw==/109951166027478939.jpg?param=140y140"
                    />
                    <a
                      title="私人雷达 | 根据听歌记录为你打造"
                      href="/playlist?id=3136952023"
                      class="msk"
                    ></a>
                    <div class="bottom">
                      <a title="播放" class="icon-play f-fr"> </a
                      ><a href="#" class="icon-headset"></a
                      ><span class="nb">88亿</span>
                    </div>
                  </div>
                  <p class="dec f-brk">
                    <a
                      title="私人雷达 | 根据听歌记录为你打造"
                      class="tit s-fc0"
                      href="/playlist?id=3136952023"
                      >私人雷达 | 根据听歌记录为你打造</a
                    >
                  </p>
                  <p class="idv f-brk s-fc4" title="猜你喜欢">
                    <em>猜你喜欢</em
                    ><a class="btn s-bg s-bg-13" href="#">不感兴趣</a>
                  </p>
                </li>
                <li>
                  <div class="u-cover u-cover-1">
                    <img
                      src="https://p2.music.126.net/Hi_z_3aC88-Vv1lJ7zL4Yg==/109951165742442970.jpg?param=140y140"
                    />
                    <a
                      title="适合摸鱼画画时听的歌～「日系+欧美」"
                      href="/playlist?id=2844831550"
                      class="msk"
                    ></a>
                    <div class="bottom">
                      <a title="播放" class="icon-play f-fr" href="#"></a
                      ><a href="#" class="icon-headset"></a
                      ><span class="nb">59.7万</span>
                    </div>
                  </div>
                  <p class="dec f-brk">
                    <a
                      title="适合摸鱼画画时听的歌～「日系+欧美」"
                      class="tit s-fc0"
                      href="/playlist?id=2844831550"
                      >适合摸鱼画画时听的歌～「日系+欧美」</a
                    >
                  </p>
                  <p
                    class="idv f-brk s-fc4"
                    title="根据你喜欢的单曲《マイライフ》推荐"
                  >
                    <em>根据你喜欢的单曲《マイライフ》推荐</em
                    ><a class="btn s-bg s-bg-13" href="#">不感兴趣</a>
                  </p>
                </li>
                <li>
                  <div class="u-cover u-cover-1">
                    <img
                      src="https://p2.music.126.net/aQZAPbzbD8po-VanXflDjw==/109951165566934075.jpg?param=140y140"
                    />
                    <a
                      title="『日系』戳人旋律背后的酸甜苦辣"
                      href="/playlist?id=5391448044"
                      class="msk"
                    ></a>
                    <div class="bottom">
                      <a title="播放" class="icon-play f-fr" href="#"></a
                      ><a href="#" class="icon-headset"></a
                      ><span class="nb">20.9万</span>
                    </div>
                  </div>
                  <p class="dec f-brk">
                    <a
                      title="『日系』戳人旋律背后的酸甜苦辣"
                      class="tit s-fc0"
                      href="/playlist?id=5391448044"
                      >『日系』戳人旋律背后的酸甜苦辣</a
                    >
                  </p>
                  <p
                    class="idv f-brk s-fc4"
                    title="根据你喜欢的单曲《マイライフ》推荐"
                  >
                    <em>根据你喜欢的单曲《マイライフ》推荐</em
                    ><a class="btn s-bg s-bg-13" href="#">不感兴趣</a>
                  </p>
                </li>
              </ul>
            </div>
            <div id="j-music-ad" class="n-clmnad" v-if="islogin">
              <div class="j-flag f-hide" id="auto-id-ilsNvS5Q1u0911iv"></div>
            </div>
            <div class="n-new">
              <div class="v-hd2">
                <a href="/discover/album/" class="tit f-ff2 f-tdn">新碟上架</a>
                <span class="more"
                  ><a href="/discover/album/" class="s-fc3">更多</a
                  ><i class="cor s-bg s-bg-6">&nbsp;</i></span
                >
              </div>
              <div class="n-disk">
                <div class="inner" id="album-roller">
                  <el-carousel
                    trigger="click"
                    style="width: 650px"
                    :interval="5000"
                    arrow="always"
                    height="180px"
                  >
                    <el-carousel-item v-for="(item, i) in NewAlbums" :key="i">
                      <ul class="f-cb roller-flag">
                        <li v-for="(item2, i2) in item" :key="i2">
                          <div class="u-cover u-cover-alb1">
                            <img class="j-img" :src="item2.picUrl" />
                            <a
                              :title="item2.name"
                              href="/album?id=135467471"
                              class="msk"
                            ></a>
                            <a
                              href="#"
                              class="icon-play f-alpha f-fr"
                              title="播放"
                            ></a>
                          </div>
                          <p class="f-thide">
                            <a
                              :title="item2.name"
                              href="/album?id=135467471"
                              class="s-fc0 tit"
                              >{{ item2.name }}</a
                            >
                          </p>
                          <p class="tit f-thide" title="李荣浩">
                            <a class="s-fc3" href="/artist?id=4292">{{
                              item2.artist.name
                            }}</a>
                          </p>
                        </li>
                      </ul>
                    </el-carousel-item>
                  </el-carousel>
                </div>
              </div>
            </div>
            <div class="n-bill">
              <div class="v-hd2">
                <a href="/discover/toplist" class="tit f-ff2 f-tdn">榜单</a>
                <span class="more"
                  ><a href="/discover/toplist" class="s-fc3">更多</a
                  ><i class="cor s-bg s-bg-6">&nbsp;</i></span
                >
              </div>
              <div class="n-bilst" id="top-flag">
                <dl class="blk">
                  <dt class="top">
                    <div class="cver u-cover u-cover-4">
                      <img
                        class="j-img"
                        src="http://p3.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=100y100"
                      />
                      <a
                        href="/discover/toplist?id=19723756"
                        class="msk"
                        title="飙升榜"
                      ></a>
                    </div>
                    <div class="tit">
                      <a href="/discover/toplist?id=19723756" title="飙升榜"
                        ><h3 class="f-fs1 f-thide">飙升榜</h3></a
                      >
                      <div class="btn">
                        <a
                          href="#"
                          class="s-bg s-bg-9 f-tdn"
                          hidefocus="true"
                          title="播放"
                          >播放</a
                        >
                        <a
                          href="#"
                          hidefocus="true"
                          class="s-bg s-bg-10 f-tdn subscribe-flag"
                          title="收藏"
                          >收藏</a
                        >
                      </div>
                    </div>
                  </dt>
                  <dd>
                    <ol>
                      <li
                        onmouseover="this.className='z-hvr'"
                        onmouseout="this.className=''"
                        v-for="(item, i) in Uplist"
                        :key="i"
                      >
                        <span class="no" :class="i < 3 ? 'no-top' : ''">{{
                          ++i
                        }}</span>
                        <router-link
                          :to="'/song?id=' + item.id"
                          class="nm s-fc0 f-thide"
                          :title="item.name"
                          >{{ item.name }}</router-link
                        >
                        <div class="oper">
                          <a href="#" class="s-bg s-bg-11" title="播放"></a>
                          <a
                            href="#"
                            class="u-icn u-icn-81"
                            title="添加到播放列表"
                          ></a>
                          <a
                            href="#"
                            class="s-bg s-bg-12"
                            title="收藏"
                          ></a>
                        </div>
                      </li>
                    </ol>
                    <div class="more">
                      <a href="/discover/toplist?id=19723756" class="s-fc0"
                        >查看全部&gt;</a
                      >
                    </div>
                  </dd>
                </dl>
                <dl class="blk">
                  <dt class="top">
                    <div class="cver u-cover u-cover-4">
                      <img
                        class="j-img"
                        data-src="http://p3.music.126.net/N2HO5xfYEqyQ8q6oxCw8IQ==/18713687906568048.jpg?param=100y100"
                        src="http://p3.music.126.net/N2HO5xfYEqyQ8q6oxCw8IQ==/18713687906568048.jpg?param=100y100"
                      />
                      <a
                        href="/discover/toplist?id=3779629"
                        class="msk"
                        title="新歌榜"
                      ></a>
                    </div>
                    <div class="tit">
                      <a href="/discover/toplist?id=3779629" title="新歌榜"
                        ><h3 class="f-fs1 f-thide">新歌榜</h3></a
                      >
                      <div class="btn">
                        <a
                          href="#"
                          class="s-bg s-bg-9 f-tdn"
                          hidefocus="true"
                          title="播放"
                          >播放</a
                        >
                        <a
                          href="#"
                          hidefocus="true"
                          class="s-bg s-bg-10 f-tdn subscribe-flag"
                          title="收藏"
                          >收藏</a
                        >
                      </div>
                    </div>
                  </dt>
                  <dd>
                    <ol>
                      <li
                        onmouseover="this.className='z-hvr'"
                        onmouseout="this.className=''"
                        v-for="(item, i) in Newlist"
                        :key="i"
                      >
                        <span class="no" :class="i < 3 ? 'no-top' : ''">{{
                          ++i
                        }}</span>
                        <router-link
                          :to="'/song?id=' + item.id"
                          class="nm s-fc0 f-thide"
                          :title="item.name"
                          >{{ item.name }}</router-link
                        >
                        <div class="oper">
                          <a
                            href="#"
                            class="s-bg s-bg-11"
                            title="播放"
                            hidefocus="true"
                          ></a>
                          <a
                            href="#"
                            class="u-icn u-icn-81"
                            title="添加到播放列表"
                            hidefocus="true"
                          ></a>
                          <a
                            href="#"
                            class="s-bg s-bg-12"
                            title="收藏"
                            hidefocus="true"
                          ></a>
                        </div>
                      </li>
                      
                    </ol>
                    <div class="more">
                      <a href="/discover/toplist?id=3779629" class="s-fc0"
                        >查看全部&gt;</a
                      >
                    </div>
                  </dd>
                </dl>
                <dl class="blk blk-1">
                  <dt class="top">
                    <div class="cver u-cover u-cover-4">
                      <img
                        class="j-img"
                        data-src="http://p4.music.126.net/sBzD11nforcuh1jdLSgX7g==/18740076185638788.jpg?param=100y100"
                        src="http://p4.music.126.net/sBzD11nforcuh1jdLSgX7g==/18740076185638788.jpg?param=100y100"
                      />
                      <a
                        href="/discover/toplist?id=2884035"
                        class="msk"
                        title="原创榜"
                      ></a>
                    </div>
                    <div class="tit">
                      <a href="/discover/toplist?id=2884035" title="原创榜"
                        ><h3 class="f-fs1 f-thide">原创榜</h3></a
                      >
                      <div class="btn">
                        <a
                          href="#"
                          class="s-bg s-bg-9 f-tdn"
                          hidefocus="true"
                          title="播放"
                          >播放</a
                        >
                        <a
                          href="#"
                          hidefocus="true"
                          class="s-bg s-bg-10 f-tdn subscribe-flag"
                          data-plid="2884035"
                          title="收藏"
                          >收藏</a
                        >
                      </div>
                    </div>
                  </dt>
                  <dd>
                    <ol>
                      <li
                        onmouseover="this.className='z-hvr'"
                        onmouseout="this.className=''"
                        v-for="(item, i) in Originallist"
                        :key="i"
                      >
                        <span class="no" :class="i < 3 ? 'no-top' : ''">{{
                          ++i
                        }}</span>
                        <router-link
                          :to="'/song?id=' + item.id"
                          class="nm s-fc0 f-thide"
                          :title="item.name"
                          >{{ item.name }}</router-link
                        >
                        <div class="oper">
                          <a
                            href="#"
                            class="s-bg s-bg-11"
                            title="播放"
                            hidefocus="true"
                          ></a>
                          <a
                            href="#"
                            class="u-icn u-icn-81"
                            title="添加到播放列表"
                          ></a>
                          <a
                            href="#"
                            class="s-bg s-bg-12"
                            title="收藏"
                          ></a>
                        </div>
                      </li>
                      
                    </ol>
                    <div class="more">
                      <a href="/discover/toplist?id=2884035" class="s-fc0"
                        >查看全部&gt;</a
                      >
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="g-sd1">
        <div class="n-user-profile" v-if="islogin">
          <div class="n-myinfo s-bg s-bg-5">
            <div class="f-cb">
              <a href="/user/home?id=1659891536" class="head f-pr">
                <img
                  src="http://p1.music.126.net/uopJf5A2eNzsphmy_1UHOg==/109951164146282541.jpg?param=80y80"
                />
              </a>
              <div class="info">
                <h4 style="overflow: hidden">
                  <a
                    id="j-vip-code-to-home"
                    href="/user/home?id=1659891536"
                    class="nm nm-icn f-fs1 f-ib f-thide"
                    >俊九岁哟</a
                  ><span id="j-vip-code"></span>
                </h4>
                <p>
                  <a href="/user/level" class="u-lv u-icn2 u-icn2-lv"
                    >6<i class="right u-icn2 u-icn2-lvright"></i
                  ></a>
                </p>
                <div class="btnwrap f-pr">
                  <a
                    data-need-safety="false"
                    data-action=""
                    href="javascript:;"
                    hidefocus="true"
                    class="sign u-btn2 u-btn2-dis"
                    ><i>已签到</i></a
                  >
                </div>
              </div>
            </div>
            <ul class="dny s-fc3 f-cb">
              <li class="fst">
                <a href="/user/event?id=1659891536"
                  ><strong id="event_count">0</strong><span>动态</span></a
                >
              </li>
              <li>
                <a href="/user/follows?id=1659891536"
                  ><strong id="follow_count">4</strong><span>关注</span></a
                >
              </li>
              <li class="lst">
                <a href="/user/fans?id=1659891536"
                  ><strong id="fan_count">0</strong><span>粉丝</span></a
                >
              </li>
            </ul>
          </div>
        </div>

        <div class="n-user-profile" v-else>
          <div class="login">
            <p class="note-l">
              登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机
            </p>
            <a href="#" class="btn-l">用户登录</a>
          </div>
        </div>

        <div class="n-singer">
          <h3 class="v-hd3">
            <span class="f-fl">入驻歌手</span>
            <a href="/discover/artist/signed/" class="more s-fc3"
              >查看全部 &gt;</a
            >
          </h3>
          <ul class="n-enter f-cb" id="singer-list">
            <li>
              <a href="/user/home?id=29879272" class="itm f-tdn">
                <div class="head">
                  <img
                    class="j-img"
                    src="http://p1.music.126.net/rCsLFXha6SLis0tV7yZ5fA==/109951165588539704.jpg?param=62y62"
                  />
                </div>
                <div class="ifo">
                  <h4><span class="nm f-fs1 f-ib f-thide">张惠妹aMEI</span></h4>
                  <p class="f-thide s-fc3">台湾歌手张惠妹</p>
                </div>
              </a>
            </li>
            <li>
              <a href="/user/home?id=100167517" class="itm f-tdn">
                <div class="head">
                  <img
                    class="j-img"
                    src="http://p1.music.126.net/wDxCsT3YEYdNg-UZU_ZKeg==/109951166047225823.jpg?param=62y62"
                  />
                </div>
                <div class="ifo">
                  <h4><span class="nm f-fs1 f-ib f-thide">Fine乐团</span></h4>
                  <p class="f-thide s-fc3">独立音乐人</p>
                </div>
              </a>
            </li>
            <li>
              <a href="/user/home?id=58426904" class="itm f-tdn">
                <div class="head">
                  <img
                    class="j-img"
                    src="http://p1.music.126.net/TiRAIiIihOgtBgYB6DZRXA==/109951162916034289.jpg?param=62y62"
                  />
                </div>
                <div class="ifo">
                  <h4><span class="nm f-fs1 f-ib f-thide">萬曉利</span></h4>
                  <p class="f-thide s-fc3">
                    民谣歌手、中国现代民谣的代表人物之一
                  </p>
                </div>
              </a>
            </li>
            <li>
              <a href="/user/home?id=93504818" class="itm f-tdn">
                <div class="head">
                  <img
                    class="j-img"
                    src="http://p1.music.126.net/w_UWOls2uCkFN_U62788Xg==/18806046882229308.jpg?param=62y62"
                  />
                </div>
                <div class="ifo">
                  <h4><span class="nm f-fs1 f-ib f-thide">音乐人赵雷</span></h4>
                  <p class="f-thide s-fc3">民谣歌手</p>
                </div>
              </a>
            </li>
            <li>
              <a href="/user/home?id=46998208" class="itm f-tdn">
                <div class="head">
                  <img
                    class="j-img"
                    src="http://p1.music.126.net/mS2PtUF2F_x949tJHS5Kog==/109951166457235020.jpg?param=62y62"
                  />
                </div>
                <div class="ifo">
                  <h4><span class="nm f-fs1 f-ib f-thide">王三溥</span></h4>
                  <p class="f-thide s-fc3">音乐人</p>
                </div>
              </a>
            </li>
          </ul>
          <div>
            <a
              target="_blank"
              href="/recruit"
              hidefocus="true"
              class="u-btn2 u-btn2-1"
              ><i>申请成为网易音乐人</i></a
            >
          </div>
        </div>
        <div class="n-dj n-dj-1">
          <h3 class="v-hd3">热门主播</h3>
          <ul class="n-hotdj f-cb" id="hotdj-list">
            <li>
              <a href="/user/home?id=278438485" class="cver"
                ><img
                  class="j-img"
                  src="http://p1.music.126.net/H3QxWdf0eUiwmhJvA4vrMQ==/1407374893913311.jpg?param=40y40"
                  data-src="http://p1.music.126.net/H3QxWdf0eUiwmhJvA4vrMQ==/1407374893913311.jpg?param=40y40"
              /></a>
              <div class="info">
                <p>
                  <a href="/user/home?id=278438485" class="nm-icn f-thide s-fc0"
                    >陈立</a
                  >
                </p>
                <p class="f-thide s-fc3">心理学家、美食家陈立教授</p>
              </div>
            </li>
            <li>
              <a href="/user/home?id=559210341" class="cver"
                ><img
                  class="j-img"
                  src="http://p1.music.126.net/GgXkjCzeH4rqPCsrkBV1kg==/109951164843970584.jpg?param=40y40"
                  data-src="http://p1.music.126.net/GgXkjCzeH4rqPCsrkBV1kg==/109951164843970584.jpg?param=40y40"
              /></a>
              <div class="info">
                <p>
                  <a href="/user/home?id=559210341" class="nm-icn f-thide s-fc0"
                    >刘维-Julius</a
                  >
                </p>
                <p class="f-thide s-fc3">歌手、播客节目《维维道来》主理人</p>
              </div>
            </li>
            <li>
              <a href="/user/home?id=259292486" class="cver"
                ><img
                  class="j-img"
                  src="http://p1.music.126.net/C8jFbOTjUOnTKEHX6uuzOg==/109951166239584597.jpg?param=40y40"
                  data-src="http://p1.music.126.net/C8jFbOTjUOnTKEHX6uuzOg==/109951166239584597.jpg?param=40y40"
              /></a>
              <div class="info">
                <p>
                  <a href="/user/home?id=259292486" class="nm-icn f-thide s-fc0"
                    >莫非定律MoreFeel</a
                  >
                </p>
                <p class="f-thide s-fc3">男女双人全创作独立乐团</p>
              </div>
            </li>
            <li>
              <a href="/user/home?id=1450418799" class="cver"
                ><img
                  class="j-img"
                  src="http://p1.music.126.net/NHjNoFpLDEZ-3OR9h35z1w==/109951165825466770.jpg?param=40y40"
                  data-src="http://p1.music.126.net/NHjNoFpLDEZ-3OR9h35z1w==/109951165825466770.jpg?param=40y40"
              /></a>
              <div class="info">
                <p>
                  <a
                    href="/user/home?id=1450418799"
                    class="nm-icn f-thide s-fc0"
                    >碎嘴许美达</a
                  >
                </p>
                <p class="f-thide s-fc3">脱口秀网络红人</p>
              </div>
            </li>
            <li>
              <a href="/user/home?id=2688170" class="cver"
                ><img
                  class="j-img"
                  src="http://p1.music.126.net/CpUdHPNvBvN7kebvL21TTA==/109951163676573083.jpg?param=40y40"
              /></a>
              <div class="info">
                <p>
                  <a href="/user/home?id=2688170" class="nm-icn f-thide s-fc0"
                    >银临Rachel</a
                  >
                </p>
                <p class="f-thide s-fc3">古风音乐人</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <!-- <a
        title="回到顶部"
        class="m-back"
        href="#"
        id="g_backtop"
        hidefocus="true"
        style=""
        >回到顶部</a
      > -->
      <Top></Top>
    </div>
    <!-- <div style="height: 1000px" ref="banner"></div> -->
  </div>
</template>

<script>
import api from "../api/index";
import Top from '../components/Top.vue';

export default {
  name: "recommend",
  components:{
    Top
  },
  data() {
    return {
      BannerImg: [],
      TopPicks: [],
      NewAlbums: [],
      Uplist: [],
      Newlist: [],
      Originallist: [],
      islogin: false,
    };
  },
  methods: {
    // 榜单
    async getSongList(ListId) {
      const result = await api.getSongList({
        id: ListId,
      });
      var list = result.playlist.tracks.splice(0, 10);
      switch (ListId) {
        case 19723756:
          this.Uplist = list;
          break;
        case 3779629:
          this.Newlist = list;
          break;
        case 2884035:
          this.Originallist = list;
          break;
        default:
          break;
      }
    },
    // 新碟上架
    async getNewAlbum() {
      const result = await api.getNewAlbum();
      var copy1 = result.albums.slice(0, 5);
      var copy2 = result.albums.slice(5, 10);
      this.NewAlbums = [copy1, copy2, copy1, copy2];
    },
    // 热门推荐歌单
    async getTopPicks() {
      const result = await api.getTopPicks({
        limit: 8,
      });
      var TopPicks = result.result;
      
      for (let i = 0; i < TopPicks.length; i++) {
        let playCount = TopPicks[i].playCount;
        if (playCount.toString().length > 5) {
          TopPicks[i].playCount =
            (TopPicks[i].playCount / 10000).toFixed(0) + "万";
        }
      }
      this.TopPicks = TopPicks;
    },
    // 轮播图
    async getBannerImg() {
      var banners = await api.getBannerImg();
      this.BannerImg = banners.banners;
      let gaussBlur = document.getElementsByClassName("el-carousel__item");
      for (let i = 0; i < this.BannerImg.length; i++) {
        this.BannerImg[i].gaussBlur = await window.$blurImg(
          this.BannerImg[i].imageUrl
        );
        gaussBlur[i].style.background =
          "url(" + this.BannerImg[i].gaussBlur + ")";
        gaussBlur[i].style.backgroundSize = "cover";
      }
    },
  },
  computed: {},
  mounted() {
    this.getBannerImg();
    this.getTopPicks();
    this.getNewAlbum();
    this.getSongList(19723756);
    this.getSongList(3779629);
    this.getSongList(2884035);
  },
};
</script>

<style lang="less" scoped>
//轮播图
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item {
  background-size: cover;
}

.b2 {
  position: absolute;
  left: 100px;
  width: 300px;
}
img {
  width: 100px;
  height: 100px;
}
.wrap {
  position: relative;
  width: 982px;
  height: 285px;
  margin: 0 auto;
  .ban {
    width: 982px;
    height: 285px;
  }
  .ban-img {
    width: 100%;
    height: 285px;
    overflow: hidden;
  }
  .ban img {
    display: block;
    width: 730px;
    height: 100%;
    // -webkit-backface-visibility: hidden;
  }
  .ban-tag {
    font-size: 12px;
    position: absolute;
    padding: 2px 6px;
    bottom: 0;
    left: 0;
    color: #fff;
    background-color: #5578c6;
    border-radius: 0 4px 0 0;
    display: none;
  }
}
.download {
  position: absolute !important;
  top: 0;
  z-index: 20;
  right: -1px;
  width: 254px;
  height: 285px;
  background: url("../assets/images/download.png") no-repeat 0 0;
  .btn {
    display: block;
    width: 215px;
    height: 56px;
    margin: 186px 0 0 19px;
    background: url("../assets/images/download.png") no-repeat 0 0;
    background-position: 0 9999px;
    text-indent: -9999px;
  }
  .btn:hover {
    background-position: 0 -290px;
    text-decoration: none;
  }
  p {
    margin: 10px auto;
    text-align: center;
    color: #8d8d8d;
  }
  .shadow,
  .shadowr,
  .ban .btnl,
  .ban .btnr,
  .dots .pg {
    background: url(../assets/images/banner.png) 0 9999px no-repeat;
  }
  .shadow,
  .shadowr {
    display: block;
    _display: none;
    position: absolute;
    top: 0;
    left: -20px;
    width: 20px;
    height: 285px;
    background-position: -1px 0;
  }
  .shadowr {
    left: auto;
    right: -20px;
    background-position: -20px 0;
  }
}
.recommend
  > .block
  > .el-carousel
  > .el-carousel__container
  > .el-carousel__item {
  transform: none !important;
}
//推荐,新碟,榜单
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
.g-bd1 {
  background: url("../assets/images/wrap1.png") repeat-y 100% 100%;
}
.g-mn1 {
  float: left;
  width: 100%;
  margin-right: -250px;
}
.g-mn1c {
  margin-right: 251px;
}
.g-wrap3 {
  padding: 20px 20px 40px;
}
.f-fl {
  float: left;
}
// 热门推荐
a,
a *,
.f-hand,
.f-hand * {
  cursor: pointer;
}
// 各部分头部
.s-bg,
.v-hd2,
.n-disk li {
  background: url("../assets/images/index.png") no-repeat 0 9999px;
}
.v-hd3 {
  height: 35px;
  border-bottom: 2px solid #d13030;
}
.v-hd3 {
  position: relative;
  *zoom: 1;
  height: 23px;
  margin: 0 20px;
  border-bottom: 1px solid #ccc;
  color: #333;
  .more {
    float: right;
    font-weight: normal;
  }
}
.v-hd2 .more .cor,
.v-hd3 .more .cor {
  display: inline-block;
  width: 12px;
  height: 12px;
  margin-left: 4px;
  vertical-align: middle;
}
.v-hd2 {
  height: 33px;
  padding: 0 10px 0 34px;
  background-position: -225px -156px;
  border-bottom: 2px solid #c10d0c;
  .tit {
    float: left;
    font-size: 20px;
    font-weight: normal;
    line-height: 28px;
  }
  .tab {
    float: left;
    margin: 7px 0 0 20px;
    .line {
      margin: 0 10px;
      color: #ccc;
    }
  }
  .more {
    float: right;
    margin-top: 9px;
    _margin-top: 11px;
  }
  a:hover {
    text-decoration: underline;
  }
}

.f-tdn,
.f-tdn:hover {
  text-decoration: none;
}
.s-fc3,
a.s-fc3:hover {
  color: #666;
}
.s-bg-5 {
  background-position: 0 -270px;
}
.s-bg-6 {
  background-position: 0 -240px;
}
.s-bg-9 {
  background-position: -267px -205px;
}
.s-bg-9:hover {
  background-position: -267px -235px;
}
.s-bg-10 {
  background-position: -300px -205px;
}
.s-bg-10:hover {
  background-position: -300px -235px;
}
.s-bg-11 {
  background-position: -267px -268px;
}
.s-bg-12 {
  background-position: -297px -268px;
}
.s-bg-13 {
  background-position: 0 -130px;
  color: #666;
}
.m-cvrlst li {
  float: left;
  display: inline-block;
  width: 140px;
  height: 188px;
  overflow: hidden;
  padding: 0 0 30px 50px;
  line-height: 1.4;
}

// 音乐模块
.u-cover-1 {
  width: 140px;
  height: 140px;
}
.u-cover {
  position: relative;
  display: block;
}
.u-cover img {
  display: block;
  width: 100%;
  height: 100%;
}
.u-cover-1 .msk {
  background-position: 0 0;
}
.u-cover .msk {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.u-cover .bottom,
.u-cover .msk,
.n-musicsd .lst .avatar .msk {
  background: url("../assets/images/coverall.png") no-repeat;
}
.u-cover .ply,
.u-cover .icon-headset,
.u-cover .icon-play,
.u-face .msk,
.n-note .head .msk,
.icn-vip,
.icn-daren,
.u-checkbox {
  background: url("../assets/images/iconall.png") no-repeat;
}
.u-cover .bottom {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 27px;
  background-position: 0 -537px;
  color: #ccc;
}
.u-cover .icon-play {
  position: absolute;
  right: 10px;
  bottom: 5px;
  width: 16px;
  height: 17px;
  background-position: 0 0;
}
.u-cover .icon-headset,
.u-cover .icon-play {
  display: inline-block;
}
.u-cover .icon-headset {
  float: left;
  width: 14px;
  height: 11px;
  background-position: 0 -24px;
  margin: 9px 5px 9px 10px;
}
.u-cover .nb {
  float: left;
  margin: 7px 0 0 0;
}
.u-cover-alb1 {
  width: 100px;
  height: 100px;
  .msk {
    width: 118px;
    height: 100px;
    background-position: 0 -570px;
  }
}
.u-cover-0 .icon-play,
.u-cover-alb1 .icon-play,
.u-cover-10 .icon-play,
.u-cover-11 .icon-play,
.u-cover-12 .icon-play {
  left: 72px;
  width: 22px;
  height: 22px;
  background-position: 0 -85px;
  _background-position: 0 0;
}
.u-cover-alb1 .icon-play,
.u-cover-alb2 .icon-play,
.u-cover-alb3 .icon-play {
  display: none;
  _display: block;
}
.u-cover-4 {
  width: 80px;
  height: 80px;
  .msk {
    background-position: -145px -57px;
  }
}
.u-date,
.u-date .mask {
  background: url("../assets/images/date.png") no-repeat 0 9999px;
}
.u-date {
  position: relative;
  zoom: 1;
  display: block;
  width: 140px;
  height: 140px;
  background-position: 0 0;
}
.u-date .head {
  display: block;
  height: 33px;
  line-height: 33px;
  color: #fed9d9;
  font-size: 14px;
  text-shadow: 0 -1px #962626;
  text-align: center;
}
.u-date .bd {
  display: block;
  line-height: 102px;
  text-align: center;
  font-size: 94px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  color: #202020;
}
.u-date .mask {
  position: absolute;
  top: 33px;
  left: 0;
  width: 142px;
  height: 107px;
  background-position: 0 -150px;
  _background-position: 0 0;
}
.u-icn2 {
  background: url("../assets/images/icon2.png") no-repeat 0 9999px;
}
.u-icn,
.u-icn2,
.u-icn3 {
  display: inline-block;
  overflow: hidden;
  vertical-align: middle;
}
.u-icn-81 {
  width: 13px;
  height: 13px;
  background-position: 0 -700px;
}
.u-icn2-lv {
  background-position: -130px -64px;
}
.u-lv {
  display: inline-block;
  height: 17px;
  overflow: hidden;
  padding-left: 25px;
  line-height: 18px;
  color: #999;
  font-weight: bold;
  font-style: italic;
  i {
    float: right;
  }
}
.u-btn2,
.u-btn2 i,
.u-btn2 .icn,
.u-btni,
.u-btni i,
.u-tag,
.u-tag i,
.u-btni-addply .ply {
  background: url("../assets/images/button2.png") no-repeat 0 9999px;
}
.u-btn2,
.u-btn2 i {
  display: inline-block;
  *display: inline;
  *zoom: 1;
  height: 31px;
  line-height: 31px;
  overflow: hidden;
  *line-height: 32px;
  vertical-align: top;
  text-align: center;
  cursor: pointer;
}
.u-btn2-1 {
  color: #333;
  background-position: right -100px;
}
.u-icn2-lvright {
  width: 8px;
  height: 17px;
  background-position: -192px -64px;
}
.u-btn2 {
  padding: 0 5px 0 0;
  white-space: nowrap;
}
.u-btn2-dis,
.u-btn2-dis i {
  color: #bebebe;
  cursor: default;
}
.u-btn2-dis,
.u-btn2-dis:hover,
.u-btn2-dis:active {
  color: #bebebe;
  background-position: right -346px;
}
.u-btn2-dis i,
.u-btn2-dis:hover i,
.u-btn2-dis:active i {
  color: #bebebe;
  background-position: 0 -305px;
}
.u-btn2 i {
  padding: 0 15px 0 20px;
  pointer-events: none;
}
.u-btn2 i {
  padding: 0 15px 0 20px;
  pointer-events: none;
}
.u-btn2-1 i {
  color: #333;
  background-position: 0 -59px;
}
.s-fc4,
a.s-fc4:hover {
  color: #999;
}
.f-fs1 {
  font-size: 14px;
}
.f-brk {
  word-wrap: break-word;
  word-break: break-word;
  white-space: normal;
}

.n-clmnad {
  position: relative;
  margin: 0 0 35px;
}
.n-new {
  margin: 0px 0 0px;
}
.s-bg-7 {
  background-position: -260px -75px;
}
.s-bg-8 {
  background-position: -300px -75px;
}
.f-pr {
  position: relative;
  zoom: 1;
}
// 新碟上架
.n-disk {
  position: relative;
  zoom: 1;
  height: 186px;
  margin: 20px 0 37px;
  border: 1px solid #d3d3d3;
  .inner {
    height: 184px;
    background: #f5f5f5;
    border: 1px solid #fff;
  }
  .pre,
  .nxt {
    position: absolute;
    top: 71px;
    width: 17px;
    height: 17px;
  }
  .pre {
    left: 4px;
  }
  .roll {
    float: left;
    width: 645px;
    height: 180px;
    overflow: hidden;
  }
  ul {
    position: absolute;
    top: 0;
    width: 645px;
    margin: 28px 0 0 0;
  }
  li {
    float: left;
    display: inline;
    width: 118px;
    height: 150px;
    margin-left: 11px;
    background-position: -260px 100px;
  }
  .u-cover {
    margin-bottom: 7px;
  }
  p {
    width: 90%;
    line-height: 18px;
  }
}
.f-thide {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
}
h3,
h4 {
  font-weight: bold;
}
.f-cb:after {
  clear: both;
  content: ".";
  display: block;
  height: 0;
  visibility: hidden;
}

// 榜单
.n-bilst {
  background: url("../assets/images/index_bill.png") no-repeat;
}
.n-bilst {
  height: 472px;
  margin-top: 20px;
  padding-left: 1px;
  .blk {
    float: left;
    width: 230px;
  }
  .blk-1 {
    width: 228px;
  }
  .top {
    height: 100px;
    padding: 20px 0 0 19px;
  }
  .cver {
    float: left;
    display: inline;
  }
  .tit {
    float: left;
    width: 116px;
    margin: 6px 0 0 10px;
    h3 {
      width: 100%;
    }
  }
  .btn {
    margin-top: 10px;
    a {
      display: block;
      float: left;
      width: 22px;
      height: 22px;
      margin-right: 10px;
      text-indent: -9999px;
    }
  }
  ol {
    height: 319px;
    margin-left: 50px;
    line-height: 32px;
    .no {
      float: left;
      position: relative;
      width: 35px;
      height: 32px;
      margin-left: -35px;
      text-align: center;
      color: #666;
      font-size: 16px;
    }
    li {
      height: 32px;
      * {
        vertical-align: middle;
      }
    }
    .no-top {
      color: #c10d0c;
    }
    .nm {
      float: left;
      width: 170px;
      height: 32px;
    }
    .oper {
      display: none;
      float: right;
      width: 82px;
      margin-top: 7px;
      a {
        float: left;
        width: 17px;
        height: 17px;
        margin-right: 10px;
      }
      .u-icn-81 {
        margin: 2px 6px 0 0;
      }
    }
  }
  .more {
    clear: both;
    height: 32px;
    margin-right: 32px;
    text-align: right;
    line-height: 32px;
  }
}

.n-rcmd {
  // 热门推荐内容
  .m-cvrlst {
    margin: 20px 0 0 -42px;
    li {
      width: 140px;
      height: 204px;
      padding-left: 42px;
      .dec {
        margin: 8px 0 3px;
        font-size: 14px;
        a:hover {
          text-decoration: underline;
        }
      }
      .tit {
        display: inline-block;
        max-width: 100%;
        _width: 100%;
        vertical-align: middle;
      }
    }
  }
  // 个性化推荐
  .m-cvrlst li {
    float: left;
    display: inline-block;
    width: 140px;
    height: 188px;
    overflow: hidden;
    padding: 0 0 30px 50px;
    line-height: 1.4;
  }
  .m-cvrlst {
    margin: 20px 0 0 -42px;
    li {
      width: 140px;
      height: 204px;
      padding-left: 42px;
      p {
        width: 100%;
      }
      .dec {
        margin: 8px 0 3px;
        font-size: 14px;
      }
      .tit {
        display: inline-block;
        max-width: 100%;
        _width: 100%;
        vertical-align: middle;
      }
      .tit {
        display: inline-block;
        max-width: 100%;
        _width: 100%;
        vertical-align: middle;
      }
    }
  }
  .m-cvrlst-idv {
    display: table;
    margin-bottom: 4px;
    line-height: 0;
    li {
      display: table-cell;
      height: auto;
      .tit {
        height: auto;
        max-height: 36px;
        _height: 36px;
        overflow: hidden;
      }
      .tit {
        height: auto;
        max-height: 36px;
        _height: 36px;
        overflow: hidden;
      }
    }
    .idv {
      margin-top: 3px;
      position: relative;
      z-index: 2;
      .btn {
        display: none;
        width: 63px;
        height: 26px;
        margin-top: 0px;
        text-align: center;
        line-height: 26px;
      }
    }
    .idv > em {
      min-height: 30px;
      display: inline-block;
    }
    .js-hvr .btn,
    .idv:hover .btn {
      display: block;
      position: absolute;
      top: 10px;
      left: 0;
      z-index: 1;
    }
    .js-hvr em,
    .idv:hover em {
      visibility: hidden;
    }
  }
}
// 右栏
.g-sd1 {
  position: relative;
  float: right;
  width: 250px;
  zoom: 1;
}
// 个人信息小组件
.n-myinfo {
  height: 165px;
  padding-top: 20px;
  .head {
    float: left;
    width: 80px;
    height: 80px;
    margin-left: 20px;
    _margin-left: 10px;
    padding: 2px;
    background: #fff;
    border: 1px solid #dadada;
    img {
      display: block;
      width: 80px;
      height: 80px;
    }
  }
  .info {
    float: left;
    width: 115px;
    margin-left: 18px;
    padding-top: 3px;
    .nm {
      width: 100%;
    }
    .nm-icn {
      width: auto;
      max-width: 100%;
      vertical-align: middle;
    }
    p {
      width: 100%;
      margin-top: 5px;
    }
    .btnwrap {
      margin-top: 15px;
    }
  }
  .dny {
    margin: 22px 0 0 20px;
    li.fst {
      padding-left: 0;
    }
    li {
      float: left;
      height: 40px;
      padding: 0 18px;
      border-right: 1px solid #e4e4e4;
      a {
        display: block;
        color: #666;
        * {
          cursor: pointer;
        }
      }
    }
    strong {
      display: block;
      font-size: 20px;
      font-weight: normal;
    }
    span {
      margin-left: 2px;
    }
    li.lst {
      padding-right: 0;
      border-right: none;
    }
  }
}
// 入驻歌手
.n-singer {
  margin-top: 15px;
  .u-btn2 {
    margin-left: 20px;
    border-radius: 4px;
    i {
      width: 170px;
      font-weight: bold;
    }
  }
}
.n-enter {
  margin: 6px 0 14px 20px;
  li {
    margin-top: 14px;
  }
  li,
  .itm {
    float: left;
    width: 210px;
    height: 62px;
    background: #fafafa;
    * {
      cursor: pointer;
    }
  }
  .head,
  .head img {
    float: left;
    width: 62px;
    height: 62px;
  }
  .ifo {
    float: left;
    width: 133px;
    height: 60px;
    padding-left: 14px;
    border: 1px solid #e9e9e9;
    border-left: none;
  }
  h4 {
    margin-top: 8px;
  }
  .nm {
    width: 90%;
  }
  p {
    width: 90%;
    margin-top: 8px;
  }
}

// 热门主播
.n-dj-1 {
  margin-top: 30px;
}
.n-hotdj {
  margin: 20px 0 0 20px;
  li {
    float: left;
    width: 210px;
    height: 50px;
  }
  .cver {
    float: left;
    width: 40px;
    margin-right: 10px;
    img {
      width: 40px;
      height: 40px;
      box-shadow: 0 0 1px #333333 inset;
    }
  }
  .info {
    float: left;
    width: 160px;
    line-height: 21px;
  }
  .p {
    width: 100%;
  }
  .nm-icn {
    display: inline-block;
    *display: inline;
    zoom: 1;
    max-width: 88%;
    vertical-align: middle;
  }
}
// 回到顶部
.m-back,
.m-lycifo .downapp,
.m-plshare .btn,
.m-pubcode .code,
.m-multi .bg,
.m-multi .bg a:hover {
  background: url("../assets/images/sprite.png") no-repeat 0 9999px;
}
.m-back {
  display: block;
  position: fixed;
  _position: absolute;
  text-indent: -9999px;
  left: 50%;
  margin-left: 500px;
  bottom: 160px;
  width: 49px;
  height: 44px;
  background-position: -265px -47px;
}
.login {
  height: 126px;
  padding-top: 0;
  background: url("../assets/images/index.png") no-repeat 0 0;
}
.note-l {
  width: 205px;
  margin: 0 auto;
  padding: 16px 0;
  line-height: 22px;
  color: #666;
}
.btn-l {
  background: url("../assets/images/index.png") no-repeat 0 -195px;
  display: block;
  width: 100px;
  height: 31px;
  line-height: 31px;
  text-align: center;
  color: #fff;
  text-shadow: 0 1px 0 #8a060b;
  margin: 0 auto;
}
.btn-l:hover {
  background-position: -110px -195px;
}

#album-roller .el-carousel__item {
  background-color: #f5f5f5;
}
</style>