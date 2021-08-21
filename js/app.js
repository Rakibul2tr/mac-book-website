
let bestprice = document.getElementById('best-price');///best price field
let memoryprice = document.getElementById('memory-cost');//memory cost field
let storage = document.getElementById('storage-cost');// storage cost fiels
let delivery = document.getElementById('deliveryCost'); // delivery cost field
let totalprice = document.getElementById('totalprice');//total price field
let descount = document.getElementById('descount');//descount Amount field
let total = document.getElementById('total'); // total Amount field

//============memory button start===================button group 1==========
document.getElementById('memory8btn').addEventListener('click',function(){
    memorycost("0"); 
    updeatAllCost();
})
document.getElementById('memory16btn').addEventListener('click',function(){
    memorycost('180');
    updeatAllCost();
})
//memory cost daynamic function==============
function memorycost(price){
    let memoryText = memoryprice.innerText = price;
    return memoryText; 
}
//============memory button end===================


//============Storage button start===================button group 2=============

document.getElementById('storagebtn1').addEventListener('click',function(){
    storageCost('0');
    updeatAllCost();
})
document.getElementById('storagebtn2').addEventListener('click',function(){
    storageCost('100');
    updeatAllCost();
})
document.getElementById('storagebtn3').addEventListener('click',function(){
    storageCost('180');
    updeatAllCost();
})
//storage cost daynamic function==============
function storageCost(Price){
    let storageText = storage.innerText= Price;
    return storageText;
}
//============Storage button end===================

//============shipping cost button start===================button group 3==============

document.getElementById('deliverybtn1').addEventListener('click',function(){
    deliveryCost('0');
    updeatAllCost();
})
document.getElementById('deliverybtn2').addEventListener('click',function(){
    deliveryCost('20');
    updeatAllCost();
})
//shopping cost daynamic function==============
function deliveryCost(cost){
    let deliveryText = delivery.innerText= cost;
    return deliveryText;
}
//============shipping cost button end===================

//==============updeat All Amount  function starat============
function updeatAllCost(){
    let bestpriceText = bestprice.innerText;
    let totalpriceText = totalprice.innerText;
    let totalpricenum = parseInt(bestpriceText) + parseInt(storage.innerText) + parseInt(memoryprice.innerText)+parseInt(delivery.innerText) ;
    totalprice.innerText = totalpricenum;
    total.innerText=totalpricenum;
     return totalpricenum;
}
//==============updeat All Amount  function end=============



//========== paid total Amount function ==============button group Aplay==========
document.getElementById('aplaybtn').addEventListener('click',function(){
    let promoinput = document.getElementById('input');
    let promovalue = promoinput.value;
    if(promovalue == 'stevekaku'){
      let promocode =  (totalprice.innerText*0.20);
      descount.innerText = promocode;
      let discuont = totalprice.innerText - promocode;
      total.innerText = discuont;

    }
})