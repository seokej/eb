import styled from "styled-components";

const EbComponentStyle = styled.div`
  position: relative;
  margin: 0;
  overflow-x: hidden;

  header {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 17px 100px;
    font-size: 18px;
    font-weight: 600;
    background: transparent;
    transform: translateY(-100%);
    opacity: 0;
    z-index: 4;
    transition: transform 0.3s, color 0.5s;

    @media (max-width: 750px) {
      padding: 0 21px 0 24px;
    }

    .logo {
      width: 100px;
      height: 100px;
      transition: filter 0.4s;
    }

    .nav {
      display: flex;
      align-items: center;

      @media (max-width: 750px) {
        display: none;
      }

      .nav-link {
        display: flex;
        align-items: center;
        padding: 23px 25px;
      }
    }
  }

  .fixed {
    transform: translate(0);
    opacity: 1;
  }

  .hide {
    visibility: hidden;
    opacity: 0;
  }

  .section1 {
    position: relative;
    height: 100vh;
    overflow: hidden;

    .section1-wrap {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }

    .section1-bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      max-height: 100vh;
      z-index: 3;
      overflow: hidden;
    }

    .section1-vid {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      z-index: 2;
    }

    .section1-text {
      position: absolute;
      top: 50%;
      left: 50%;
      padding: 0 32px;
      font-size: 52px;
      font-weight: 700;
      line-height: 1.35;
      word-break: keep-all;
      white-space: nowrap;
      transform: translate(-50%, -50%);
      z-index: 3;
      opacity: 0;
    }

    .section1-text4 {
      font-size: 24px;
      line-height: 1.67;
      font-weight: 700;
    }

    .section1-text5 {
      font-size: 24px;
      line-height: 1.67;
      font-weight: 700;
    }
  }

  .section2 {
    position: relative;
    width: 100%;
    height: 100vh;

    .section2-img-wrap {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;

      .section2-img-inner {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -2;
        overflow: hidden;
      }

      img {
        width: 100%;
        height: 100vh;
        object-fit: cover;
      }
    }

    .section2-bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      max-height: 100vh;
      z-index: 3;
      overflow: hidden;
    }

    .section2-text-title-wrap {
      position: absolute;
      top: 50%;
      left: 50%;
      padding: 0 32px;
      font-size: 100px;
      transform: translate(-50%, -50%);
      word-break: keep-all;
      z-index: 3;
    }

    .section2-text {
      font-weight: 700;
      line-height: 1.2;
    }

    .section2-text-bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      max-height: 100vh;
      z-index: 3;
      overflow: hidden;
    }

    .section2-text4 {
      position: absolute;
      top: 50%;
      left: 50%;
      padding: 0 32px;
      transform: translate(-50%, -50%);
      font-size: 24px;
      font-weight: 600;
      line-height: 1.8;
      word-break: keep-all;
      z-index: 4;
    }

    .section2-text4-bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      max-height: 100vh;
      z-index: 3;
      overflow: hidden;
    }
  }

  .section3 {
    min-height: 100vh;
    padding: 235px 100px 80px;
    color: #000;
    background: #fff;

    .section3-text-wrap {
      font-size: 72px;
      font-weight: bold;
      line-height: 1.28;
    }

    .section3-text-desc-wrap {
      max-width: 50%;
      margin-left: auto;
      padding-left: 100px;
      font-size: 24px;
      font-weight: 700;
      line-height: 1.67;
    }
  }

  .section4 {
    position: relative;
    padding: 300px 0 320px;
    background: url(/images/prove.jpg) no-repeat 50% / cover;
    overflow: hidden;
    color: #fff;

    .sction4-bg-wrap {
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      width: 100%;
      overflow: hidden;
    }

    .section4-bg-before {
      position: absolute;
      top: 0;
      right: 0;
      width: 400px;
      height: 150px;
      background: #fff;
    }

    .section4-bg-after {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 400px;
      height: 150px;
      background: #fff;
    }

    .section4-img {
      position: relative;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      max-width: 100%;
      height: auto;
    }

    .section4-text-wrap {
      position: absolute;
      top: 50%;
      left: 50%;
      text-align: center;
      font-size: 72px;
      font-weight: 700;
      line-height: 1.28;
      transform: translate(-50%, -50%);
    }
  }

  .section5 {
    display: flex;
    justify-content: space-between;
    padding: 0 100px;

    img {
      max-width: 100%;
    }

    .section5-text-wrap {
      position: sticky;
      display: flex;
      align-items: center;
      font-size: 73px;
      line-height: 90px;
      font-weight: bold;
      height: 100vh;
    }

    .section5-desc-wrap {
      display: flex;
      flex: 1;
      flex-direction: column;
      padding: 100vh 0 100vh 50px;

      .section5-img {
        max-width: 46.4%;
      }

      .section5-img01,
      .section5-img03 {
        margin-left: auto;
      }

      .section5-img p {
        margin: 12px 0 0;
        font-size: 16px;
        font-weight: 600;
        line-height: 1.5;
      }

      .section5-img:not(:last-child) {
        margin-bottom: 186px;
      }
    }
  }

  .section6 {
    position: relative;
    height: auto;
    display: flex;

    .section6-top {
      display: flex;
      align-items: stretch;
      width: auto;
      height: 100vh;
      gap: 100px;

      .section6-top-left {
        display: flex;
        align-items: center;
        gap: 160px;

        .title {
          flex-shrink: 0;
          margin-left: 100px;
          font-size: 73px;
          font-weight: bold;
          line-height: 90px;
        }

        .section6-top-desc-wrap {
          display: flex;
          gap: 70px;
        }

        .section6-top-desc-item {
          position: relative;

          .icon-box {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 296px;
            height: 296px;
            border: 2px solid #fff;
            border-radius: 60px;
            background-color: #000;

            img {
              max-width: 54%;
            }
          }
        }

        .section6-top-desc-item + .section6-top-desc-item::after {
          content: "";
          position: absolute;
          top: calc(296px / 2);
          left: -55px;
          display: block;
          width: 28px;
          height: 28px;
          border: 8px solid #fff;
          border-width: 8px 8px 0 0;
          transform: translateY(-50%) rotate(45deg);
        }

        .text-box {
          margin-top: 30px;
          padding-left: 20px;
          font-size: 24px;
          font-weight: bold;
          line-height: 36px;
        }
      }

      .section6-top-right {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 100vh;
        flex-shrink: 0;

        img {
          width: 500px;
          margin: 0 auto;
        }

        .model-text {
          position: absolute;
          top: 50%;
          left: 50%;
          display: flex;
          flex-direction: column;
          gap: 235px;
          text-align: center;
          transform: translate(-50%, -63%);

          .bottom-box {
            display: flex;
            gap: 240px;
          }

          strong {
            font-size: 24px;
            font-weight: bold;
          }

          p {
            margin-top: 10px;
            font-weight: bold;
          }
        }
      }
    }

    .section6-bottom {
      position: absolute;
      bottom: 35px;
      left: 100px;
      color: #999;
      font-size: 14px;
      font-weight: 500;
      line-height: 24px;
    }
  }

  .section7 {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    padding: 40px 100px 0;

    .section7-title {
      font-size: 72px;
      font-weight: bold;
      line-height: 1.25;
      align-self: flex-start;
    }

    .section7-desc {
      align-self: flex-end;
      font-size: 24px;
      font-weight: bold;
      line-height: 1.6;
    }
  }

  .banner {
    position: relative;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    width: 100%;
    height: 175px;
    margin-top: 40px;

    .banner-text {
      position: absolute;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      font-size: 40px;
      font-weight: bold;
      line-height: 1.25;
      transition: opacity 0.3s;
      z-index: 1;
    }

    .banner-text-bg {
      position: absolute;
      top: 1px;
      left: 0;
      width: 100%;
      height: 100%;
      outline: 1px solid #000;
      backdrop-filter: blur(50px);
      transition: opacity 0.3s;
      z-index: 1;
    }

    .banner-color-01 {
      position: relative;
      left: 0px;
      background-color: #e657af;
    }

    .banner-color-02 {
      position: relative;
      left: 0px;
      background-color: #0049ff;
    }

    .banner-color-03 {
      position: relative;
      background-color: #00bf41;
    }
  }

  .section8 {
    position: relative;
    display: flex;
    align-items: center;
    height: 100vh;
    padding: 0 100px;
    margin: 0 0 200px;
    overflow: hidden;

    .section8-horizon {
      display: flex;
      align-items: center;
      column-gap: 190px;

      .section8-title {
        font-size: 72px;
        font-weight: bold;
        line-height: 1.28;
      }

      .section8-card-wrap {
        display: flex;
        align-items: flex-start;

        .section8-card-item:last-child {
          z-index: 1;
        }

        .section8-card-item {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          width: 400px;
          height: 540px;
          margin-right: 40px;
          padding: 34px;
          flex-shrink: 0;
          border-radius: 20px;
          border: solid 2px #fff;
          background-color: #000;

          > img {
            max-width: 100%;
            height: auto;
            padding-right: 50px;
          }
        }

        .section8-card-lock-img-wrap {
          position: relative;
          width: 400px;
          height: 540px;
          margin-right: 0;
          padding: 0;
          flex-shrink: 0;

          .section8-card-lock-img-inner {
            position: relative;
            width: 100%;
            height: 100%;
            color: #fff;
            border-radius: 20px;
            border: 2px solid transparent;
            background-image: linear-gradient(#000, #000),
              linear-gradient(315deg, #e657af, #0049ff, #43cf2e);
            background-origin: border-box;
            background-clip: content-box, border-box;
            overflow: hidden;

            .section8-card-lock-wrap {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
            }

            .section8-card-lock-img {
              width: 150px;
            }

            .section8-card-text {
              font-size: 40px;
              font-weight: bold;
              color: transparent;
              background: linear-gradient(90deg, #43cf2e, #0049ff, #e657af);
              background-clip: text;
              -webkit-background-clip: text;
            }
          }
        }

        .section8-card-item-title {
          position: relative;
          min-height: 110px;
          font-size: 50px;
          font-weight: bold;
          line-height: 1;

          .section8-card-item-star {
            position: absolute;
            right: 0;
            top: 12px;
            font-size: 30px;
            font-weight: 400;
            font-family: "noto sans", sans-serif;
            line-height: 0.67;
            text-align: right;
          }
        }
      }
    }

    .section8-card-item-bottom {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .section8-card-item-name {
        font-size: 24px;
        line-height: 1.67;
      }

      .section8-card-item-icon {
        display: block;
        width: 40px;
        height: 40px;
      }
    }

    .section8-vertical {
      position: absolute;
      bottom: 0;
      left: 0;
      display: flex;
      flex-direction: column;
      width: 100%;
      padding: 0px 100px;

      .section8-vertical-inner {
        display: flex;
        flex-direction: column;
        margin-left: 400px;
        word-break: keep-all;

        .section8-vertical-box {
          padding-left: 207px;

          .section8-vertical-title {
            font-size: 72px;
            font-weight: bold;
            line-height: 1.28;
          }

          .section8-vertical-desc {
            margin-top: 34px;
            font-size: 24px;
            font-weight: bold;
            line-height: 1.67;
          }

          .section8-vertical-info-wrap {
            display: flex;
            flex-direction: column;
            gap: 50px;
            margin: 80px 0 160px;

            .section8-vertical-info {
              display: flex;
              align-items: center;
              gap: 40px;

              .section8-vertical-info-box {
                position: relative;
                display: flex;
                align-items: center;
                justify-content: center;
                width: 400px;
                height: 200px;
                color: #fff;
                border-radius: 20px;
                border: 2px solid transparent;
                background-image: linear-gradient(#000, #000),
                  linear-gradient(315deg, #e657af, #0049ff, #43cf2e);
                background-origin: border-box;
                background-clip: content-box, border-box;
                overflow: hidden;

                .section8-vertical-info-box-text {
                  font-size: 28px;
                  line-height: 1.43;
                  font-weight: bold;
                  text-align: center;
                  background: linear-gradient(90deg, #43cf2e, #0049ff, #e657af);
                  -webkit-background-clip: text;
                  -webkit-text-fill-color: transparent;
                }
              }

              .section8-vertical-info-desc {
                font-size: 24px;
                font-weight: bold;
                line-height: 1.67;
              }
            }
          }

          .section8-service-wrap {
            .section8-service-title {
              font-size: 60px;
              font-weight: bold;
              line-height: 1;
            }

            .section8-service-inner {
              display: flex;
              margin-top: 80px;
              column-gap: 50px;

              img {
                max-width: 100%;
                height: auto;
              }

              .section8-service-item {
                max-width: 300px;
              }

              .section8-service-item-title {
                margin-top: 24px;
                font-size: 24px;
                font-weight: bold;
                line-height: 1.67;
              }
            }
          }
        }

        .section8-vertical-card-wrap {
          position: relative;
          display: flex;
          align-items: center;
          width: calc(100% + 2px);
          height: 100vh;

          .section8-vertical-card-lock {
            position: absolute;
            top: 50%;
            left: -398px;
            width: 400px;
            height: 540px;
            padding: 40px 35px;
            border-radius: 20px;
            background: linear-gradient(135deg, #43cf2e, #0049ff, #e657af);
            transform: translateY(-50%);
            z-index: 3;

            .bg {
              position: relative;
              top: 50%;
              left: 50%;
              width: 396px;
              height: 536px;
              background: #000;
              border-radius: 20px;
              transform: translate(-50%, -50%);
            }

            .section8-vertical-card-text {
              position: absolute;
              top: 50%;
              left: 50%;
              font-size: 40px;
              font-weight: bold;
              color: transparent;
              background: linear-gradient(90deg, #43cf2e, #0049ff, #e657af);
              background-clip: text;
              transform: translate(-50%, -50%);
              z-index: 3;
            }

            .light {
              content: "";
              position: absolute;
              top: 50%;
              left: 50%;
              width: 100%;
              height: 100%;
              background: linear-gradient(
                315deg,
                #ee5787 15%,
                #0049ff,
                #43cf2e 85%
              );
              filter: blur(70px);
              opacity: 0.5;
              transform: translate(-50%, -50%);
              z-index: -1;
            }
          }

          .section8-vertical-card-item {
            position: relative;
            width: 400px;
            height: 540px;
            padding: 34px;
            margin-left: 41px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            flex-shrink: 0;
            color: #fff;
            border-radius: 20px;
            background-blend-mode: multiply;
            background-color: hsla(0, 0%, 42%, 0.3);
            background-color: #888;
            overflow: hidden;

            .section8-vertical-card-item-head {
              position: relative;
              display: flex;
              justify-content: space-between;
              min-height: 110px;
              font-size: 50px;
              font-weight: bold;
              line-height: 1;

              .section8-vertical-card-item-star {
                position: absolute;
                right: 0;
                top: 12px;
                font-size: 30px;
                font-weight: 400;
                font-family: "noto sans", sans-serif;
                line-height: 0.67;
                text-align: right;
              }
            }

            .section8-vertical-card-item-desc {
              position: relative;
              padding-top: 40px;
              font-size: 16px;
              font-weight: bold;
              line-height: 1.63;
              color: #fff;
            }

            .section8-vertical-card-item-bottom {
              position: relative;
              display: flex;
              align-items: center;
              justify-content: space-between;

              .section8-vertical-card-item-profile {
                display: flex;
                align-items: center;
                gap: 9px;
              }

              .section8-vertical-card-item-circle {
                display: block;
                width: 40px;
                height: 40px;
                border-radius: 50%;
                background-color: #ff009d;
              }

              .section8-vertical-card-item-name {
                font-weight: bold;
              }
            }
          }

          .section8-vertical-card-item:nth-child(2) {
            z-index: -1;
          }
          .section8-vertical-card-item:nth-child(3) {
            z-index: -2;
          }
          .section8-vertical-card-item:nth-child(4) {
            z-index: -3;
          }

          .section8-vertical-card-item:nth-child(2) .section8-vertical-card-bg {
            background: url(/images/image-sec-2-1.png) no-repeat top/cover;
          }

          .section8-vertical-card-item:nth-child(3) .section8-vertical-card-bg {
            background: url(/images/image-sec-2-2.png) no-repeat top/cover;
          }

          .section8-vertical-card-item:nth-child(4) .section8-vertical-card-bg {
            background: url(/images/image-sec-2-3.png) no-repeat top/cover;
          }

          .section8-vertical-card-bg {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            filter: blur(40px);
            transition: all 0.5s;
            z-index: -1;
          }

          .section8-vertical-end-text {
            position: absolute;
            bottom: 0;
            display: flex;
            align-items: center;
            height: 100vh;
            padding-left: 200px;
            font-size: 73px;
            line-height: 90px;
            font-weight: 700;
            color: #fff;
            opacity: calc(var(--progress-full) * 2.5);
          }
        }
      }
    }
  }

  .section9 {
    width: 100%;
    height: 100vh;
    padding: 0 100px;

    .section9-text-wrap {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .section9-text-title-wrap {
      align-self: start;
      width: 50%;
      font-size: 72px;
      line-height: 90px;
      font-weight: bold;
      word-break: keep-all;
    }

    .section9-text-desc-wrap {
      align-self: end;
      width: 50%;
      padding-left: 100px;
      font-size: 24px;
      font-weight: bold;
      line-height: 40px;
      word-break: keep-all;
    }
  }

  .section10 {
    position: relative;
    padding: 300px 0 320px;
    background: url(/images/prove2.jpg) no-repeat 50% / cover;
    overflow: hidden;
    color: #fff;

    .sction4-bg-wrap {
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      width: 100%;
      overflow: hidden;
    }

    .section10-bg-before {
      position: absolute;
      top: 0;
      right: 0;
      width: 400px;
      height: 150px;
      background: #fff;
    }

    .section10-bg-after {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 400px;
      height: 150px;
      background: #fff;
    }

    .section10-img {
      position: relative;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      max-width: 100%;
      height: auto;
    }

    .section10-text-wrap {
      position: absolute;
      top: 50%;
      left: 50%;
      text-align: center;
      font-size: 72px;
      font-weight: 700;
      line-height: 1.28;
      transform: translate(-50%, -50%);
    }
  }

  .section11 {
    display: flex;
    position: relative;

    .section11-inner {
      display: flex;
      align-items: center;
      top: 0;
      left: 0;
      height: 100vh;
      padding: 0 100px;
    }

    .section11-title {
      font-size: 73px;
      font-weight: bold;
      line-height: 90px;
      margin-right: 120px;
    }

    .section11-card-wrap {
      display: flex;
      align-items: center;
      justify-content: center;

      .section11-card-item {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 400px;
        height: 540px;
        margin-left: 40px;
        padding: 40px 35px;
        color: #fff;
        border-radius: 20px;
        overflow: hidden;

        .section11-card-top {
          display: flex;
          justify-content: space-between;
        }

        .section11-card-top-title {
          font-size: 50px;
          font-weight: 600;
        }

        .section11-card-top-right {
          text-align: right;
          font-size: 30px;
          font-family: sans-serif;
        }

        .section11-card-top-subtitle {
          font-size: 16px;
          font-weight: bold;
          white-space: nowrap;
        }

        .section11-card-desc-wrap {
          margin-top: 40px;
          opacity: 0;
        }

        .section11-card-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .section11-card-icon {
          display: inline-block;
        }

        .section11-card-icon.expand {
          opacity: 1;
        }

        .section11-card-icon.contract {
          opacity: 0;
        }

        .section11-card-desc {
          strong {
            display: block;
            font-size: 20px;
            margin-bottom: 15px;
          }
        }

        .section11-card-desc:not(:last-child) {
          margin-bottom: 40px;
        }

        strong {
          font-weight: bold;
        }

        .section11-card-icon {
          width: 40px;
        }
      }

      .section11-card-item:nth-child(1) {
        background: #e657af;
      }

      .section11-card-item:nth-child(2) {
        background: #0049ff;
      }

      .section11-card-item:nth-child(3)::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: url(/images/image-sec-3-3.png) no-repeat center / cover #ccc;
        transition-delay: 0.2s;
        transition: all 0.3s;
        z-index: -1;
      }

      #section11-card-item-bg.blur::before {
        transform: scale(1.2);
        filter: blur(40px);
      }

      .section11-card-end {
        padding-left: 170px;
        font-weight: bold;
        font-size: 24px;
        line-height: 1.67;
      }

      .section11-arrow {
        position: absolute;
        bottom: 30px;
        left: 50%;
        transform: translateX(-50%);
        font-size: 24px;
        font-weight: bold;
        text-align: center;
        opacity: 0;
      }

      .section11-arrow.fadein {
        animation: fadein 1s;
        animation-fill-mode: forwards;
      }
      .section11-arrow.fadeout {
        animation: fadeout 1s;
        animation-fill-mode: forwards;
      }

      @keyframes fadein {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      @keyframes fadeout {
        from {
          opacity: 1;
        }
        to {
          opacity: 0;
        }
      }
    }
  }
`;

export default EbComponentStyle;
