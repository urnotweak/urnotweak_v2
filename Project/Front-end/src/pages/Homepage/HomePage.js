import React, {useState, useEffect} from "react";
import { Frame } from "components/Home/HomeFrame";
import { Nav } from "components/Nav/Nav";
import Chatting from "pages/Chatting/Chatting";
import './HomePage.css'

import scrollImg from 'assets/images/scrollimg.gif'

export const Home = () => {
  // 채팅 최초 1번 로딩
  useEffect(() => {
    // 두번 만들지 않도록 이미 생성되었는지 확인.
    if(window.ChannelIO === undefined) {
      Chatting.loadScript();
    }

    Chatting.boot({
      pluginKey: process.env.REACT_APP_CHAT_PLUGIN_KEY
    })
    console.log('boot')

  }, [])
  

  // 스크롤 한번으로 섹션 이동하도록
  const [currentSection, setCurrentSection] = useState(0);
  const sectionRefs = Array.from({ length: 5 }, () => React.createRef());
  const scrollThreshold = 600; // 스크롤 이벤트 필터링을 위한 임계값

  useEffect(() => {
    let lastScrollTime = 0;
    const handleScroll = (e) => {
      
      //너무 자주 실행되지 않도록
      const now = new Date().getTime();
      if (now - lastScrollTime < scrollThreshold) return;
      // 위로가는 스크롤에서 startY가 0인 수가 들어와서 dir이 1로 인식되는것을 막기위해
      // 0으로 들어오는걸 그냥 막아버린다.(야매로 해결)
      if(e.deltaY === undefined && startY === 0) return;

      const delta = e.deltaY || startY - e.touches[0].clientY;
      const direction = delta > 0 ? 1 : -1;


      setCurrentSection((prevSection) => {
        const newSection = prevSection + direction;
        if (newSection >= 0 && newSection < sectionRefs.length) {
          sectionRefs[newSection].current.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
          return newSection;
        }
        return prevSection;
      });

      lastScrollTime = now; // 마지막 스크롤 타임
    };

    let startY = 0;
    const handleTouchStart = (e) => {
      startY = e.touches[0].clientY;
    };

    // wheel은 마우스 휠, touchmove는 모바일에서 스크롤
    window.addEventListener('wheel', handleScroll);    
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchmove', handleScroll);
    return () => {
      window.removeEventListener('wheel', handleScroll);      
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleScroll);
    };

  }, [sectionRefs]);


  return (
    <div className="display">
      <Nav className="nav-instance" />
      {currentSection===0?
        <div className="scroll-img">
          <div>아래로 스크롤하세요.</div>
          <img className="nxtbtn" src={scrollImg}/>
        </div>:<></>
      }

      <div className="homepages">
        <div ref={sectionRefs[0]} className={`section ${currentSection === 0 ? 'active' : ''}`}>
          <Frame
            link=""
            backimage="home1"
            text1={`대한민국의\n마약 근절을 위해 노력합니다.`}
            text2=""
            position={`p-center`}
          />
        </div>
        <div ref={sectionRefs[1]} className={`section ${currentSection === 0 ? 'active' : ''}`}>
          <Frame
            link="simul"
            backimage="home2"
            text1={`‘한번쯤은’ 이라는 생각,\n두 번 다시 돌아오지 못합니다.`}
            text2="시뮬레이션 확인하기"
            position={`p-bottom`}
          />
        </div>
        <div ref={sectionRefs[2]} className={`section ${currentSection === 0 ? 'active' : ''}`}>
          <Frame
            link="test"
            backimage="home3"
            text1={`누구든 시작할 수 있습니다.\n하지만 벗어날 수 없습니다.`}
            text2="마약 취약성 확인하기"
            position={`p-top`}
          />
        </div>
        <div ref={sectionRefs[3]} className={`section ${currentSection === 0 ? 'active' : ''}`}>
          <Frame
            link="ai/upload"
            backimage="home4"
            text1={`망가져 가는 내모습\n유지할 수 없는 일상`}
            text2="얼굴AI"
            position={`p-bottom`}
          />
        </div>
        <div ref={sectionRefs[4]} className={`section ${currentSection === 0 ? 'active' : ''}`}>
          <Frame
            link=""
            backimage="home5"
            text1={`궁금한 내용이 더 생겼나요?\n도움이 필요하신가요?`}
            text2=""
            position={`p-top`}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
