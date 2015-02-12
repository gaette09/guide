# 모바일 CMTool 개발 iframe 추가 방법

쿠폰, 상품 등 개발 또는 이벤트플렛폼으로 쿠폰번호 생성시

쿠폰 개발 url 또는 쿠폰리워드url 을 아이프레임으로 넣는 방법에 대한 설명입니다






### 개발 HTML, 쿠폰 리워드 HTML

개발에 보낼 html파일



```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="ko" lang="ko">
<head>
	<title></title>
	<meta http-equiv="Content-Type" content="text/html; charset=euc-kr">
	<meta id="viewport" name="viewport" content="width=device-width, initial-scale=1,  user-scalable=no">
	<style type="text/css">
		*{margin:0;padding:0;}
		.couponDev img{border:0;width:100%;vertical-align:top;}
	</style>
	<script type="text/javascript" src="http://eventimg.auction.co.kr/md/auction/04D25F0304/jquery.js"></script>
</head>
<body>
	<div class="couponDev">
		<a href="#" target="_parent"><img src="이미지 절대 경로" alt="" /></a>
	</div>
	<script type="text/javascript">
		document.domain="auction.co.kr";
		(function ( window, document, undefined ) {
			'use strict';
			var frameElement = window.frameElement,
				addEvent = (function () {
					if ( window.addEventListener ) {
						return function ( element, type, listener ) {
							element.addEventListener( type, listener, false );
						};
					} else if ( window.attachEvent ) {
						return function ( element, type, listener ) {
							element.attachEvent( 'on' + type, function () {
								listener.call( element );
							});
						};
					}
				}());
			function resizeFrame() {
				if ( frameElement ) {
					frameElement.style.height = document.body.offsetHeight + 'px';
				}
			}
			window.jumpToTopElement = function (hash) {
				window.top.location.hash = hash;
			}
			addEvent( window, 'load', function () {
				resizeFrame();
			});
			addEvent( window, 'resize', function () {
				resizeFrame();
			});
		}( this, this.document ));
	</script>
</body>
</html>
```


쿠폰 리워드 등록시 HTML 소스

```html
<a href="#" target="_parent"><img src="이미지 절대 경로" alt="" /></a>
```



### HTML 추가

CMTool의 모바일 부분에서 `HTML`을 선택하고 `추가` 버튼을 누른다

![그림참고](images/html_add.jpg)







### 추가된 템플릿을 선택

추가된 템플릿의 `편집` 버튼을 누른다

![그림참고](images/html_add_window.jpg)






### HTML 에디트창에 ifrmae 추가

팝업으로 열린 에디트창에 HTML을 입력한다

![그림참고](images/html_edit.jpg)



위와 같은 에디트창에 다음 소스를 입력한다



`iframe` 영역이 한 개 일때

```css
<style>
    *{padding: 0; margin:0; border: 0;}
    #cdIncCoupon1{position:relative; width:100%;line-height:0}
    #cdIncCoupon1 img{vertical-align: top; width: 100%;}
</style>
```
```html
<div id="cdIncCoupon1">
    <iframe src="쿠폰경로" width="100%" height="100%" frameborder="0" scrolling="no"></iframe>
</div>
```

`iframe` 영역이 두 개 일때

```css
<style>
    *{padding: 0; margin:0; border: 0;}
    #cdIncCoupon2{position:relative; width:100%;line-height:0}
    #cdIncCoupon2 img{vertical-align: top; width: 100%;}
    #cdIncCoupon2 ul{width: 100%;overflow:hidden;}
    #cdIncCoupon2 ul li{float:left;width:50%;list-style:none;}
</style>
```
```html
<div id="cdIncCoupon2">
    <ul>
        <li><iframe src="쿠폰경로" width="100%" height="100%" frameborder="0" scrolling="no"></iframe></li>
        <li><iframe src="쿠폰경로" width="100%" height="100%" frameborder="0" scrolling="no"></iframe></li>
    </ul>
</div>
```







