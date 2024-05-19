import "./App.css";
import "./notosans.css";
import styled from "@emotion/styled";
import { jsx, css } from "@emotion/react";
import React, { useRef, useLayoutEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const EbComponentStyle = styled.div`
  position: relative;
  width: 100%;
  height: 100dvh;
  margin: 0;
  color: white;
  font-family: "Noto Sans KR", sans-serif;

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
    color: #fff;
    background: transparent;
    transform: translateY(-100%);
    opacity: 0;
    z-index: 4;
    transition: transform 0.3s, color 0.5s;

    .logo {
      width: 100px;
      height: 100px;
      filter: brightness(0) invert(1);
      transition: filter 0.5s;
    }

    .nav {
      display: flex;
      align-items: center;

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

  section {
    width: 100%;
    height: 100%;
    max-height: 100dvh;
    background-color: black;
  }

  .section1 {
    position: relative;
    height: 100dvh;
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
      max-height: 100dvh;
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
      transform: translate(-50%, -50%);
      z-index: 3;
    }

    .section1-text4 {
      font-size: 24px;
      line-height: 1.67;
      font-weight: 700;
    }
  }

  .section2 {
    position: relative;
    width: 100%;
    height: 100dvh;

    .section2-wrap {
      position: absolute;
      width: 100%;
      height: 100vh;
      top: 0;
      left: 0;
      overflow: hidden;
      object-fit: cover;

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
      max-height: 100dvh;
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

    .section2-text4 {
      opacity: 0;
      font-size: 24px;
      font-weight: 600;
    }
  }
`;

function App() {
  gsap.registerPlugin(useGSAP, ScrollTrigger);

  useGSAP(() => {
    var ele = document.getElementById("header");

    /**
     * section1 관련 timeline 코드
     */
    const section1 = gsap.timeline();

    section1
      .addLabel("a")
      .to(
        ".section1-bg",
        { backgroundColor: "rgba(0,0,0,0.6)", duration: 100 },
        "a"
      )
      .from(".section1-text1", { autoAlpha: 0, duration: 100 }, "a")
      .to(".section1-text1", { autoAlpha: 0, duration: 100 }, "+=1")
      .from(".section1-text2", { autoAlpha: 0, duration: 100 }, "+=1")
      .to(".section1-text2", { autoAlpha: 0, duration: 100 }, "+=1")
      .from(".section1-text3", { autoAlpha: 0, duration: 100 }, "+=1")
      .to(".section1-text3", { autoAlpha: 0, duration: 100 }, "+=1")
      .from(".section1-text4", { autoAlpha: 0, duration: 100 }, "+=1");

    /**
     * section1 관련 scroll 코드
     */
    ScrollTrigger.create({
      animation: section1,
      trigger: ".section1",
      start: "top top",
      end: "+=7000",
      scrub: true,
      pin: true,
      toggleClass: {
        targets: "#top-btn",
        className: "hide",
      },
    });

    /**
     * nav 관련 scroll 애니메이션 코드
     */
    ScrollTrigger.create({
      trigger: "body",
      start: "1000px 0%",
      end: "100% 100%",
      onEnter: function () {
        ele.classList.add("fixed");
      },
      onLeaveBack: function () {
        ele.classList.remove("fixed");
      },
    });

    /**
     * section2 관련 timeline 코드
     */
    const section2 = gsap.timeline();

    section2
      .addLabel("a")
      .to(
        ".section2-bg",
        { backgroundColor: "rgba(0,0,0,0.6)", duration: 100 },
        "a"
      )
      .from(".section2-text-title-wrap", { autoAlpha: 0, duration: 100 }, "a")
      .to(".section2-text1", { xPercent: 100, duration: 20 }, "b")
      .to(".section2-text3", { xPercent: -100, duration: 20 }, "b")
      .to(
        ".section2-bg",
        { backgroundColor: "rgba(0,0,0,0)", duration: 20 },
        "b"
      )
      .to(".section2-text-title-wrap", { autoAlpha: 0, duration: 100 }, "+=1");

    /**
     * section2 관련 scroll 애니메이션 코드
     */
    ScrollTrigger.create({
      animation: section2,
      trigger: ".section2",
      start: "top top",
      end: "+=7000",
      scrub: true,
      pin: true,
      markers: true,
    });
  }, []);

  return (
    <EbComponentStyle>
      <header id="header">
        <div className="logo">
          <img src="./images/ebc_logo.svg" alt="로고" />
        </div>
        <div>
          <ul className="nav">
            <li>
              <a href="#" className="nav-link">
                시나리오보기
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                제휴문의
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill-rule="nonzero" fill="none">
                    <path
                      stroke="#FFF"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4 15h5v5H4zM9 15h5v5H9zM14 15h5v5h-5zM14 5h5v5h-5zM14 10h5v5h-5zM9 10h5v5H9zM4 10h5v5H4z"
                    ></path>
                  </g>
                </svg>
                KR
              </a>
            </li>
          </ul>
        </div>
      </header>

      <section id="section1" className="section1">
        <div className="section1-wrap">
          <div class="section1-bg" />
          <video loop autoPlay muted playsInline className="section1-vid">
            {/* ios,safari용 video source */}
            <source
              src="/images/Archivo-VariableFont_Medium_C_PC.mp4"
              type="video/mp4"
            />

            {/* 768px 이하 */}
            <source
              src="/images/Archivo-VariableFont_Medium_C_MO.mp4"
              type="video/mp4"
              media="(max-width:768px)"
            />
          </video>

          <div className="section1-text-wrap">
            <p className="section1-text section1-text1">
              DATA ID는 나만의
              <br />
              데이터 아이덴티티입니다.
            </p>
            <p className="section1-text section1-text2">
              이용자 개인이 데이터 소유권을 갖고
              <br />
              언제 어디서든 나를 증명하는
              <br />
              데이터 패스포트이자
            </p>
            <p className="section1-text section1-text3">
              다양한 서비스 이용을 가능하게 하는
              <br />
              패스워드리스 접속 방식입니다.
            </p>
            <p className="section1-text section1-text4">
              증명하기 어려운 개인의 창작 활동과 프리랜서 경험을 보호하고
              <br />
              신뢰할 만한 자산으로 측정하기 위해서는 어떻게 관리해야 할까요?
            </p>
          </div>
        </div>
      </section>

      <section className="section section2">
        <div className="section2-bg" />
        <div className="section2-wrap">
          <img src="/images/img-showcase01-pc.jpg" alt="기록하는모습" />
          <img src="/images/img-showcase02-pc.jpg" alt="플룻" />
          <img src="/images/img-showcase03-pc.jpg" alt="자전거" />
        </div>
        <div className="section2-text-title-wrap">
          <p className="section2-text section2-text1">기록하고</p>
          <p className="section2-text section2-text2">증명하고</p>
          <p className="section2-text section2-text3">성장하기</p>
        </div>
        <p className="section2-text section2-text4">
          엔터프라이즈블록체인은 블록체인 네트워크 <br />
          DATA ID를 활용해 그 문제를 해결하고 새로운 방식을 <br />
          제안하고자 합니다.
        </p>
      </section>

      {/* <section className="section section3">
        <div>
          <p>긱 워커</p>
          <p>개인사업자</p>
          <p>크리에이터</p>
        </div>

        <div>
          파트타임 단기업무, 부업, 프리랜서 활동. <br />
          그 어떤 것도 상관없어요. <br />
          분산되어 있던 소득과 거래 이력부터 자격, 창작물 등의 <br />
          재능 상세를 담은 포트폴리오까지. <br />
          나의 이력과 재능을 증명할 정보를 모두 담을 수 있어요.
        </div>
      </section> */}
    </EbComponentStyle>
  );
}

export default App;
