import React, { useState } from "react";
import Classifier from "./components/Classifier";
import Popular from "./components/Popular";
import Uploader from "./components/Uploader";
import Latest from "./components/Latest";

const top10 = ['벽지', '참치캔', '나무', '프링글스 통', '보냉백', '베개', '캣타워', '콘돔', '책, 노트, 잡지', '가위'];
const latest = [
                { "title": "유리병",
                  "imgurl": "https://blisgo.com/wp-content/uploads/elementor/thumbs/%EC%9C%A0%EB%A6%AC%EB%B3%91-oytqnfcl1ssnbr9ib55xrfni4eki535fvew2kprdvk.jpg", 
                  "content": "내용물과 이물질(담배꽁초 등)을 비우고, 물로 깨끗이 헹궈낸 후 배출해요. 유리병 본체와 뚜껑은 분리해서 유리병 본체는 유리박카스병 분리수거로, 유리병 뚜껑은 캔류박카스병 분리수거 등 재질에 맞게 분리배출해요.",
                }, 
                { "title": "보조배터리",
                  "imgurl": "https://blisgo.com/wp-content/uploads/elementor/thumbs/%EB%B3%B4%EC%A1%B0%EB%B0%B0%ED%84%B0%EB%A6%AC-ozd5c40yokxc2zl2aj32n8pxok6myrkhdnbsnjmfpc.jpg", 
                  "content": "고장났거나 성능이 떨어져서 더이상 쓸 수 없는 보조배터리는 일반 건전지와 마찬가지로 반드시 가까운 주민센터, 구청 또는 아파트 단지 내에 설치된 폐건전지 전용 수거함에 버려주세요.",
                }, 
                { "title": "캣타워",
                  "imgurl": "https://blisgo.com/wp-content/uploads/elementor/thumbs/%EC%BA%A3%ED%83%80%EC%9B%8C-ozcze0cdz3u3kikwhzeap9q6kzgtoplilxu9el2ozk.jpg", 
                  "content": "캣타워는 나무, 합판, 노끈, 면 등 다양한 재질이 혼합되어 있어서 재활용이 불가능하고, 완전히 분해하지 않는 이상 종량제 봉투에도 담을 수 없는 크기이므로 대형 생활 폐기물로 신고 배출해주세요.",
                }, 
                { "title": "가전제품",
                  "imgurl": "https://blisgo.com/wp-content/uploads/elementor/thumbs/%EA%B0%80%EC%A0%84%EC%A0%9C%ED%92%88-oz7ur6e9sotoc5h3buq9tkpapkusx04w36d14gecqo.jpg", 
                  "content": "더 이상 쓸 수 없는 폐가전은 폐가전 무상방문수거 서비스 (→바로가기)를 통해 배출해요. 냉장고, 세탁기, 에어컨, TV 등 대형 가전제품은 1개 품목이라도 신청할 수 있고, 청소기, 전기밥솥, 모니터 등 소형 가전제품은 배출 품목이 5개 이상일 때 무료 수거 신청을 할 수 있어요.",
                }, 
                { "title": "보냉백",
                  "imgurl": "https://blisgo.com/wp-content/uploads/elementor/thumbs/%EB%B3%B4%EB%83%89%EB%B0%B1-oz667awo8gqnbnv49l9nbnpvsh6hyu6n1sr6j4iqrk.jpg", 
                  "content": "아이스크림 등 냉동 식품을 포장하는 보냉백은 혼합 플라스틱에 해당하므로 재활용이 불가능해요. 모두 일반쓰레기(종량제봉투)로 버려주세요.",
                }, 
                { "title": "스티로폼",
                  "imgurl": "https://blisgo.com/wp-content/uploads/elementor/thumbs/%EC%8A%A4%ED%8B%B0%EB%A1%9C%ED%8F%BC-oszhfwr3mag9xue8dopf07wxtokjpnpvfmmbjdnchs.jpg", 
                  "content": "스티로폼 박스 안의 내용물을 모두 비우고, 음식물 등의 이물질이 묻어있을 경우 물로 깨끗이 세척한 후 분리 배출해요.",
                }, 
                { "title": "컵라면 용기",
                  "imgurl": "https://blisgo.com/wp-content/uploads/elementor/thumbs/%EC%BB%B5%EB%9D%BC%EB%A9%B4-%EC%9A%A9%EA%B8%B0-otp9ev5kvy20f0xf80yis39wipxsl30lspfuz8tlvk.jpg", 
                  "content": "스티로폼 컵라면 용기(육개장 사발면 등)는 물로 세척한 후 햇빛에 하루 이상 말리면 용기에 스며든 기름과 국물 자국이 깨끗이 사라져요. 컵라면 용기는 스티로폼으로 분리배출하고, 컵라면 뚜껑도 재질(비닐 또는 플라스틱)별로 분리배출해주세요.",
                }, 
                { "title": "건전지",
                  "imgurl": "https://blisgo.com/wp-content/uploads/elementor/thumbs/%ED%8F%90%EC%A0%84%EC%A7%80-oyjcea5rpt2rzhra0awewc36yxzcu9patjhx4eixhc.jpg", 
                  "content": "다 쓴 건전지는 반드시 가까운 주민센터, 구청 또는 아파트 단지 내에 설치된 폐건전지 전용 수거함에 버려주세요.",
                },
                { "title": "펌프형 용기",
                  "imgurl": "https://blisgo.com/wp-content/uploads/elementor/thumbs/%ED%8E%8C%ED%94%84%ED%98%95-%EC%9A%A9%EA%B8%B0-oyhwh8ws88iccqmuuwhbghac207scqriuofku7rfuo.jpg", 
                  "content": "용기 내부에 남아있는 샴푸 등의 용액을 물로 깨끗이 헹궈낸 뒤 분리배출해요. 펌프가 달린 뚜껑 부분은 해체가 가능하다면 헤드, 몸통, 스프링, 튜브(빨대)로 분리해서 스프링은 일반쓰레기, 나머지는 플라스틱으로 분리배출해요. (펜치, 칼 등의 도구가 없으면 쉽지 않을 수 있어요.) 분해가 불가능하다면 뚜껑 부분 통째로 일반쓰레기(종량제봉투)로 버려주세요.",
                },
                { "title": "가위",
                  "imgurl": "https://blisgo.com/wp-content/uploads/elementor/thumbs/%EA%B0%80%EC%9C%84-oyeb5p40dpeupf2x00jnasigdktv5fjxrug1rslc00.jpg", 
                  "content": "가위는 고철류지만 재활용 업체의 수거, 선별 과정에서 사람이 다칠 위험이 있기 때문에 고철로 배출하면 안되고 일반쓰레기(종량제봉투)로 버려야 해요.",
                },
              ];


function App() {
    const [imageSrc, setImageSrc] = useState();

    return (
        <>
        <header>분리수거 백과사전</header>
        <div className="container">
            <Uploader setImageSrc={setImageSrc} />
            <Classifier imageSrc={imageSrc} />
            <Popular listItems={top10}/>
            <Latest listItems={latest}/>
        </div>
        </>
    );
}

export default App;