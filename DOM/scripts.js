document.addEventListener('DOMContentLoaded',function(){
    let button = document.createElement('button');
    let buttonText = document.createTextNode('click me');
    button.appendChild(buttonText);
    let inputText = document.createElement('input');
    inputText.id = 'text';
    inputText.placeholder = 'enter your text';
    document.body.appendChild(inputText);
    document.body.appendChild(button);
    let p = document.createElement('p');
    let pText = document.createTextNode('im a paragraph');
    let color = ['red','yellow','brown','pink','purple'];

    const getRandomColor = () => {
        let randColor = color[Math.floor(Math.random() * color.length)];
        return randColor;
    }

    let button2 = document.createElement('button');
    let button2Text = document.createTextNode('click me i m button 2');
    button2.appendChild(button2Text);
    let div2 = document.createElement('div');
    div2.id = 'emptyDiv';
    document.body.appendChild(button2);
    // document.body.appendChild(div2);

    p.addEventListener('click',function(){
        let myRandomColor = getRandomColor();
        p.style.color = myRandomColor;
    });
    p.appendChild(pText);
    document.body.appendChild(p);
    button.addEventListener('click',function(){
        let val = document.getElementById('text').value;
        alert(val);
    })
    let colorDiv = document.getElementById('colorChange');
    colorDiv.addEventListener('mouseover',function(){
        colorDiv.style.color = 'red';
    })
    colorDiv.addEventListener('mouseleave',function(){
        colorDiv.style.color = 'black';
    })
    // p.addEventListener('click',function(){
    //     p.style.color = 'red';
    // })
    button2.addEventListener('click',function(){
        let span = document.createElement('span');
        let spanText = document.createTextNode('Irtaza');
        span.appendChild(spanText);
        div2.appendChild(span);
        document.body.appendChild(div2);

    })

    let friends = ['will','matt','charlie','irtaza','mutu',
    'sheggy','more','stacy','kisa','moba'];

    let itemUl = document.getElementById('items');
    

    let listButton = document.getElementById('list');

    listButton.addEventListener('click',function(){

        
        for(let i = 0; i< friends.length; i++){
            let list = document.createElement('li');
            let name = document.createTextNode(friends[i]);
            list.appendChild(name);
            itemUl.appendChild(list);
        }
        
    });
})