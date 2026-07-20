# 다있맵 (daitmap)

박물관·도서관·병원·유치원·이용권 사용처·물놀이장 지도 6종을 한곳에 모은 랜딩 페이지입니다.
공공데이터로 만든 동네 나들이 지도 모음 "다있맵" 브랜드의 진입점 역할을 합니다.

## 구성

정적 HTML 한 장(`index.html`)으로 이루어진 카드형 목록 페이지입니다. 빌드 과정이 없고,
카드를 클릭하면 각 지도 저장소의 GitHub Pages로 새 창에서 이동합니다.

| 카드 | 연결 대상 |
|---|---|
| 전국 박물관·미술관 지도 | https://spica07.github.io/museum_map/ |
| 전국 공공도서관 지도 | https://spica07.github.io/library_map/ |
| 전국 병원 지도 | https://spica07.github.io/hospital_map/ |
| 서울 유치원 지도 | https://spica07.github.io/kindergarten_map/ |
| 서울 평생교육이용권 지도 | https://spica07.github.io/voucher_map/ |
| 전국 물놀이장 지도 | https://spica07.github.io/summer_water/ |

## 접근성

- 시맨틱 마크업(`header`/`main`/`footer`, 카드 목록은 `ul > li > a`)
- 키보드 포커스 스타일(`:focus-visible`) 및 본문 바로가기 스킵 링크
- 새 창에서 열리는 링크는 스크린리더용 안내 텍스트 포함
- `prefers-reduced-motion` 대응

## 안내 문구

푸터에 다음 내용을 고지합니다: 정보 공유 목적의 비영리 제공, 무단 복제·재배포 금지,
공공데이터 활용 사실, 상표·행사명·장소명 권리는 해당 권리자에게 있음, 위치 정보 근사치 가능성,
세부 정보(운영시간·요금 등)는 참고용이며 방문 전 재확인 필요.

## 배포

각 하위 지도 프로젝트와 동일하게 GitHub Pages(main 브랜치) 배포를 전제로 합니다.
