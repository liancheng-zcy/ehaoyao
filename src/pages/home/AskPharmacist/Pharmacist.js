import styled from 'styled-components'

export const PharmacistContentWrap = styled.div`
  .askPharmacist-wrapper{
    .tips {
      height: .72rem;
      line-height: .72rem;
      text-align: center;
      background-color: #fff0f2;
      font-size: .32rem;
      color: #ff344d;
    }
    .pharmacist-list {
        background-color: #fff;
       .item {
          display: flex;
          padding-top: .4rem;
          padding-left: .333333rem;
          border-bottom: 1px solid #e5e5e5;
          overflow: hidden;
          .img {
            display: block;
            width: 1.626667rem;
            height: 1.626667rem;
            border: 1px solid #e5e5e5;
            border-radius: 50%;
            overflow: hidden;
            img {
            width: 100%;
            height: 100%;
        }
       }
        .info {
            flex: 1;
            padding-left: .333333rem;
            .named {
              height: .6rem;
              font-size: .426667rem;
              color: #181818;
              >span {
                padding-left: .2rem;
                font-size: .293333rem;
                color: #898989;
            }
          }
        .aptitudesNo {
              height: .6rem;
              line-height: .6rem;
              font-size: .32rem;
              color: #4e4e4e;
          }
          .labels {
              display: flex;
              height: .666667rem;
              align-items: center;
              span {
                display: inline-block;
                margin-right: .133333rem;
                padding: 0 .093333rem;
                height: .346667rem;
                line-height: .346667rem;
                font-size: .266667rem;
                color: #6282ac;
                background-color: #f4f8ff;
            }
          }
        }
        .opt {
            padding-top: .72rem;
            width: 1.733333rem;
            .btn_askNow {
              display: block;
              padding-top: .533333rem;
              height: 1.12rem;
              background: url("http://m.ehaoyao.com/_nuxt/img/bg_askNow.ac21d14.png") no-repeat top/.533333rem .44rem;
              font-size: .293333rem;
              text-align: center;
              color: #ff344d;
          }
        }
      }
    }
  }
`