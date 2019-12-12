import styled from 'styled-components'

export const CartWrap= styled.div`
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
        display: inline-flex;
        position: relative;
        width: 100%;
        color: #fff;
        text-align: center;
        font-size: .426667rem;
        .menu-tab {
          display: inline-flex;
          width: 100%;
          padding: 0 1.6rem;
          justify-content: space-between;
          .tab-item {
            position: relative;
            height: 1.173333rem;
            font-size: .373333rem;
            i {
              position: absolute;
              top: .16rem;
              right: -.24rem;
              width: .4rem;
              height: .4rem;
              line-height: .4rem;
              border-radius: 50%;
              background: #fff;
              color: #ff344d;
              font-size: .32rem;
              font-style: normal;
          }
        }
        .tab-item.on {
            font-size: .426667rem;
            border-bottom: 2px solid #fff;
        }
      }
    }
  }
.right {
      width: 1.2rem;
      text-align: left;
      position: relative;
      height: 100%;
      line-height: 1.173333rem;
      font-size: .373333rem;
      color: #fff;
  }
}
`

export const HeaderWrap = styled.div`
  
`