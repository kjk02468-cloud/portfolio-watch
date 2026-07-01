const fs = require('fs');
const path = require('path');

const outputDir = path.join(__dirname, 'cardnews-images');
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir);

const CARD_W = 1080;
const CARD_H = 1350;

function svgHead() {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${CARD_W}" height="${CARD_H}" viewBox="0 0 ${CARD_W} ${CARD_H}">
  <defs>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#0a1628"/>
      <stop offset="100%" stop-color="#0d0d0d"/>
    </linearGradient>
    <linearGradient id="brandGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#10b981"/>
      <stop offset="100%" stop-color="#059669"/>
    </linearGradient>
  </defs>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700;800;900&amp;family=DM+Mono:wght@400;500&amp;display=swap');
    text { font-family: 'Noto Sans KR', sans-serif; }
    .mono { font-family: 'DM Mono', monospace; }
    .headline { font-size: 52px; font-weight: 800; fill: #ffffff; }
    .headline-lg { font-size: 60px; font-weight: 800; fill: #ffffff; }
    .sub { font-size: 28px; font-weight: 400; fill: rgba(255,255,255,0.55); }
    .label { font-family: 'DM Mono', monospace; font-size: 24px; font-weight: 500; fill: rgba(255,255,255,0.5); letter-spacing: 3px; }
    .green { fill: #4ade80; }
    .red { fill: #f87171; }
    .gold { fill: #fbbf24; }
    .blue { fill: #60a5fa; }
    .white { fill: #ffffff; }
    .dim { fill: rgba(255,255,255,0.45); }
    .dim2 { fill: rgba(255,255,255,0.6); }
    .dim3 { fill: rgba(255,255,255,0.35); }
    .brand-text { font-family: 'DM Mono', monospace; font-size: 22px; fill: rgba(255,255,255,0.4); letter-spacing: 2px; }
    .card-num { font-family: 'DM Mono', monospace; font-size: 26px; fill: rgba(255,255,255,0.3); }
    .box-title { font-size: 28px; font-weight: 700; fill: #ffffff; }
    .box-desc { font-size: 22px; font-weight: 400; fill: rgba(255,255,255,0.5); }
    .stat-label { font-size: 28px; font-weight: 500; fill: rgba(255,255,255,0.6); }
    .stat-val { font-family: 'DM Mono', monospace; font-size: 30px; font-weight: 500; }
    .info-text { font-size: 25px; font-weight: 500; fill: rgba(255,255,255,0.7); }
    .warn-title { font-size: 25px; font-weight: 700; }
  </style>`;
}

function brand(y = 1280) {
  return `
  <rect x="60" y="${y}" width="42" height="42" rx="11" fill="url(#brandGrad)"/>
  <text x="82" y="${y + 28}" text-anchor="middle" font-size="20">💎</text>
  <text x="114" y="${y + 29}" class="brand-text">JACK1</text>`;
}

function roundRect(x, y, w, h, r, fill) {
  return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${fill}"/>`;
}

// ====== PAGE 1: THUMBNAIL ======
function page1() {
  return `${svgHead()}
  <rect width="${CARD_W}" height="${CARD_H}" fill="url(#bgGrad)"/>

  <!-- Top bar -->
  <rect x="60" y="50" width="42" height="42" rx="11" fill="url(#brandGrad)"/>
  <text x="82" y="78" text-anchor="middle" font-size="20">💎</text>
  <text x="114" y="77" class="brand-text">JACK1</text>

  ${roundRect(840, 48, 180, 46, 23, 'rgba(74,222,128,0.12)')}
  <rect x="840" y="48" width="180" height="46" rx="23" fill="none" stroke="rgba(74,222,128,0.25)" stroke-width="1"/>
  <text x="930" y="78" text-anchor="middle" class="mono" font-size="22" fill="#4ade80">2026.06.21</text>

  <!-- Emojis -->
  <text x="400" y="360" font-size="80" text-anchor="middle">📉</text>
  <text x="540" y="360" font-size="80" text-anchor="middle">🏛️</text>
  <text x="680" y="360" font-size="80" text-anchor="middle">🚀</text>

  <!-- Headline -->
  <text x="540" y="480" text-anchor="middle" class="headline-lg">이번 주 증시,</text>
  <text x="540" y="555" text-anchor="middle" class="headline-lg"><tspan class="green">이 3가지</tspan>는</text>
  <text x="540" y="630" text-anchor="middle" class="headline-lg">꼭 알아야 합니다.</text>

  <!-- Sub -->
  <text x="540" y="700" text-anchor="middle" class="sub">Fed 점도표 반전 · 나스닥100 리밸런싱 · Apple-Intel 딜</text>

  <!-- Tags -->
  ${roundRect(115, 760, 220, 52, 12, '#1a1a1a')}
  <circle cx="142" cy="786" r="6" fill="#f87171"/>
  <text x="158" y="794" font-size="22" fill="rgba(255,255,255,0.6)">Fed 매파 전환</text>

  ${roundRect(355, 760, 230, 52, 12, '#1a1a1a')}
  <circle cx="382" cy="786" r="6" fill="#4ade80"/>
  <text x="398" y="794" font-size="22" fill="rgba(255,255,255,0.6)">나스닥100 편입</text>

  ${roundRect(605, 760, 210, 52, 12, '#1a1a1a')}
  <circle cx="632" cy="786" r="6" fill="#60a5fa"/>
  <text x="648" y="794" font-size="22" fill="rgba(255,255,255,0.6)">반도체 빅딜</text>

  ${roundRect(340, 832, 230, 52, 12, '#1a1a1a')}
  <circle cx="367" cy="858" r="6" fill="#fbbf24"/>
  <text x="383" y="866" font-size="22" fill="rgba(255,255,255,0.6)">코스피 9,000</text>

  <!-- Bottom brand -->
  <rect x="60" y="1260" width="42" height="42" rx="11" fill="url(#brandGrad)"/>
  <text x="82" y="1288" text-anchor="middle" font-size="20">💎</text>
  <text x="114" y="1287" class="brand-text">JACK1 WEEKLY BRIEF</text>
</svg>`;
}

// ====== PAGE 2: FED ======
function page2() {
  return `${svgHead()}
  <rect width="${CARD_W}" height="${CARD_H}" fill="#0d0d0d"/>
  <text x="1020" y="76" text-anchor="end" class="card-num">1/8</text>

  <text x="60" y="90" class="label">FED DECISION</text>

  <text x="60" y="190" class="headline"><tspan class="red">금리 동결</tspan>했지만</text>
  <text x="60" y="260" class="headline">점도표는</text>
  <text x="60" y="330" class="headline"><tspan class="red">'인상'</tspan>을 가리켰다.</text>

  <text x="60" y="400" class="sub">6월 17일 FOMC — 시장이 예상 못 한 건</text>
  <text x="60" y="440" class="sub">동결이 아니라 <tspan class="white" font-weight="700">그 다음 방향</tspan>이었습니다.</text>

  <!-- Rate box -->
  ${roundRect(60, 480, 960, 170, 20, '#1a1a1a')}
  <text x="100" y="530" class="box-title">기준금리</text>
  <text x="100" y="595" class="mono" font-size="48" fill="#f87171">3.50 — 3.75%</text>
  <text x="100" y="630" class="box-desc">만장일치(12-0) 동결 — 여기까진 예상대로</text>

  <!-- Two col -->
  ${roundRect(60, 670, 465, 170, 20, '#1a1a1a')}
  <text x="100" y="720" class="box-title">점도표 중간값</text>
  <text x="100" y="775" class="mono" font-size="40" fill="#f87171">3.8% ↑</text>
  <text x="100" y="815" class="box-desc">3월엔 '인하' → 완전 반전</text>

  ${roundRect(545, 670, 475, 170, 20, '#1a1a1a')}
  <text x="585" y="720" class="box-title">인상 예상 위원</text>
  <text x="585" y="775" class="mono" font-size="40" fill="#fbbf24">9 / 18명</text>
  <text x="585" y="815" class="box-desc">절반이 연내 인상 예상</text>

  <!-- Warning -->
  ${roundRect(64, 870, 956, 130, 0, 'rgba(248,113,113,0.08)')}
  <rect x="60" y="870" width="4" height="130" fill="#f87171"/>
  <text x="100" y="910" class="warn-title red">핵심</text>
  <text x="100" y="948" class="info-text">17/18 위원이 인플레이션 리스크를 "상방"으로 판단.</text>
  <text x="100" y="982" class="info-text">3월까지의 인하 기대 → 완전히 사라졌습니다.</text>

  ${brand()}
</svg>`;
}

// ====== PAGE 3: MARKET REACTION ======
function page3() {
  return `${svgHead()}
  <rect width="${CARD_W}" height="${CARD_H}" fill="#0d0d0d"/>
  <text x="1020" y="76" text-anchor="end" class="card-num">2/8</text>

  <text x="60" y="90" class="label">MARKET REACTION</text>

  <text x="60" y="190" class="headline">시장은 <tspan class="red">즉각 반응</tspan>했다.</text>
  <text x="60" y="260" class="headline">성장주 <tspan class="red">직격탄.</tspan></text>

  <text x="60" y="330" class="sub">6월 17일 (수) — "Fed day" 역대급 하락.</text>
  <text x="60" y="370" class="sub">1994년 이후 최악의 Fed day 반응.</text>

  <!-- Stats box -->
  ${roundRect(60, 420, 960, 320, 20, '#1a1a1a')}

  <text x="100" y="480" class="stat-label">S&amp;P 500</text>
  <text x="920" y="480" text-anchor="end" class="stat-val red">−1.21%  7,420</text>
  <line x1="100" y1="500" x2="980" y2="500" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>

  <text x="100" y="550" class="stat-label">나스닥</text>
  <text x="920" y="550" text-anchor="end" class="stat-val red">−1.34%  26,021</text>
  <line x1="100" y1="570" x2="980" y2="570" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>

  <text x="100" y="620" class="stat-label">다우존스</text>
  <text x="920" y="620" text-anchor="end" class="stat-val red">−507pt</text>
  <line x1="100" y1="640" x2="980" y2="640" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>

  <text x="100" y="690" class="stat-label">국채 금리</text>
  <text x="920" y="690" text-anchor="end" class="stat-val gold">급등 ↑</text>

  <!-- Warning box -->
  ${roundRect(64, 780, 956, 150, 0, 'rgba(248,113,113,0.08)')}
  <rect x="60" y="780" width="4" height="150" fill="#f87171"/>
  <text x="100" y="822" class="warn-title red">왜 성장주가 더 아픈가?</text>
  <text x="100" y="862" class="info-text">금리 인상 → 할인율 상승 →</text>
  <text x="100" y="896" class="info-text"><tspan class="white" font-weight="700">미래 이익의 현재 가치 하락</tspan></text>

  <!-- Info box -->
  ${roundRect(60, 960, 960, 110, 20, '#1a1a1a')}
  <text x="100" y="1005" class="box-desc"><tspan class="gold" font-weight="700">나스닥 100</tspan>이 S&amp;P 500보다 더 빠진 이유:</text>
  <text x="100" y="1040" class="box-desc">기술주·AI주 비중 ↑ = 금리 민감도 ↑</text>

  ${brand()}
</svg>`;
}

// ====== PAGE 4: NASDAQ-100 ======
function page4() {
  return `${svgHead()}
  <rect width="${CARD_W}" height="${CARD_H}" fill="#0d0d0d"/>
  <text x="1020" y="76" text-anchor="end" class="card-num">3/8</text>

  <text x="60" y="90" class="label">NASDAQ-100 REBALANCE</text>

  <text x="60" y="190" class="headline"><tspan class="green">나스닥100</tspan>에</text>
  <text x="60" y="260" class="headline">새 얼굴 <tspan class="green">5종목</tspan> 합류.</text>

  <text x="60" y="330" class="sub">6월 22일(월) 장 시작 전 적용.</text>
  <text x="60" y="370" class="sub">패시브 자금 수천억 원 규모 자동 유입 예상.</text>

  <!-- ALAB -->
  ${roundRect(60, 420, 960, 100, 20, '#1a1a1a')}
  <text x="100" y="468" font-size="30" font-weight="700" fill="#fff">ALAB</text>
  <text x="240" y="468" font-size="21" fill="rgba(255,255,255,0.45)">Astera Labs · AI 인터커넥트</text>
  <text x="920" y="458" text-anchor="end" class="mono" font-size="26" fill="#4ade80">YTD +121%</text>
  <text x="920" y="490" text-anchor="end" font-size="19" fill="rgba(255,255,255,0.35)">발표 후 +5%</text>

  <!-- RKLB -->
  ${roundRect(60, 536, 960, 100, 20, '#1a1a1a')}
  <text x="100" y="584" font-size="30" font-weight="700" fill="#fff">RKLB</text>
  <text x="240" y="584" font-size="21" fill="rgba(255,255,255,0.45)">Rocket Lab · 우주 발사체</text>
  <text x="920" y="574" text-anchor="end" class="mono" font-size="26" fill="#4ade80">YTD +64.5%</text>
  <text x="920" y="606" text-anchor="end" font-size="19" fill="rgba(255,255,255,0.35)">발표 후 +11%</text>

  <!-- NBIS -->
  ${roundRect(60, 652, 960, 100, 20, '#1a1a1a')}
  <text x="100" y="700" font-size="30" font-weight="700" fill="#fff">NBIS</text>
  <text x="240" y="700" font-size="21" fill="rgba(255,255,255,0.45)">Nebius · AI 클라우드 인프라</text>
  <text x="920" y="700" text-anchor="end" class="mono" font-size="26" fill="#4ade80">YTD +165%</text>

  <!-- CRWV & TER -->
  ${roundRect(60, 772, 465, 80, 20, '#1a1a1a')}
  <text x="100" y="822" font-size="28" font-weight="700" fill="#fff">CRWV</text>
  <text x="260" y="822" font-size="20" fill="rgba(255,255,255,0.45)">CoreWeave</text>

  ${roundRect(545, 772, 475, 80, 20, '#1a1a1a')}
  <text x="585" y="822" font-size="28" font-weight="700" fill="#fff">TER</text>
  <text x="720" y="822" font-size="20" fill="rgba(255,255,255,0.45)">Teradyne</text>

  <!-- Green highlight -->
  ${roundRect(64, 890, 956, 120, 0, 'rgba(74,222,128,0.08)')}
  <rect x="60" y="890" width="4" height="120" fill="#4ade80"/>
  <text x="100" y="932" class="warn-title green">왜 중요한가?</text>
  <text x="100" y="970" class="info-text">나스닥100 ETF(QQQ 등) 추종 자금이 자동 매수.</text>
  <text x="100" y="998" class="info-text">편입 = 수급 구조적 개선.</text>

  ${brand()}
</svg>`;
}

// ====== PAGE 5: Apple-Intel ======
function page5() {
  return `${svgHead()}
  <rect width="${CARD_W}" height="${CARD_H}" fill="#0d0d0d"/>
  <text x="1020" y="76" text-anchor="end" class="card-num">4/8</text>

  <text x="60" y="90" class="label">SEMICONDUCTOR</text>

  <text x="60" y="190" class="headline"><tspan class="blue">Apple × Intel</tspan></text>
  <text x="60" y="260" class="headline">미국 내 칩 설계·생산</text>
  <text x="60" y="330" class="headline"><tspan class="blue">파운드리 딜.</tspan></text>

  <text x="60" y="400" class="sub">6월 18일 — 트럼프 대통령 발표.</text>
  <text x="60" y="440" class="sub">반도체 공급망 판도를 바꿀 수 있는 한 수.</text>

  <!-- Intel box -->
  ${roundRect(60, 490, 960, 150, 20, '#1a1a1a')}
  <text x="100" y="540" class="box-title">Intel 주가 반응</text>
  <text x="100" y="600" class="mono" font-size="44" fill="#4ade80">+9% 프리마켓</text>
  <text x="100" y="628" class="box-desc">올해만 약 3배 상승 · 반도체 섹터 YTD +90%</text>

  <!-- Two col -->
  ${roundRect(60, 660, 465, 170, 20, '#1a1a1a')}
  <text x="100" y="710" font-size="25" font-weight="700" fill="#60a5fa">Apple의 계산</text>
  <text x="100" y="750" class="box-desc">TSMC 의존도 ↓</text>
  <text x="100" y="782" class="box-desc">Nvidia·AMD와 TSMC</text>
  <text x="100" y="814" class="box-desc">물량 경쟁 회피</text>

  ${roundRect(545, 660, 475, 170, 20, '#1a1a1a')}
  <text x="585" y="710" font-size="25" font-weight="700" fill="#60a5fa">Intel의 계산</text>
  <text x="585" y="750" class="box-desc">파운드리 사업</text>
  <text x="585" y="782" class="box-desc">핵심 고객 확보</text>
  <text x="585" y="814" class="box-desc">미국 내 제조 명분 강화</text>

  <!-- Blue box -->
  ${roundRect(64, 865, 956, 130, 0, 'rgba(96,165,250,0.08)')}
  <rect x="60" y="865" width="4" height="130" fill="#60a5fa"/>
  <text x="100" y="907" class="warn-title blue">시사점</text>
  <text x="100" y="945" class="info-text">반도체 공급망의 지리적 다변화 가속.</text>
  <text x="100" y="978" class="info-text">TSMC 독점 구조에 균열 — 미국 파운드리 시대 개막.</text>

  ${brand()}
</svg>`;
}

// ====== PAGE 6: KOSPI ======
function page6() {
  return `${svgHead()}
  <rect width="${CARD_W}" height="${CARD_H}" fill="#0d0d0d"/>
  <text x="1020" y="76" text-anchor="end" class="card-num">5/8</text>

  <text x="60" y="90" class="label">KOSPI</text>

  <text x="60" y="190" class="headline">코스피 <tspan class="green">9,052.</tspan></text>
  <text x="60" y="260" class="headline">서킷브레이커에서</text>
  <text x="60" y="330" class="headline"><tspan class="green">역대 최고</tspan>까지.</text>

  <text x="60" y="400" class="sub">6/8 −8.3% 폭락 → 불과 11일 만에 9천선 돌파.</text>
  <text x="60" y="440" class="sub">반도체 슈퍼사이클이 끌어올렸습니다.</text>

  <!-- Stats -->
  ${roundRect(60, 490, 960, 280, 20, '#1a1a1a')}

  <text x="100" y="545" class="stat-label">코스피</text>
  <text x="920" y="545" text-anchor="end" class="stat-val" fill="#4ade80">9,052pt</text>
  <line x1="100" y1="568" x2="980" y2="568" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>

  <text x="100" y="610" class="stat-label">시가총액</text>
  <text x="920" y="610" text-anchor="end" class="stat-val" fill="#4ade80">7,000조 돌파</text>
  <line x1="100" y1="633" x2="980" y2="633" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>

  <text x="100" y="675" class="stat-label">원/달러 환율</text>
  <text x="920" y="675" text-anchor="end" class="stat-val gold">1,517원</text>
  <line x1="100" y1="698" x2="980" y2="698" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>

  <text x="100" y="740" class="stat-label">월간 수익률</text>
  <text x="920" y="740" text-anchor="end" class="stat-val" fill="#4ade80">+25.57%</text>

  <!-- Two compare boxes -->
  ${roundRect(64, 810, 466, 190, 0, 'rgba(248,113,113,0.08)')}
  <rect x="60" y="810" width="4" height="190" fill="#f87171"/>
  <text x="100" y="852" font-size="23" font-weight="700" fill="#f87171">6/8 블랙 먼데이</text>
  <text x="100" y="892" font-size="23" fill="rgba(255,255,255,0.6)">장중 −8.3%</text>
  <text x="100" y="924" font-size="23" fill="rgba(255,255,255,0.6)">7,484pt 터치</text>
  <text x="100" y="956" font-size="23" fill="rgba(255,255,255,0.6)">서킷브레이커 발동</text>

  ${roundRect(554, 810, 466, 190, 0, 'rgba(74,222,128,0.08)')}
  <rect x="550" y="810" width="4" height="190" fill="#4ade80"/>
  <text x="590" y="852" font-size="23" font-weight="700" fill="#4ade80">6/19 현재</text>
  <text x="590" y="892" font-size="23" fill="rgba(255,255,255,0.6)">9,052pt 마감</text>
  <text x="590" y="924" font-size="23" fill="rgba(255,255,255,0.6)">사상 첫 9천선</text>
  <text x="590" y="956" font-size="23" fill="rgba(255,255,255,0.6)">SK하이닉스 시총 2천조</text>

  ${brand()}
</svg>`;
}

// ====== PAGE 7: NEXT WEEK ======
function page7() {
  return `${svgHead()}
  <rect width="${CARD_W}" height="${CARD_H}" fill="#0d0d0d"/>
  <text x="1020" y="76" text-anchor="end" class="card-num">6/8</text>

  <text x="60" y="90" class="label">NEXT WEEK</text>

  <text x="60" y="190" class="headline">다음 주</text>
  <text x="60" y="260" class="headline"><tspan class="gold">반드시 체크할</tspan></text>
  <text x="60" y="330" class="headline">5가지.</text>

  <!-- Item 1 -->
  ${roundRect(60, 385, 960, 110, 20, '#1a1a1a')}
  ${roundRect(100, 405, 40, 40, 10, 'rgba(74,222,128,0.15)')}
  <text x="120" y="433" text-anchor="middle" class="mono" font-size="20" fill="#4ade80">1</text>
  <text x="160" y="430" font-size="26" font-weight="700" fill="#fff">나스닥100 리밸런싱 첫날 (6/22 월)</text>
  <text x="160" y="468" font-size="21" fill="rgba(255,255,255,0.45)">ALAB·RKLB·NBIS 편입 후 패시브 자금 유입 확인</text>

  <!-- Item 2 -->
  ${roundRect(60, 515, 960, 110, 20, '#1a1a1a')}
  ${roundRect(100, 535, 40, 40, 10, 'rgba(248,113,113,0.15)')}
  <text x="120" y="563" text-anchor="middle" class="mono" font-size="20" fill="#f87171">2</text>
  <text x="160" y="560" font-size="26" font-weight="700" fill="#fff">Fed 위원 발언 모니터</text>
  <text x="160" y="598" font-size="21" fill="rgba(255,255,255,0.45)">점도표 이후 개별 위원 발언 — 인상 타이밍 힌트</text>

  <!-- Item 3 -->
  ${roundRect(60, 645, 960, 110, 20, '#1a1a1a')}
  ${roundRect(100, 665, 40, 40, 10, 'rgba(96,165,250,0.15)')}
  <text x="120" y="693" text-anchor="middle" class="mono" font-size="20" fill="#60a5fa">3</text>
  <text x="160" y="690" font-size="26" font-weight="700" fill="#fff">Apple-Intel 딜 후속 확인</text>
  <text x="160" y="728" font-size="21" fill="rgba(255,255,255,0.45)">양사 공식 확인 여부 · 계약 규모 · TSMC 반응</text>

  <!-- Item 4 -->
  ${roundRect(60, 775, 960, 110, 20, '#1a1a1a')}
  ${roundRect(100, 795, 40, 40, 10, 'rgba(248,113,113,0.15)')}
  <text x="120" y="823" text-anchor="middle" class="mono" font-size="20" fill="#f87171">4</text>
  <text x="160" y="820" font-size="26" font-weight="700" fill="#fff">AI capex 가이던스</text>
  <text x="160" y="858" font-size="21" fill="rgba(255,255,255,0.45)">금리 인상 시사 후 하이퍼스케일러 투자 계획 변동 여부</text>

  <!-- Item 5 -->
  ${roundRect(60, 905, 960, 110, 20, '#1a1a1a')}
  ${roundRect(100, 925, 40, 40, 10, 'rgba(74,222,128,0.15)')}
  <text x="120" y="953" text-anchor="middle" class="mono" font-size="20" fill="#4ade80">5</text>
  <text x="160" y="950" font-size="26" font-weight="700" fill="#fff">코스피 9천선 안착 여부</text>
  <text x="160" y="988" font-size="21" fill="rgba(255,255,255,0.45)">급반등 후 차익실현 vs. 추세 지속 — 외국인 순매수 확인</text>

  ${brand()}
</svg>`;
}

// ====== PAGE 8: SUMMARY ======
function page8() {
  return `${svgHead()}
  <rect width="${CARD_W}" height="${CARD_H}" fill="url(#bgGrad)"/>
  <text x="1020" y="76" text-anchor="end" class="card-num">7/8</text>

  <text x="60" y="90" class="label">WEEKLY SUMMARY</text>

  <text x="60" y="190" class="headline">이번 주를</text>
  <text x="60" y="260" class="headline"><tspan class="green">한 줄</tspan>로 정리하면.</text>

  <!-- Fed -->
  ${roundRect(64, 320, 956, 140, 0, 'rgba(248,113,113,0.08)')}
  <rect x="60" y="320" width="4" height="140" fill="#f87171"/>
  <text x="100" y="362" font-size="27" font-weight="700" fill="#fff"><tspan class="red">Fed:</tspan> "인플레이션은 아직 안 잡혔다"</text>
  <text x="100" y="400" font-size="23" fill="rgba(255,255,255,0.5)">금리 동결 + 인상 시사 = 매파적 동결.</text>
  <text x="100" y="432" font-size="23" fill="rgba(255,255,255,0.5)">성장주 밸류에이션 재조정 압력.</text>

  <!-- Nasdaq -->
  ${roundRect(64, 485, 956, 140, 0, 'rgba(74,222,128,0.08)')}
  <rect x="60" y="485" width="4" height="140" fill="#4ade80"/>
  <text x="100" y="527" font-size="27" font-weight="700" fill="#fff"><tspan class="green">나스닥100:</tspan> AI·우주 종목 대거 편입</text>
  <text x="100" y="565" font-size="23" fill="rgba(255,255,255,0.5)">ALAB·RKLB·NBIS 등 5종목 합류.</text>
  <text x="100" y="597" font-size="23" fill="rgba(255,255,255,0.5)">패시브 자금 구조적 유입 시작.</text>

  <!-- Semiconductor -->
  ${roundRect(64, 650, 956, 140, 0, 'rgba(96,165,250,0.08)')}
  <rect x="60" y="650" width="4" height="140" fill="#60a5fa"/>
  <text x="100" y="692" font-size="27" font-weight="700" fill="#fff"><tspan class="blue">반도체:</tspan> Apple-Intel 파운드리 동맹</text>
  <text x="100" y="730" font-size="23" fill="rgba(255,255,255,0.5)">TSMC 독점 구조에 균열.</text>
  <text x="100" y="762" font-size="23" fill="rgba(255,255,255,0.5)">Intel +9%, 섹터 YTD +90%.</text>

  <!-- KOSPI -->
  ${roundRect(64, 815, 956, 140, 0, 'rgba(251,191,36,0.08)')}
  <rect x="60" y="815" width="4" height="140" fill="#fbbf24"/>
  <text x="100" y="857" font-size="27" font-weight="700" fill="#fff"><tspan class="gold">코스피:</tspan> 서킷브레이커 → 9천선 돌파</text>
  <text x="100" y="895" font-size="23" fill="rgba(255,255,255,0.5)">11일 만에 7,484 → 9,052.</text>
  <text x="100" y="927" font-size="23" fill="rgba(255,255,255,0.5)">시총 7,000조, SK하이닉스 2천조.</text>

  <!-- Disclaimer -->
  <text x="540" y="1020" text-anchor="middle" font-size="22" fill="rgba(255,255,255,0.25)">이 콘텐츠는 투자 권유가 아닙니다.</text>
  <text x="540" y="1052" text-anchor="middle" font-size="22" fill="rgba(255,255,255,0.25)">개인적 분석이며, 투자 판단은 본인 책임입니다.</text>

  <!-- Brand -->
  <rect x="470" y="1220" width="42" height="42" rx="11" fill="url(#brandGrad)"/>
  <text x="491" y="1248" text-anchor="middle" font-size="20">💎</text>
  <text x="524" y="1247" class="brand-text">JACK1 WEEKLY BRIEF</text>
</svg>`;
}

// ====== PAGE 8b: CLOSING ======
function page8b() {
  return `${svgHead()}
  <rect width="${CARD_W}" height="${CARD_H}" fill="#0d0d0d"/>
  <text x="1020" y="76" text-anchor="end" class="card-num">8/8</text>

  <!-- Center content -->
  <rect x="490" y="360" width="100" height="100" rx="28" fill="url(#brandGrad)"/>
  <text x="540" y="425" text-anchor="middle" font-size="52">💎</text>

  <text x="540" y="530" text-anchor="middle" class="mono" font-size="42" fill="#fff" font-weight="500" letter-spacing="4">JACK1</text>

  <rect x="500" y="565" width="80" height="4" rx="2" fill="#4ade80"/>

  <text x="540" y="630" text-anchor="middle" font-size="30" fill="rgba(255,255,255,0.7)" font-weight="500">매주 증시 핵심만 정리합니다.</text>

  <text x="540" y="700" text-anchor="middle" font-size="26" fill="rgba(255,255,255,0.35)">매일 오전 7:30 증시 뉴스</text>
  <text x="540" y="740" text-anchor="middle" font-size="26" fill="rgba(255,255,255,0.35)">매일 오후 12:30 기업 분석</text>
  <text x="540" y="780" text-anchor="middle" font-size="26" fill="rgba(255,255,255,0.35)">매일 오후 6:30 투자 인사이트</text>

  <!-- Tags -->
  ${roundRect(180, 850, 120, 44, 10, '#1a1a1a')}
  <text x="240" y="879" text-anchor="middle" font-size="20" fill="rgba(255,255,255,0.5)">#미국주식</text>

  ${roundRect(316, 850, 120, 44, 10, '#1a1a1a')}
  <text x="376" y="879" text-anchor="middle" font-size="20" fill="rgba(255,255,255,0.5)">#증시뉴스</text>

  ${roundRect(452, 850, 80, 44, 10, '#1a1a1a')}
  <text x="492" y="879" text-anchor="middle" font-size="20" fill="rgba(255,255,255,0.5)">#Fed</text>

  ${roundRect(548, 850, 140, 44, 10, '#1a1a1a')}
  <text x="618" y="879" text-anchor="middle" font-size="20" fill="rgba(255,255,255,0.5)">#나스닥100</text>

  ${roundRect(704, 850, 110, 44, 10, '#1a1a1a')}
  <text x="759" y="879" text-anchor="middle" font-size="20" fill="rgba(255,255,255,0.5)">#반도체</text>

  ${roundRect(370, 914, 110, 44, 10, '#1a1a1a')}
  <text x="425" y="943" text-anchor="middle" font-size="20" fill="rgba(255,255,255,0.5)">#코스피</text>

  ${roundRect(496, 914, 120, 44, 10, '#1a1a1a')}
  <text x="556" y="943" text-anchor="middle" font-size="20" fill="rgba(255,255,255,0.5)">#JACK1</text>

  <!-- CTA -->
  ${roundRect(330, 1000, 420, 56, 16, 'rgba(74,222,128,0.1)')}
  <rect x="330" y="1000" width="420" height="56" rx="16" fill="none" stroke="rgba(74,222,128,0.2)" stroke-width="1"/>
  <text x="540" y="1036" text-anchor="middle" font-size="24" fill="#4ade80" font-weight="600">팔로우하고 매일 받아보세요</text>
</svg>`;
}

const pages = [page1, page2, page3, page4, page5, page6, page7, page8, page8b];

pages.forEach((fn, i) => {
  const svg = fn();
  const filename = `card-${String(i + 1).padStart(2, '0')}.svg`;
  fs.writeFileSync(path.join(outputDir, filename), svg);
  console.log(`Generated: ${filename}`);
});

console.log(`\nDone! ${pages.length} SVG files in ${outputDir}`);
