# move-screen
이 프로젝트는 사이드 메뉴 내비게이션과 GSAP를 활용한 부드러운 스크롤 애니메이션을 구현한 예제입니다. 사용자가 사이드 메뉴의 링크를 클릭하면 해당 섹션으로 자연스럽게 이동하며, 현재 위치를 시각적으로 표시합니다.

## 데모
[라이브 데모 보기](https://your-demo-link-here.com) *(호스팅 링크 추가 필요)*

## 기능
- **사이드 메뉴 클릭 시 부드러운 스크롤**: GSAP의 `ScrollTo` 플러그인을 사용해 섹션 간 이동을 1초 동안 부드럽게 처리.
- **활성 상태 표시**: 선택된 링크와 섹션에 `active`와 `current` 클래스를 추가해 하이라이트.
- **동적 섹션 관리**: 섹션 수(`sections.length`)에 따라 유연하게 동작.

## 사용 기술
- **HTML**: 구조 설계.
- **CSS**: 스타일링 (예: `.active`, `.current` 클래스).
- **JavaScript**: DOM 조작 및 이벤트 처리.
- **GSAP**: 애니메이션 및 스크롤 제어.

## 설치 및 실행
1. **리포지토리 클론**:
   ```bash
   git clone https://github.com/your-username/your-repo.git
