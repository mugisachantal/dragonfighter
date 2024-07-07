const daggerprice =10;
const Stickprice = 5;
const swordprice =20;
const clawprice =15;
let xp =0;
let health = 100;
let gold= 120;
let currentweapon = 0;
let fighting;
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


const dev1 = document.getElementById('D1');
const dev2 = document.getElementById('D2');
const button1=document.getElementById('button1');
const button2=document.getElementById('button2');
const button3=document.getElementById('button3');
let xpText = document.getElementById('xptext');
let goldText = document.getElementById('goldtext');
let healthText = document.getElementById('healthtext');
let text = document.getElementById('p');
let reset = document.createElement("button");
let textReset = document.createTextNode('RESET');
reset.appendChild(textReset);
dev1.appendChild(reset);
reset.onclick = starting;

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
            ++currentweapon;
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
    text.innerHTML = "sell stick for  "  + Stickprice + "<span style = 'color:yellow'>Gold</span>,  sell dagger for  " + daggerprice + "<span style = 'color:yellow'>Gold</span>,  sell clawhammer for  " + clawprice + "<span style = 'color:yellow'>Gold</span>,  sell sword for  " + swordprice + "<span style = 'color:yellow'>Gold</span>.";
    dev2.appendChild(button4);
    button1.onclick = sellStick;
    button2.onclick = sellDagger;
    button3.onclick = sellClawHammer;
    button4.onclick = sellSword;
    
    }
    else{
        text.innerText="Do not sell your only weapon";
    }
    return button4;
}

function goCave(){
    alert('mugisa')
}


function sellStick(){
    if(inventory.includes("stick")){

    if(currentweapon>0){
        
            gold += Stickprice;
            goldText.innerText = gold;
            inventory.splice(inventory.indexOf("stick"),1);
            text.innerText = 'You have sold your stick for 5 gold .THANK YOU FOR TRADING WITH US '
            --currentweapon;
        }
       
        else{
            text.innerText="Do not sell your only weapon";
        }
    }
    else{
        text.innerText = "YOU DONT HAVE A STICK IN YOUR WEAPON BASE  ";
    }
    

    }
function sellDagger(){
    if(inventory.includes("dagger")){

    if(currentweapon>0){
        
            gold += daggerprice;
            goldText.innerText = gold;
            inventory.splice(inventory.indexOf("dagger"),1);
            text.innerText = 'You have sold your dagger for 10 gold .THANK YOU FOR TRADING WITH US '
            --currentweapon;
        }
        
        else{
            text.innerText=" Do not sell your only weapon";
        }
    }
    else{
        text.innerText = "YOU DONT HAVE A DAGGER IN YOUR WEAPON BASE  ";
    }
    }
function sellClawHammer(){
    if(inventory.includes("claw hammer")){
    if(currentweapon>0){
        

            gold += clawprice;
            goldText.innerText = gold;
            inventory.splice(inventory.indexOf("claw hammer"),1);
            text.innerText = 'You have sold your claw hammer for 15 gold .THANK YOU FOR TRADING WITH US '
            --currentweapon;
        }
       
        else{
            text.innerText=" Do not sell your only weapon";
        }
    }
    else{
        text.innerText = "YOU DONT HAVE A CLAW HAMMER IN YOUR WEAPON BASE  ";
    }
   
    }
function sellSword(){
    if(inventory.includes("sword")){
    if(currentweapon){
        

            gold += swordprice;
            goldText.innerText = gold;
            inventory.splice(inventory.indexOf("sword"),1);
            text.innerText = 'You have sold your SWORD for 20 gold .THANK YOU FOR TRADING WITH US '
            --currentweapon;
        }
        else{
            text.innerText=" Do not sell your only weapon";
        }
       
    }
    else{
        text.innerText = "YOU DONT HAVE A SWORD IN YOUR WEAPON BASE  ";
    }
    }

                    function starting()   {
                        text.innerHTML = 'Wellcome to dragon repeller.you must defeat the dragon that is preventing people from leaving the town. You are in the town square.Where do you want to go?use the buttons above .'
                    button1.innerHTML = 'Go to store'
                    button2.innerHTML = "Go to cave"
                    button3.innerHTML = "Fight dragon"
                    xpText.innerHTML ="<strong>0</strong>"
                    healthText.innerHTML = "<strong>100</strong>"
                    goldText.innerHTML = "<strong>50</strong>"
                    health = 100;
                    xp = 0;
                    gold = 120
                    currentweapon = 0;
                    inventory = ['stick'];
                    button1.onclick = goToStore;
                     button2.onclick =goCave;
                     button3.onclick =fightDragon;
                     
                                                     }

                      
                    
                    
                    
        
                    
                                        
        
    


