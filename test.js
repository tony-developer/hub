// const l = console.log
//
// function Machine(name)  {
//     this.name = name;
//     this.enabled = false;
// }
//
// Machine.prototype.enabled = function() {
//     this.enabled = true
// }
//
// Machine.prototype.disabled = function() {
//     this.enabled = false
// }
//
// const machine = new Machine('Светильник')
// l(machine)
// function sayHi(a,b) {
//     l(this, a, b)
// }
// const user = {name: 'Vasya'}
// sayHi.call(user, 1, false)


// class Card{
//     constructor(name, link) {
//     this.name = name;
//     this.link = link;
//     this._card = '';
//     }
//
//     create() {
//         this._card = `<div>${this.name}<div>`;
//         return this._card
//     }
//
//     removeCard(event) {
//         event.target.closest('place-card').remove()
//     }
//
//     setListener() {
//
//     }
// }
//
// const someCard = new Card('Байкал','linkToPicture')
// someCard.create()
//
// class CardList{
//     constructor(container) {
//         this.container = container
//     }
//     addCard(cardElem) {
//         this.container.insertAdjacentHTML('beforeend', cardElem.create())
//         cardElem.setListener()
//     }
// }
//
// const list = new Cardlist(document.getElementById('container'))
// // list.addCard(new Card('Байкал','link').create())
// list.addCard(new Card('Байкал','link'))


// l(ex instanceof A)



function sayHi(name, age) {
    console.log('Привет, ' + name)
    console.log(this)
}
const willBeThisFunc = {isAdmin: true}
sayHi.call(willBeThisFunc, 'Vasya', 16)
sayHi.apply(willBeThisFunc, ['Anya', 22])

const user  = {
    name: 'VAsya',
    sayName: function() {
        console.log('Я ', this.name);
    }
};

const boundFunc = user.sayName.bind(user)
boundFunc()
const boundFunk2 = user.sayName.bind({name: 'Lena'})
boundFunk2()
///изменения для гита
const newNumber = 42