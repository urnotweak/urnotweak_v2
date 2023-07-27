import React from "react";
import { Nav } from "../Nav/Nav";
import { Frame } from "./Frame"
// import "./style.css";

export const HomeForm = () => {
    return (
        <div className="home">
            <div className="homepages">
               <Frame link="" backimage="img1" text1="대한민국의 마약 근절을 위해 노력합니다." text2=""/>
               <Frame link="simul" backimage="img2" text1="‘한번쯤은’ 이라는 생각, 두 번 다시 돌아오지 못합니다." text2="시뮬레이션 확인하기"/>
               <Frame link="test" backimage="img3" text1="누구든 시작할 수 있습니다. 하지만 벗어날 수 없습니다." text2="마약 취약성 확인하기"/>
               <Frame link="ai" backimage="img4" text1="망가져 가는 내모습 유지할 수 없는 일상" text2="얼굴AI"/>
               <Frame link="chatting" backimage="img5" text1="궁금한 내용이 더 생겼나요? 도움이 필요하신가요?" text2="chatting"/>
            </div>
        </div>
    );
};

export default HomeForm;