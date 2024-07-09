const FishData = [
  // 블루홀 초입
  {
    name: "흰동가리",
    image: "/fishImg/흰동가리.png",
    rank: "1",
    weight: "0.2",
    activityTime: "낮",
    CaptureMethod: {
      "★★": "작살 포획",
      "★★★": "그물 포획 / 수면 포획",
    },
    cookingUsed: "흰동가리 초밥\n열대어 마늘구이",
    fishInfo:
      "붉은 몸에 흰 세로줄이 있는 15cm 정도의 물고기. 홍해와 태평양, 동남아시아, 인도양의 따듯한 해역에 서식한다. 말미잘 속에 숨어, 기생충을 청소해준다.",
  },
  {
    name: "콤버",
    image: "/fishImg/콤버.png",
    rank: "1",
    weight: "0.2",
    activityTime: "낮",
    CaptureMethod: {
      "★★": "작살 포획",
      "★★★": "그물 포획 / 수면 포획",
    },
    cookingUsed: "콤버 초밥\n콤버 샌드위치",
    fishInfo:
      "큰 머리와 돌출된 턱, 오렌지색의 긴 가로줄과 여러 개의 세로 줄무늬가 특징인 25cm 정도의 물고기. 암초나 대륙붕 등에 넓게 서식한다.",
  },
  {
    name: "지중해카디널피쉬",
    image: "/fishImg/지중해카디널피쉬.png",
    rank: "1",
    weight: "0.2",
    activityTime: "낮",
    CaptureMethod: {
      "★★": "작살 포획",
      "★★★": "그물 포획 / 수면 포획",
    },
    cookingUsed: "지중해카디널피쉬 초밥",
    fishInfo:
      "큰 머리와, 매우 큰 눈, 계란형 몸을 가진 5~20cm 정도의 루비빛 물고기. 암초나 동굴 속에 숨어살며 작은 물고기나 플랑크톤 등을 먹는다.",
  },
  {
    name: "금강바리",
    image: "/fishImg/금강바리.png",
    rank: "1",
    weight: "0.3",
    activityTime: "낮",
    CaptureMethod: {
      "★★": "작살 포획",
      "★★★": "그물 포획 / 수면 포획",
    },
    cookingUsed: "금강바리 초밥",
    fishInfo:
      "몸 측면의 짙은 분홍색 사각 반점이 특징인 20cm 정도의 물고기. 산호초 주변 수심 10~180m에서 서식하며 플랑크톤을 먹는다.",
  },
  {
    name: "안개나비고기",
    image: "/fishImg/안개나비고기.png",
    weight: "0.4",
    activityTime: "낮",
    CaptureMethod: {
      "★★": "작살 포획",
      "★★★": "그물 포획 / 수면 포획",
    },
    cookingUsed: "안개나비고기 초밥\n열대어 마늘구이",
    fishInfo:
      "튀어나온 주둥이와 노란 머리와 등지느러미로 인해 보이는 하얀 삼각형이 특징인 최대 18cm 정도의 물고기. 암초 경사면에 주로 서식한다.",
  },
  {
    name: "옐로우탱",
    image: "/fishImg/옐로우탱.png",
    rank: "1",
    weight: "0.4",
    activityTime: "낮",
    CaptureMethod: {
      "★★": "작살 포획",
      "★★★": "그물 포획 / 수면 포획",
    },
    cookingUsed: "옐로우탱 초밥",
    fishInfo:
      "매우 선명한 노란색의 크기 20cm 정도의 물고기로 열대지역 얕은 산호초 지대에 주로 서식한다. 조류나 해양식물을 먹는다.",
  },
  {
    name: "사르파살파",
    image: "/fishImg/사르파살파.png",
    rank: "1",
    weight: "0.4",
    activityTime: "낮",
    CaptureMethod: {
      "★★": "작살 포획",
      "★★★": "그물 포획 / 수면 포획",
    },
    cookingUsed: "사르파살파 초밥",
    fishInfo:
      "회청색 몸에 금색의 가로 줄무늬가 있는 15~40cm 정도의 물고기. 수심 70m 이내에 서식하며, 해조류나 식물성 플랑크톤, 무척추생물 등을 먹는다.",
  },
  {
    name: "원반제비활치",
    image: "/fishImg/원반제비활치.png",
    rank: "1",
    weight: "0.3",
    activityTime: "낮",
    CaptureMethod: {
      "★★": "작살 포획",
      "★★★": "그물 포획 / 수면 포획",
    },
    cookingUsed: "원반제비활치 튀김\n활치 오야코동",
    fishInfo:
      "몸이 매우 얇고 활처럼 휜 등과 배 지느러미, 부채꼴의 꼬리를 가진 60cm 정도의 물고기. 수심 5~30m의 암초나 산호초 주변에서 서식한다.",
  },
  {
    name: "블루탱",
    image: "/fishImg/블루탱.png",
    weight: "0.5",
    activityTime: "낮",
    CaptureMethod: {
      "★★": "작살 포획",
      "★★★": "그물 포획 / 수면 포획",
    },
    cookingUsed: "블루탱 초밥\n열대어 마늘구이",
    fishInfo:
      "감청색 몸체에 노란 꼬리를 가진 약간 평평한 30cm 정도의 물고기. 인도양과 태평양 전역의 암초와 산호초 지대에서 볼 수 있다. 플랑크톤과 해조류를 먹는다.",
  },
  {
    name: "무지개놀래기",
    image: "/fishImg/무지개놀래기.png",
    rank: "1",
    weight: "0.6",
    activityTime: "낮",
    CaptureMethod: {
      "★★": "작살 포획",
      "★★★": "그물 포획 / 수면 포획",
    },
    cookingUsed: "무지개놀래기\n초밥놀래기 커리",
    fishInfo:
      "청갈색 몸에 밝은 오렌지색의 가로선이 있는 18cm 정도의 물고기. 해초나 바위근처에 서식하며 갑각류나 연체동물, 극피동물을 먹는다.",
  },
  {
    name: "배주름쥐치",
    image: "/fishImg/배주름쥐치.png",
    rank: "1",
    weight: "0.7",
    activityTime: "낮",
    CaptureMethod: {
      "★★": "작살 포획",
      "★★★": "그물 포획 / 수면 포획",
    },
    cookingUsed: "배주름쥐치 초밥",
    fishInfo:
      "화려한 모자이크 무늬로 피카소피쉬라 불리는 30cm 정도의 물고기. 산호초 지대의 바위구멍이나 산호 틈, 모래 등지에 숨어 있다가 지나가는 동물을 습격해 먹는다.",
  },
  {
    name: "빨판매가리",
    image: "/fishImg/빨판매가리.png",
    rank: "1",
    weight: "0.8",
    activityTime: "낮",
    CaptureMethod: {
      "★★": "작살 포획",
      "★★★": "그물 포획 / 수면 포획",
    },
    cookingUsed: "빨판매가리 초밥\n빨판매가리 감태국",
    fishInfo:
      "은색 몸에 옆구리에 1~5개의 흑점을 지닌 최고 60cm 정도의 육식 물고기. 인도 태평양 지역의 암초나 산호초 지대에 널리 서식한다.",
  },
  {
    name: "황등어",
    image: "/fishImg/황등어.png",
    rank: "1",
    weight: "0.8",
    activityTime: "낮",
    CaptureMethod: {
      "★★": "작살 포획",
      "★★★": "그물 포획 / 수면 포획",
    },
    cookingUsed: "황등어 초밥\n황등어 간장조림",
    fishInfo:
      "회청색 몸에 상부 1/3이 노란색인 약 40cm 정도의 방추형 물고기. 따듯한 바다의 수심 50m 이내 산호초 주변에 서식하며 동물성 플랑크톤을 먹는다.",
  },
  {
    name: "오네이트놀래기",
    image: "/fishImg/오네이트놀래기.png",
    rank: "1",
    weight: "0.5",
    activityTime: "낮",
    CaptureMethod: {
      "★★": "작살 포획",
      "★★★": "그물 포획 / 수면 포획",
    },
    cookingUsed: "오네이트놀래기 초밥\n놀래기 커리",
    fishInfo:
      "녹갈색 몸에 청색 세로줄을 가지는 20cm 정도의 물고기. 동부 대서양과 지중해 50m 이내의 바위 해안에 서식하며 작은 연체동물과 갑각류를 먹는다.",
  },
  {
    name: "깃털제비활치",
    image: "/fishImg/깃털제비활치.png",
    rank: "1",
    weight: "0.8",
    activityTime: "낮",
    CaptureMethod: {
      "★★": "작살 포획",
      "★★★": "그물 포획 / 수면 포획",
    },
    cookingUsed: "깃털제비활치 초밥\n활치 오야코동",
    fishInfo:
      "얇은 몸에 세로 줄무늬가 있는 60cm 정도의 은색 물고기. 호주나 인도 연안의 해초, 나무 파편, 인공 암초 등지에 주로 서식한다.",
  },
  {
    name: "지중해비늘돔",
    image: "/fishImg/지중해비늘돔.png",
    rank: "1",
    weight: "2",
    activityTime: "낮",
    CaptureMethod: {
      "★★": "작살 포획",
      "★★★": "그물 포획 / 수면 포획",
    },
    cookingUsed: "지중해비늘돔 초밥\n비늘돔 흑식초 조림",
    fishInfo:
      "붉은 몸에 노란색과 회색의 무늬를 가지는 30cm 정도의 물고기. 지중해와 대서양 동부 바위 해안의 수심 50m 부근에 서식하며 해조류나 무척추동물을 먹는다.",
  },
  {
    name: "붉은이빨쥐치",
    image: "/fishImg/붉은이빨쥐치.png",
    rank: "1",
    weight: "1",
    activityTime: "낮",
    CaptureMethod: {
      "★★": "작살 포획",
      "★★★": "그물 포획 / 수면 포획",
    },
    cookingUsed: "붉은이빨쥐치 초밥\n붉은이빨쥐치 소금구이",
    fishInfo:
      "짙은 보라색 몸에 청녹색 머리, 하늘색 꼬리와 두 개의 날카롭고 붉은 이빨을 가진 30cm 정도의 물고기. 흐름이 강한 산호초나 바위틈에 숨어 서식한다.",
  },
  {
    name: "블랙스내퍼",
    image: "/fishImg/블랙스내퍼.png",
    rank: "1",
    weight: "1",
    activityTime: "낮",
    CaptureMethod: {
      "★★": "작살 포획",
      "★★★": "그물 포획 / 수면 포획",
    },
    cookingUsed: "블랙스내퍼 초밥",
    fishInfo:
      "온 몸이 검은 35cm 정도의 물고기로, 수심 90m 정도의 산호초 주변 급경사 지역에 무리지어 서식하며 갑각류나 작은 물고기를 잡아먹는다.",
  },
  {
    name: "버팔로피쉬",
    image: "/fishImg/버팔로피쉬.png",
    weight: "1.8",
    activityTime: "낮",
    CaptureMethod: {
      "★★": "갈무리",
      "★★★": "드론 인양",
    },
    cookingUsed: "버팔로피쉬 초밥\n버팔로피쉬 커리",
    fishInfo:
      "머리에 거대한 혹과, 앵무새 부리같은 입을 가진 산호초 지역에서 가장 큰 물고기. 최고 150cm, 무게 75kg 이상까지 자라며, 해조류나 살아있는 산호를 깨트려 먹는다.",
  },
  {
    name: "배럴해파리",
    image: "/fishImg/배럴해파리.png",
    rank: "2",
    weight: "1",
    activityTime: "낮",
    CaptureMethod: {
      "★★★": "그물 포획 / 수면 포획",
    },
    cookingUsed: "배럴해파리 군함 초밥\n해파리 무침",
    materials: "배럴해파리의 촉수",
    fishInfo:
      "원통형 몸에 거대한 갓과 8개의 주름진 촉수를 가지고 있는 40~150cm 정도의 해파리. 북동부대서양과 아드리아해, 지중해, 흑해 등지에 서식한다.",
  },
  {
    name: "달걀프라이해파리",
    image: "/fishImg/달걀프라이해파리.png",
    weight: "1",
    activityTime: "낮",
    CaptureMethod: {
      "★★★": "그물 포획 / 수면 포획",
    },
    cookingUsed: "달걀프라이해파리 군함 초밥\n해파리 무침",
    fishInfo:
      "돔 형태의 중앙을 링과 주름으로 둘러싼 최대 40cm 정도의 해파리. 여러 번 갈라지는 수많은 촉수와 봉이 달린 촉수를 가지고 있으며 지중해 연안에 서식한다.",
  },
  {
    name: "백기흉상어",
    image: "/fishImg/백기흉상어.png",
    rank: "4",
    weight: "2.5",
    activityTime: "항상",
    CaptureMethod: {
      "★★": "갈무리",
      "★★★": "드론 인양",
    },
    cookingUsed: {
      살점: "백기흉상어 초밥",
      머리: "백기흉상어 머리 통구이",
    },
    materials: "백기흉상어의 이빨",
    fishInfo:
      "날씬한 몸매에 등지느러미와 꼬리지느러미 끝이 하얀 평균 1.6m 정도의 비교적 작은 상어. 인도양과 태평양의 수심 8~40m 사이의 산호초 주변에 널리 서식한다.",
  },
  {
    name: "꺼끌복",
    image: "/fishImg/꺼끌복.png",
    rank: "3",
    weight: "3",
    activityTime: "낮",
    CaptureMethod: {
      "★★": "작살 포획",
      "★★★": "그물 포획 / 수면 포획",
    },
    cookingUsed: "복어 특초밥\n복어 니코고리\n복어 완자탕",
    materials: "꺼끌복의 독주머니",
    fishInfo:
      "가시로 온몸이 뒤덮인 검은 반점이 여럿 있는 긴 흰색 몸통을 가진 120cm 정도의 물고기. 적이 나타나면 몸을 부풀리는 특징이 있으며 잡식성이다.",
  },
  {
    name: "쏠배감펭",
    image: "/fishImg/쏠배감펭.png",
    rank: "2",
    weight: "1.5",
    activityTime: "낮",
    CaptureMethod: {
      "★★": "작살 포획",
      "★★★": "그물 포획 / 수면 포획",
    },
    cookingUsed: "쏠배감펭 초밥\n쏠배감펭 튀김",
    materials: "쏠배감펭의 가시",
    fishInfo:
      "사자 갈기 같은 수많은 독가시와 얼룩말 같은 무늬를 가진 47cm 정도의 물고기. 해초, 산호 및 인공암초를 포함한 다양한 곳에 서식하며 작은 물고기를 먹는다.",
  },
  {
    name: "타이탄트리거피쉬",
    image: "/fishImg/타이탄트리거피쉬.png",
    rank: "2",
    weight: "3.8",
    activityTime: "낮",
    CaptureMethod: {
      "★★": "작살 포획",
      "★★★": "그물 포획 / 수면 포획",
    },
    cookingUsed: "타이탄트리거피쉬 초밥\n화려한 특초밥 세트",
    fishInfo:
      "노란색 몸에 눈 주위에 어두운 반점과 날카로운 이빨을 가진 75cm 정도의 거대한 쥐치. 산호초나 암초 경사면 등에 서식하며 산호나 성게 등을 먹는다. 공격성이 강하다.",
  },
  {
    name: "참다랑어",
    image: "/fishImg/참다랑어.png",
    rank: "7",
    weight: "8",
    activityTime: "낮",
    CaptureMethod: {
      "★★": "갈무리",
      "★★★": "드론 인양",
    },
    cookingUsed: {
      붉은살: "참다랑어 붉은살 초밥\n마구로동",
      중뱃살: "참다랑어 중뱃살 초밥\n핫페퍼튜나",
      대뱃살: "참다랑어 대뱃살 초밥\n히알로네마 참치회",
    },
    fishInfo:
      "고등어과에 속하는 어류로 주로 참치회로 소비되는 종이다. 유영 속도가 70~90km 정도로 매우 빠르며 헤엄치지 않으면 질식사한다.",
  },
  {
    name: "황다랑어",
    image: "/fishImg/황다랑어.png",
    rank: "7",
    weight: "6",
    activityTime: "낮",
    CaptureMethod: {
      "★★": "갈무리",
      "★★★": "드론 인양",
    },
    cookingUsed: {
      붉은살: "황다랑어 붉은살 초밥\n하와이안 포케",
      중뱃살: "황다랑어 중뱃살 초밥\n황다랑어 스테이크",
      대뱃살: "황다랑어 대뱃살 초밥\n히알로네마 참치회",
    },
    fishInfo:
      "지느러미가 노란색인 것이 특징이며 일 년 내내 번식하며 성체가 되는 데에 약 2년 정도 걸린다.",
  },
  {
    name: "라마엔젤피쉬",
    image: "/fishImg/라마엔젤피쉬.png",
    rank: "1",
    weight: "0.2",
    activityTime: "낮",
    CaptureMethod: {
      "★★": "작살 포획",
      "★★★": "그물 포획 / 수면 포획",
    },
    cookingUsed: "라마엔젤피쉬 초밥",
    fishInfo:
      "몸 전체에 불꽃처럼 보이는 밝은 빨간색과 주황색이 있으며 몸과 끝 부분은 푸르스름하다.",
  },
  {
    name: "혹돔",
    image: "/fishImg/혹돔.png",
    rank: "5",
    weight: "4.3",
    activityTime: "낮",
    CaptureMethod: {
      "★★": "갈무리",
      "★★★": "드론 인양",
    },
    cookingUsed: "혹돔 초밥\n트러플 혹돔 조림",
    fishInfo:
      "머리에 큰 혹이 난 것처럼 툭 튀어나와 있으며 턱 역시 크게 돌출되어 있다. 이빨 역시 날카로우며 주로 갑각류를 먹는 육식성 어류이다.",
  },
  {
    name: "혹황제엔젤피쉬돔",
    image: "/fishImg/황제엔젤피쉬.png",
    rank: "1",
    weight: "0.4",
    activityTime: "낮",
    CaptureMethod: {
      "★★": "작살 포획",
      "★★★": "그물 포획 / 수면 포획",
    },
    cookingUsed: "황제엔젤피쉬 초밥",
    fishInfo:
      "어릴 때는 흰색과 남색이지만 성체가 되면서 발색이 완전히 달라지는 어종이다. 다른 물고기와 어울리기 보다 단독 행동을 주로 한다.",
  },
  {
    name: "노랑가오리",
    image: "/fishImg/노랑가오리.png",
    rank: "6",
    weight: "3",
    activityTime: "낮",
    CaptureMethod: {
      "★★": "갈무리",
      "★★★": "드론 인양",
    },
    cookingUsed: "노랑가오리 초밥\n가오리포",
    fishInfo:
      "서태평양 지역의 수심 10m 남짓한 얕은 바다나 강 하구에 주로 서식한다. 꼬리의 톱니 모양 가시에는 맹독이 있어 인간이 찔리면 기절하고 심지어 죽을 수도 있다",
  },
  {
    name: "마블전기가오리",
    image: "/fishImg/마블전기가오리.png",
    rank: "6",
    weight: "3",
    activityTime: "낮",
    CaptureMethod: {
      "★★": "갈무리",
      "★★★": "드론 인양",
    },
    cookingUsed: "마블전기가오리 초밥\n가오리포",
    materials: "전기가오리의 발전판",
    fishInfo:
      "동부대서양에서 남아프리카까지 분포하는 전기 가오리이다. 야행성이며 주로 바닥에 숨어 있다가 70~80V의 전기를 내뿜어 먹이를 사냥한다.",
  },
  {
    name: "흰다리새우",
    image: "/fishImg/흰다리새우.png",
    rank: "5",
    weight: "0.1",
    activityTime: "낮",
    CaptureMethod: {
      "★★★": "잠자리채 포획",
    },
    cookingUsed:
      "흰다리자숙새우 초밥\n멘보샤\n새우튀김 특초밥\n흰다리자숙새우 튀김\n가지 새우완자 튀김",
    fishInfo:
      "보리새우과의 새우로 최대 20cm 정도까지 자란다. 양식으로 많이 키우며 맛에 비해서 저렴하여 인기가 높다.",
  },
  {
    name: "쏠종개",
    image: "/fishImg/쏠종개.png",
    rank: "5",
    weight: "0.3",
    activityTime: "낮",
    CaptureMethod: {
      "★★": "작살 포획",
      "★★★": "그물 포획 / 수면 포획",
    },
    cookingUsed: "쏠종개 초밥\n쏠종개 파이",
    fishInfo:
      "약 20~30cm 정도 길이의 물고기로 입가에 4쌍의 수염이 있다. 떼로 지어 몰려다니는 습성이 있다.",
  },
  {
    name: "보라성게",
    image: "/fishImg/보라성게.png",
    rank: "5",
    weight: "1",
    activityTime: "낮",
    CaptureMethod: {
      "★★★": "채집",
    },
    cookingUsed: "보라성게 초밥\n보라성게 덮밥\n트러플 돛새치 타르타르",
    fishInfo: "날카로운 가시가 돋힌 보라색 성게이다. 식용으로 사용된다.",
  },
  {
    name: "청상아리",
    image: "/fishImg/청상아리.png",
    rank: "8",
    weight: "9",
    activityTime: "낮",
    CaptureMethod: {
      "★★": "갈무리",
      "★★★": "드론 인양",
    },
    cookingUsed: "청상아리 초밥",
    fishInfo:
      "눈이 크고 검으며 주둥이 끝이 뾰족한 특징을 가진 대형 상어류. 온대와 열대해역에 걸쳐 전 세계에 널리 분포되어 있고, 표면~150m 깊이에 서식한다.",
  },
  {
    name: "청새치",
    image: "/fishImg/청새치.png",
    rank: "8",
    weight: "7.5",
    activityTime: "낮",
    CaptureMethod: {
      "★★": "갈무리",
      "★★★": "드론 인양",
    },
    cookingUsed: "청새치 초밥\n청새치 된장구이",
    fishInfo:
      "시속 100km 속도로 헤엄칠 수 있으며 매우 난폭한 성질을 가지고 있다. 창처럼 생긴 윗턱을 휘둘러 먹이를 때리거나 베어 섭취한다.",
  },
  {
    name: "환도상어",
    image: "/fishImg/환도상어.png",
    rank: "9",
    weight: "9.5",
    activityTime: "낮",
    CaptureMethod: {
      "★★": "갈무리",
      "★★★": "드론 인양",
    },
    cookingUsed: "환도상어 초밥",
    materials: "환도상어의 꼬리",
    fishInfo:
      "몸체의 길이보다 긴 꼬리 지느러미가 특징인 상어. 긴 꼬리를 채찍처럼 이용해 작은 물고기 떼를 기절시켜서 잡아먹는다.",
  },
  {
    name: "방사쏠베감펭",
    image: "/fishImg/방사쏠베감펭.png",
    rank: "4",
    weight: "1.7",
    activityTime: "밤",
    CaptureMethod: {
      "★★": "작살 포획",
      "★★★": "그물 포획 / 수면 포획",
    },
    cookingUsed: "방사쏠베감펭 초밥\n달빛 블래더랙 롤",
    fishInfo:
      "게나 새우를 주로 사냥하는 야행성 어종이다. 등지느러미에는 12~13개의 긴 독가시가 있으며, 쏠베감펭과 달리 가시에 줄무늬가 없다.",
  },
  {
    name: "롱스파인 다람쥐고기",
    image: "/fishImg/롱스파인 다람쥐고기.png",
    rank: "5",
    weight: "0.4",
    activityTime: "밤",
    CaptureMethod: {
      "★★": "작살 포획",
      "★★★": "그물 포획 / 수면 포획",
    },
    cookingUsed: "롱스파인다람쥐고기 초밥\n달빛 블래더랙 롤",
    fishInfo:
      "인도-태평양 및 열대 지역 부근에서 무리를 지어 활동하는 야행성 어종이다. 주로 연안의 암초 해역에서 서식하며 주로 갑각류를 먹이로 섭취한다.",
  },
  {
    name: "가시복",
    image: "/fishImg/가시복.png",
    rank: "5",
    weight: "3.5",
    activityTime: "밤",
    CaptureMethod: {
      "★★": "작살 포획",
      "★★★": "그물 포획 / 수면 포획",
    },
    cookingUsed: "가시복 껍질 초무침\n복어 완자탕",
    fishInfo:
      "전세계 열대 및 아열대 바다의 산호초에 서식하며 50cm까지도 성장한다. 가시에서는 강력한 독성 물질을 분비하여 자신을 보호한다.",
  },
  {
    name: "상자해파리",
    image: "/fishImg/상자해파리.png",
    rank: "5",
    weight: "5",
    activityTime: "밤",
    CaptureMethod: {
      "★★★": "그물 포획 / 수면 포획",
    },
    cookingUsed: "상자해파리 군함 초밥",
    materials: "상자해파리의 촉수",
    fishInfo:
      "해파리와는 별개의 종으로 분류되는 생물이다. 바다의 말벌 이라고 불리울 정도로 강력한 독을 갖고 있으며 눈이 있어 먹이를 쫓아가기도 한다.",
  },
  {
    name: "곰치",
    image: "/fishImg/곰치.png",
    rank: "5",
    weight: "9",
    activityTime: "항상",
    CaptureMethod: {
      "★★": "작살 포획",
      "★★★": "그물 포획 / 수면 포획",
    },
    cookingUsed: "곰치 초밥\n곰치 커리",
    materials: "곰치의 턱뼈",
    fishInfo:
      "비늘 대신 두꺼운 가죽과 점액질로 뒤덮인 1.5m 정도의 바다 뱀장어. 열대 및 온대 바다의 암초나 바위틈에 숨어 살며, 독특한 구조의 턱으로 깨문 적은 놓치지 않는다.",
  },
  {
    name: "흑기흉상어",
    image: "/fishImg/흑기흉상어.png",
    rank: "6",
    weight: "2.5",
    activityTime: "밤",
    CaptureMethod: {
      "★★": "갈무리",
      "★★★": "드론 인양",
    },
    cookingUsed: "흑기흉상어 초밥\n상어 가라아게",
    fishInfo:
      "흑기흉상어는 지느러미와 주둥이에 뚜렷한 검은 얼룩이 있는 것이 특징이다. 낮은 수심에서 서식하며 사냥할 경우 무리를 지어서 다니기도 한다.",
  },
  {
    name: "무태상어",
    image: "/fishImg/무태상어.png",
    rank: "6",
    weight: "4",
    activityTime: "밤",
    CaptureMethod: {
      "★★": "갈무리",
      "★★★": "드론 인양",
    },
    cookingUsed: "무태상어 초밥\n상어 가라아게",
    fishInfo:
      "흑기흉상어는 지느러미와 주둥이에 뚜렷한 검은 얼룩이 있는 것이 특징이다. 낮은 수심에서 서식하며 사냥할 경우 무리를 지어서 다니기도 한다.",
  },
  {
    name: "지브라상어",
    image: "/fishImg/지브라상어.png",
    rank: "8",
    weight: "10.5",
    activityTime: "밤",
    CaptureMethod: {
      "★★": "갈무리",
      "★★★": "드론 인양",
    },
    cookingUsed: "지브라상어 초밥",
    fishInfo:
      "어릴 때는 얼룩말 같은 줄무늬를 가지지만 성체가 되면 점박이로 바뀌는 야행성 상어. 열대 인도 태평양 전역에서 발견되며 수심 60m 이내에 서식한다.",
  },

  // 중간수역
  {
    name: "블루헤드타일피쉬",
    image: "/fishImg/블루헤드타일피쉬.png",
    rank: "1",
    weight: "0.2",
    activityTime: "낮",
    CaptureMethod: {
      "★★": "작살 포획",
      "★★★": "그물 포획 / 수면 포획",
    },
    cookingUsed: "블루헤드타일피쉬 초밥",
    fishInfo:
      "푸른색 머리에 녹색 몸, 노란 꼬리를 가진 보통 15cm 정도의 가늘고 긴 물고기. 산호초 지역의 경사면이나 산호 잔해 등지에 숨어 서식한다.",
  },
  {
    name: "무당씬벵이",
    image: "/fishImg/무당씬벵이.png",
    rank: "1",
    weight: "0.3",
    activityTime: "낮",
    CaptureMethod: {
      "★★": "작살 포획",
      "★★★": "그물 포획 / 수면 포획",
    },
    cookingUsed: "무당씬벵이 초밥\n다홍빛 생선 롤",
    fishInfo:
      "가시와 돌기로 덮힌 피부에 입이 개구리처럼 튀어나온 15cm 정도의 물고기. 환경에 따라 서서히 몸의 색깔을 바꾼다. 얕은 열대 해역의 산호초에 서식하며 물고기를 먹는다.",
  },
  {
    name: "페인티드콤버",
    image: "/fishImg/페인티드콤버.png",
    rank: "1",
    weight: "0.4",
    activityTime: "낮",
    CaptureMethod: {
      "★★": "작살 포획",
      "★★★": "그물 포획 / 수면 포획",
    },
    cookingUsed: "페인티드콤버 초밥\n콤버 샌드위치",
    fishInfo:
      "얇은 몸에 코가 뾰족한 25cm 정도의 회색 물고기. 5~7개의 갈색 세로 줄무늬와 청색 반점이 있다. 바위동굴에 숨어 살며 지나가는 두족류, 조개, 갑각류, 물고기, 웜 등을 먹는다.",
  },
  {
    name: "새가라지",
    image: "/fishImg/새가라지.png",
    rank: "1",
    weight: "0.6",
    activityTime: "낮",
    CaptureMethod: {
      "★★": "작살 포획",
      "★★★": "그물 포획 / 수면 포획",
    },
    cookingUsed: "새가라지 초밥\n새가라지 된장구이",
    fishInfo:
      "청록색 몸에 하얀 배를 가진 눈이 큰 38cm 정도의 전갱이과 물고기. 전 세계의 열대지역에 무리지어 서식하며 작은 무척추동물이나 물고기 치어, 동물성 플랑크톤을 먹는다.",
  },
  {
    name: "노랑촉수",
    image: "/fishImg/노랑촉수.png",
    rank: "1",
    weight: "0.7",
    activityTime: "낮",
    CaptureMethod: {
      "★★": "작살 포획",
      "★★★": "그물 포획 / 수면 포획",
    },
    cookingUsed: "노랑촉수 초밥\n노랑촉수 다시마 말이",
    fishInfo:
      "적갈색의 긴 몸에 주둥이 아래에 한 쌍의 노란 촉수가 있는 30cm 정도의 물고기. 수심 5~400m에 서식하며 모래바닥의 벌래나 갑각류를 먹는다.",
  },
  {
    name: "풀가라지",
    image: "/fishImg/풀가라지.png",
    rank: "1",
    weight: "0.8",
    activityTime: "낮",
    CaptureMethod: {
      "★★": "작살 포획",
      "★★★": "그물 포획 / 수면 포획",
    },
    cookingUsed: "풀가라지 초밥\n풀가라지 핫도그",
    fishInfo:
      "청록색 지느러미와 하얀 배, 아가미 상단에 검은 반점을 가지는 길쭉한 몸매의 46cm 정도의 물고기. 아열대 지역 바다의 수심 40~200m 깊이에 무리지어 서식한다.",
  },
  {
    name: "청줄바리",
    image: "/fishImg/청줄바리.png",
    rank: "2",
    weight: "1.1",
    activityTime: "낮",
    CaptureMethod: {
      "★★": "작살 포획",
      "★★★": "그물 포획 / 수면 포획",
    },
    cookingUsed: "청줄바리 초밥\n화려한 특초밥 세트",
    fishInfo:
      "연두색 몸에 밝은 청색의 가로 줄무늬가 특징인 42cm 정도의 물고기. 인도양과 서태평양 섬 주변 수심 30~120m 사이의 동굴 등에 서식하며 물고기나 갑각류를 먹는다.",
  },
  {
    name: "줄전갱이",
    image: "/fishImg/줄전갱이.png",
    rank: "2",
    weight: "3",
    activityTime: "낮",
    CaptureMethod: {
      "★★": "작살 포획",
      "★★★": "그물 포획 / 수면 포획",
    },
    cookingUsed: "줄전갱이 초밥\n전갱이 샌드",
    fishInfo:
      "등은 청록색, 배는 은백색에 아가미에 작고 검은 점이 있는 장방형 물고기. 열대 및 아열대 바다의 수심 100m 이하에 넓게 서식하며 작은 물고기를 먹는다.",
  },
  {
    name: "무늬바리",
    image: "/fishImg/무늬바리.png",
    rank: "2",
    weight: "3",
    activityTime: "낮",
    CaptureMethod: {
      "★★": "작살 포획",
      "★★★": "그물 포획 / 수면 포획",
    },
    cookingUsed: "무늬바리 초밥\n바다포도 무늬바리 회덮밥\n화려한 특초밥 세트",
    fishInfo:
      "적갈색 몸에 작은 청색 반점이 있는 60cm 정도의 물고기. 따듯한 산호초지역에 주로 서식하며 몸을 숨기고 있다가 다른 물고기를 사냥한다.",
  },
  {
    name: "갈쥐치",
    image: "/fishImg/갈쥐치.png",
    rank: "2",
    weight: "3.5",
    activityTime: "낮",
    CaptureMethod: {
      "★★": "작살 포획",
      "★★★": "그물 포획 / 수면 포획",
    },
    cookingUsed: "갈쥐치 초밥",
    fishInfo:
      "옅은 회색의 몸에 넓고 검은 세로 줄무늬가 있는 44cm 정도의 쥐치. 두터운 입술과 날카로운 이빨이 특징이다. 55m 미만의 산호초나 암초바닥 등지에 서식하며, 무척추동물을 먹는다.",
  },
  {
    name: "대서양보니토",
    image: "/fishImg/대서양보니토.png",
    rank: "2",
    weight: "4",
    activityTime: "낮",
    CaptureMethod: {
      "★★": "작살 포획",
      "★★★": "그물 포획 / 수면 포획",
    },
    cookingUsed: "대서양보니토 초밥\n대서양보니토 커리",
    fishInfo:
      "은색 몸에 청록색의 등지느러미, 등부분에 대각선의 줄무늬를 가지는 75cm 정도의 물고기. 얕은 바다에 무리 지어 서식하며 물고기나 오징어를 먹는다.",
  },
  {
    name: "흑점줄전갱이",
    image: "/fishImg/흑점줄전갱이.png",
    rank: "2",
    weight: "6",
    activityTime: "낮",
    CaptureMethod: {
      "★★": "작살 포획",
      "★★★": "그물 포획 / 수면 포획",
    },
    cookingUsed:
      "흑점줄전갱이 초밥\n다시마 흑점줄갱이 오차즈케\n전갱이 난반즈케",
    fishInfo:
      "녹색 몸에 노란 지느러미, 아가미 위에 어두운 점이 있는 30cm 정도의 물고기. 거의 모든 바다에 고르게 서식하며 플랑크톤이나 해저의 무척추생물 등을 먹는다.",
  },
  {
    name: "갑오징어",
    image: "/fishImg/갑오징어.png",
    rank: "2",
    weight: "4",
    activityTime: "낮",
    CaptureMethod: {
      "★★": "작살 포획",
      "★★★": "그물 포획 / 수면 포획",
    },
    materials: "갑오징어의 피부조각",
    cookingUsed: "갑오징어 초밥\n갑오징어 어니언링\n삼색오징어 구이",
    fishInfo:
      "달걀모양 몸에 주름진 지느러미, 8개의 팔과 2개의 긴 촉수, 갑이라고 하는 단단한 기관을 가진 연체동물. 새우나 게, 조개 등을 먹으며 먹물을 뿜을 수 있다.",
  },
  {
    name: "머구리농어",
    image: "/fishImg/머구리농어.png",
    rank: "13",
    weight: "8",
    activityTime: "낮",
    CaptureMethod: {
      "★★": "작살 포획",
      "★★★": "그물 포획 / 수면 포획",
    },
    cookingUsed: "머구리농어 초밥\n머구리농어 스테이크",
    fishInfo:
      "짙은 적갈색 몸에 노란색, 은색 등의 반점이 불규칙하게 박힌 90cm 정도의 물고기. 넓은 입에 아래턱이 튀어나와있으며 수심 300m 미만의 해저 암초 주변에 서식한다.",
  },
  {
    name: "대서양고등어",
    image: "/fishImg/대서양고등어.png",
    rank: "3",
    weight: "3.5",
    activityTime: "낮",
    CaptureMethod: {
      "★★": "작살 포획",
      "★★★": "그물 포획 / 수면 포획",
    },
    cookingUsed: "대서양고등어 초밥\n훈테 대서양고등어 스크램블",
    fishInfo:
      "길고 뾰족한 주둥이와 긴 은백색의 방추형 몸통, 푸른 등에 검은 물결 같은 세로 줄무늬가 난 30~60cm의 물고기. 차가운 바다 수심 200m 정도에 서식한다.",
  },
  {
    name: "무명갈전갱이",
    image: "/fishImg/무명갈전갱이.png",
    rank: "4",
    weight: "5",
    activityTime: "낮",
    CaptureMethod: {
      "★★": "갈무리",
      "★★★": "드론 인양",
    },
    materials: "무명갈전갱이의 지느러미",
    cookingUsed: "무명갈전갱이 초밥\n전갱이 샌드",
    fishInfo:
      "은색 몸통에 수많은 작고 검은 점들이 뿌려진 150cm 정도의 거대 전갱이. 열대 및 아열대 바다에 넓게 서식하며 다른 물고기나 두족류, 갑각류 등을 먹는다.",
  },
  {
    name: "뱀상어",
    image: "/fishImg/뱀상어.png",
    rank: "6",
    weight: "15",
    activityTime: "항상",
    CaptureMethod: {
      "★★": "갈무리",
      "★★★": "드론 인양",
    },
    materials: "뱀상어의 이빨",
    cookingUsed: "뱀상어 초밥",
    fishInfo:
      "청색의 피부에 하얀 배, 몸에 줄무늬 모양이 있는 3~4m 정도의 상어. 열대 아열대 바다의 수심 350m 부근에 주로 서식하며 무엇이든 잡아먹는다.",
  },
  {
    name: "큰꼬치고기",
    image: "/fishImg/큰꼬치고기.png",
    rank: "3",
    weight: "7",
    activityTime: "낮",
    CaptureMethod: {
      "★★": "작살 포획",
      "★★★": "강철 그물 포획 / 수면 포획",
    },
    cookingUsed: "큰꼬치고기 초밥\n큰꼬치고기 카나페",
    fishInfo:
      "십자무늬가 있는 청회색 등과 검은 반점이 있는 은백색 배를 가진 60~100cm의 물고기. 수심 110m 이하의 산호초 지대에 서식하며 날카로운 이빨로 물고기나 두족류 등을 사냥한다.",
  },
  {
    name: "동갈삼치",
    image: "/fishImg/동갈삼치.png",
    rank: "3",
    weight: "8",
    activityTime: "낮",
    CaptureMethod: {
      "★★": "작살 포획",
      "★★★": "그물 포획 / 수면 포획",
    },
    cookingUsed: "동갈삼치 초밥\n동갈삼치 아란치니",
    fishInfo:
      "선명한 청색의 등과 은색과 청회색의 배, 옆구리에는 수직 얼룩무늬가 있는 고등어과 물고기. 최대 200cm 정도까지 자라며 주로 새우나 오징어, 작은 물고기 등을 잡아먹는다.",
  },
  {
    name: "톱상어",
    image: "/fishImg/톱상어.png",
    rank: "6",
    weight: "6.5",
    activityTime: "항상",
    CaptureMethod: {
      "★★": "갈무리",
      "★★★": "강철 그물 포획 / 드론 인양",
    },
    cookingUsed: "톱상어 초밥",
    fishInfo:
      "주로 오스트레일리아 연안에서 발견되는 톱상어이다. 주둥이의 날카로운 가시로 갑각류나 어류를 찌르고 썰어서 먹는다.",
  },
  {
    name: "블랙타이거새우",
    image: "/fishImg/블랙타이거새우.png",
    rank: "5",
    weight: "0.5",
    activityTime: "낮",
    CaptureMethod: {
      "★★★": "잠자리채 포획",
    },
    cookingUsed:
      "블랙타이거새우 초밥\n멘보샤\n새우튀김 특초밥\n가지 새우완자 튀김",
    fishInfo:
      "동남아 쪽에서 많이 양식되는 새우로 30cm 정도까지 큰다. 맛이 좋아 식재료로 많이 사용된다.",
  },
  {
    name: "귀상어",
    image: "/fishImg/귀상어.png",
    rank: "9",
    weight: "13",
    activityTime: "낮",
    CaptureMethod: {
      "★★": "갈무리",
      "★★★": "드론 인양",
    },
    materials: "귀상어의 머리뼈",
    cookingUsed: "귀상어 초밥",
    fishInfo:
      "머리 모양이 망치처럼 생긴 것이 특징인 상어. 머리에는 감각 기관이 분포해 있어 감지 능력이 뛰어나다.",
  },

  // 종유동굴
  {
    name: "흰점박이해파리",
    image: "/fishImg/흰점박이해파리.png",
    rank: "2",
    weight: "1",
    activityTime: "낮",
    CaptureMethod: {
      "★★★": "그물 포획 / 수면 포획",
    },
    materials: "흰점박이해파리의 촉수",
    cookingUsed: "흰점박이해파리 군함 초밥\n바다포도 해파리 초밥",
    fishInfo:
      "둥글고 약간 평평한 느낌의 투명한 갓에 하얀 반점 같은 작은 반사영역을 가지는 50cm 정도의 해파리. 호주에서 일본 사이의 서태평양 등지에 서식하며 가벼운 독을 가지고 있다.",
  },
  {
    name: "대서양아귀",
    image: "/fishImg/대서양아귀.png",
    rank: "4",
    weight: "5.5",
    activityTime: "낮",
    CaptureMethod: {
      "★★": "작살 포획",
      "★★★": "강철 그물 포획 / 수면 포획",
    },
    cookingUsed: "대서양아귀 초밥\n히알로네마 아귀찜",
    fishInfo:
      "앞쪽의 촉수 모양 가시로 작은 물고기를 꾀어 먹는다. 심해에서 무엇이든 주워먹는 습성이 있으며 흉측한 외모와는 달리 부드러운 식감을 갖고 있다.",
  },

  // 난파선 내부
  {
    name: "갈라파고스붉은게",
    image: "/fishImg/갈라파고스붉은게.png",
    rank: "7",
    weight: "4",
    activityTime: "낮",
    CaptureMethod: {
      "★★★": "강철 그물 포획",
    },
    cookingUsed: "갈라파고스붉은게 초밥\n갈라파고스붉은게 볶음밥",
    fishInfo:
      "태평양 방향의 멕시코-페루 북쪽 해안에서 서식하는 게로 날렵하고 점프도 가능하다. 식물성과 동물성을 모두 먹는 잡식성이다.",
  },
  {
    name: "돛새치",
    image: "/fishImg/돛새치.png",
    rank: "9",
    weight: "9",
    activityTime: "낮",
    CaptureMethod: {
      "★★": "갈무리",
      "★★★": "드론 인양",
    },
    materials: "돛새치의 위턱",
    cookingUsed: "돛새치 초밥\n돛새치 해초조림\n트러플 돛새치 타르타르",
    fishInfo:
      "청새치와 비슷하게 생겼으나 등지느러미가 돛 모양이다. 시속 110km 속도로 헤엄칠 수 있고 열대와 온대 해역에 널리 서식한다.",
  },

  // 블루홀 중간수역 밤
  {
    name: "흰보리새우",
    image: "/fishImg/흰보리새우.png",
    rank: "7",
    weight: "0.1",
    activityTime: "항상",
    CaptureMethod: {
      "★★★": "잠자리채 포획",
    },
    cookingUsed: "흰보리새우 초밥\n홈볼트 먹물 파스타\n흰보리새우 덮밥",
    fishInfo:
      "밝은 회색의 몸체에 긴 수염이 특징인 새우다. 성체는 10cm 이상까지도 성장하며, 주로 멕시코만과 남대서양의 해안 지대에 서식한다.",
  },
  {
    name: "검정핀꼬치고기",
    image: "/fishImg/검정핀꼬치고기.png",
    rank: "5",
    weight: "5.5",
    activityTime: "밤",
    CaptureMethod: {
      "★★": "작살 포획",
      "★★★": "그물 포획 / 수면 포획",
    },
    cookingUsed: "검정핀꼬치고기 초밥\n달빛 블래더랙 롤",
    fishInfo:
      "몸이 긴 물고기로 여러 개의 검은 세로 줄무늬와 검은꼬리 지느러미를 가지며 최고 140cm까지 자란다. 인도태평양의 산호초 지역에 주로 서식한다.",
  },
  {
    name: "화살오징어",
    image: "/fishImg/화살오징어.png",
    rank: "5",
    weight: "4.6",
    activityTime: "밤",
    CaptureMethod: {
      "★★": "작살 포획",
      "★★★": "그물 포획 / 수면 포획",
    },
    cookingUsed: "화살오징어 초밥",
    fishInfo:
      "가늘고 긴 원뿔 모양을 가진 육식성 연체동물이다. 다리는 평소에 주머니에 들어 있다가 먹이를 잡을 때 뻗는다.",
  },
  {
    name: "훔볼트오징어",
    image: "/fishImg/훔볼트오징어.png",
    rank: "8",
    weight: "7.5",
    activityTime: "밤",
    CaptureMethod: {
      "★★": "갈무리",
      "★★★": "드론 인양",
    },
    cookingUsed: "훔볼트오징어 초밥\n훔볼트 먹물 파스타",
    fishInfo:
      "태평양 연안에 서식하는 거대 오징어로 2m 크기까지 자란다. 흡판에 날카로운 갈고리가 달려 있으며 동족을 잡아먹는 등 공격성이 매우 높다.",
  },
  {
    name: "데빌스콜피온피쉬",
    image: "/fishImg/데빌스콜피온피쉬.png",
    rank: "8",
    weight: "3",
    activityTime: "밤",
    CaptureMethod: {
      "★★": "작살 포획",
      "★★★": "그물 포획 / 수면 포획",
    },
    cookingUsed: "데빌스콜피온피쉬 초밥",
    fishInfo:
      "강한 독을 지닌 어종으로 바다에서 가장 위험한 생명체 중 하나. 주변 환경에 은신해있다가 먹잇감을 발견하면 빠르게 낚아챈다.",
  },

  // 블루홀 심해
  {
    name: "앵무조개",
    image: "/fishImg/앵무조개.png",
    rank: "5",
    weight: "1",
    activityTime: "낮",
    CaptureMethod: {
      "★★★": "잠자리채 포획",
    },
    cookingUsed: "앵무조개 초밥",
    fishInfo:
      "붉은 줄무늬가 있는 하얀 나선형 껍질을 가진 20cm 정도의 두족류. 수심 700m의 산호초 사면에 서식하며 90개가 넘는 촉수로 갑각류나 죽은 물고기를 잡아먹는다.",
  },
  {
    name: "귀신고기",
    image: "/fishImg/귀신고기.png",
    rank: "5",
    weight: "3",
    activityTime: "낮",
    CaptureMethod: {
      "★★": "작살 포획",
      "★★★": "그물 포획 / 수면 포획",
    },
    cookingUsed: "귀신고기 초밥\n하바네로 귀신고기 튀김",
    fishInfo:
      "큰 턱과 날카로운 이빨을 가진 검은 물고기. 꼬리쪽으로 갈수록 가늘어지는 16cm 정도의 몸을 가진다. 수심 200m 이상에 서식하며 동물성 플랑크톤이나 오징어, 심해어 등을 먹는다.",
  },
  {
    name: "주름상어",
    image: "/fishImg/주름상어.png",
    rank: "7",
    weight: "8.5",
    activityTime: "낮",
    CaptureMethod: {
      "★★": "갈무리",
      "★★★": "드론 인양",
    },
    materials: "주름상어의 이빨",
    cookingUsed: "주름상어 초밥\n트러플 상어 샌드",
    fishInfo:
      "장어처럼 긴 몸에 주름진 배와 납작한 머리, 짧고 둥근 주둥이를 가진 2m 정도의 상어. 대서양과 태평양 전역의 수심 50~200m에 서식한다. 입을 벌린 채로 다닌다.",
  },
  {
    name: "푸렁통구멍",
    image: "/fishImg/푸렁통구멍.png",
    rank: "6",
    weight: "5",
    activityTime: "낮",
    CaptureMethod: {
      "★★★": "강철 그물 포획",
    },
    materials: "푸렁통구멍의 이빨",
    cookingUsed: "푸렁통구멍 초밥\n푸렁통구멍 탕수어",
    fishInfo:
      "큰 눈과 큰 입, 납작한 머리와 뒤로 갈수록 얇아지는 몸을 가지는 35cm 정도의 물고기. 모래나 진흙 속에 몸을 숨기고 새우나 게, 다른 물고기 등을 사냥한다.",
  },
  {
    name: "코은상어",
    image: "/fishImg/코은상어.png",
    rank: "6",
    weight: "5",
    activityTime: "낮",
    CaptureMethod: {
      "★★": "갈무리",
      "★★★": "드론 인양",
    },
    materials: "코은상어의 독가시",
    cookingUsed: "코은상어 초밥\n다홍빛 생선 롤",
    fishInfo:
      "코끼리 같은 긴 코를 가진 140cm 정도의 은색 연골어류로 첫번째 지느러미에는 독이 있다. 온대 및 열대 바다 수심 200~2000m에 서식하며 작은 물고기를 먹는다.",
  },
  {
    name: "키다리게",
    image: "/fishImg/키다리게.png",
    rank: "6",
    weight: "7.5",
    activityTime: "낮",
    CaptureMethod: {
      "★★★": "강철 그물 포획",
    },
    cookingUsed:
      "키다리게 초밥\n키다리게 오이 초밥\n키다리게 덮밥\n키다리게 커리",
    fishInfo:
      "다리가 긴 오렌지색에 하얀 반점이 있는 게. 울퉁불퉁하고 날카로운 돌기가 있으며 최고 3.7m까지 자란다. 수심 50~500m에 서식하며 잡식성으로 죽은 물고기 등을 먹는다.",
  },
  {
    name: "메가마우스상어",
    image: "/fishImg/메가마우스상어.png",
    rank: "7",
    weight: "11.5",
    activityTime: "낮",
    CaptureMethod: {
      "★★": "갈무리",
      "★★★": "드론 인양",
    },
    materials: "메가마우스상어의 턱뼈",
    cookingUsed: "메가마우스상어 초밥\n트러플 상어 샌드",
    fishInfo:
      "5m 크기의 심해 상어로 유연한 피부를 이용해 입을 전방으로 돌출시켜 최대 1.3m까지 벌린다. 수심 200~4600m에 서식하며 크게 벌린 입으로 플랑크톤을 삼킨다.",
  },
  {
    name: "쿠키커터상어",
    image: "/fishImg/쿠키커터상어.png",
    rank: "6",
    weight: "5",
    activityTime: "낮",
    CaptureMethod: {
      "★★": "작살 포획",
      "★★★": "강철 그물 포획 / 수면 포획",
    },
    cookingUsed: "쿠키커터상어 초밥\n심해어 덴뿌라",
    fishInfo:
      "길쭉한 타원형 몸에 검은 목걸이 모양의 무늬와 날카로운 이빨을 가진 56cm 정도의 갈색 상어. 수심 1000~3700m에 서식하며 주변의 중대형 해양동물의 살점을 뜯어 먹는다.",
  },
  {
    name: "클리오네",
    image: "/fishImg/클리오네.png",
    rank: "5",
    weight: "0.1",
    activityTime: "낮",
    CaptureMethod: {
      "★★★": "잠자리채 포획",
    },
    cookingUsed: "클리오네 초밥",
    fishInfo:
      "투명한 원통형 몸에 날개 같은 발, 뿔이 달린 머리를 가진 10cm 정도 크기의 연체동물. 북극해와 북태평양의 수심 200m 즈음에 주로 서식하며 식물성 플랑크톤이나 작은 동물을 먹는다.",
  },
  {
    name: "점씬벵이",
    image: "/fishImg/점씬벵이.png",
    rank: "5",
    weight: "5",
    activityTime: "낮",
    CaptureMethod: {
      "★★": "작살 포획",
      "★★★": "그물 포획 / 수면 포획",
    },
    cookingUsed: "점씬벵이 초밥\n점씬벵이 오이 군함 초밥",
    fishInfo:
      "크고 둥근 몸에 꼬리가 짧고 가시가 많은 30cm 정도의 암갈색 물고기. 대륙사면의 수심 2400m 이하에 서식하며 지느러미를 사용해 걸어다니다가 근처를 지나는 생물체를 잡아먹는다.",
  },
  {
    name: "분홍꼼치",
    image: "/fishImg/분홍꼼치.png",
    rank: "5",
    weight: "5",
    activityTime: "낮",
    CaptureMethod: {
      "★★": "작살 포획",
      "★★★": "그물 포획 / 수면 포획",
    },
    cookingUsed: "분홍꼼치 초밥\n토마토 꼼치 볶음",
    fishInfo:
      "젤라틴질의 분홍빛 피부를 가진 올챙이처럼 생긴 물고기. 최대 54cm까지 자라지만 보통은 그보다 훨씬 작으며 5000m 이상의 아주 깊은 바다에 서식한다.",
  },
  {
    name: "벤텐어",
    image: "/fishImg/벤텐어.png",
    rank: "5",
    weight: "5",
    activityTime: "낮",
    CaptureMethod: {
      "★★": "작살 포획",
      "★★★": "그물 포획 / 수면 포획",
    },
    cookingUsed: "벤텐어 초밥",
    fishInfo:
      "얇은 몸을 가진 40cm 정도의 물고기. 몸보다 커다란 지느러미가 위아래로 달려있다. 새끼는 얕은 곳에, 성체는 깊은 심해에 사는 것으로 추정된다.",
  },
  {
    name: "불뚝복",
    image: "/fishImg/불뚝복.png",
    rank: "5",
    weight: "5",
    activityTime: "낮",
    CaptureMethod: {
      "★★": "작살 포획",
      "★★★": "그물 포획 / 수면 포획",
    },
    cookingUsed: "불뚝복 초밥",
    fishInfo:
      "황갈색의 몸에 검은 반점이 있는 물고기로 복부에 부채처럼 여닫을 수 있는 커다란 막이 있다. 평균 수심 100m 이상의 깊은 대륙붕 주변에 서식하며, 해면이나 자포생물 등을 먹는다.",
  },
  {
    name: "감투빗해파리",
    image: "/fishImg/감투빗해파리.png",
    rank: "6",
    weight: "7",
    activityTime: "낮",
    CaptureMethod: {
      "★★★": "그물 포획 / 수면 포획",
    },
    materials: "감투빗해파리의 발전기관",
    cookingUsed: "감투빗해파리 초밥",
    fishInfo:
      "무색 투명한 빗해파리. 날개 같은 돌기와 무지갯빛으로 빛나는 8개의 섬모가 있다. 북태평양 수심 600~1100m에 서식하며, 소형 갑각류나 동물성 플랑크톤을 먹는다.",
  },
  {
    name: "붉은배빗해파리",
    image: "/fishImg/붉은배빗해파리.png",
    rank: "6",
    weight: "7",
    activityTime: "낮",
    CaptureMethod: {
      "★★★": "그물 포획 / 수면 포획",
    },
    cookingUsed: "붉은배빗해파리 초밥",
    fishInfo:
      "붉은 색의 빗해파리. 섬모는 무지갯빛으로 빛나며 크기는 1.5~16cm이다. 주로 수심 300~1000m에 서식하며, 소형 갑각류나 동물성 플랑크톤을 먹는다.",
  },
  {
    name: "금눈돔",
    image: "/fishImg/금눈돔.png",
    rank: "5",
    weight: "3",
    activityTime: "낮",
    CaptureMethod: {
      "★★": "작살 포획",
      "★★★": "그물 포획 / 수면 포획",
    },
    cookingUsed: "금눈돔 초밥\n다홍빛 생선 롤",
    fishInfo:
      "심해의 암초에 사는 금눈돔과의 물고기다. 큰 황금빛의 눈이 특징이다.",
  },

  // 빙하통로
  {
    name: "공작오징어",
    image: "/fishImg/공작오징어.png",
    rank: "7",
    weight: "3.5",
    activityTime: "낮",
    CaptureMethod: {
      "★★": "작살 포획",
      "★★★": "그물 포획 / 수면 포획",
    },
    cookingUsed: "공작오징어 초밥\n공작오징어 리피에니\n삼색오징어 구이",
    fishInfo:
      "머리에 달린 길고 화려한 촉수가 조류의 볏과 비슷하다. 투명한 피부를 가지고 있어서 몸의 구조를 완전히 확인할 수 있다.",
  },
  {
    name: "덤보문어",
    image: "/fishImg/덤보문어.png",
    rank: "7",
    weight: "4",
    activityTime: "낮",
    CaptureMethod: {
      "★★": "작살 포획",
      "★★★": "그물 포획 / 수면 포획",
    },
    cookingUsed: "덤보문어 초밥\n덤보문어 타코야끼",
    fishInfo:
      "깊고 추운 바다에 서식하며, 귀 모양의 지느러미를 가지고 있다. 이 모습이 덤보라 불리던 아기 코끼리와 닮았기 때문에 덤보문어라고 알려져 있다.",
  },
  {
    name: "배럴아이",
    image: "/fishImg/배럴아이.png",
    rank: "7",
    weight: "3",
    activityTime: "낮",
    CaptureMethod: {
      "★★": "작살 포획",
      "★★★": "그물 포획 / 수면 포획",
    },
    cookingUsed: "배럴아이 초밥\n심해어 덴뿌라",
    fishInfo:
      "심해에 사는 작은 물고기로 투명한 피부 속에 통 모양의 커다란 눈을 가지고 있다.",
  },
  {
    name: "블롭피쉬",
    image: "/fishImg/블롭피쉬.png",
    rank: "7",
    weight: "7.5",
    activityTime: "낮",
    CaptureMethod: {
      "★★": "작살 포획",
      "★★★": "그물 포획 / 수면 포획",
    },
    cookingUsed: "블롭피쉬 초밥\n블롭피쉬 춘권",
    fishInfo:
      "근육이 거의 없으며 젤리와 같은 몸으로 밀도를 줄여 부력을 유지한다. 세계에서 가장 못생긴 동물 1위로 뽑힌 이력이 있다.",
  },
  {
    name: "흡혈오징어",
    image: "/fishImg/흡혈오징어.png",
    rank: "8",
    weight: "6",
    activityTime: "낮",
    CaptureMethod: {
      "★★": "작살 포획",
      "★★★": "그물 포획 / 수면 포획",
    },
    materials: "흡혈오징어의 다리",
    cookingUsed: "흡혈오징어 초밥\n심해어 덴뿌라\n삼색오징어 구이",
    fishInfo:
      "흡혈귀 같은 생김새를 지니고 있지만, 이름과는 다르게 심해에 떠다니는 유기물 등을 섭취한다. 몸에서 방향 감각을 흐트러뜨리는 섬광을 생성할 수 있다.",
  },
  {
    name: "펠리칸장어",
    image: "/fishImg/펠리칸장어.png",
    rank: "9",
    weight: "8",
    activityTime: "낮",
    CaptureMethod: {
      "★★": "작살 포획",
      "★★★": "강철 그물 포획 / 수면 포획",
    },
    materials: "펠리칸장어의 가죽",
    cookingUsed: "펠리칸장어 초밥\n펠리칸장어 젤리",
    fishInfo:
      "전세계의 따뜻한 바다에 분포하며, 주로 수심이 깊은 곳에서 발견되는 심해 어류다. 몸보다 훨씬 큰 입으로 자신보다 더 큰 먹이를 삼킬 수 있다.",
  },

  // 빙하지역
  {
    name: "극지대구",
    image: "/fishImg/극지대구.png",
    rank: "8",
    weight: "5",
    activityTime: "낮",
    CaptureMethod: {
      "★★": "작살 포획",
      "★★★": "그물 포획 / 수면 포획",
    },
    cookingUsed: "극지대구 초밥\n극지대구 리조토",
    fishInfo:
      "주로 북극애서 서식하는 종으로 수면부터 심해 900m까지 폭넓게 이동한다. 주로 플랑크톤과 크릴을 먹고 산다.",
  },
  {
    name: "남극꼼치",
    image: "/fishImg/남극꼼치.png",
    rank: "8",
    weight: "2",
    activityTime: "낮",
    CaptureMethod: {
      "★★": "작살 포획",
      "★★★": "그물 포획 / 수면 포획",
    },
    cookingUsed: "남극꼼치 초밥\n토마토 꼼치 볶음",
    fishInfo:
      "남극 지방에 서식하며 깊게는 수심 300m까지 분포한다. 주로 바닥에 붙어 다니며 몸에 어두운 줄무늬가 있는 것이 특징이다.",
  },
  {
    name: "남극문어",
    image: "/fishImg/남극문어.png",
    rank: "9",
    weight: "7.5",
    activityTime: "낮",
    CaptureMethod: {
      "★★": "작살 포획",
      "★★★": "그물 포획 / 수면 포획",
    },
    cookingUsed: "남극문어 초밥\n남극문어 카르파초\n트러플 남극문어 구이",
    fishInfo:
      "파란색 피를 가지고 있으며, 남극 바다에서 서식하고 있지만 사실 따뜻한 바다에서도 생존할 수 있다.",
  },
  {
    name: "그린란드상어",
    image: "/fishImg/그린란드상어.png",
    rank: "9",
    weight: "20",
    activityTime: "낮",
    CaptureMethod: {
      "★★": "갈무리",
      "★★★": "드론 인양",
    },
    materials: "그린란드상어의 척추뼈",
    cookingUsed: "그린란드상어 초밥",
    fishInfo:
      "상어 중 가장 추운 지역에서 서식하는 종이다. 성장이 매우 느려서 1년에 1cm 정도 밖에 자라지 않고, 성체가 되는 데는 150년 정도가 걸린다고 한다.",
  },
  {
    name: "북극등가시치",
    image: "/fishImg/북극등가시치.png",
    rank: "8",
    weight: "3",
    activityTime: "낮",
    CaptureMethod: {
      "★★": "작살 포획",
      "★★★": "그물 포획 / 수면 포획",
    },
    cookingUsed: "북극등가시치 초밥",
    fishInfo:
      "주로 북극 연안에 분포하며 등지느러미 뒤쪽에 짧지만 단단한 가시가 특징이다.",
  },
  {
    name: "비악상어",
    image: "/fishImg/비악상어.png",
    rank: "9",
    weight: "13.5",
    activityTime: "낮",
    CaptureMethod: {
      "★★": "갈무리",
      "★★★": "드론 인양",
    },
    materials: "비악상어의 이빨",
    cookingUsed: "비악상어 초밥\n비악상어 조림",
    fishInfo:
      "몸길이는 평균 3m에서 최대 6m까지 자라기도 하는 상어다. 대서양과 남반구의 한랭 해역에서 서식하며 난폭하여 사람을 공격하기도 한다.",
  },
  {
    name: "아이스피쉬",
    image: "/fishImg/아이스피쉬.png",
    rank: "8",
    weight: "5.5",
    activityTime: "낮",
    CaptureMethod: {
      "★★": "작살 포획",
      "★★★": "그물 포획 / 수면 포획",
    },
    cookingUsed: "아이스피쉬 초밥\n아이스피쉬 커리",
    fishInfo:
      "몸 속 헤모글로빈 수치가 낮아서 투명한 피를 가지고 있으며, 작은 몸에 비해 심장이 매우 크다.",
  },
  {
    name: "열빙어",
    image: "/fishImg/열빙어.png",
    rank: "8",
    weight: "0.5",
    activityTime: "낮",
    CaptureMethod: {
      "★★": "작살 포획",
      "★★★": "그물 포획 / 수면 포획",
    },
    cookingUsed: "열빙어 초밥\n열빙어 구이",
    fishInfo:
      "바다빙어과의 물고기이다. 2~6세에 산란을 시작하며 특히 수컷은 산란 후 높은 사망률을 보인다.",
  },
  {
    name: "일각고래",
    image: "/fishImg/일각고래.png",
    rank: "9",
    weight: "9.5",
    activityTime: "낮",
    CaptureMethod: {
      "★★": "갈무리",
      "★★★": "드론 인양",
    },
    materials: "일각고래의 엄니",
    cookingUsed: "일각고래 초밥\n일각고래 미소된장국",
    fishInfo:
      "몸길이와 비슷한 엄니를 가지고 있는데 먼 옛날에는 일각고래의 엄니를 유니콘의 뿔이라 속이는 사람도 있었다고 한다.",
  },
  {
    name: "해덕대구",
    image: "/fishImg/해덕대구.png",
    rank: "8",
    weight: "6",
    activityTime: "낮",
    CaptureMethod: {
      "★★": "작살 포획",
      "★★★": "그물 포획 / 수면 포획",
    },
    cookingUsed: "해덕대구 초밥\n해덕대구 아쿠아파짜",
    fishInfo:
      "아름다운 생김새로 잘 알려져 있는데, 배는 눈처럼 하얗고, 등은 자줏빛이 돌며 측면은 은회색을 띠고 있다.",
  },
  {
    name: "땅가오리",
    image: "/fishImg/땅가오리.png",
    rank: "9",
    weight: "5.5",
    activityTime: "낮",
    CaptureMethod: {
      "★★": "갈무리",
      "★★★": "드론 인양",
    },
    cookingUsed: "땅가오리 초밥\n가오리포",
    fishInfo:
      "배지느러미부터 등지느러미까지 27개의 가시가 나있으며 꼬리에도 중앙과 측면에 날카로운 가시가 돋아 있다.",
  },
  {
    name: "황색왕게",
    image: "/fishImg/황색왕게.png",
    rank: "8",
    weight: "8",
    activityTime: "낮",
    CaptureMethod: {
      "★★★": "강철 그물 포획",
    },
    cookingUsed: "황색왕게 초밥\n간장 게장",
    fishInfo:
      "알래스카 등 주로 추운 바다에서 발견된다. 주로 칼슘으로 구성된 황금색 껍질과 등판의 가시가 특징이다.",
  },

  // 빙하동굴
  {
    name: "북극 망원경 물고기",
    image: "/fishImg/북극 망원경 물고기.png",
    rank: "8",
    weight: "3",
    activityTime: "낮",
    CaptureMethod: {
      "★★": "작살 포획",
      "★★★": "그물 포획 / 수면 포획",
    },
    cookingUsed: "북극 망원경 물고기 초밥",
    fishInfo:
      "극지 심해에서 서식하는 물고기다. 어두운 공간에서 먹으를 찾기 위해 발달한 망원경 모양의 눈이 특징이다.",
  },
  {
    name: "알래스카 명태",
    image: "/fishImg/알래스카 명태.png",
    rank: "8",
    weight: "7",
    activityTime: "낮",
    CaptureMethod: {
      "★★": "작살 포획",
      "★★★": "그물 포획 / 수면 포획",
    },
    cookingUsed: "알래스카 명태 초밥",
    fishInfo:
      "알래스카 및 북극해에서 널리 분포되어 있는 어류다. 얼룩덜룩한 색상의 외형으로 주변 환경에 동화되어 포식자의 시야에 잘 노출되지 않는다.",
  },
  {
    name: "럼프피쉬",
    image: "/fishImg/럼프피쉬.png",
    rank: "9",
    weight: "5",
    activityTime: "낮",
    CaptureMethod: {
      "★★": "작살 포획",
      "★★★": "그물 포획 / 수면 포획",
    },
    cookingUsed: "럼프피쉬 초밥",
    fishInfo:
      "비늘이 없고 가죽 느낌의 표면을 가지며, 울퉁불퉁한 몸체를 가지고 있는 물고기이다. 북극해 부근에서 발견되며 캐비어 대용품으로 인기가 많다.",
  },
  {
    name: "들창코가시장어",
    image: "/fishImg/들창코가시장어.png",
    rank: "9",
    weight: "6.5",
    activityTime: "낮",
    CaptureMethod: {
      "★★": "작살 포획",
      "★★★": "강철 그물 포획 / 수면 포획",
    },
    cookingUsed: "들창코가시장어 초밥\n하바네로 장어 구이",
    fishInfo:
      "극지의 깊은 수심에 서식하는 뱀장어의 한 종류이다. 등쪽에 최대 12개의 작고 단단한 가시가 돋아 있는 것이 특징이다.",
  },

  // 열수분출구역
  {
    name: "왑티아 필덴시스",
    image: "/fishImg/왑티아 필덴시스.png",
    rank: "9",
    weight: "0.4",
    activityTime: "낮",
    CaptureMethod: {
      "★★★": "잠자리채 포획",
    },
    cookingUsed: "왑티아 필덴시스 초밥\n왑티아 필덴시스 초무침",
    fishInfo:
      "중기 캄브리아기에 활동한 것으로 추정되는 절지류이다. 머리를 둘러싼 갑각이 특징이며, 약 7cm 길이까지 성장한다.",
  },
  {
    name: "피카이아",
    image: "/fishImg/피카이아.png",
    rank: "9",
    weight: "4.5",
    activityTime: "낮",
    CaptureMethod: {
      "★★": "작살 포획",
      "★★★": "그물 포획 / 수면 포획",
    },
    cookingUsed: "피카이아 초밥\n피카이아 라멘",
    fishInfo:
      "뱀장어와 유사한 옆으로 평평한 형체의 고대 어종이다. 척추동물의 조상이라고 불린다.",
  },
  {
    name: "알레니프테루스",
    image: "/fishImg/알레니프테루스.png",
    rank: "9",
    weight: "4",
    activityTime: "낮",
    CaptureMethod: {
      "★★": "작살 포획",
      "★★★": "그물 포획 / 수면 포획",
    },
    cookingUsed: "알레니프테루스 초밥",
    fishInfo:
      "작은 꼬리와 옆 줄무늬가 특징인 고대 어종. 최대 15cm까지 성장하는 것으로 알려져 있다.",
  },
  {
    name: "칭멘도스",
    image: "/fishImg/칭멘도스.png",
    rank: "9",
    weight: "6",
    activityTime: "낮",
    CaptureMethod: {
      "★★": "작살 포획",
      "★★★": "그물 포획 / 수면 포획",
    },
    cookingUsed: "칭멘도스 초밥",
    fishInfo:
      "실러캔스와 구조적인 유사성을 가진 4억년 전의 고대 어종이다. 해저에서 육지로 진출한 어종의 조상으로 알려져 있다.",
  },
  {
    name: "팔카투스",
    image: "/fishImg/팔카투스.png",
    rank: "9",
    weight: "6",
    activityTime: "낮",
    CaptureMethod: {
      "★★": "작살 포획",
      "★★★": "그물 포획 / 수면 포획",
    },
    cookingUsed: "팔카투스 초밥\n팔카투스 된장국",
    fishInfo:
      "과거 북아메리카 해역에 서식했을 것으로 추정되는 육식성 어종. 수컷의 경우 머리 위로 앞쪽으로 구부러진 지느러미 가시가 있는 것이 특징이다.",
  },
  {
    name: "드레파나스피스",
    image: "/fishImg/드레파나스피스.png",
    rank: "9",
    weight: "8.5",
    activityTime: "낮",
    CaptureMethod: {
      "★★": "갈무리",
      "★★★": "드론 인양",
    },
    materials: "드레파나스피스의 두갑",
    cookingUsed: "드레파나스피스 초밥",
    fishInfo:
      "한 쌍의 지느러미와 턱이 없는 광선 모양의[17] 중갑 몸체, 평평한 머리가 특징이다. 30cm까지 자라는 것으로 추정된다.",
  },
  {
    name: "둔클레오스테우스",
    image: "/fishImg/둔클레오스테우스.png",
    rank: "9",
    weight: "19.5",
    activityTime: "낮",
    CaptureMethod: {
      "★★": "갈무리",
      "★★★": "드론 인양",
    },
    materials: "둔클레오스테우스의 흉추",
    cookingUsed: "둔클레오스테우스 초밥",
    fishInfo:
      "북아메리카와 유럽, 북아프리카 등지에 해당하는 원시 바다에 살았던 턱뼈가 있는 어류의 한 종류이다. 전체 몸길이는 약 10m 가량이며 몸무게는 약 4톤에 이르렀을 것으로 추정된다.",
  },
  {
    name: "제나칸투스",
    image: "/fishImg/제나칸투스.png",
    rank: "9",
    weight: "5.5",
    activityTime: "낮",
    CaptureMethod: {
      "★★": "갈무리",
      "★★★": "드론 인양",
    },
    cookingUsed: "제나칸투스 초밥",
    fishInfo:
      "전 세계 곳곳에서 서식했을 것으로 추정되는 고대 어종이다. 길게 늘어진 지느러미가 있으며 머리 뒤에 뾰족한 독 가시가 특징이다.",
  },

  // 건목제어실
  {
    name: "메갈로그랍투스",
    image: "/fishImg/메갈로그랍투스.png",
    rank: "9",
    weight: "8",
    activityTime: "낮",
    CaptureMethod: {
      "★★★": "그물 포획 / 수면 포획",
    },
    cookingUsed: "메갈로그랍투스 초밥",
    fishInfo:
      "후기 산드비안절~카티안절에 살았던 수생 절지동물이다. 몸은 두꺼운 껍질로 덮혀 있고 앞팔에 길고 날카로운 가시가 돋아 있다.",
  },

  // 해마
  // 블루홀초입
  {
    name: "빅벨리 해마",
    image: "/fishImg/빅벨리 해마.png",
    rank: "1",
    weight: "0.5",
    activityTime: "낮",
    CaptureMethod: {
      "★★★": "잠자리채 포획",
    },
    cookingUsed: "해마 꼬치구이\n해마 우동\n해마 튀김\n해마해초 샐러드",
    fishInfo:
      "가장 거대한 해마로, 18~35cm까지 자란다. 아름다운 체색과 체형을 지니고 있어 관상 가치가 높고 인기가 많다.",
  },
  {
    name: "자야카 해마",
    image: "/fishImg/자야카 해마.png",
    rank: "1",
    weight: "0.5",
    activityTime: "낮",
    CaptureMethod: {
      "★★★": "잠자리채 포획",
    },
    cookingUsed: "해마 꼬치구이\n해마 우동\n해마 튀김\n해마해초 샐러드",
    fishInfo:
      "최대 14cm 정도로 자라며, 해초, 해조류, 바위 등에서 살고 있다. 몸을 잘 숨기는 것으로 유명하다.",
  },
  {
    name: "갈귀 해마",
    image: "/fishImg/갈귀 해마.png",
    rank: "1",
    weight: "0.5",
    activityTime: "낮",
    CaptureMethod: {
      "★★★": "잠자리채 포획",
    },
    cookingUsed: "해마 꼬치구이\n해마 우동\n해마 튀김\n해마해초 샐러드",
    fishInfo: "12~21.5cm 정도 자라는 이 해마는 날씬하며 긴 꼬리를 갖고 있다.",
  },
  {
    name: "태평양 해마",
    image: "/fishImg/태평양 해마.png",
    rank: "1",
    weight: "0.5",
    activityTime: "낮",
    CaptureMethod: {
      "★★★": "잠자리채 포획",
    },
    cookingUsed: "해마 꼬치구이\n해마 우동\n해마 튀김\n해마해초 샐러드",
    fishInfo:
      "이 해마는 동부 태평양에서 발견되는 유일한 해마다. 12~19cm 정도이지만 더 큰 개체도 발견되고 있다.",
  },
  // 중간수역
  {
    name: "드워프 해마",
    image: "/fishImg/드워프 해마.png",
    rank: "1",
    weight: "0.5",
    activityTime: "낮",
    CaptureMethod: {
      "★★★": "잠자리채 포획",
    },
    cookingUsed: "해마 꼬치구이\n해마 우동\n해마 튀김\n해마해초 샐러드",
    fishInfo:
      "이름에서 알 수 있듯이 최대 5cm 정도로 아주 작은 해마이다. 드워프처럼 피부도 얼룩덜룩하고, 검은 반점 및 사마귀로 덮여 있다.",
  },
  {
    name: "고슴도치 해마",
    image: "/fishImg/고슴도치 해마.png",
    rank: "1",
    weight: "0.5",
    activityTime: "낮",
    CaptureMethod: {
      "★★★": "잠자리채 포획",
    },
    cookingUsed: "해마 꼬치구이\n해마 우동\n해마 튀김\n해마해초 샐러드",
    fishInfo:
      "가시가 나있는 바다의 고슴도치 같은 해마이다. 어른이 될수록 점차 가시가 빠진다고 한다.",
  },
  {
    name: "호랑이꼬리 해마",
    image: "/fishImg/호랑이꼬리 해마.png",
    rank: "1",
    weight: "0.5",
    activityTime: "낮",
    CaptureMethod: {
      "★★★": "잠자리채 포획",
    },
    cookingUsed: "해마 꼬치구이\n해마 우동\n해마 튀김\n해마해초 샐러드",
    fishInfo:
      "최대 18.5cm까지 자라며, 꼬리는 호랑이를 닮았다. 하지만 공격적이진 않다.",
  },
  {
    name: "가시 해마",
    image: "/fishImg/가시 해마.png",
    rank: "1",
    weight: "0.5",
    activityTime: "낮",
    CaptureMethod: {
      "★★★": "잠자리채 포획",
    },
    cookingUsed: "해마 꼬치구이\n해마 우동\n해마 튀김\n해마해초 샐러드",
    fishInfo:
      "몸에 가시가 많고 15~17cm 정도 크기를 가진 해마이다. 아시아에서 태평양과 인도양까지 폭넓게 서식하고 있다.",
  },
  // 종유동굴
  {
    name: "기린 해마",
    image: "/fishImg/기린 해마.png",
    rank: "1",
    weight: "0.5",
    activityTime: "낮",
    CaptureMethod: {
      "★★★": "잠자리채 포획",
    },
    cookingUsed: "해마 꼬치구이\n해마 우동\n해마 튀김\n해마해초 샐러드",
    fishInfo:
      "이 해마는 최대 10cm 정도로 자라며 이름과 다르게 기린처럼 크지는 않다. 키는 작지만 무늬만큼은 기린이다.",
  },
  {
    name: "얼룩말 해마",
    image: "/fishImg/얼룩말 해마.png",
    rank: "1",
    weight: "0.5",
    activityTime: "낮",
    CaptureMethod: {
      "★★★": "잠자리채 포획",
    },
    cookingUsed: "해마 꼬치구이\n해마 우동\n해마 튀김\n해마해초 샐러드",
    fishInfo:
      "날렵하게 생긴 이 해마는 얼룩말을 닮았다. 11~15cm 정도 자라며 현재는 멸종 위기라고 한다.",
  },
  // 블루홀심해
  {
    name: "하양 해마",
    image: "/fishImg/하양 해마.png",
    rank: "1",
    weight: "0.5",
    activityTime: "낮",
    CaptureMethod: {
      "★★★": "잠자리채 포획",
    },
    cookingUsed: "해마 꼬치구이\n해마 우동\n해마 튀김\n해마해초 샐러드",
    fishInfo:
      "태어날 때 색깔이 정해지는 작고 귀여운 해마이다. 애완용으로 아주 인기가 많다. 흰색은 매우 희소성이 높다.",
  },
  {
    name: "왕관 해마",
    image: "/fishImg/왕관 해마.png",
    rank: "1",
    weight: "0.5",
    activityTime: "낮",
    CaptureMethod: {
      "★★★": "잠자리채 포획",
    },
    cookingUsed: "해마 꼬치구이\n해마 우동\n해마 튀김\n해마해초 샐러드",
    fishInfo:
      "머리 위에 마치 왕관을 쓴 것처럼 생긴 해마이다. 6~10.5cm 정도로 작고 개체 수가 매우 적어 아직 알려진 바가 많지 않다.",
  },
  {
    name: "줄지어 해마",
    image: "/fishImg/줄지어 해마.png",
    rank: "1",
    weight: "0.5",
    activityTime: "낮",
    CaptureMethod: {
      "★★★": "잠자리채 포획",
    },
    cookingUsed: "해마 꼬치구이\n해마 우동\n해마 튀김\n해마해초 샐러드",
    fishInfo:
      "북부 해마, 또는 점박이 해마라고도 불린다. 캐나다 북부에서 남미 베네수엘라까지 폭넓게 발견된다",
  },
  {
    name: "복해마",
    image: "/fishImg/복해마.png",
    rank: "1",
    weight: "0.5",
    activityTime: "낮",
    CaptureMethod: {
      "★★★": "잠자리채 포획",
    },
    cookingUsed: "해마 꼬치구이\n해마 우동\n해마 튀김\n해마해초 샐러드",
    fishInfo:
      "이 해마는 노랑 해마라고도 알려져 있다. 하지만 보시다시피 검정색 개체도 존재한다.",
  },

  // 빙하지역 해룡
  {
    name: "풀잎해룡",
    image: "/fishImg/풀잎해룡.png",
    rank: "8",
    weight: "0.5",
    activityTime: "낮",
    CaptureMethod: {
      "★★★": "잠자리채 포획",
    },
    cookingUsed: "해룡 주먹밥",
    fishInfo:
      "인도양과 호주 연안에 서식하며 바위 틈에 있으면 해초와 구분하기 힘들다. 최대 45cm까지 자라며 꼬리가 말려 있지 않아 해마와는 구분되는 종이다.",
  },
  {
    name: "나뭇잎해룡",
    image: "/fishImg/나뭇잎해룡.png",
    rank: "8",
    weight: "0.5",
    activityTime: "낮",
    CaptureMethod: {
      "★★★": "잠자리채 포획",
    },
    cookingUsed: "해룡 주먹밥",
    fishInfo:
      "호주 일부 지역에서만 서식하는 종으로 몸에 풀잎 같은 지느러미가 있어 위장에 용이하다. 풀숲에 숨어 작은 플랑크톤 등을 먹고 산다.",
  },
  {
    name: "루비해룡",
    image: "/fishImg/루비해룡.png",
    rank: "8",
    weight: "0.5",
    activityTime: "낮",
    CaptureMethod: {
      "★★★": "잠자리채 포획",
    },
    cookingUsed: "해룡 주먹밥",
    fishInfo:
      "깊은 바다에 사는 해룡으로 매우 희귀한 종이다. 온몸이 루비처럼 붉은색인 것이 특징이다.",
  },

  // 통발
  {
    name: "가시발새우",
    image: "/fishImg/가시발새우.png",
    rank: "5",
    weight: "0.1",
    activityTime: "밤",
    CaptureMethod: {
      "★★": "통발 포획",
      "★★★": "통발 포획",
    },
    cookingUsed: "가시발새우 초밥",
    fishInfo:
      "태평양 지역에 서식하는 바닷가재이다. 가재치곤 집게발이 작은 편이며 몸 전체적으로 연한 주황색을 띤다. 다리에 선명한 4개의 붉은 띠 무늬가 있다.",
  },
  {
    name: "미국바닷가재",
    image: "/fishImg/미국바닷가재.png",
    rank: "8",
    weight: "1",
    activityTime: "낮",
    CaptureMethod: {
      "★★": "통발 포획",
      "★★★": "통발 포획",
    },
    cookingUsed: "미국바닷가재 초밥\n랍스터 플래터",
    fishInfo:
      "북미 대서양 해안 위주로 발견되며 세계에서 가장 무겁고 긴 종으로 알려져 있다. 주로 갈색빛을 띄는 몸체를 가지고 있으며 차가운 바다의 수심 40m 이내 바위 사이에서 서식한다.",
  },
  {
    name: "블루랍스터",
    image: "/fishImg/블루랍스터.png",
    rank: "8",
    weight: "1",
    activityTime: "밤",
    CaptureMethod: {
      "★★": "통발 포획",
      "★★★": "통발 포획",
    },
    cookingUsed: "블루랍스터 초밥\n트러플 블루랍스터 꼬리회",
    fishInfo:
      "미국바닷가재의 색소결핍으로 푸른 빛의 몸체를 가진 가재다. 200만 분의 1 확률로 발현되며 그 희귀함 때문에 행운을 가져다준다고 여겨진다.",
  },
  {
    name: "유럽바닷가재",
    image: "/fishImg/유럽바닷가재.png",
    rank: "5",
    weight: "1",
    activityTime: "낮",
    CaptureMethod: {
      "★★": "통발 포획",
      "★★★": "통발 포획",
    },
    cookingUsed: "유럽바닷가재 초밥",
    fishInfo:
      "최대 150M 수심까지 서식하며 북대서양과 지중해 서부에 폭넓게 분포하는 바닷가재다. 갑각은 주로 파란색이며 배면은 노란색 혹은 흰색이다.",
  },

  // 블루홀 중간수역
  {
    name: "캘리포니아닭새우",
    image: "/fishImg/캘리포니아닭새우.png",
    rank: "5",
    weight: "1.5",
    activityTime: "낮",
    CaptureMethod: {
      "★★": "통발 포획",
      "★★★": "통발 포획",
    },
    cookingUsed: "캘리포니아닭새우 초밥",
    fishInfo:
      "태평양 등지에서 발견되는 가시 랍스터의 일종이다. 일반적인 랍스터종과 달리큰 집게발이 없으며, 2개의 작은 갈고리 모양의 집게발을 가졌다.",
  },
  {
    name: "부채새우",
    image: "/fishImg/부채새우.png",
    rank: "5",
    weight: "0.2",
    activityTime: "밤",
    CaptureMethod: {
      "★★": "통발 포획",
      "★★★": "통발 포획",
    },
    cookingUsed: "부채새우 초밥",
    fishInfo:
      "부채 같이 변형된 머리를 가진 게 특징이며 대륙붕의 모래나 진흙 같은 부드러운 바닥에서 서식한다. 야행성으로서, 낮에는 삽처럼 변형된 수염을 이용해 지면을 파고 들어가 숨어 지낸다.",
  },
  {
    name: "비단닭새우",
    image: "/fishImg/비단닭새우.png",
    rank: "8",
    weight: "1.2",
    activityTime: "낮",
    CaptureMethod: {
      "★★": "통발 포획",
      "★★★": "통발 포획",
    },
    cookingUsed: "비단닭새우 초밥\n랍스터 플래터",
    fishInfo:
      "호주 및 인도 태평양의 50m 이하 얕은 해역에서 발견된다. 청록색 기반의 갑각을 가지고 있으며, 몸 전체에 있는 다양한 색의 줄무늬가 특징이다.",
  },
  {
    name: "크리스탈랍스터",
    image: "/fishImg/크리스탈랍스터.png",
    rank: "5",
    weight: "1.5",
    activityTime: "밤",
    CaptureMethod: {
      "★★": "통발 포획",
      "★★★": "통발 포획",
    },
    cookingUsed: "크리스탈랍스터 초밥\n크리스탈랍스터 롤",
    fishInfo:
      "색소 결핍으로 반투명한 하얀색 몸체를 갖게 된 미국바닷가재의 일종이다. 1억분의 1 확률로 발현되며 가장 희귀한 랍스터로 알려져 있다.",
  },

  // 블루홀 심해
  {
    name: "네점발빨간새우",
    image: "/fishImg/네점발빨간새우.png",
    rank: "5",
    weight: "0.2",
    activityTime: "낮",
    CaptureMethod: {
      "★★": "통발 포획",
      "★★★": "통발 포획",
    },
    cookingUsed: "네점발빨간새우 초밥\n하바네로 가재 볶음",
    fishInfo:
      "집게다리를 비롯해 전체적으로 날씬한 외모가 특징이다. 빛에 민감하여 어둠 속에서 활발히 활동한다.",
  },
  {
    name: "동부바위바닷가재",
    image: "/fishImg/동부바위바닷가재.png",
    rank: "8",
    weight: "2.5",
    activityTime: "낮",
    CaptureMethod: {
      "★★": "통발 포획",
      "★★★": "통발 포획",
    },
    cookingUsed: "동부바위바닷가재 초밥\n동부바위바닷가재 계란찜",
    fishInfo:
      "호주 남동부와 뉴질랜드 북부 해역에서 발견되며 200m가 넘는 수심에서도 활동한다. 미국바닷가재와 함께 세계에서 가장 긴 십각류 갑각류로 알려져있다.",
  },
  {
    name: "대게",
    image: "/fishImg/대게.png",
    rank: "8",
    weight: "2",
    activityTime: "낮",
    CaptureMethod: {
      "★★": "통발 포획",
      "★★★": "통발 포획",
    },
    cookingUsed: "대게 초밥\n간장 게장",
    fishInfo:
      "북극해를 포함한 태평양과 대서양의 최북단 지역의 차가운 바다에 서식한다. 조개, 갯지렁이 등을 사냥하기도 하고, 유기물을 섭취하며 바닷속 청소부 역할을 한다.",
  },
  {
    name: "털게",
    image: "/fishImg/털게.png",
    rank: "9",
    weight: "1.5",
    activityTime: "낮",
    CaptureMethod: {
      "★★": "통발 포획",
      "★★★": "통발 포획",
    },
    cookingUsed: "대게 초밥\n간장 게장",
    fishInfo:
      "오호츠크 해와 베링 해를 비롯한 북태평양의 해저 진흙, 모래 바닥에 서식한다. 단단한 갑각을 덮는 부드러운 가시가 특징이다.",
  },

  // 열수분출구역
  {
    name: "돌로카리스인겐스",
    image: "/fishImg/돌로카리스인겐스.png",
    rank: "8",
    weight: "1.5",
    activityTime: "낮",
    CaptureMethod: {
      "★★": "통발 포획",
      "★★★": "통발 포획",
    },
    cookingUsed: "돌로카리스인겐스 초밥",
    fishInfo:
      "쥐라기 시대에 활동한 거대한 겹눈을 가진 절지생물이다. 게처럼 단단한 외골격과 3쌍의 다리를 지니고 있다. 지면의 작은 생물을 붙잡아 먹거나, 매복하여 사냥했을 것으로 보인다.",
  },
  {
    name: "토큐미아카탈렙시스",
    image: "/fishImg/토큐미아카탈렙시스.png",
    rank: "9",
    weight: "2",
    activityTime: "낮",
    CaptureMethod: {
      "★★": "통발 포획",
      "★★★": "통발 포획",
    },
    cookingUsed: "토큐미아카탈렙시스 초밥\n랍스터 플래터",
    fishInfo:
      "캄브리아기에 살았던 것으로 추정되며 50개에 달하는 다리와 2개의 집게발, 더듬이 부근의 작은 눈이 특징이다. 약 10cm 정도 크기이며 열대 바다의 바닥에 서식한 것으로 보인다.",
  },

  // 건목제어실
  {
    name: "아노말로칼리스",
    image: "/fishImg/아노말로칼리스.png",
    rank: "9",
    weight: "4",
    activityTime: "낮",
    CaptureMethod: {
      "★★★": "강철 그물 포획",
    },
    cookingUsed: "아노말로칼리스 새끼 초밥",
    fishInfo:
      "고생대 캄브리아기의 바다에서 서식했던 범절지동물의 새끼이다. 몸 옆의 지느러미를 움직여 갑오징어나 가오리와 비슷하게 헤엄친 것으로 보인다.",
  },
];

export default FishData;
