//global button variebles 
const mamoryBtn1 = document.getElementById('memory-btn-8gb')
const mamoryBtn2 = document.getElementById('memory-btn-16gb')
const storageBtn1 = document.getElementById('storage-btn-256gb')
const storageBtn2 = document.getElementById('storage-btn-512gb')
const storageBtn3 = document.getElementById('storage-btn-1tb')
const freeDelivery = document.getElementById('free-delivery')
const chargedDelivery = document.getElementById('charged-delivery')

// memory cost function
function updateMemoryCost(memoryCard){
    const memoryCost = document.getElementById('memory-cost');
    if(memoryCard == '8gb'){
        memoryCost.innerText = 0;
    }
    else if (memoryCard == '16gb') {
        memoryCost.innerText = 180;
    }
};

// storage cost fucntion
function updateStorageCost(storage){
    const storageCost = document.getElementById('storage-cost');
    if(storage == '256gb'){
        storageCost.innerText = 0;
    }
    else if(storage == '512gb'){
        storageCost.innerText = 100;
    }
    else if(storage == '1tb'){
        storageCost.innerText = 180;
    }
};

//delivery cost funtion 
function updateDeliveryCost(delivery){
    const deliveryCost = document.getElementById('delivery-cost')
    if(delivery == 'free'){
        deliveryCost.innerText = 0;
    }
    else if(delivery == 'charged'){
        deliveryCost.innerText = 20;
    }
};

// total price calculation function
function totalPrice(){
    const bestPrice = parseInt(document.getElementById('best-cost').innerText);
    const memoryPrice = parseInt(document.getElementById('memory-cost').innerText);
    const storagePrice = parseInt(document.getElementById('storage-cost').innerText);
    const deliveryPrice = parseInt(document.getElementById('delivery-cost').innerText);

    //add all cost
    const updatedTotalPrice = bestPrice + memoryPrice + storagePrice + deliveryPrice;

    //selecting both total price id and setting them updatedTotalPrice  
    const totalPrice = document.getElementById('total-price')
    totalPrice.innerText = updatedTotalPrice;
    const finalPrice = document.getElementById('final-price')
    finalPrice.innerText = updatedTotalPrice;
}


// update  memory cost 
mamoryBtn1.addEventListener('click', function(){
    updateMemoryCost('8gb')
    totalPrice()
});
mamoryBtn2.addEventListener('click', function(){
    updateMemoryCost('16gb')
    totalPrice()
});

// update storage cost
storageBtn1.addEventListener('click', function(){
    updateStorageCost('256gb')
    totalPrice()
});
storageBtn2.addEventListener('click', function(){
    updateStorageCost('512gb')
    totalPrice()
});
storageBtn3.addEventListener('click', function(){
    updateStorageCost('1tb')
    totalPrice()
});

// update Delivery Cost
freeDelivery.addEventListener('click', function(){
    updateDeliveryCost('free')
    totalPrice()
})
chargedDelivery.addEventListener('click', function(){
    updateDeliveryCost('charged')
    totalPrice()
})


// Promo Code Discount function
document.getElementById('promocode-btn').addEventListener('click', function(){
    const finalPrice = document.getElementById('final-price');
    const promoCodeInput = document.getElementById('promocode-input');
    if( promoCodeInput.value == 'stevekaku'){
        const percent = finalPrice.innerText * 0.2;
        const priceAfterDiscount = finalPrice.innerText - percent;
        finalPrice.innerText = priceAfterDiscount;
    } else {
        alert("Your Promo Code Isn't Valid")
    }
    
    promoCodeInput.value = '';
})
