import '../scss/main.scss';

/* place your code below */

//text bold

const btnBold = document.querySelector('.bold--js');
const textMessage = document.querySelector('.message--js');

function boldText () {
    textMessage.style.fontWeight = 'bold';
}
btnBold.addEventListener('click', boldText);
    
//text italic
    const btnItalic = document.querySelector('.italic--js');

    function italicText () {
        textMessage.style.fontStyle = 'italic';
    }
    
    btnItalic.addEventListener('click', italicText);


    //text underline
    const btnUnderline = document.querySelector('.underline--js');

    function underlineText () {
        textMessage.classList.toggle('underline');
    }
    
    btnUnderline.addEventListener('click', underlineText);


//text color
const textColor = document.querySelector('.color--js')

function changeColor () {
    const color = textColor.value;
    textMessage.style.color = color;
}
textColor.addEventListener('input', changeColor)

//textColor.addEventListener('input', () => {
   // const color = textColor.value;
    //textMessage.style.color = color;

//font family
    const fontFamily = document.querySelector('.select--js')
    function selectFont() {
        const selector = document.getElementById('font');
        const value = selector[selector.selectedIndex].value;
        textMessage.style.fontFamily = value;
    }

    fontFamily.addEventListener('click', selectFont);



    //font size 
    let size = 16;

    
    const btnSizeDown = document.querySelector('.down--js')
    

    function fontSizeDown() {
    
        textMessage.style.fontSize = `${size - 1}px`;
        size = size - 1;
    }

    btnSizeDown.addEventListener('click', fontSizeDown);
    
    const btnSizeUp = document.querySelector('.up--js')
    function fontSizeUp() {
        textMessage.style.fontSize = `${size + 1}px`;
        size = size + 1;
    }

    btnSizeUp.addEventListener('click', fontSizeUp);
    



