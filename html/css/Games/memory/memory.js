    const cardarray = [
        {
            name: "fries",
            img: "./fries.png"
        },
        {
            name: "cheeseburger",
            img: "./cheeseburger.png"
        },
        {
            name: "hotdog",
            img: "./hotdog.png"
        },
        {
            name: "ice-cream",
            img: "./ice-cream.png"
        },
        {
            name: "milkshake",
            img: "./milkshake.png"
        },
        {
            name: "pizza",
            img: "./pizza.png"
        },
        {
            name: "fries",
            img: "./fries.png"
        },
        {
            name: "cheeseburger",
            img: "./cheeseburger.png"
        },
        {
            name: "hotdog",
            img: "./hotdog.png"
        },
        {
            name: "ice-cream",
            img: "./ice-cream.png"
        },
        {
            name: "milkshake",
            img: "./milkshake.png"
        },
        {
            name: "pizza",
            img: "./pizza.png"
        }
    ]
    cardarray.sort(() => 0.5 - Math.random())
    const griddisplay = document.querySelector('#grid')
    const resultdisplay = document.querySelector('#result')
    let cardschosen = []
    let cardchosenid = []
    let cardwon = []

    function createboard() {
        for (let i = 0; i < cardarray.length; i++) {
            const card = document.createElement('img')
            card.setAttribute('src', './blank.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipcard)
            griddisplay.appendChild(card)
        }
    }
        function checkmatch() 
        {
        let cards = document.querySelectorAll('img')
        // console.log(cardchosenid)
        let optiononeid = cardchosenid[0]
        let optiontwoid = cardchosenid[1]
        if (optiononeid == optiontwoid) {
            cards[optiononeid].setAttribute('src', './blank.png')
            cards[optiontwoid].setAttribute('src', './blank.png')
            alert('you have clicked same image')
        }
        else if (cardschosen[0] ===cardschosen[1]) {
            alert('You find a match')
            cards[optiononeid].setAttribute('src', './white.png')
            cards[optiontwoid].setAttribute('src', './white.png')
            cards[optiononeid].removeEventListener('click', flipcard)
            cards[optiontwoid].removeEventListener('click', flipcard)
            cardwon.push(cardschosen)
        }
        else {
            cards[optiononeid].setAttribute('src', './blank.png')
            cards[optiontwoid].setAttribute('src', './blank.png')
            alert('Try again')
        }
        cardschosen = []
        cardchosenid = []
        resultdisplay.innerHTML = cardwon.length
        if (cardwon.length == cardarray.length/2) {
            resultdisplay.innerHTML = 'Congratulations you found all'
        }
    }
    function flipcard() {
        let cardid = this.getAttribute('data-id')
        cardschosen.push(cardarray[cardid].name)
        cardchosenid.push(cardid)
        this.setAttribute('src', cardarray[cardid].img)
        if (cardschosen.length === 2) {
            setTimeout(checkmatch, 500)
        }

    }
    createboard()

