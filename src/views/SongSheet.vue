<template>
  <div id="songSheet">
    <div class="g-bd" id="m-disc-pl-c">
      <div class="g-wrap p-pl f-pr">
        <div class="u-title f-cb">
          <h3>
            <span class="f-ff2 d-flag">全部</span
            ><a
              href="javascript:;"
              class="u-btn2 u-btn2-1 menu d-flag"
              id="cateToggleLink"
              ><i>选择分类<em class="u-icn u-icn-38"></em></i
            ></a>
          </h3>
          <div class="u-btn f-fr u-btn-hot d-flag">
            <a href="/discover/playlist/?order=hot" class="a1" data-order="hot"
              >热门</a
            >
          </div>
        </div>
        <div
          v-show="isShowSort"
          id="cateListBox"
          class="n-sltlyr d-flag n-sltlyr-show"
          style="left: 0"
        >
          <div class="hd"><i class="icn"></i></div>
          <div class="bd">
            <h3>
              <a
                href="/discover/playlist/"
                class="j-flag u-btn u-btn-g s-fc1"
                data-cat="全部"
                ><em>全部风格</em></a
              >
            </h3>
            <dl class="f-cb">
              <dt><i class="u-icn u-icn-71"></i>语种</dt>
              <dd>
                <a
                  class="s-fc1"
                  href="/discover/playlist/?cat=%E5%8D%8E%E8%AF%AD"
                  data-cat="华语"
                  >华语</a
                ><span class="line">|</span>
                <a
                  class="s-fc1"
                  href="/discover/playlist/?cat=%E6%AC%A7%E7%BE%8E"
                  data-cat="欧美"
                  >欧美</a
                ><span class="line">|</span>
                <a
                  class="s-fc1"
                  href="/discover/playlist/?cat=%E6%97%A5%E8%AF%AD"
                  data-cat="日语"
                  >日语</a
                ><span class="line">|</span>
                <a
                  class="s-fc1"
                  href="/discover/playlist/?cat=%E9%9F%A9%E8%AF%AD"
                  data-cat="韩语"
                  >韩语</a
                ><span class="line">|</span>
                <a
                  class="s-fc1"
                  href="/discover/playlist/?cat=%E7%B2%A4%E8%AF%AD"
                  data-cat="粤语"
                  >粤语</a
                ><span class="line">|</span>
              </dd>
            </dl>
            <dl class="f-cb">
              <dt><i class="u-icn u-icn-6"></i>风格</dt>
              <dd>
                <a
                  class="s-fc1"
                  href="/discover/playlist/?cat=%E6%B5%81%E8%A1%8C"
                  data-cat="流行"
                  >流行</a
                ><span class="line">|</span>
                <a
                  class="s-fc1"
                  href="/discover/playlist/?cat=%E6%91%87%E6%BB%9A"
                  data-cat="摇滚"
                  >摇滚</a
                ><span class="line">|</span>
                <a
                  class="s-fc1"
                  href="/discover/playlist/?cat=%E6%B0%91%E8%B0%A3"
                  data-cat="民谣"
                  >民谣</a
                ><span class="line">|</span>
                <a
                  class="s-fc1"
                  href="/discover/playlist/?cat=%E7%94%B5%E5%AD%90"
                  data-cat="电子"
                  >电子</a
                ><span class="line">|</span>
                <a
                  class="s-fc1"
                  href="/discover/playlist/?cat=%E8%88%9E%E6%9B%B2"
                  data-cat="舞曲"
                  >舞曲</a
                ><span class="line">|</span>
                <a
                  class="s-fc1"
                  href="/discover/playlist/?cat=%E8%AF%B4%E5%94%B1"
                  data-cat="说唱"
                  >说唱</a
                ><span class="line">|</span>
                <a
                  class="s-fc1"
                  href="/discover/playlist/?cat=%E8%BD%BB%E9%9F%B3%E4%B9%90"
                  data-cat="轻音乐"
                  >轻音乐</a
                ><span class="line">|</span>
                <a
                  class="s-fc1"
                  href="/discover/playlist/?cat=%E7%88%B5%E5%A3%AB"
                  data-cat="爵士"
                  >爵士</a
                ><span class="line">|</span>
                <a
                  class="s-fc1"
                  href="/discover/playlist/?cat=%E4%B9%A1%E6%9D%91"
                  data-cat="乡村"
                  >乡村</a
                ><span class="line">|</span>
                <a
                  class="s-fc1"
                  href="/discover/playlist/?cat=R%26B%2FSoul"
                  data-cat="R&amp;B/Soul"
                  >R&amp;B/Soul</a
                ><span class="line">|</span>
                <a
                  class="s-fc1"
                  href="/discover/playlist/?cat=%E5%8F%A4%E5%85%B8"
                  data-cat="古典"
                  >古典</a
                ><span class="line">|</span>
                <a
                  class="s-fc1"
                  href="/discover/playlist/?cat=%E6%B0%91%E6%97%8F"
                  data-cat="民族"
                  >民族</a
                ><span class="line">|</span>
                <a
                  class="s-fc1"
                  href="/discover/playlist/?cat=%E8%8B%B1%E4%BC%A6"
                  data-cat="英伦"
                  >英伦</a
                ><span class="line">|</span>
                <a
                  class="s-fc1"
                  href="/discover/playlist/?cat=%E9%87%91%E5%B1%9E"
                  data-cat="金属"
                  >金属</a
                ><span class="line">|</span>
                <a
                  class="s-fc1"
                  href="/discover/playlist/?cat=%E8%93%9D%E8%B0%83"
                  data-cat="蓝调"
                  >蓝调</a
                ><span class="line">|</span>
                <a
                  class="s-fc1"
                  href="/discover/playlist/?cat=%E9%9B%B7%E9%AC%BC"
                  data-cat="雷鬼"
                  >雷鬼</a
                ><span class="line">|</span>
                <a
                  class="s-fc1"
                  href="/discover/playlist/?cat=%E4%B8%96%E7%95%8C%E9%9F%B3%E4%B9%90"
                  data-cat="世界音乐"
                  >世界音乐</a
                ><span class="line">|</span>
                <a
                  class="s-fc1"
                  href="/discover/playlist/?cat=%E6%8B%89%E4%B8%81"
                  data-cat="拉丁"
                  >拉丁</a
                ><span class="line">|</span>
                <a
                  class="s-fc1"
                  href="/discover/playlist/?cat=New%20Age"
                  data-cat="New Age"
                  >New Age</a
                ><span class="line">|</span>
                <a
                  class="s-fc1"
                  href="/discover/playlist/?cat=%E5%8F%A4%E9%A3%8E"
                  data-cat="古风"
                  >古风</a
                ><span class="line">|</span>
                <a
                  class="s-fc1"
                  href="/discover/playlist/?cat=Bossa%20Nova"
                  data-cat="Bossa Nova"
                  >Bossa Nova</a
                ><span class="line">|</span>
              </dd>
            </dl>
            <dl class="f-cb">
              <dt><i class="u-icn u-icn-7"></i>场景</dt>
              <dd>
                <a
                  class="s-fc1"
                  href="/discover/playlist/?cat=%E6%B8%85%E6%99%A8"
                  data-cat="清晨"
                  >清晨</a
                ><span class="line">|</span>
                <a
                  class="s-fc1"
                  href="/discover/playlist/?cat=%E5%A4%9C%E6%99%9A"
                  data-cat="夜晚"
                  >夜晚</a
                ><span class="line">|</span>
                <a
                  class="s-fc1"
                  href="/discover/playlist/?cat=%E5%AD%A6%E4%B9%A0"
                  data-cat="学习"
                  >学习</a
                ><span class="line">|</span>
                <a
                  class="s-fc1"
                  href="/discover/playlist/?cat=%E5%B7%A5%E4%BD%9C"
                  data-cat="工作"
                  >工作</a
                ><span class="line">|</span>
                <a
                  class="s-fc1"
                  href="/discover/playlist/?cat=%E5%8D%88%E4%BC%91"
                  data-cat="午休"
                  >午休</a
                ><span class="line">|</span>
                <a
                  class="s-fc1"
                  href="/discover/playlist/?cat=%E4%B8%8B%E5%8D%88%E8%8C%B6"
                  data-cat="下午茶"
                  >下午茶</a
                ><span class="line">|</span>
                <a
                  class="s-fc1"
                  href="/discover/playlist/?cat=%E5%9C%B0%E9%93%81"
                  data-cat="地铁"
                  >地铁</a
                ><span class="line">|</span>
                <a
                  class="s-fc1"
                  href="/discover/playlist/?cat=%E9%A9%BE%E8%BD%A6"
                  data-cat="驾车"
                  >驾车</a
                ><span class="line">|</span>
                <a
                  class="s-fc1"
                  href="/discover/playlist/?cat=%E8%BF%90%E5%8A%A8"
                  data-cat="运动"
                  >运动</a
                ><span class="line">|</span>
                <a
                  class="s-fc1"
                  href="/discover/playlist/?cat=%E6%97%85%E8%A1%8C"
                  data-cat="旅行"
                  >旅行</a
                ><span class="line">|</span>
                <a
                  class="s-fc1"
                  href="/discover/playlist/?cat=%E6%95%A3%E6%AD%A5"
                  data-cat="散步"
                  >散步</a
                ><span class="line">|</span>
                <a
                  class="s-fc1"
                  href="/discover/playlist/?cat=%E9%85%92%E5%90%A7"
                  data-cat="酒吧"
                  >酒吧</a
                ><span class="line">|</span>
              </dd>
            </dl>
            <dl class="f-cb">
              <dt><i class="u-icn u-icn-8"></i>情感</dt>
              <dd>
                <a
                  class="s-fc1"
                  href="/discover/playlist/?cat=%E6%80%80%E6%97%A7"
                  data-cat="怀旧"
                  >怀旧</a
                ><span class="line">|</span>
                <a
                  class="s-fc1"
                  href="/discover/playlist/?cat=%E6%B8%85%E6%96%B0"
                  data-cat="清新"
                  >清新</a
                ><span class="line">|</span>
                <a
                  class="s-fc1"
                  href="/discover/playlist/?cat=%E6%B5%AA%E6%BC%AB"
                  data-cat="浪漫"
                  >浪漫</a
                ><span class="line">|</span>
                <a
                  class="s-fc1"
                  href="/discover/playlist/?cat=%E4%BC%A4%E6%84%9F"
                  data-cat="伤感"
                  >伤感</a
                ><span class="line">|</span>
                <a
                  class="s-fc1"
                  href="/discover/playlist/?cat=%E6%B2%BB%E6%84%88"
                  data-cat="治愈"
                  >治愈</a
                ><span class="line">|</span>
                <a
                  class="s-fc1"
                  href="/discover/playlist/?cat=%E6%94%BE%E6%9D%BE"
                  data-cat="放松"
                  >放松</a
                ><span class="line">|</span>
                <a
                  class="s-fc1"
                  href="/discover/playlist/?cat=%E5%AD%A4%E7%8B%AC"
                  data-cat="孤独"
                  >孤独</a
                ><span class="line">|</span>
                <a
                  class="s-fc1"
                  href="/discover/playlist/?cat=%E6%84%9F%E5%8A%A8"
                  data-cat="感动"
                  >感动</a
                ><span class="line">|</span>
                <a
                  class="s-fc1"
                  href="/discover/playlist/?cat=%E5%85%B4%E5%A5%8B"
                  data-cat="兴奋"
                  >兴奋</a
                ><span class="line">|</span>
                <a
                  class="s-fc1"
                  href="/discover/playlist/?cat=%E5%BF%AB%E4%B9%90"
                  data-cat="快乐"
                  >快乐</a
                ><span class="line">|</span>
                <a
                  class="s-fc1"
                  href="/discover/playlist/?cat=%E5%AE%89%E9%9D%99"
                  data-cat="安静"
                  >安静</a
                ><span class="line">|</span>
                <a
                  class="s-fc1"
                  href="/discover/playlist/?cat=%E6%80%9D%E5%BF%B5"
                  data-cat="思念"
                  >思念</a
                ><span class="line">|</span>
              </dd>
            </dl>
            <dl class="f-cb">
              <dt><i class="u-icn u-icn-9"></i>主题</dt>
              <dd class="last">
                <a
                  class="s-fc1"
                  href="/discover/playlist/?cat=%E7%BB%BC%E8%89%BA"
                  data-cat="综艺"
                  >综艺</a
                ><span class="line">|</span>
                <a
                  class="s-fc1"
                  href="/discover/playlist/?cat=%E5%BD%B1%E8%A7%86%E5%8E%9F%E5%A3%B0"
                  data-cat="影视原声"
                  >影视原声</a
                ><span class="line">|</span>
                <a
                  class="s-fc1"
                  href="/discover/playlist/?cat=ACG"
                  data-cat="ACG"
                  >ACG</a
                ><span class="line">|</span>
                <a
                  class="s-fc1"
                  href="/discover/playlist/?cat=%E5%84%BF%E7%AB%A5"
                  data-cat="儿童"
                  >儿童</a
                ><span class="line">|</span>
                <a
                  class="s-fc1"
                  href="/discover/playlist/?cat=%E6%A0%A1%E5%9B%AD"
                  data-cat="校园"
                  >校园</a
                ><span class="line">|</span>
                <a
                  class="s-fc1"
                  href="/discover/playlist/?cat=%E6%B8%B8%E6%88%8F"
                  data-cat="游戏"
                  >游戏</a
                ><span class="line">|</span>
                <a
                  class="s-fc1"
                  href="/discover/playlist/?cat=70%E5%90%8E"
                  data-cat="70后"
                  >70后</a
                ><span class="line">|</span>
                <a
                  class="s-fc1"
                  href="/discover/playlist/?cat=80%E5%90%8E"
                  data-cat="80后"
                  >80后</a
                ><span class="line">|</span>
                <a
                  class="s-fc1"
                  href="/discover/playlist/?cat=90%E5%90%8E"
                  data-cat="90后"
                  >90后</a
                ><span class="line">|</span>
                <a
                  class="s-fc1"
                  href="/discover/playlist/?cat=%E7%BD%91%E7%BB%9C%E6%AD%8C%E6%9B%B2"
                  data-cat="网络歌曲"
                  >网络歌曲</a
                ><span class="line">|</span>
                <a
                  class="s-fc1"
                  href="/discover/playlist/?cat=KTV"
                  data-cat="KTV"
                  >KTV</a
                ><span class="line">|</span>
                <a
                  class="s-fc1"
                  href="/discover/playlist/?cat=%E7%BB%8F%E5%85%B8"
                  data-cat="经典"
                  >经典</a
                ><span class="line">|</span>
                <a
                  class="s-fc1"
                  href="/discover/playlist/?cat=%E7%BF%BB%E5%94%B1"
                  data-cat="翻唱"
                  >翻唱</a
                ><span class="line">|</span>
                <a
                  class="s-fc1"
                  href="/discover/playlist/?cat=%E5%90%89%E4%BB%96"
                  data-cat="吉他"
                  >吉他</a
                ><span class="line">|</span>
                <a
                  class="s-fc1"
                  href="/discover/playlist/?cat=%E9%92%A2%E7%90%B4"
                  data-cat="钢琴"
                  >钢琴</a
                ><span class="line">|</span>
                <a
                  class="s-fc1"
                  href="/discover/playlist/?cat=%E5%99%A8%E4%B9%90"
                  data-cat="器乐"
                  >器乐</a
                ><span class="line">|</span>
                <a
                  class="s-fc1"
                  href="/discover/playlist/?cat=%E6%A6%9C%E5%8D%95"
                  data-cat="榜单"
                  >榜单</a
                ><span class="line">|</span>
                <a
                  class="s-fc1"
                  href="/discover/playlist/?cat=00%E5%90%8E"
                  data-cat="00后"
                  >00后</a
                ><span class="line">|</span>
              </dd>
            </dl>
          </div>
          <div class="ft"></div>
        </div>
        <ul class="m-cvrlst f-cb" id="m-pl-container">
          <li>
            <div class="u-cover u-cover-1">
              <img
                class="j-flag"
                src="http://p2.music.126.net/3HN5rmrOfjKWCmwxHWlEPg==/109951165994878560.jpg?param=140y140"
              />
              <a
                title="“圣 罗 兰 之 花 永 不 凋 零”"
                href="/playlist?id=6733647208"
                class="msk"
              ></a>
              <div class="bottom">
                <a
                  class="icon-play f-fr"
                  title="播放"
                  href="javascript:;"
                  data-res-type="13"
                  data-res-id="6733647208"
                  data-res-action="play"
                ></a>
                <span class="icon-headset"></span>
                <span class="nb">90万</span>
              </div>
            </div>
            <p class="dec">
              <a
                title="“圣 罗 兰 之 花 永 不 凋 零”"
                href="/playlist?id=6733647208"
                class="tit f-thide s-fc0"
                >“圣 罗 兰 之 花 永 不 凋 零”</a
              >
            </p>
            <p>
              <span class="s-fc4">by</span>
              <a
                title="菟詞"
                href="/user/home?id=624381831"
                class="nm nm-icn f-thide s-fc3"
                >菟詞</a
              >
              <img
                style="
                  height: 13px;
                  width: 13px;
                  display: inline-block;
                  vertical-align: middle;
                "
                src="https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/4874132307/4499/f228/d867/da64b9725e125943ad4e14e4c72d0884.png"
              />
            </p>
          </li>
          <li>
            <div class="u-cover u-cover-1">
              <img
                class="j-flag"
                src="http://p2.music.126.net/u0XieCgtVUeiUbKi5qDarw==/109951166294262909.jpg?param=140y140"
              />
              <a
                title="【纯音乐】情绪氛围系列‖钢琴"
                href="/playlist?id=6920064959"
                class="msk"
              ></a>
              <div class="bottom">
                <a
                  class="icon-play f-fr"
                  title="播放"
                  href="javascript:;"
                  data-res-type="13"
                  data-res-id="6920064959"
                  data-res-action="play"
                ></a>
                <span class="icon-headset"></span>
                <span class="nb">66万</span>
              </div>
            </div>
            <p class="dec">
              <a
                title="【纯音乐】情绪氛围系列‖钢琴"
                href="/playlist?id=6920064959"
                class="tit f-thide s-fc0"
                >【纯音乐】情绪氛围系列‖钢琴</a
              >
            </p>
            <p>
              <span class="s-fc4">by</span>
              <a
                title="是怡啊LJY"
                href="/user/home?id=559582221"
                class="nm nm-icn f-thide s-fc3"
                >是怡啊LJY</a
              >
              <img
                style="
                  height: 13px;
                  width: 13px;
                  display: inline-block;
                  vertical-align: middle;
                "
                src="https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/4874132307/4499/f228/d867/da64b9725e125943ad4e14e4c72d0884.png"
              />
            </p>
          </li>
          <li>
            <div class="u-cover u-cover-1">
              <img
                class="j-flag"
                src="http://p2.music.126.net/8I-5x429f_AMtRpG5I_uhg==/109951166529767568.jpg?param=140y140"
              />
              <a
                title="「欧美」情遇英式小酒馆的复古浪漫✨"
                href="/playlist?id=6954660951"
                class="msk"
              ></a>
              <div class="bottom">
                <a
                  class="icon-play f-fr"
                  title="播放"
                  href="javascript:;"
                  data-res-type="13"
                  data-res-id="6954660951"
                  data-res-action="play"
                ></a>
                <span class="icon-headset"></span>
                <span class="nb">90万</span>
              </div>
            </div>
            <p class="dec">
              <a
                title="「欧美」情遇英式小酒馆的复古浪漫✨"
                href="/playlist?id=6954660951"
                class="tit f-thide s-fc0"
                >「欧美」情遇英式小酒馆的复古浪漫✨</a
              >
            </p>
            <p>
              <span class="s-fc4">by</span>
              <a
                title="-沐安_"
                href="/user/home?id=1511153960"
                class="nm nm-icn f-thide s-fc3"
                >-沐安_</a
              >
              <img
                style="
                  height: 13px;
                  width: 13px;
                  display: inline-block;
                  vertical-align: middle;
                "
                src="https://p5.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/11231827458/69e0/ee57/7a1a/0be25519330a8b35a82fc0efb13010b2.png"
              />
            </p>
          </li>
          <li>
            <div class="u-cover u-cover-1">
              <img
                class="j-flag"
                src="http://p2.music.126.net/QIZiYj5g4KoHNu-NleS3Pw==/109951166183955094.jpg?param=140y140"
              />
              <a
                title="『裴小川压迫感节奏大师』"
                href="/playlist?id=6846567451"
                class="msk"
              ></a>
              <div class="bottom">
                <a
                  class="icon-play f-fr"
                  title="播放"
                  href="javascript:;"
                  data-res-type="13"
                  data-res-id="6846567451"
                  data-res-action="play"
                ></a>
                <span class="icon-headset"></span>
                <span class="nb">260万</span>
              </div>
            </div>
            <p class="dec">
              <a
                title="『裴小川压迫感节奏大师』"
                href="/playlist?id=6846567451"
                class="tit f-thide s-fc0"
                >『裴小川压迫感节奏大师』</a
              >
            </p>
            <p>
              <span class="s-fc4">by</span>
              <a
                title="可惜我言不由衷"
                href="/user/home?id=2140523270"
                class="nm nm-icn f-thide s-fc3"
                >可惜我言不由衷</a
              >
            </p>
          </li>
          <li>
            <div class="u-cover u-cover-1">
              <img
                class="j-flag"
                src="http://p2.music.126.net/nYwMY6mbdHBI4t2123ilTA==/109951166212467153.jpg?param=140y140"
              />
              <a
                title="欧美流行｜那些一开口就沉溺的宝藏男声_"
                href="/playlist?id=6876163018"
                class="msk"
              ></a>
              <div class="bottom">
                <a
                  class="icon-play f-fr"
                  title="播放"
                  href="javascript:;"
                  data-res-type="13"
                  data-res-id="6876163018"
                  data-res-action="play"
                ></a>
                <span class="icon-headset"></span>
                <span class="nb">75万</span>
              </div>
            </div>
            <p class="dec">
              <a
                title="欧美流行｜那些一开口就沉溺的宝藏男声_"
                href="/playlist?id=6876163018"
                class="tit f-thide s-fc0"
                >欧美流行｜那些一开口就沉溺的宝藏男声_</a
              >
            </p>
            <p>
              <span class="s-fc4">by</span>
              <a
                title="Syon__"
                href="/user/home?id=1782290787"
                class="nm nm-icn f-thide s-fc3"
                >Syon__</a
              >
              <img
                style="
                  height: 13px;
                  width: 13px;
                  display: inline-block;
                  vertical-align: middle;
                "
                src="https://p5.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/11231827458/69e0/ee57/7a1a/0be25519330a8b35a82fc0efb13010b2.png"
              />
            </p>
          </li>
          <li>
            <div class="u-cover u-cover-1">
              <img
                class="j-flag"
                src="http://p2.music.126.net/9feXgvNrdhR8hWkVKdReJA==/109951166364176863.jpg?param=140y140"
              />
              <a
                title="小鬼/姜云升/马思唯/法老/幼杀Rapper已到场"
                href="/playlist?id=6672624203"
                class="msk"
              ></a>
              <div class="bottom">
                <a
                  class="icon-play f-fr"
                  title="播放"
                  href="javascript:;"
                  data-res-type="13"
                  data-res-id="6672624203"
                  data-res-action="play"
                ></a>
                <span class="icon-headset"></span>
                <span class="nb">448万</span>
              </div>
            </div>
            <p class="dec">
              <a
                title="小鬼/姜云升/马思唯/法老/幼杀Rapper已到场"
                href="/playlist?id=6672624203"
                class="tit f-thide s-fc0"
                >小鬼/姜云升/马思唯/法老/幼杀Rapper已到场</a
              >
            </p>
            <p>
              <span class="s-fc4">by</span>
              <a
                title="风水轮流转到我了"
                href="/user/home?id=1517065126"
                class="nm nm-icn f-thide s-fc3"
                >风水轮流转到我了</a
              >
              <img
                style="
                  height: 13px;
                  width: 13px;
                  display: inline-block;
                  vertical-align: middle;
                "
                src="https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/4761340149/f4bf/64a1/1ea2/31a08617d7dfddb21fffdb92390ce268.png"
              />
            </p>
          </li>
          <li>
            <div class="u-cover u-cover-1">
              <img
                class="j-flag"
                src="http://p2.music.126.net/zbCcOORkvX5GShoSMGZzLg==/109951166493479781.jpg?param=140y140"
              />
              <a
                title="尚sir超强专属（跑步超燃）"
                href="/playlist?id=6812683762"
                class="msk"
              ></a>
              <div class="bottom">
                <a
                  class="icon-play f-fr"
                  title="播放"
                  href="javascript:;"
                  data-res-type="13"
                  data-res-id="6812683762"
                  data-res-action="play"
                ></a>
                <span class="icon-headset"></span>
                <span class="nb">110万</span>
              </div>
            </div>
            <p class="dec">
              <a
                title="尚sir超强专属（跑步超燃）"
                href="/playlist?id=6812683762"
                class="tit f-thide s-fc0"
                >尚sir超强专属（跑步超燃）</a
              >
            </p>
            <p>
              <span class="s-fc4">by</span>
              <a
                title="尚sir超强"
                href="/user/home?id=1645928390"
                class="nm nm-icn f-thide s-fc3"
                >尚sir超强</a
              >
            </p>
          </li>
          <li>
            <div class="u-cover u-cover-1">
              <img
                class="j-flag"
                src="http://p2.music.126.net/cn8wqSaZ7Jr3ae76PVHYmg==/109951166318454430.jpg?param=140y140"
              />
              <a
                title="【伤感纯音乐】难过需要释放"
                href="/playlist?id=6935712334"
                class="msk"
              ></a>
              <div class="bottom">
                <a
                  class="icon-play f-fr"
                  title="播放"
                  href="javascript:;"
                  data-res-type="13"
                  data-res-id="6935712334"
                  data-res-action="play"
                ></a>
                <span class="icon-headset"></span>
                <span class="nb">58万</span>
              </div>
            </div>
            <p class="dec">
              <a
                title="【伤感纯音乐】难过需要释放"
                href="/playlist?id=6935712334"
                class="tit f-thide s-fc0"
                >【伤感纯音乐】难过需要释放</a
              >
            </p>
            <p>
              <span class="s-fc4">by</span>
              <a
                title="洽与"
                href="/user/home?id=5149828626"
                class="nm nm-icn f-thide s-fc3"
                >洽与</a
              >
            </p>
          </li>
          <li>
            <div class="u-cover u-cover-1">
              <img
                class="j-flag"
                src="http://p2.music.126.net/PdGB97lIH1glPKNQJOYBCA==/109951166415824594.jpg?param=140y140"
              />
              <a
                title="夜晚助眠 温柔治愈纯音乐"
                href="/playlist?id=6970151053"
                class="msk"
              ></a>
              <div class="bottom">
                <a
                  class="icon-play f-fr"
                  title="播放"
                  href="javascript:;"
                  data-res-type="13"
                  data-res-id="6970151053"
                  data-res-action="play"
                ></a>
                <span class="icon-headset"></span>
                <span class="nb">44万</span>
              </div>
            </div>
            <p class="dec">
              <a
                title="夜晚助眠 温柔治愈纯音乐"
                href="/playlist?id=6970151053"
                class="tit f-thide s-fc0"
                >夜晚助眠 温柔治愈纯音乐</a
              >
            </p>
            <p>
              <span class="s-fc4">by</span>
              <a
                title="雾中的河"
                href="/user/home?id=3968139597"
                class="nm nm-icn f-thide s-fc3"
                >雾中的河</a
              >
            </p>
          </li>
          <li>
            <div class="u-cover u-cover-1">
              <img
                class="j-flag"
                src="http://p2.music.126.net/IPBycdly9g2rSDyKK18qIw==/109951166334238180.jpg?param=140y140"
              />
              <a
                title="丧rap | 是我不配做你的主角"
                href="/playlist?id=6944219625"
                class="msk"
              ></a>
              <div class="bottom">
                <a
                  class="icon-play f-fr"
                  title="播放"
                  href="javascript:;"
                  data-res-type="13"
                  data-res-id="6944219625"
                  data-res-action="play"
                ></a>
                <span class="icon-headset"></span>
                <span class="nb">100万</span>
              </div>
            </div>
            <p class="dec">
              <a
                title="丧rap | 是我不配做你的主角"
                href="/playlist?id=6944219625"
                class="tit f-thide s-fc0"
                >丧rap | 是我不配做你的主角</a
              >
            </p>
            <p>
              <span class="s-fc4">by</span>
              <a
                title="见青山t"
                href="/user/home?id=1358261208"
                class="nm nm-icn f-thide s-fc3"
                >见青山t</a
              >
            </p>
          </li>
          <li>
            <div class="u-cover u-cover-1">
              <img
                class="j-flag"
                src="http://p2.music.126.net/AQh8-Q0UEonCvWWDlOl3QQ==/109951166383336403.jpg?param=140y140"
              />
              <a
                title="安静 学习 写作业纯音乐"
                href="/playlist?id=6970155891"
                class="msk"
              ></a>
              <div class="bottom">
                <a
                  class="icon-play f-fr"
                  title="播放"
                  href="javascript:;"
                  data-res-type="13"
                  data-res-id="6970155891"
                  data-res-action="play"
                ></a>
                <span class="icon-headset"></span>
                <span class="nb">54万</span>
              </div>
            </div>
            <p class="dec">
              <a
                title="安静 学习 写作业纯音乐"
                href="/playlist?id=6970155891"
                class="tit f-thide s-fc0"
                >安静 学习 写作业纯音乐</a
              >
            </p>
            <p>
              <span class="s-fc4">by</span>
              <a
                title="雾中的河"
                href="/user/home?id=3968139597"
                class="nm nm-icn f-thide s-fc3"
                >雾中的河</a
              >
            </p>
          </li>
          <li>
            <div class="u-cover u-cover-1">
              <img
                class="j-flag"
                src="http://p2.music.126.net/dgnSCQR3HgT-W5CFG6STGA==/109951166610252034.jpg?param=140y140"
              />
              <a
                title="圣 罗 兰 之 花 永 不 凋 零"
                href="/playlist?id=6980816211"
                class="msk"
              ></a>
              <div class="bottom">
                <a
                  class="icon-play f-fr"
                  title="播放"
                  href="javascript:;"
                  data-res-type="13"
                  data-res-id="6980816211"
                  data-res-action="play"
                ></a>
                <span class="icon-headset"></span>
                <span class="nb">42万</span>
              </div>
            </div>
            <p class="dec">
              <a
                title="圣 罗 兰 之 花 永 不 凋 零"
                href="/playlist?id=6980816211"
                class="tit f-thide s-fc0"
                >圣 罗 兰 之 花 永 不 凋 零</a
              >
            </p>
            <p>
              <span class="s-fc4">by</span>
              <a
                title="犯困God"
                href="/user/home?id=320860687"
                class="nm nm-icn f-thide s-fc3"
                >犯困God</a
              >
            </p>
          </li>
          <li>
            <div class="u-cover u-cover-1">
              <img
                class="j-flag"
                src="http://p2.music.126.net/WWiLpJNsGDfEY9P1Emwb1Q==/109951166649449197.jpg?param=140y140"
              />
              <a
                title="Remix史诗级神曲"
                href="/playlist?id=6761069995"
                class="msk"
              ></a>
              <div class="bottom">
                <a
                  class="icon-play f-fr"
                  title="播放"
                  href="javascript:;"
                  data-res-type="13"
                  data-res-id="6761069995"
                  data-res-action="play"
                ></a>
                <span class="icon-headset"></span>
                <span class="nb">117万</span>
              </div>
            </div>
            <p class="dec">
              <a
                title="Remix史诗级神曲"
                href="/playlist?id=6761069995"
                class="tit f-thide s-fc0"
                >Remix史诗级神曲</a
              >
            </p>
            <p>
              <span class="s-fc4">by</span>
              <a
                title="林思航Morefree"
                href="/user/home?id=1544689491"
                class="nm nm-icn f-thide s-fc3"
                >林思航Morefree</a
              >
              <img
                style="
                  height: 13px;
                  width: 13px;
                  display: inline-block;
                  vertical-align: middle;
                "
                src="https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/4874132307/4499/f228/d867/da64b9725e125943ad4e14e4c72d0884.png"
              />
            </p>
          </li>
          <li>
            <div class="u-cover u-cover-1">
              <img
                class="j-flag"
                src="http://p2.music.126.net/KYlcNA4I8wZs87pDspEKXA==/109951166324771526.jpg?param=140y140"
              />
              <a
                title="健身房 | 举铁 跑步 会上头的BGM"
                href="/playlist?id=6938606286"
                class="msk"
              ></a>
              <div class="bottom">
                <a
                  class="icon-play f-fr"
                  title="播放"
                  href="javascript:;"
                  data-res-type="13"
                  data-res-id="6938606286"
                  data-res-action="play"
                ></a>
                <span class="icon-headset"></span>
                <span class="nb">107万</span>
              </div>
            </div>
            <p class="dec">
              <a
                title="健身房 | 举铁 跑步 会上头的BGM"
                href="/playlist?id=6938606286"
                class="tit f-thide s-fc0"
                >健身房 | 举铁 跑步 会上头的BGM</a
              >
            </p>
            <p>
              <span class="s-fc4">by</span>
              <a
                title="一只眼睛的鹿_"
                href="/user/home?id=1447630647"
                class="nm nm-icn f-thide s-fc3"
                >一只眼睛的鹿_</a
              >
              <img
                style="
                  height: 13px;
                  width: 13px;
                  display: inline-block;
                  vertical-align: middle;
                "
                src="https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/4874132307/4499/f228/d867/da64b9725e125943ad4e14e4c72d0884.png"
              />
            </p>
          </li>
          <li>
            <div class="u-cover u-cover-1">
              <img
                class="j-flag"
                src="http://p2.music.126.net/0w1VXaNN_BHsereeGpneUQ==/109951166389971651.jpg?param=140y140"
              />
              <a
                title="缓慢 睡眠 纯音乐"
                href="/playlist?id=6970225451"
                class="msk"
              ></a>
              <div class="bottom">
                <a
                  class="icon-play f-fr"
                  title="播放"
                  href="javascript:;"
                  data-res-type="13"
                  data-res-id="6970225451"
                  data-res-action="play"
                ></a>
                <span class="icon-headset"></span>
                <span class="nb">36万</span>
              </div>
            </div>
            <p class="dec">
              <a
                title="缓慢 睡眠 纯音乐"
                href="/playlist?id=6970225451"
                class="tit f-thide s-fc0"
                >缓慢 睡眠 纯音乐</a
              >
            </p>
            <p>
              <span class="s-fc4">by</span>
              <a
                title="雾中的河"
                href="/user/home?id=3968139597"
                class="nm nm-icn f-thide s-fc3"
                >雾中的河</a
              >
            </p>
          </li>
          <li>
            <div class="u-cover u-cover-1">
              <img
                class="j-flag"
                src="http://p2.music.126.net/1GX0r94lio7Tu7q6sFtX8Q==/109951166441267577.jpg?param=140y140"
              />
              <a
                title="甜酷女孩专用歌单"
                href="/playlist?id=6981820854"
                class="msk"
              ></a>
              <div class="bottom">
                <a
                  class="icon-play f-fr"
                  title="播放"
                  href="javascript:;"
                  data-res-type="13"
                  data-res-id="6981820854"
                  data-res-action="play"
                ></a>
                <span class="icon-headset"></span>
                <span class="nb">30万</span>
              </div>
            </div>
            <p class="dec">
              <a
                title="甜酷女孩专用歌单"
                href="/playlist?id=6981820854"
                class="tit f-thide s-fc0"
                >甜酷女孩专用歌单</a
              >
            </p>
            <p>
              <span class="s-fc4">by</span>
              <a
                title="少女的喜欢_"
                href="/user/home?id=3277385997"
                class="nm nm-icn f-thide s-fc3"
                >少女的喜欢_</a
              >
              <img
                style="
                  height: 13px;
                  width: 13px;
                  display: inline-block;
                  vertical-align: middle;
                "
                src="https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/4874132307/4499/f228/d867/da64b9725e125943ad4e14e4c72d0884.png"
              />
            </p>
          </li>
          <li>
            <div class="u-cover u-cover-1">
              <img
                class="j-flag"
                src="http://p2.music.126.net/j_eTFcwXtPMTr_n50kBpKA==/109951166243451769.jpg?param=140y140"
              />
              <a
                title="精选蹦迪炸曲 /电驾炸街硬曲「E.D.M合集」"
                href="/playlist?id=6838670323"
                class="msk"
              ></a>
              <div class="bottom">
                <a
                  class="icon-play f-fr"
                  title="播放"
                  href="javascript:;"
                  data-res-type="13"
                  data-res-id="6838670323"
                  data-res-action="play"
                ></a>
                <span class="icon-headset"></span>
                <span class="nb">64万</span>
              </div>
            </div>
            <p class="dec">
              <a
                title="精选蹦迪炸曲 /电驾炸街硬曲「E.D.M合集」"
                href="/playlist?id=6838670323"
                class="tit f-thide s-fc0"
                >精选蹦迪炸曲 /电驾炸街硬曲「E.D.M合集」</a
              >
            </p>
            <p>
              <span class="s-fc4">by</span>
              <a
                title="倾难V"
                href="/user/home?id=1908891938"
                class="nm nm-icn f-thide s-fc3"
                >倾难V</a
              >
              <img
                style="
                  height: 13px;
                  width: 13px;
                  display: inline-block;
                  vertical-align: middle;
                "
                src="https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/4761340149/f4bf/64a1/1ea2/31a08617d7dfddb21fffdb92390ce268.png"
              />
            </p>
          </li>
          <li>
            <div class="u-cover u-cover-1">
              <img
                class="j-flag"
                src="http://p2.music.126.net/2nCGkWIYDsU4-DY6TYUs_A==/109951166470886271.jpg?param=140y140"
              />
              <a
                title="Swingman_z0"
                href="/playlist?id=6818649749"
                class="msk"
              ></a>
              <div class="bottom">
                <a
                  class="icon-play f-fr"
                  title="播放"
                  href="javascript:;"
                  data-res-type="13"
                  data-res-id="6818649749"
                  data-res-action="play"
                ></a>
                <span class="icon-headset"></span>
                <span class="nb">30万</span>
              </div>
            </div>
            <p class="dec">
              <a
                title="Swingman_z0"
                href="/playlist?id=6818649749"
                class="tit f-thide s-fc0"
                >Swingman_z0</a
              >
            </p>
            <p>
              <span class="s-fc4">by</span>
              <a
                title="Swingman_z0"
                href="/user/home?id=330933348"
                class="nm nm-icn f-thide s-fc3"
                >Swingman_z0</a
              >
            </p>
          </li>
          <li>
            <div class="u-cover u-cover-1">
              <img
                class="j-flag"
                src="http://p2.music.126.net/D7-hb42RyIeU_b33jJG6VA==/109951166145177000.jpg?param=140y140"
              />
              <a
                title="做最狠的rapper说最甜的话"
                href="/playlist?id=6840544635"
                class="msk"
              ></a>
              <div class="bottom">
                <a
                  class="icon-play f-fr"
                  title="播放"
                  href="javascript:;"
                  data-res-type="13"
                  data-res-id="6840544635"
                  data-res-action="play"
                ></a>
                <span class="icon-headset"></span>
                <span class="nb">105万</span>
              </div>
            </div>
            <p class="dec">
              <a
                title="做最狠的rapper说最甜的话"
                href="/playlist?id=6840544635"
                class="tit f-thide s-fc0"
                >做最狠的rapper说最甜的话</a
              >
            </p>
            <p>
              <span class="s-fc4">by</span>
              <a
                title="苏方一杰"
                href="/user/home?id=335703712"
                class="nm nm-icn f-thide s-fc3"
                >苏方一杰</a
              >
              <img
                style="
                  height: 13px;
                  width: 13px;
                  display: inline-block;
                  vertical-align: middle;
                "
                src="https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/4874132307/4499/f228/d867/da64b9725e125943ad4e14e4c72d0884.png"
              />
            </p>
          </li>
          <li>
            <div class="u-cover u-cover-1">
              <img
                class="j-flag"
                src="http://p2.music.126.net/9vSKUJSaAoQ4Odwsc4BH4g==/109951166335641267.jpg?param=140y140"
              />
              <a
                title="纯音乐||暂时在世界中失重"
                href="/playlist?id=6945112369"
                class="msk"
              ></a>
              <div class="bottom">
                <a
                  class="icon-play f-fr"
                  title="播放"
                  href="javascript:;"
                  data-res-type="13"
                  data-res-id="6945112369"
                  data-res-action="play"
                ></a>
                <span class="icon-headset"></span>
                <span class="nb">65万</span>
              </div>
            </div>
            <p class="dec">
              <a
                title="纯音乐||暂时在世界中失重"
                href="/playlist?id=6945112369"
                class="tit f-thide s-fc0"
                >纯音乐||暂时在世界中失重</a
              >
            </p>
            <p>
              <span class="s-fc4">by</span>
              <a
                title="傻瓜_fKQF"
                href="/user/home?id=5127211061"
                class="nm nm-icn f-thide s-fc3"
                >傻瓜_fKQF</a
              >
            </p>
          </li>
          <li>
            <div class="u-cover u-cover-1">
              <img
                class="j-flag"
                src="http://p2.music.126.net/jKEHW3sskul5nTX9GBER3A==/109951166273939018.jpg?param=140y140"
              />
              <a
                title="红眼特效？！ 猎杀时刻！"
                href="/playlist?id=6913579556"
                class="msk"
              ></a>
              <div class="bottom">
                <a
                  class="icon-play f-fr"
                  title="播放"
                  href="javascript:;"
                  data-res-type="13"
                  data-res-id="6913579556"
                  data-res-action="play"
                ></a>
                <span class="icon-headset"></span>
                <span class="nb">50万</span>
              </div>
            </div>
            <p class="dec">
              <a
                title="红眼特效？！ 猎杀时刻！"
                href="/playlist?id=6913579556"
                class="tit f-thide s-fc0"
                >红眼特效？！ 猎杀时刻！</a
              >
            </p>
            <p>
              <span class="s-fc4">by</span>
              <a
                title="Adm1n14trator"
                href="/user/home?id=562871056"
                class="nm nm-icn f-thide s-fc3"
                >Adm1n14trator</a
              >
            </p>
          </li>
          <li>
            <div class="u-cover u-cover-1">
              <img
                class="j-flag"
                src="http://p2.music.126.net/UCQa5eEZWxSKbnBwxz_Flg==/109951166002279099.jpg?param=140y140"
              />
              <a
                title="【练球必备】节奏感超强/篮球bgm"
                href="/playlist?id=6757658477"
                class="msk"
              ></a>
              <div class="bottom">
                <a
                  class="icon-play f-fr"
                  title="播放"
                  href="javascript:;"
                  data-res-type="13"
                  data-res-id="6757658477"
                  data-res-action="play"
                ></a>
                <span class="icon-headset"></span>
                <span class="nb">255万</span>
              </div>
            </div>
            <p class="dec">
              <a
                title="【练球必备】节奏感超强/篮球bgm"
                href="/playlist?id=6757658477"
                class="tit f-thide s-fc0"
                >【练球必备】节奏感超强/篮球bgm</a
              >
            </p>
            <p>
              <span class="s-fc4">by</span>
              <a
                title="Yege11"
                href="/user/home?id=499570832"
                class="nm nm-icn f-thide s-fc3"
                >Yege11</a
              >
              <img
                style="
                  height: 13px;
                  width: 13px;
                  display: inline-block;
                  vertical-align: middle;
                "
                src="https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/4874132307/4499/f228/d867/da64b9725e125943ad4e14e4c72d0884.png"
              />
            </p>
          </li>
          <li>
            <div class="u-cover u-cover-1">
              <img
                class="j-flag"
                src="http://p2.music.126.net/NDKMkYhfLAtf_Q8s-XOwVg==/109951166040080916.jpg?param=140y140"
              />
              <a
                title="『欧美流行』始于前奏—开口脆"
                href="/playlist?id=6724978342"
                class="msk"
              ></a>
              <div class="bottom">
                <a
                  class="icon-play f-fr"
                  title="播放"
                  href="javascript:;"
                  data-res-type="13"
                  data-res-id="6724978342"
                  data-res-action="play"
                ></a>
                <span class="icon-headset"></span>
                <span class="nb">220万</span>
              </div>
            </div>
            <p class="dec">
              <a
                title="『欧美流行』始于前奏—开口脆"
                href="/playlist?id=6724978342"
                class="tit f-thide s-fc0"
                >『欧美流行』始于前奏—开口脆</a
              >
            </p>
            <p>
              <span class="s-fc4">by</span>
              <a
                title="猛然间的剧变"
                href="/user/home?id=288691619"
                class="nm nm-icn f-thide s-fc3"
                >猛然间的剧变</a
              >
              <img
                style="
                  height: 13px;
                  width: 13px;
                  display: inline-block;
                  vertical-align: middle;
                "
                src="https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/4761340149/f4bf/64a1/1ea2/31a08617d7dfddb21fffdb92390ce268.png"
              />
            </p>
          </li>
          <li>
            <div class="u-cover u-cover-1">
              <img
                class="j-flag"
                src="http://p2.music.126.net/rq6si2YPcsYCVZ_9T8djQg==/109951166031913239.jpg?param=140y140"
              />
              <a
                title="欧美向｜生活总是充满美好的"
                href="/playlist?id=6776379524"
                class="msk"
              ></a>
              <div class="bottom">
                <a
                  class="icon-play f-fr"
                  title="播放"
                  href="javascript:;"
                  data-res-type="13"
                  data-res-id="6776379524"
                  data-res-action="play"
                ></a>
                <span class="icon-headset"></span>
                <span class="nb">203万</span>
              </div>
            </div>
            <p class="dec">
              <a
                title="欧美向｜生活总是充满美好的"
                href="/playlist?id=6776379524"
                class="tit f-thide s-fc0"
                >欧美向｜生活总是充满美好的</a
              >
            </p>
            <p>
              <span class="s-fc4">by</span>
              <a
                title="小黄啾眯"
                href="/user/home?id=415873918"
                class="nm nm-icn f-thide s-fc3"
                >小黄啾眯</a
              >
              <img
                style="
                  height: 13px;
                  width: 13px;
                  display: inline-block;
                  vertical-align: middle;
                "
                src="https://p5.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/11231827458/69e0/ee57/7a1a/0be25519330a8b35a82fc0efb13010b2.png"
              />
            </p>
          </li>
          <li>
            <div class="u-cover u-cover-1">
              <img
                class="j-flag"
                src="http://p2.music.126.net/I9dQSATe7H0Kn7yVgX7KFg==/109951166147919703.jpg?param=140y140"
              />
              <a
                title="Trap Rap ｜ 懒惰迷幻的宝藏说唱"
                href="/playlist?id=6842263243"
                class="msk"
              ></a>
              <div class="bottom">
                <a
                  class="icon-play f-fr"
                  title="播放"
                  href="javascript:;"
                  data-res-type="13"
                  data-res-id="6842263243"
                  data-res-action="play"
                ></a>
                <span class="icon-headset"></span>
                <span class="nb">185万</span>
              </div>
            </div>
            <p class="dec">
              <a
                title="Trap Rap ｜ 懒惰迷幻的宝藏说唱"
                href="/playlist?id=6842263243"
                class="tit f-thide s-fc0"
                >Trap Rap ｜ 懒惰迷幻的宝藏说唱</a
              >
            </p>
            <p>
              <span class="s-fc4">by</span>
              <a
                title="这条平凡的狗_QwQ"
                href="/user/home?id=109390499"
                class="nm nm-icn f-thide s-fc3"
                >这条平凡的狗_QwQ</a
              >
              <img
                style="
                  height: 13px;
                  width: 13px;
                  display: inline-block;
                  vertical-align: middle;
                "
                src="https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/4761340194/0903/b735/7c7a/0dddcdf78047d397d24125840e54ab5b.png"
              />
            </p>
          </li>
          <li>
            <div class="u-cover u-cover-1">
              <img
                class="j-flag"
                src="http://p2.music.126.net/b8pBaBY73cfNlfGXnGpetg==/109951166223958003.jpg?param=140y140"
              />
              <a
                title="欧美精选：一人一首代表作"
                href="/playlist?id=6887208022"
                class="msk"
              ></a>
              <div class="bottom">
                <a
                  class="icon-play f-fr"
                  title="播放"
                  href="javascript:;"
                  data-res-type="13"
                  data-res-id="6887208022"
                  data-res-action="play"
                ></a>
                <span class="icon-headset"></span>
                <span class="nb">63万</span>
              </div>
            </div>
            <p class="dec">
              <a
                title="欧美精选：一人一首代表作"
                href="/playlist?id=6887208022"
                class="tit f-thide s-fc0"
                >欧美精选：一人一首代表作</a
              >
            </p>
            <p>
              <span class="s-fc4">by</span>
              <a
                title="致悼词"
                href="/user/home?id=1610414255"
                class="nm nm-icn f-thide s-fc3"
                >致悼词</a
              >
              <img
                style="
                  height: 13px;
                  width: 13px;
                  display: inline-block;
                  vertical-align: middle;
                "
                src="https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/4761340168/ccce/35dd/ab2d/1a7c8ee0f6bb1fc2760cbb570dfee34f.png"
              />
            </p>
          </li>
          <li>
            <div class="u-cover u-cover-1">
              <img
                class="j-flag"
                src="http://p2.music.126.net/l5Xvk1WBcwWxL2pAwMxF8Q==/109951166192497599.jpg?param=140y140"
              />
              <a
                title="『情绪状态栏』置顶汹涌的伤痛"
                href="/playlist?id=6862967670"
                class="msk"
              ></a>
              <div class="bottom">
                <a
                  class="icon-play f-fr"
                  title="播放"
                  href="javascript:;"
                  data-res-type="13"
                  data-res-id="6862967670"
                  data-res-action="play"
                ></a>
                <span class="icon-headset"></span>
                <span class="nb">181万</span>
              </div>
            </div>
            <p class="dec">
              <a
                title="『情绪状态栏』置顶汹涌的伤痛"
                href="/playlist?id=6862967670"
                class="tit f-thide s-fc0"
                >『情绪状态栏』置顶汹涌的伤痛</a
              >
            </p>
            <p>
              <span class="s-fc4">by</span>
              <a
                title="OvbDhzBb"
                href="/user/home?id=4994602006"
                class="nm nm-icn f-thide s-fc3"
                >OvbDhzBb</a
              >
            </p>
          </li>
          <li>
            <div class="u-cover u-cover-1">
              <img
                class="j-flag"
                src="http://p2.music.126.net/ztTZZSmiZ29JM9tHHhD2TA==/109951166190596992.jpg?param=140y140"
              />
              <a
                title="今天是个rapper"
                href="/playlist?id=6861768687"
                class="msk"
              ></a>
              <div class="bottom">
                <a
                  class="icon-play f-fr"
                  title="播放"
                  href="javascript:;"
                  data-res-type="13"
                  data-res-id="6861768687"
                  data-res-action="play"
                ></a>
                <span class="icon-headset"></span>
                <span class="nb">59万</span>
              </div>
            </div>
            <p class="dec">
              <a
                title="今天是个rapper"
                href="/playlist?id=6861768687"
                class="tit f-thide s-fc0"
                >今天是个rapper</a
              >
            </p>
            <p>
              <span class="s-fc4">by</span>
              <a
                title="BSNDS"
                href="/user/home?id=1773379972"
                class="nm nm-icn f-thide s-fc3"
                >BSNDS</a
              >
            </p>
          </li>
          <li>
            <div class="u-cover u-cover-1">
              <img
                class="j-flag"
                src="http://p2.music.126.net/G-RDfW_QFYxJ0wPVTP6UmQ==/109951166369852189.jpg?param=140y140"
              />
              <a
                title="纯纯real黑怕歌单！能摇能炸还能走心"
                href="/playlist?id=6962106033"
                class="msk"
              ></a>
              <div class="bottom">
                <a
                  class="icon-play f-fr"
                  title="播放"
                  href="javascript:;"
                  data-res-type="13"
                  data-res-id="6962106033"
                  data-res-action="play"
                ></a>
                <span class="icon-headset"></span>
                <span class="nb">70万</span>
              </div>
            </div>
            <p class="dec">
              <a
                title="纯纯real黑怕歌单！能摇能炸还能走心"
                href="/playlist?id=6962106033"
                class="tit f-thide s-fc0"
                >纯纯real黑怕歌单！能摇能炸还能走心</a
              >
            </p>
            <p>
              <span class="s-fc4">by</span>
              <a
                title="马可波罗堡-"
                href="/user/home?id=4970468530"
                class="nm nm-icn f-thide s-fc3"
                >马可波罗堡-</a
              >
              <img
                style="
                  height: 13px;
                  width: 13px;
                  display: inline-block;
                  vertical-align: middle;
                "
                src="https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/4761340149/f4bf/64a1/1ea2/31a08617d7dfddb21fffdb92390ce268.png"
              />
            </p>
          </li>
          <li>
            <div class="u-cover u-cover-1">
              <img
                class="j-flag"
                src="http://p2.music.126.net/Zsi-SPrsRMzoRfHiKPpn0A==/109951166600353367.jpg?param=140y140"
              />
              <a
                title="欧美说唱 | 戴上耳机感受flow的轰炸"
                href="/playlist?id=7036572151"
                class="msk"
              ></a>
              <div class="bottom">
                <a
                  class="icon-play f-fr"
                  title="播放"
                  href="javascript:;"
                  data-res-type="13"
                  data-res-id="7036572151"
                  data-res-action="play"
                ></a>
                <span class="icon-headset"></span>
                <span class="nb">16万</span>
              </div>
            </div>
            <p class="dec">
              <a
                title="欧美说唱 | 戴上耳机感受flow的轰炸"
                href="/playlist?id=7036572151"
                class="tit f-thide s-fc0"
                >欧美说唱 | 戴上耳机感受flow的轰炸</a
              >
            </p>
            <p>
              <span class="s-fc4">by</span>
              <a
                title="维他鼠"
                href="/user/home?id=81604053"
                class="nm nm-icn f-thide s-fc3"
                >维他鼠</a
              >
              <img
                style="
                  height: 13px;
                  width: 13px;
                  display: inline-block;
                  vertical-align: middle;
                "
                src="https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/4761340149/f4bf/64a1/1ea2/31a08617d7dfddb21fffdb92390ce268.png"
              />
            </p>
          </li>
          <li>
            <div class="u-cover u-cover-1">
              <img
                class="j-flag"
                src="http://p2.music.126.net/bovvgR84po8BZ_u6fnJLuA==/109951166258879200.jpg?param=140y140"
              />
              <a
                title="黄昏伤感/情绪超市里的悲伤货架"
                href="/playlist?id=6906016795"
                class="msk"
              ></a>
              <div class="bottom">
                <a
                  class="icon-play f-fr"
                  title="播放"
                  href="javascript:;"
                  data-res-type="13"
                  data-res-id="6906016795"
                  data-res-action="play"
                ></a>
                <span class="icon-headset"></span>
                <span class="nb">130万</span>
              </div>
            </div>
            <p class="dec">
              <a
                title="黄昏伤感/情绪超市里的悲伤货架"
                href="/playlist?id=6906016795"
                class="tit f-thide s-fc0"
                >黄昏伤感/情绪超市里的悲伤货架</a
              >
            </p>
            <p>
              <span class="s-fc4">by</span>
              <a
                title="bg8n173951"
                href="/user/home?id=4953337112"
                class="nm nm-icn f-thide s-fc3"
                >bg8n173951</a
              >
            </p>
          </li>
          <li>
            <div class="u-cover u-cover-1">
              <img
                class="j-flag"
                src="http://p2.music.126.net/7IpYoiU0nLHUFaA2xL8-7w==/109951166258993239.jpg?param=140y140"
              />
              <a
                title="孤独治愈所 | 难过的事终将过去"
                href="/playlist?id=6906095673"
                class="msk"
              ></a>
              <div class="bottom">
                <a
                  class="icon-play f-fr"
                  title="播放"
                  href="javascript:;"
                  data-res-type="13"
                  data-res-id="6906095673"
                  data-res-action="play"
                ></a>
                <span class="icon-headset"></span>
                <span class="nb">99万</span>
              </div>
            </div>
            <p class="dec">
              <a
                title="孤独治愈所 | 难过的事终将过去"
                href="/playlist?id=6906095673"
                class="tit f-thide s-fc0"
                >孤独治愈所 | 难过的事终将过去</a
              >
            </p>
            <p>
              <span class="s-fc4">by</span>
              <a
                title="571号失恋选手"
                href="/user/home?id=5126442932"
                class="nm nm-icn f-thide s-fc3"
                >571号失恋选手</a
              >
            </p>
          </li>
          <li>
            <div class="u-cover u-cover-1">
              <img
                class="j-flag"
                src="http://p2.music.126.net/e3F6tbU8tzuexVYz5RsrNg==/109951166219182077.jpg?param=140y140"
              />
              <a
                title="『潮酷rap』偷偷浪漫吧 别让世俗知道"
                href="/playlist?id=6884960877"
                class="msk"
              ></a>
              <div class="bottom">
                <a
                  class="icon-play f-fr"
                  title="播放"
                  href="javascript:;"
                  data-res-type="13"
                  data-res-id="6884960877"
                  data-res-action="play"
                ></a>
                <span class="icon-headset"></span>
                <span class="nb">105万</span>
              </div>
            </div>
            <p class="dec">
              <a
                title="『潮酷rap』偷偷浪漫吧 别让世俗知道"
                href="/playlist?id=6884960877"
                class="tit f-thide s-fc0"
                >『潮酷rap』偷偷浪漫吧 别让世俗知道</a
              >
            </p>
            <p>
              <span class="s-fc4">by</span>
              <a
                title="小软溪"
                href="/user/home?id=1418990258"
                class="nm nm-icn f-thide s-fc3"
                >小软溪</a
              >
            </p>
          </li>
          <li>
            <div class="u-cover u-cover-1">
              <img
                class="j-flag"
                src="http://p2.music.126.net/1mUt6qqAHw5XIPVu0aPyKA==/109951166350288512.jpg?param=140y140"
              />
              <a
                title="国产emo说唱 | 没人能感同身受"
                href="/playlist?id=6950428911"
                class="msk"
              ></a>
              <div class="bottom">
                <a
                  class="icon-play f-fr"
                  title="播放"
                  href="javascript:;"
                  data-res-type="13"
                  data-res-id="6950428911"
                  data-res-action="play"
                ></a>
                <span class="icon-headset"></span>
                <span class="nb">222万</span>
              </div>
            </div>
            <p class="dec">
              <a
                title="国产emo说唱 | 没人能感同身受"
                href="/playlist?id=6950428911"
                class="tit f-thide s-fc0"
                >国产emo说唱 | 没人能感同身受</a
              >
            </p>
            <p>
              <span class="s-fc4">by</span>
              <a
                title="十二月的雪_026"
                href="/user/home?id=2103569167"
                class="nm nm-icn f-thide s-fc3"
                >十二月的雪_026</a
              >
            </p>
          </li>
          <li>
            <div class="u-cover u-cover-1">
              <img
                class="j-flag"
                src="http://p2.music.126.net/uVwuA2P1xp69wPUD5_QYgg==/109951166353584799.jpg?param=140y140"
              />
              <a
                title="午 夜 失 眠 俱 樂 部 「拒绝Emo」"
                href="/playlist?id=6952219126"
                class="msk"
              ></a>
              <div class="bottom">
                <a
                  class="icon-play f-fr"
                  title="播放"
                  href="javascript:;"
                  data-res-type="13"
                  data-res-id="6952219126"
                  data-res-action="play"
                ></a>
                <span class="icon-headset"></span>
                <span class="nb">59万</span>
              </div>
            </div>
            <p class="dec">
              <a
                title="午 夜 失 眠 俱 樂 部 「拒绝Emo」"
                href="/playlist?id=6952219126"
                class="tit f-thide s-fc0"
                >午 夜 失 眠 俱 樂 部 「拒绝Emo」</a
              >
            </p>
            <p>
              <span class="s-fc4">by</span>
              <a
                title="马可波罗堡-"
                href="/user/home?id=4970468530"
                class="nm nm-icn f-thide s-fc3"
                >马可波罗堡-</a
              >
              <img
                style="
                  height: 13px;
                  width: 13px;
                  display: inline-block;
                  vertical-align: middle;
                "
                src="https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/4761340149/f4bf/64a1/1ea2/31a08617d7dfddb21fffdb92390ce268.png"
              />
            </p>
          </li>
        </ul>
        <div id="m-pl-pager">
          <div class="u-page">
            <a href="javascript:void(0)" class="zbtn zprv js-disabled"
              >上一页</a
            >
            <a href="javascript:void(0)" class="zpgi js-selected">1</a>
            <a
              href="/discover/playlist/?order=hot&amp;cat=%E5%85%A8%E9%83%A8&amp;limit=35&amp;offset=35"
              class="zpgi"
              >2</a
            >
            <a
              href="/discover/playlist/?order=hot&amp;cat=%E5%85%A8%E9%83%A8&amp;limit=35&amp;offset=70"
              class="zpgi"
              >3</a
            >
            <a
              href="/discover/playlist/?order=hot&amp;cat=%E5%85%A8%E9%83%A8&amp;limit=35&amp;offset=105"
              class="zpgi"
              >4</a
            >
            <a
              href="/discover/playlist/?order=hot&amp;cat=%E5%85%A8%E9%83%A8&amp;limit=35&amp;offset=140"
              class="zpgi"
              >5</a
            >
            <a
              href="/discover/playlist/?order=hot&amp;cat=%E5%85%A8%E9%83%A8&amp;limit=35&amp;offset=175"
              class="zpgi"
              >6</a
            >
            <a
              href="/discover/playlist/?order=hot&amp;cat=%E5%85%A8%E9%83%A8&amp;limit=35&amp;offset=210"
              class="zpgi"
              >7</a
            >
            <a
              href="/discover/playlist/?order=hot&amp;cat=%E5%85%A8%E9%83%A8&amp;limit=35&amp;offset=245"
              class="zpgi"
              >8</a
            >
            <span class="zdot">...</span>
            <a
              href="/discover/playlist/?order=hot&amp;cat=%E5%85%A8%E9%83%A8&amp;limit=35&amp;offset=1260"
              class="zpgi"
              >37</a
            >
            <a
              href="/discover/playlist/?order=hot&amp;cat=%E5%85%A8%E9%83%A8&amp;limit=35&amp;offset=35"
              class="zbtn znxt"
              >下一页</a
            >
          </div>
        </div>
      </div>
    </div>
    <Top></Top>
    <Foot />
  </div>
