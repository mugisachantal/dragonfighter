const daggerprice =10;
const Stickprice = 5;
const swordprice =20;
const clawprice =15;
let xp =0;
let health = 100;
let gold= 120;
let currentweapon = 0;
let fighting ;
let monsterhealth;
let inventory = ['stick'];
let weapons = [
    {
        name:"stick",
        power: 5
    },
    {
        name:"dagger",
        power:30
    },
    {
        name:"claw hammer",
        power:50
    },
    {
        name:"sword",
        power:100
    }
];


const dev2 = document.getElementById('D2')
const button1=document.getElementById('button1');
const button2=document.getElementById('button2');
const button3=document.getElementById('button3');
let xpText = document.getElementById('xptext');
let goldText = document.getElementById('goldtext');
let healthText = document.getElementById('healthtext');
let text = document.getElementById('p');
button1.onclick =goToStore;

function goToStore(){
    text.innerHTML = 'you are in the store . equip your self'
    button1.innerHTML = ' Buy health'
    button2.innerHTML = "Buy weapon"
    button3.innerHTML = "Go to town"
     button1.onclick =buyHealth;
     button2.onclick =buyWeapon;
     button3.onclick =goTown;
    }
     


function goTown(){
    text.innerHTML = 'you entered the town . you see some monsters!!!'
    button1.innerHTML = 'Go to store'
    button2.innerHTML = "Go to cave"
    button3.innerHTML = "Fight dragon"
    button1.onclick = goToStore;
     button2.onclick =goCave;
     button3.onclick =fightDragon;
}

function buyHealth(){
    if (gold >= 10){
    gold-=10;
    health += 10;
    goldText.innerHTML=gold;
    healthText.innerHTML =health;
}
else{
    alert("oops! you have insuficient  gold")
}

}

function buyWeapon(){
    if (currentweapon < weapons.length-1){
        if (gold>=30){
            gold -= 30;
            goldText.innerText = gold;
            currentweapon++;
            inventory.push(weapons[currentweapon].name);
            text.innerHTML = "you <b>have bought a </b> "+ weapons[currentweapon].name + " and now you have " + inventory + "  in your weapon base ."
            }
            else{
                text.innerText = " ooohps!!!! no way you have inssufficient gold , win battles to get more gold and experience"
            }
    }
    else{
        text.innerText = "you already have the most powerful weapon . May be you can sell weapons  for more gold to buy health"
        button1.innerText="sell weapon";
        button1.onclick = sellWeapon;
    }

}

function sellWeapon(){
    if (currentweapon>0){
        button1.innerText = "sell stick";
    button2.innerText = "sell dagger";
    button3.innerText = "sell claw";
    let button4 = document.createElement('button');
    button4.innerText = "sell sword";
    text.innerText = "sell stick for" + Stickprice + "sell dagger for" + daggerprice + "sell clawhammer for" + clawprice + "sell sword for" + swordprice + ".";
    dev2.appendChild(button4);
    button1.onclick = sellStick;
    button1.onclick = sellDagger;
    button1.onclick = sellClawHammer;
    button1.onclick = sellSword;
    }
    else{
        text.innerText="Do not sell your only weapon";
    }
    
}

function sellStick(){
        gold += Stickprice;
        goldText.innerText = gold;}
function sellDagger(){
            gold += daggerpriceprice;
            goldText.innerText = gold;}
function sellClawHammer(){
                gold += clawprice;
                goldText.innerText = gold;}
function sellSword(){
                    gold += swordprice;
                    goldText.innerText = gold;}
                                        
        
    


