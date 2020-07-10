$(document).ready(function(){


    
    let $inputText = $('<input type="text" id="text">');
    $inputText.appendTo('body');
    let $button = $('<button>Click Me</button>');
    $button.appendTo('body');

    $button.click(function () {
        let $val = $('#text').val();
        alert($val);
    });

    let $colorHover = $('#colorChange');
    $colorHover.mouseenter(function(){
        $(this).css('color','red');
    });
    $colorHover.mouseleave(function(){
        $(this).css('color','black');
    });

    let $para = $('<p>click to change my color</p>');
    $($para).appendTo('body');

    let color = ['red','yellow','brown','pink','purple'];

    const getRandomColor = () => {
        let randColor = color[Math.floor(Math.random() * color.length)];
        return randColor;
    }

    $para.click(function(){
        let $myRandomColor = getRandomColor();
        $(this).css('color',$myRandomColor);
    });

    let $div = $('<div></div>');
    let $button2 = $('<button>click to me add name</button>');
    $div.appendTo('body');
    $button2.appendTo('body');

    $button2.click(function(){
        let $span = $('<span>Irtaza</span>');
        $span.appendTo($div);
    });

    let friends = ['will','matt','charlie','irtaza','mutu',
    'sheggy','more','stacy','kisa','moba'];

    let $friendList = $('#friendList');
    let $listItems = $('#listItems');

    $friendList.click(function(){
        for (let i =0; i< friends.length ; i++) {
        
            let $list = $('<li>' + friends[i] + '</li>');
            $list.appendTo($listItems);
        }
    });
});