</template>

<script>
import Foot from "@/components/Foot";
import Top from '../components/Top.vue';
export default {
  name: "songSheet",
  components: {
    Foot,
    Top
  },
  data() {
    return {
      isShowSort: true,
    };
  },
};
</script>

<style scoped>
.g-wrap {
  padding: 40px;
}
.f-pr {
  position: relative;
  zoom: 1;
}
.u-title {
  height: 40px;
  border-bottom: 2px solid #c20c0c;
}
.u-title h3 {
  float: left;
  font-size: 24px;
  font-weight: normal;
  line-height: normal;
}
.u-title .menu {
  _position: absolute;
  font-size: 12px;
  font-weight: normal;
  margin: 2px 0 0 12px;
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
.u-btn,
div.u-page a,
div.u-page a.js-selected,
div.u-page a.znxt.js-disabled,
div.u-page a.zprv.js-disabled {
  background: url("../assets/images/button.png") no-repeat 0 9999px;
}
.u-btn2-1 {
  color: #333;
  background-position: right -100px;
}
.s-fc0,
a.s-fc0:hover {
  color: #000;
}
a:hover {
  text-decoration: underline;
  color: #333;
}
.u-btn2-1 i {
  color: #333;
  background-position: 0 -59px;
  pointer-events: none;
}
.u-title .menu i {
  color: #0c73c2 !important;
  padding: 0 10px 0 15px;
  _padding-right: 20px;
}
.u-icn,
.u-title-1 .out .icon {
  background: url("../assets/images/icon.png") no-repeat 0 9999px;
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
.u-icn,
.u-icn2,
.u-icn3 {
  display: inline-block;
  overflow: hidden;
  vertical-align: middle;
}
.u-icn-38 {
  width: 8px;
  height: 5px;
  background-position: -70px -543px;
}
.f-fr {
  float: right;
}
.u-btn {
  display: inline-block;
}
.u-btn-hot {
  height: 29px;
  background-position: 0 0;
  border-radius: 3px;
}
.u-title .u-btn-hot .a1,
.u-title .u-btn-new .a2,
.u-title .u-btn-area .a2,
.u-title .u-btn-song .a1 {
  color: #fff;
}

.u-title .u-btn .a1,
.u-title .u-btn .a2 {
  float: left;
  width: 46px;
  height: 29px;
  line-height: 29px;
  text-align: center;
}
/* 全部分类,未写完 */
.n-sltlyr {
  display: none;
  position: absolute;
  top: 75px;
  z-index: 5;
  width: 720px;
}
/* 歌单列表 */
.p-pl .m-cvrlst {
  margin: 30px 0 0 -50px;
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
.u-cover {
  position: relative;
  display: block;
}
.u-cover-1 {
  width: 140px;
  height: 140px;
}
.u-cover img {
  display: block;
  width: 100%;
  height: 100%;
}
.u-cover .bottom,
.u-cover .msk,
.n-musicsd .lst .avatar .msk {
  background: url("../assets/images/coverall.png") no-repeat;
}
.u-cover .msk {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.u-cover-1 .msk {
  background-position: 0 0;
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
.n-sltlyr .hd,
.n-sltlyr .bd,
.n-sltlyr .ft {
  background: url("../assets/images/sltlyr.png") no-repeat;
}
.u-cover .icon-headset {
  float: left;
  width: 14px;
  height: 11px;
  background-position: 0 -24px;
  margin: 9px 5px 9px 10px;
}
.u-cover .icon-headset,
.u-cover .icon-play {
  display: inline-block;
}
.u-cover .nb {
  float: left;
  margin: 7px 0 0 0;
}
.m-cvrlst li .dec {
  margin: 8px 0 3px;
  font-size: 14px;
}
.m-cvrlst li p {
  width: 100%;
}
.m-cvrlst li .tit {
  display: inline-block;
  max-width: 100%;
  _width: 100%;
  vertical-align: middle;
}

.s-fc0,
a.s-fc0:hover {
  color: #000;
}
.f-thide {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
}
.m-cvrlst li p {
  width: 100%;
}
.s-fc4,
a.s-fc4:hover {
  color: #999;
}

.m-cvrlst li .nm {
  display: inline-block;
  max-width: 85%;
  vertical-align: middle;
}
.m-cvrlst li .nm-icn {
  max-width: 76%;
  margin: 0 3px;
}
.u-cover .icon-play:hover {
  background-position: 0 -60px;
}
.u-btn2 {
  padding: 0 5px 0 0;
  white-space: nowrap;
}
.u-title .menu .u-icn-38 {
  margin-left: 5px;
}
.u-btn2-1:hover {
  color: #333;
  background-position: right -182px;
}
.u-btn2,
.u-btn2:hover {
  text-decoration: none;
}
.u-btn2-1:hover i {
  background-position: 0 -141px;
}
.n-sltlyr-show {
  display: block;
}
.n-sltlyr .hd {
  height: 32px;
}
.n-sltlyr .icn {
  position: absolute;
  top: 2px;
  left: 132px;
  display: inline-block;
  width: 24px;
  height: 11px;
  background-position: -48px 0;
  vertical-align: middle;
}.n-sltlyr .bd {
    width: 700px;
    padding: 0 10px;
    background-position: -720px 0;
    background-repeat: repeat-y;
}.n-sltlyr h3 {
    height: 37px;
    padding-left: 26px;
    border-bottom: 1px solid #e6e6e6;
    font-weight: normal;
}.u-btn-g {
    width: 75px;
    height: 26px;
    background-position: 0 -64px;
    text-align: center;
    line-height: 26px;
}
.n-sltlyr dt {
    float: left;
    display: inline;
    width: 70px;
    margin: 0 -100px 0 26px;
    padding-top: 15px;
    border-right: 1px solid #e6e6e6;
    font-weight: bold;
}
.u-btn {
    display: inline-block;
}
</style>