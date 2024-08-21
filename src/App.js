import EbComponentStyle from "./styles/EbComponentStyle";
import "./App.css";
import "./font.css";
import "./reset.css";
import React from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function App() {
  document.body.classList.add('dark');
  
  gsap.registerPlugin(useGSAP, ScrollTrigger);

  useGSAP(() => {
    var header = document.getElementById("header");
    var body = document.body;
    var logo = document.getElementById("logo");
    var navLogo = document.getElementById("navLogo");
    var section5ele = document.getElementById("section5");

    /**
     * nav 관련 scroll 애니메이션 코드
     */
    ScrollTrigger.create({
      trigger: "body",
      start: "1000px 0%",
      end: "100% 100%",
      onEnter: function () {
        header.classList.add("fixed");
      },
      onLeaveBack: function () {
        header.classList.remove("fixed");
      },
    });

    /**
     * section1 관련 animation 코드
     */
    const section1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".section1",
        start: "top top",
        end: "+=7000",
        scrub: true,
        pin: true,
        toggleClass: {
          targets: "#top-btn",
          className: "hide",
        },
      },
    });

    document
      .querySelectorAll(".section1-text-wrap p")
      .forEach((elem, index, array) => {
        if (index === array.length) {
          section1.from(elem, { opacity: 1, duration: 20 }, "+=1");
        } else {
          section1.to(elem, { autoAlpha: 1, duration: 20 });
          if (index !== array.length - 2) {
            if (index === 0) {
              section1.to(".section1 .section1-bg", {
                backgroundColor: "rgba(0,0,0,0.6)",
                duration: 20,
              });
            }
            section1.to(elem, { autoAlpha: 0, duration: 100 }, "+=1");
          }
        }
      });

    /**
     * section2 관련 animation 코드
     */
    const section2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".section2",
        start: "top top",
        end: "+=7000",
        scrub: true,
        pin: true,
      },
    });

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
      .to(".section2-text-title-wrap", { autoAlpha: 0, duration: 20 }, "+=1")
      .to(".section2 .section2-img-inner:nth-child(3)", {
        height: 0,
        duration: 20,
      })
      .to(".section2 .section2-img-inner:nth-child(2)", {
        height: 0,
        duration: 20,
      })
      .to(".section2 .section2-text-bg", {
        backgroundColor: "rgba(0,0,0,0.4)",
        duration: 20,
      })
      .from(".section2 .section2-text4", { autoAlpha: 0, duration: 20 });

    /**
     * section3 관련 animation 코드
     */
    gsap.timeline({
      scrollTrigger: {
        trigger: ".section3",
        start: "top 10%",
        end: "100% 10%",
        anticipatePin: 1,
        onEnter: function () {
          body.classList.remove("dark");
        },
        onLeaveBack: function () {
          body.classList.add("dark");
        },
      },
    });

    /**
     * section4 관련 animation 코드
     */
    const section4 = gsap.timeline({
      scrollTrigger: {
        trigger: ".section4",
        start: "-10% 52%",
        end: "45% 52%",
        scrub: true,
      },
    });

    section4
      .addLabel("a")
      .from(".section4-bg-before", 1, { xPercent: 100, duration: 1 }, "a")
      .from(".section4-bg-after", { xPercent: -100, duration: 1 }, "a")
      .to(".section4-text1", { xPercent: -70, duration: 1 }, "a")
      .to(".section4-text3", { xPercent: 80, duration: 1 }, "a");

    /**
     * section5 관련 animation 코드
     */
    const section5 = gsap.timeline({
      scrollTrigger: {
        trigger: ".section5",
        start: "top top",
        end: "100% 100%",
        pin: ".section5-text-wrap",
        scrub: true,
      },
    });

    section5.addLabel("a");

    /**
     * section6 관련 animation 코드
    */
    ScrollTrigger.create({
      trigger:".section6",
      start: "0% 55%",
      end:"45% 55%",
      markers: false,
      onEnter: function () {
        body.classList.add("dark");
      },
      onLeaveBack: function () {
        body.classList.remove("dark");
      },
    })

    const section6 = gsap.timeline();

    let div = document.querySelector(".section6-top-left");
    let eleWidth = div.offsetWidth + 100;

    section6
      .addLabel("a")
      .to('.section6-top', { x: -eleWidth }, "a");
    
    ScrollTrigger.create({
      animation: section6,
      trigger:".section6",
      start: "top top",
      end:"+=3000",
      pin:true,
      markers:false,
      scrub:true,
    })

    /**
     * banner 관련 animation 코드
    */
    // const banner = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: ".banner",
    //     start: "0% 52%",
    //     end: "45% 52%",
    //     scrub: true,
    //   },
    // });

    // banner
    //   .addLabel("a")
    //   .from(".section4-bg-after", { xPercent: -100, duration: 1 }, "a")
    //   .to(".section4-text3", { xPercent: 80, duration: 1 }, "a");

  }, []);

  return (
    <EbComponentStyle>
      <header id="header">
        <div id="logo" className="logo">
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
                  <g fillRule="nonzero" fill="none">
                    <path
                      id="navLogo"
                      className="navLogo"
                      stroke="#FFF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
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
          <div className="section1-bg" />
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
            <p className="section1-text section1-text5">
              증명하기 어려운 개인의 창작 활동과 프리랜서 경험을 보호하고
              <br />
              신뢰할 만한 자산으로 측정하기 위해서는 어떻게 관리해야 할까요?
            </p>
          </div>
        </div>
      </section>
      <section className="section2">
        <div className="section2-bg" />
        <div className="section2-img-wrap">
          <div className="section2-img-inner">
            <img
              className="section2-img section2-img03"
              src="/images/img-showcase03-pc.jpg"
              alt="자전거"
            />
          </div>
          <div className="section2-img-inner">
            <img
              className="section2-img section2-img02"
              src="/images/img-showcase02-pc.jpg"
              alt="플룻"
            />
          </div>
          <div className="section2-img-inner">
            <img
              className="section2-img section2-img01"
              src="/images/img-showcase01-pc.jpg"
              alt="기록하는모습"
            />
          </div>
        </div>
        <div className="section2-text-title-wrap">
          <p className="section2-text section2-text1">기록하고</p>
          <p className="section2-text section2-text2">증명하고</p>
          <p className="section2-text section2-text3">성장하기</p>
        </div>
        <div className="section2-text-bg" />
        <p className="section2-text section2-text4">
          엔터프라이즈블록체인은 블록체인 네트워크 <br />
          DATA ID를 활용해 그 문제를 해결하고 새로운 방식을 <br />
          제안하고자 합니다.
        </p>
      </section>

      <section className="section3">
        <div className="section3-text-wrap">
          <p>긱 워커</p>
          <p>개인사업자</p>
          <p>크리에이터</p>
        </div>

        <div className="section3-text-desc-wrap">
          파트타임 단기업무, 부업, 프리랜서 활동. <br />
          그 어떤 것도 상관없어요. <br />
          분산되어 있던 소득과 거래 이력부터 자격, 창작물 등의 <br />
          재능 상세를 담은 포트폴리오까지. <br />
          나의 이력과 재능을 증명할 정보를 모두 담을 수 있어요.
        </div>
      </section>

      <section className="section4">
        <div className="section4-bg-before" />
        <div className="section4-bg-after" />
        <div className="section4-text-wrap">
          <p className="section4-text1">가치를</p>
          <p className="section4-text2">증명하고 싶다면</p>
          <p className="section4-text3">누구든지.</p>
        </div>
      </section>

      <section id="section5" className="section5">
        <div className="section5-text-wrap">
          <p>당신의<br/>            
            다양한 재능을<br/>
            DATA ID에.
          </p>
        </div>
        <div className="section5-desc-wrap">
          <div className="section5-img section5-img01">
            <img src="/images/talent-01.jpg" alt="플라워클래스" />
            <p>플라워 클래스를 운영하는 정호영 씨도</p>
          </div>
          <div className="section5-img section5-img02">
            <img src="/images/talent-02.jpg" alt="바리스타" />
            <p>카페를 운영하는 김은혜 씨도</p>
          </div>
          <div className="section5-img section5-img03">
            <img src="/images/talent-03.jpg" alt="개발자" />
            <p>프리랜서 개발자 송보름 씨도</p>
          </div>
        </div>
      </section>

      <section className="section6">
        <div className="section6-top">
            <div className="section6-top-left">
              <h3 className="title">
                  불가능을<br/>
                  DATA ID로<br/>
                  가능하게.
              </h3>
              <ul className="section6-top-desc-wrap">
                <li className="section6-top-desc-item">
                    <div className="icon-box">
                        <img src="/images/possibility-system.png" alt="" />
                    </div>
                    <div className="text-box">
                        <p>
                            기축데이터, 금융,<br/>
                            사회 전반 시스템 부재
                        </p>
                    </div>
                </li>
                <li className="section6-top-desc-item">
                    <div className="icon-box">
                        <img src="/images/possibility-prove.png" alt="" />
                    </div>
                    <div className="text-box">
                        <p>
                            개인의 소득 증빙, 재능<br/>
                            증명 필요
                        </p>
                    </div>
                </li>
                <li className="section6-top-desc-item">
                    <div className="icon-box">
                        <img src="/images/possibility-nft.png" alt="" />
                    </div>
                    <div className="text-box">
                        <p>
                            DATA ID 통해 재능 자산<br/>
                            소유권 증명
                        </p>
                    </div>
                </li>
                <li className="section6-top-desc-item">
                    <div className="icon-box">
                        <img src="/images/possibility-global.png" alt="" />
                    </div>
                    <div className="text-box">
                        <p>
                            커리어 성장,<br/>
                            금융 혜택으로 연결
                        </p>
                    </div>
                </li>
              </ul>
            </div>
            <div className="section6-top-right">
              <img src="/images/graphic-cut-pc.png" alt="DATA ID 모형" />
              <div className="model-text">
                <div className="top-box">
                  <strong>증명</strong>
                  <p>DATA ID</p>
                </div>
                <div className="bottom-box">
                  <div className="left">
                    <strong>기록</strong>
                    <p>기축데이터</p>
                  </div>
                  <div className="right">
                    <strong>성장</strong>
                    <p>D커리어, 금융</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
        
          <p className="section6-bottom">
              DATA ID는 나만의 데이터 아이덴티티입니다<br/>
              이용자 개인이 데이터 소유권을 갖고 언제 어디서든 나를 증명하는 데이터 패스포트이자 다양한 서비스 이용을 가능케하는 패스워드리스 접속 방식입니다.
          </p>
      </section>
      
      <section className="section7">
        <div className="section7-title">
          <p>쉽고 간편하게</p>
          <p>DATA ID로 정보를</p>
          <p>보관하고</p>
          <p>언제 어디서든</p>
          <p>증명해보세요.</p>
        </div>

        <div className="section7-desc">
          DATA ID는 개인의 능력 인증서 같은 역할을 해요. <br />
          블록체인에 기록된 덕분에 신뢰할 수 있고, <br />
          즉시 확인 가능하고, 유연해진 데이터는, <br />
          개인의 재능 자산에 대한 소유권 증명을 가능하게 합니다.
        </div>
      </section>

      <section className="banner">
        <div className="banner-text">
          DATA ID는 당신을 기록하고 증명하며, 당신의 성장을 도울 수 있어요.
        </div>
        <div className="banner-color-01"/>
        <div className="banner-color-02"/>
        <div className="banner-color-03"/>
      </section>

      {/*
      <section>
        <div>
          <div>
            <p>안전하고</p>
            <p>대체불가능한</p>
            <p>DATA ID.</p>
          </div>
          <div>
            <div>
              <span>CREATOR</span>
              <span>****</span>
              <img src="/images/card-code-img-1.png" alt="code" />
            </div>
            <div>
              <span>
                GIG
                <br />
                WORKER
              </span>
              <span>****</span>
              <img src="/images/card-code-img-2.png" alt="code" />
            </div>
            <div>
              <span>
                SELF
                <br />
                EMPLOYED
              </span>
              <span>****</span>
              <img src="/images/card-code-img-3.png" alt="code" />
            </div>
            <div>
              <img src="/images/unlock-icon.png" alt="unlock" />
              <img src="/images/lock-icon.png" alt="lock" />
            </div>
            <div>
              <span>DATA ID</span>
            </div>
          </div>
        </div>
        <div>
          <div>
            <p>더 나은 일거리와 재능 거래,</p>
            <p>금융 서비스 이용까지.</p>
            <p>모든 게 가능해져요.</p>
          </div>
          <div>
            DATA ID는 또 다른 기회와 가치를 연결합니다. DATA ID를 통해 나에게
            <br />
            맞는 일을 쉽고 빠르게 찾을 수 있고, 금융 서비스 이용이 가능해집니다.
            <br />
            창작물의 권리를 지키고, 그 재능을 판매해 수익을 나누는 선순환의
            구조도
            <br />
            만들 수 있습니다.
          </div>
          <div>
            <div>
              <div>
                <div>
                  TALENT
                  <br />
                  MARKETPLACE
                </div>
                <div>DATA ID 기반 지역 일거리 매칭 서비스</div>
              </div>
              <div>
                <div>GIG FINANCE</div>
                <div>긱 이코노미 최적화 디지털 금융 솔루션</div>
              </div>
              <div>
                <div>
                  TALENT
                  <br />
                  ASSETIZATION
                </div>
                <div>크리에이터 재능 자산화 및 가치 창출</div>
              </div>
            </div>

            <div>
              <div>운영중인 서비스</div>

              <div>
                <div>
                  <img src="/images/service-item-1.png" alt="요긱(Yogig)" />
                  일거리 매칭 서비스 요긱(Yogig)
                </div>
                <div>
                  <img src="/images/service-item-2.png" alt="어랏(Alot)" />
                  크리에이터 커뮤니티 마켓 어랏(Alot)
                </div>
                <div>
                  <img src="/images/service-item-3.png" alt="JOOB" />
                  글로벌 재능 매칭 플랫폼 JOOB
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <span>CREATOR</span>
            <span>****</span>
            <div>
              크리에이터들이 만들어 낸 다양한 창작물과 재능을 <br />
              자산화, 토큰화 할 수 있는 기반을 만들어요.
            </div>
            <div>
              <span></span>
              <span>model_top</span>
              <img src="/images/expand-icon.png" alt="배경안흐린상태" />
              <img src="/images/contract-icon.png" alt="배경흐려진상태" />
            </div>
            <img src="/images/image-sec-2-1.png" alt="헤드셋낀여자" />
          </div>
          <div>
            <span>
              GIG
              <br />
              WORKER
            </span>
            <span>****</span>
            <div>
              블록체인 기반의 거래 구조 덕분에 긱 워커의 <br />
              재능과 경력, 평판을 투명하게 거래하고 흩어진 <br />
              이력을 관리할 수 있어요.
            </div>
            <div>
              <span></span>
              <span>elon.M</span>
              <img src="/images/expand-icon.png" alt="배경안흐린상태" />
              <img src="/images/contract-icon.png" alt="배경흐려진상태" />
            </div>
            <img src="/images/image-sec-2-2.png" alt="가방멘여자" />
          </div>
          <div>
            <span>
              SELF
              <br />
              EMPLOYED
            </span>
            <span>****</span>
            <div>
              개인사업자의 소득과 거래 이력, 경험과 전문성을 <br />
              쉽게 증명할 수 있어서 금융 상품을 이용하기도 더 <br />
              쉬워져요.
            </div>
            <div>
              <span></span>
              <span>cafe22</span>
              <img src="/images/expand-icon.png" alt="배경안흐린상태" />
              <img src="/images/contract-icon.png" alt="배경흐려진상태" />
            </div>
            <img
              src="/images/image-sec-2-3.png"
              alt="가방들고걷고있는여자"
            />
          </div>
          <div>
            <p>누구든</p>
            <p>무엇이든</p>
          </div>
        </div>
      </section>
      */}

      {/*
      <section>
        <div>
          <p>재능 자산을 기축으로</p>
          <p>시장은 변화하고 있어요.</p>
        </div>
        <div>
          과거에는 국가와 기관에 대한 신뢰를 바탕으로 법정 화폐나 <br />
          증권을 거래했다면, 오늘날에는 탈중앙화가 빠르게 이루어져 <br />
          암호화폐와 NFT같은 가상자산 금융 채널이 늘고 있죠. <br />
          최근에는 긱워커와 크리에이터의 숫자와 소득이 증가하며 <br />
          국내외 기업들이 빅데이터를 활용해 이들과 새로운 금융 서비스를 <br />
          발전시키겠다고 선언하는 사례가 늘고 있어요.
        </div>
      </section>
      */}

      {/*
      <section>
        <div>
          <p>글로벌 블록체인</p>
          <p>네트워크를 기반으로</p>
          <p>시작하는 도약.</p>
        </div>
        <img src="/images/prove2.jpg" alt="하늘" />
      </section>
      */}

      {/*
      <section>
        <div>
          <div>
            전통 금융에서 <br />
            미래 금융으로.
          </div>
          <div>
            <div>
              <p>전통자산</p>
              <div>
                <span>****</span>
                <span>기축자산</span>
              </div>
              <div>
                <span>상품</span>
                <span>금융상품, 서비스</span>
              </div>
              <div>
                <span>자산</span>
                <span>FIAT, 유가증권</span>
              </div>
              <div>
                <span>신뢰</span>
                <span>
                  국가, 기관 등 중앙체계에 대한 신뢰 핀테크 등 B2C 서비스
                </span>
              </div>
              <div>
                <div>핀테크 등 B2C 서비스</div>
                <div>
                  <img src="/images/expand-icon.png" alt="배경안흐린상태" />
                  <img
                    src="/images/contract-icon.png"
                    alt="배경흐려진상태"
                  />
                </div>
              </div>
            </div>
            <div>
              <p>가상자산</p>
              <div>
                <span>****</span>
              </div>
              <div>
                <span>상품</span>
                <span>거래소, DeFi</span>
              </div>
              <div>
                <span>자산</span>
                <span>Digital Currency</span>
              </div>
              <div>
                <span>신뢰</span>
                <span>블록체인</span>
              </div>
              <div>
                <div>월렛 등 B2C 서비스</div>
                <div>
                  <img src="/images/expand-icon.png" alt="배경안흐린상태" />
                  <img
                    src="/images/contract-icon.png"
                    alt="배경흐려진상태"
                  />
                </div>
              </div>
            </div>
            <div>
              <p>재능자산</p>
              <div>
                <span>****</span>
                <span>기축자산</span>
              </div>
              <div>
                <span>상품</span>
                <span>Gig Finance + Talent Assetization</span>
              </div>
              <div>
                <span>자산</span>
                <span>DATA ID + P3</span>
              </div>
              <div>
                <span>신뢰</span>
                <span>블록체인 DATA ID 네트워크</span>
              </div>
              <div>
                <div>Talent Marketplace</div>
                <div>
                  <img src="/images/expand-icon.png" alt="배경안흐린상태" />
                  <img
                    src="/images/contract-icon.png"
                    alt="배경흐려진상태"
                  />
                </div>
              </div>
            </div>
            <div>
              엔터프라이즈블록체인이 글로벌 블록체인 네트워크 DATA ID를 통해
              만들어갈 긱 이코노미와 크리에이터 이코노미 생태계를 기대해주세요.
            </div>
          </div>
          <div>
            <div className="down">
              <div className="down-arrow">
                <span className="down-arrow-item"></span>
                <span className="down-arrow-item"></span>
                <span className="down-arrow-item"></span>
                <span className="down-arrow-item"></span>
                <span className="down-arrow-item"></span>
                <span className="down-arrow-item"></span>
                <span className="down-arrow-item"></span>
              </div>
              <div className="down-title">
                <span className="down-title-item">전통금융</span>
                <span className="down-title-item">미래금융</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      */}

      {/*
      <section>
        <div>
          <p>크리에이터</p>
          <p>최소라 님의</p>
          <p>DATA ID</p>
        </div>
        <div>
          이렇게 기록하고, 증명하고, <br />
          성장할 수 있어요.
        </div>
        <img src="/images/creator-sec-bg.jpg" alt="빵들고있는제빵사" />
      </section>
      */}

      {/*
      <section>
        <div>
          <p>슬기롭게</p>
          <p>사용하는 법.</p>
        </div>
        <div>
          <div>
            <span>
              CHOI
              <br />
              SORA
            </span>
            <span>****</span>
            <div>
              베이커리 레시피를 창작하고 유튜브와 <br />
              쿠킹 클래스를 운영하는 크리에이터 최소라 님은 <br />
              쿠킹 클래스 수강 이력, 레시피 사용 이력을 <br />
              DATA ID에 기록해 관리하고 있어요.
            </div>
            <div>
              <span></span>
              <span>baker_sora</span>
              <img src="/images/expand-icon.png" alt="배경안흐린상태" />
              <img src="/images/contract-icon.png" alt="배경흐려진상태" />
            </div>
            <img src="/images/image-sec-4-1.png" alt="빵들고있는제빵사" />
          </div>
          <div>
            <span>
              CERTIFICATE
              <br />
              DATA ID
            </span>
            <div>
              아카데미 수료증과 자격증, 학위 증명서 등 <br />
              여러 취득 내용을 모두 기록할 수 있어요.
            </div>
            <div>
              <span>- 르꼬르동블루 제과 수료</span>
              <span>- 나카무라 조리제과 수료</span>
            </div>
            <div>
              <span></span>
              <span>baker_sora</span>
              <img src="/images/expand-icon.png" alt="배경안흐린상태" />
              <img src="/images/contract-icon.png" alt="배경흐려진상태" />
            </div>
          </div>
          <div>
            <span>
              ASSET
              <br />
              DATA ID
            </span>
            <div>
              개발한 오리지널 레시피를 등록해두면 레시피에 <br />
              대한 권리를 지키기 쉬워져요.
            </div>
            <div>
              <span>- 최소라 쿠키 레시피</span>
              <span>- 최소라 마카롱 레시피</span>
            </div>
            <div>
              <span></span>
              <span>baker_sora</span>
              <img src="/images/expand-icon.png" alt="배경안흐린상태" />
              <img src="/images/contract-icon.png" alt="배경흐려진상태" />
            </div>
          </div>
          <div>
            <span>
              CONTRACT
              <br />
              DATA ID
            </span>
            <div>
              누군가 내 레시피를 개량해서 다른 레시피를 <br />
              개발하기 원한다면, 상대방과 스마트 계약을 <br />
              체결할 수 있어요. <br />
            </div>
            <div>
              <span>- 최소라 쿠키 레시피_오곡버전_나카페</span>
            </div>

            <div>
              <span></span>
              <span>baker_sora</span>
              <img src="/images/expand-icon.png" alt="배경안흐린상태" />
              <img src="/images/contract-icon.png" alt="배경흐려진상태" />
            </div>
          </div>
        </div>
        <div>
          이력과 거래 내역이 모두 <br />
          DATA ID로 생성되고, <br />
          스마트 계약으로 재능을 <br />
          손쉽게 자산화 할 수 있어요.
        </div>
      </section>
      */}

      {/*
      <section>
        <p>오픈 이노베이션 그라운드</p>
        <div>
          글로벌 블록체인 네트워크 DATA ID를 통해 <br />
          EBC가 만들어갈 오픈 이노베이션 그라운드에
          <br />
          참여하세요.
          <br />
        </div>
        <div>
          <div>회사소개서 다운로드</div>
          <div>제휴문의</div>
          <div>채용문의</div>
        </div>

        <div>JOIN us</div>
      </section>
      */}

      {/*
      <footer>
        <div>
          <div>
            서울특별시 강남구 테헤란로 424, 19층 (주)엔터프라이즈블록체인
          </div>
          <div>
            COPYRIGHT © ENTERPRISE BLOCKCHAIN CO., LTD. ALL RIGHTS RESERVED.
          </div>
        </div>
        <div>
          <img src="/images/ft-logo-hori.png" alt="logo" />
        </div>
      </footer>
        */}
    </EbComponentStyle>
  );
}

export default App;
