IIFE: ( () => {
    fetch('/random_numbers').then( response => response.json()).then( data => {
        main( data.numbers )
    }).catch( err => console.error( err ) )
})()

var SIZE = 10
function main( data ){
    if( data ){
        let main_container = document.querySelector('#box')

        for( let item of data ){
            let cell = new Cell( item )
            cell.appyStyles()
            main_container.appendChild( cell.container )
        }
    }
    else{
        console.log('error')
    }
}

class Cell{
    constructor( item ){
        this.size = SIZE
        this.color = '#ffffff'
        this.padding = 5
        this.margin = 3
        this.item = item
        this.container = document.createElement('div')
    }

    appyStyles(){
        this.container.style.width = `${this.size}vw`
        this.container.style.color = this.color
        this.container.style.padding = `${this.padding}%`
        this.container.style.margin = `${this.margin}%`
        this.container.classList.add('text-center')
        this.container.classList.add('text-justify')
        this.container.innerHTML = Math.floor( this.item )
    }
}
