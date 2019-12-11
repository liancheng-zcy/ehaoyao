import styled from 'styled-components'
export const CategoryWarper = styled.div`
  width:100%;
  height:calc(100% - 1.173333rem);
  .category-content{
  display: flex;
  height: 100%;
  font-weight: 300;
  .primary {
    flex: 0 0 2.226667rem;
    width: 2.226667rem;
    background-color: #f0f2f5;
    overflow-y: auto;
    ul{
        .primary-item {
          padding: 0 .133333rem;
          width: 100%;
          height: 1.32rem;
          line-height: 1.32rem;
          text-align: center;
          white-space: nowrap;
          text-overflow: ellipsis;
          font-size: .32rem;
          font-weight: 400;
          border-left: .093333rem solid #f0f2f5;
          border-right: 1px solid #e5e5e5;
          border-bottom: 1px solid #e5e5e5;
          color: #181818;
          cursor: pointer;
          overflow: hidden;
        }
        .on {
            background-color: #fff;
            border-right-color: #fff;
            border-left-color: #ff344d;
            color: #ff344d;
        }
      }
    }
    .btn-return-top {
        position: fixed;
        right: .333333rem;
        bottom: 4.266667rem;
        width: .8rem;
        height: .8rem;
        line-height: .8rem;
        border-radius: 50%;
        background: url("http://m.ehaoyao.com/_nuxt/img/btn-return-top.68c3e70.png") 50%/.8rem no-repeat;
        z-index: 999;
    }
  }
    
`
export const SubjectWrap = styled.div`
    .subject{
      padding-top: .133333rem;
      width: 7.733333rem;
      background-color: #fff;
      font-size: 0;
      overflow: auto;
      height:100%;
        .label-list {
        padding-left: .133333rem;
        .item {
          float: left;
          margin-right: .2rem;
          margin-bottom: .2rem;
          padding: 0 .133333rem;
          width: 1.68rem;
          height: .96rem;
          line-height: .96rem;
          font-size: .32rem;
          color: #898989;
          border: 1px solid #a4a4a4;
          border-radius: .133333rem;
          text-align: center;
          white-space: nowrap;
          text-overflow: ellipsis;
          box-sizing: border-box;
          overflow: hidden;
      }
    }
    .clearfix, .clearfix:after, .clearfix:before {
        content: "";
        clear: both;
        display: block;
    }
    .subject-item {
        margin-bottom: .133333rem;
        padding-top: .2rem;
        .item-title {
          height: .8rem;
          line-height: .8rem;
          font-size: .373333rem;
          color: #898989;
          text-align: center;
          &:before {
            display: inline-block;
            margin-top: -1px;
            height: 1px;
            width: .8rem;
            content: "";
            border-bottom: 1px solid #e5e5e5;
            vertical-align: middle;
            margin-right: .4rem;
        }
        &:after{
          display: inline-block;
          margin-top: -1px;
          height: 1px;
          width: .8rem;
          content: "";
          border-bottom: 1px solid #e5e5e5;
          vertical-align: middle;
          margin-left: .4rem;
        }
      }
      .item-list {
          display: inline-flex;
          flex-direction: column;
          justify-content: center;
          padding-top: .133333rem;
          width: 2.573333rem;
          height: 2.64rem;
          white-space: nowrap;
          text-overflow: ellipsis;
          font-size: .32rem;
          color: #4e4e4e;
          text-align: center;
          border-radius: .066667rem;
          cursor: pointer;
          overflow: hidden;
          .img {
            display: block;
            margin: 0 auto .133333rem;
            width: 1.6rem;
            height: 1.466667rem;
        }
        >span {
            height: .586667rem;
            line-height: .586667rem;
        }
      }
    }
  } 
`