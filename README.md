# Simple_ToDo
간단한 To Do 웹페이지

## login 화면
* 첫 방문이라면 이름을 입력받고 Local Storage 에 저장 후 "Hello 이름" 띄우기
* 첫 방문이 아니라면 바로 "Hello 이름" 띄우기
* 첫 방문인지 아닌지는 Local Storage에 이름이 저장되어 있는지 확인하면 알 수 있음

## clock
* Date 클래스의 getHours(), getMinutes(), getSeconds() 메서드 => 현재 시각 표시
* setInterval 함수 => 현재 시각을 1초 간격으로 업데이트
* String 클래스의 padStart() 메서드 => 시, 분, 초가 한 자리 숫자일 때도 앞에 0을 붙여 두 자리로 보이게끔 만듦

## To Do
* To Do를 입력 받고 화면에 띄우기
* 각 To Do 리스트 마다 삭제 버튼 추가
* To Do 를 Local Storage에 저장하여 사용
    * Local Storage는 String 형태로만 저장 가능함 <br>
    ∴ 배열에 저장한 후 JSON의 stringify() 메서드로 String 타입으로 바꿔서 저장
    * 저장된 To Do 리스트를 불러올 때는 Local Storage에 저장된 String을 JSON의 parse() 메서드를 활용해 다시 배열 바꾼 후 각 요소를 printTodo 함수의 인자로 전달
