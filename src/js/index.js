import '../scss/main.scss';

/* place your code below */

//text bold

const btnBold = document.querySelector('.bold--js');
const textMessage = document.querySelector('.message--js');
const myText = textMessage.value


//function boldText () {
//textMessage.style.fontWeight = 'bold';
//}
//btnBold.addEventListener('click', boldText);


let fontNormal = true

 function boldText () {
if (fontNormal == true) {
   
    textMessage.style.fontWeight = 'bold';
    fontNormal = false
} else {
    textMessage.style.fontWeight = 'normal';
    fontNormal = true
}
 }

btnBold.addEventListener('click', boldText);
    
//text italic
    const btnItalic = document.querySelector('.italic--js');

    function italicText () {
        textMessage.style.fontStyle = 'italic';
       //textMessage.innerHTML = '&lt;strong&gt;&lt;/strong&gt;'
    
    //const addElement = document.createElement("b")
    //addElement.innerHTML = textMessage.innerHTML
    //chce przepisac tekst z textarea do addelement

    //textMessage.appendChild(addElement)
    //metody obiektu moga byc stosowane aby modyfikowac stan obiektu, coś zwracać, coś zwracać bazując na aktualnym stanie obiektu, mają dostęp do własności obiektu
    //ja chce zeby wewnatzr obiektu pojawil sie element b modyfikuje stan tego obiektu
 
    }

    
    btnItalic.addEventListener('click', italicText);


    

    //text underline
    const btnUnderline = document.querySelector('.underline--js');

    function underlineText () {
        textMessage.classList.toggle('under--js');
    }
    
    btnUnderline.addEventListener('click', underlineText);
//Przełącza wartość klasy, tzn. jeśli klasa istnieje, wówczas zostaje usunięta , jeśli nie, wówczas dodaje ją, ma takiego if w srodku i po kliknieciu dziala ten if jesli jest jesli nie ma 

//text color
const textColor = document.querySelector('.color--js')

function changeColor () {
    const color = textColor.value;

    textMessage.style.setProperty('--new-color', color)

    //textMessage.style.color = color;
}
textColor.addEventListener('input', changeColor)

//textColor.addEventListener('input', () => {
   // const color = textColor.value;
    //textMessage.style.color = color;

//font family
    const fontFamily = document.querySelector('.select--js')
    function selectFont() {
        const selector = document.getElementById('font');
        const sel = selector.selectedIndex //znajdujemy index , ktory element jest wybrany
        const value = selector[sel].value //wez mi ta opcje, wez mi ta value
        console.log(sel)
        //const value = selector[selector.selectedIndex].value;
        textMessage.style.fontFamily = value;
    }

    fontFamily.addEventListener('click', selectFont);

//text align

const textAligmnet = document.querySelector('.aligment--js');
function changeAligment () {
    const mySelector = document.getElementById('aligment');
    const myValue = mySelector[mySelector.selectedIndex].value;
    textMessage.style.textAlign = myValue;
}
textAligmnet.addEventListener('click', changeAligment);

    //font size 
    let size = 16;

    const btnSizeDown = document.querySelector('.down--js')
    //
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
    



//save local storage
//load local storage









let isPink = false;

function switchMode (querySelectorContent, content) {
    const element = document.querySelector(querySelectorContent)
    element.innerHTML = content
}

switchMode ('.switch--js', 'PINK');



const button = document.querySelector('.switch--js')

button.addEventListener('click', function() {
    if (isPink == false) {

        document.documentElement.style.setProperty(`--my-background`, `#fcd6ed`);
    document.documentElement.style.setProperty(`--my-color`, `black`);
    document.documentElement.style.setProperty(`--other-color`, `black`);

        switchMode ('.switch--js', 'GREEN')
        isPink = true;
    }
    else {

    document.documentElement.style.setProperty(`--my-background`, `#b9f89c`);
        document.documentElement.style.setProperty(`--my-color`, `#666666`);
        document.documentElement.style.setProperty(`--other-color`, `#666666`);
    
    switchMode ('.switch--js', 'PINK')
    isPink = false;
}
})




// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$





const btnSave = document.querySelector('.save--js')
const btnLoad = document.querySelector('.load--js')
const btnClear = document.querySelector('.clear--js')
const btnRefresh = document.querySelector('.refresh--js')
const myTextarea = document.querySelector('.message--js')


//nie precyzuje parametry bo nie wywoluje fuknkcji, nie mam kontroli nad tym co jest wywolywane, parametry sa po to zeby moc przekazac pewne wartosci do funkcji, konfigurowac jej zachowanie
function onSave () {
const textValue = myTextarea.value
//pobrac element text area 
//pobrac tekst tego elementu
localStorage.setItem('entry', textValue );

}
btnSave.addEventListener('click', onSave)


function onLoad () {
   

    const value = localStorage.getItem('entry');
     myTextarea.value = value
    
//document.getElementById("myTextarea").value = "Fifth Avenue, New York City";
}
btnLoad.addEventListener('click', onLoad)

function onClear () {

localStorage.removeItem('entry');
myTextarea.value = myText

//moge tez zwrocic null albo pusty string


}


btnClear.addEventListener('click', onClear)


function onRefresh () {
window.location.reload()

}

btnRefresh.addEventListener('click', onRefresh)
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

// const textMessage = document.querySelector('.message--js)


const btnLocalStorage = document.querySelector('.all--js')

const storage = document.querySelector('.storage--js')

function makeOneButton () {
    storage.classList.toggle('new--js')
}

btnLocalStorage.addEventListener('click', makeOneButton)