import styled from 'styled-components'

export const SearchWrap = styled.header`
    display: flex;
    width: 10rem;
    height: 1.173333rem;
    background-color: #ff344d;
    align-items: center;
    font-family: \\5FAE\8F6F\96C5\9ED1;
    .goback {
      margin-left: .133333rem;
      width: 1.066667rem;
      height: 100%;
      background: url("http://m.ehaoyao.com/_nuxt/img/icon_header_goback.052eff7.png") no-repeat 50%;
      background-size: .533333rem .533333rem;
      cursor: pointer;
  }
   .main {
      display: flex;
      margin: 0 auto;
      flex: 1;
      width: 5.6rem;
      height: 1.173333rem;
      line-height: 1.173333rem;
      align-items: center;
      .search-wrapper {
        display: flex;
        padding-left: .866667rem;
        width: 90%;
        height: .773333rem;
        border-radius: .066667rem;
        text-align: center;
        background: #fff url("http://m.ehaoyao.com/_nuxt/img/icon-search.35ffc25.png") no-repeat .173333rem;
        background-size: .533333rem .4rem;
        .search-alink {
          display: inline-block;
          width: 90%;
          height: .773333rem;
          text-decoration: none;
          .searchTip {
            display: block;
            flex: 1;
            height: .773333rem;
            line-height: .773333rem;
            color: #898989;
            border: 0;
            font-size: .373333rem;
            background-color: #fff;
            text-align: left;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        }
      }
    }
  }
  .right {
      position: relative;
      width: 10%;
      height: 100%;
      line-height: 1.173333rem;
      text-align: center;
      font-size: .373333rem;
      color: #fff;
  }
`
export const ComHeaderWrap = styled.div`
  .header {
    display: flex;
    width: 10rem;
    height: 1.173333rem;
    background-color: #ff344d;
    align-items: center;
    font-family: \\5FAE\8F6F\96C5\9ED1;
    .goback {
      margin-left: .133333rem;
      width: 1.066667rem;
      height: 100%;
      background: url("http://m.ehaoyao.com/_nuxt/img/icon_header_goback.052eff7.png") no-repeat 50%;
      background-size: .533333rem .533333rem;
      cursor: pointer;
  }
  .main {
      display: flex;
      margin: 0 auto;
      flex: 1;
      width: 5.6rem;
      height: 1.173333rem;
      line-height: 1.173333rem;
      align-items: center;
      .main-title {
        width: 100%;
        color: #fff;
        text-align: center;
        font-size: .426667rem;
        display: inline-block;
    }
  }
  .right {
      position: relative;
      width: 1.6rem;
      height: 100%;
      line-height: 1.173333rem;
      text-align: center;
      font-size: .373333rem;
      color: #fff;
      display: flex;
      justify-content:center;
      .icon-menu {
        display: inline-block;
        width: .8rem;
        height: .533333rem;
        vertical-align: middle;
        background: url("http://m.ehaoyao.com/_nuxt/img/icon_header_menu.67f31cc.png") 50%/.8rem .4rem no-repeat;
    }
  }
}

`