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
  .dMain{
    display: flex;
    margin: 0 auto;
    flex: 1;
    width: 5.6rem;
    height: 1.173333rem;
    line-height: 1.173333rem;
    align-items: center;
     .nav {
        display: flex;
        padding-left: 1.333333rem;
        width: 100%;
        .menu-list {
          display: inline-flex;
          flex: 1;
          justify-content: space-around;
          .item {
            display: inline-block;
            padding: 0 .133333rem;
            height: 1.2rem;
            line-height: 1.2rem;
            font-size: .426667rem;
            font-family: \\5FAE\8F6F\96C5\9ED1;
            color: #fff;
            border-bottom: .08rem solid #ff344d;
            white-space: nowrap;
        }
        .item.active {
            border-bottom: .08rem solid #ffc9d3;
        }
      }
    .btn-search {
        display: inline-flex;
        width: .933333rem;
        background: url("http://m.ehaoyao.com/_nuxt/img/bg_menu_search.4f2b3d2.png") no-repeat 100%/.48rem;
    }
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

export const HeaderWrap = styled.header`
    display: flex;
    width: 100%;
    height: 1.173333rem;
    background-color: #ff344d;
    align-items: center;
    font-family: \\5FAE\8F6F\96C5\9ED1;
    /* position: fixed;
    top:0;
    left:0;
    z-index:3; */
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
        width: 100%;
        height: .773333rem;
        border-radius: .066667rem;
        text-align: center;
        background: #fff url("http://m.ehaoyao.com/_nuxt/img/icon-search.35ffc25.png") no-repeat .173333rem;
        background-size: .533333rem .4rem;
        .searchText {
          display: block;
          width: 100%;
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
   .right {
      position: relative;
      width: 1.2rem;
      height: 100%;
      line-height: 1.173333rem;
      text-align: center;
      font-size: .373333rem;
      color: #fff;
      .icon-layout {
        display: inline-block;
        width: 1.173333rem;
        height: 1.173333rem;
        vertical-align: middle;
        background: url("http://m.ehaoyao.com/_nuxt/img/icon-layout-list.800b97c.png") .133333rem no-repeat;
        background-size: .466667rem .413333rem;
    }
    .row {
        background-image: url("http://m.ehaoyao.com/_nuxt/img/icon-layout-row.bf5d917.png");
    }
  }
`

export const SortWrap = styled.ul`
    display: flex;
    height: .96rem;
    width:100%;
    justify-content: space-around;
    border-bottom: 1px solid #dadada;
    background-color: #fff;
    /* position: fixed;
    top:1.173333rem;
    left:0;
    z-index:3; */
    li {
      display: inline-flex;
      padding: 0 .266667rem;
      height: .96rem;
      line-height: .96rem;
      font-size: .373333rem;
      color: #494949;
      align-items: center;
      justify-content: center;
      cursor: pointer;
  }
  .on {
      color: #ff344d;
      border-bottom: .053333rem solid #ff344d;
  }
  
  .order-by {
      display: inline-flex;
      flex-direction: column;
      width: .373333rem;
      height: .373333rem;
      justify-content: space-between;
      align-items: center;
      background: url("http://m.ehaoyao.com/_nuxt/img/icon-sort.9221c20.png") no-repeat 50%/.16rem .306667rem;
  }
  .on .order-by {
      background: url("http://m.ehaoyao.com/_nuxt/img/icon-sort-asc.28dc6eb.png") no-repeat 50%/.16rem .306667rem;
  }
  .on.desc .order-by {
      background: url("http://m.ehaoyao.com/_nuxt/img/icon-sort-desc.b2264eb.png") no-repeat 50%/.16rem .306667rem;
  }
`