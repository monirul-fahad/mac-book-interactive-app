// memory cost function
function updateMemoryCost(memoryCard){
    const memoryCostText = document.getElementById('memory-cost');
    if(memoryCard == '8gb'){
        memoryCostText.innerText = parseInt(0)

    } else if (memoryCard == '16gb') {
        memoryCostText.innerText = parseInt(180)
    }
};

// storage cost fucntion
function updateStorageCost(storage){
    const storageCost = document.getElementById('storage-cost');
    if(storage == '256gb'){
        storageCost.innerText = parseInt(0);
    }
    else if(storage == '512gb'){
        storageCost.innerText = parseInt(100);
    }
    else if(storage == '1tb'){
        storageCost.innerText = parseInt(180);
    }
};

//delivey cost funtion 
function updateDeliveryCost(delivery){
    const deliveyCost = document.getElementById('delivery-cost')
    if(delivery == 'free'){
        deliveyCost.innerText = parseInt(0)
    }
    else if(delivery == 'charged'){
        deliveyCost.innerText = parseInt(20)
    }
};

// update  memory cost 
document.getElementById('memory-btn-8gb').addEventListener('click', function(){
    updateMemoryCost('8gb')
    totalPrice()
});
document.getElementById('memory-btn-16gb').addEventListener('click', function(){
    updateMemoryCost('16gb')
    totalPrice()
});

// update storage cost
document.getElementById('storage-btn-256gb').addEventListener('click', function(){
    updateStorageCost('256gb')
    totalPrice()
});
document.getElementById('storage-btn-512gb').addEventListener('click', function(){
    updateStorageCost('512gb')
    totalPrice()
});
document.getElementById('storage-btn-1tb').addEventListener('click', function(){
    updateStorageCost('1tb')
    totalPrice()
});

// update Delivery Cost
document.getElementById('free-delivery').addEventListener('click', function(){
    updateDeliveryCost('free')
    totalPrice()
})
document.getElementById('charged-delivery').addEventListener('click', function(){
    updateDeliveryCost('charged')
    totalPrice()
})

// total price calculation 
function totalPrice(){
    const bestPriceStr = document.getElementById('best-price').innerText;
    const bestPrice = parseInt(bestPriceStr);
    const memoryCostStr = document.getElementById('memory-cost').innerText;
    const memoryCost = parseInt(memoryCostStr);
    const storageCostStr = document.getElementById('storage-cost').innerText;
    const storageCost = parseInt(storageCostStr);
    const deliveryCostStr = document.getElementById('delivery-cost').innerText;
    const deliveryCost = parseInt(deliveryCostStr);

//add all cost
    const currentTotalPrice = bestPrice + memoryCost + storageCost + deliveryCost;

//selecting both total price element and setting the currentTotalPrice value in them.     
    const totalPrice = document.getElementById('total-price')
    totalPrice.innerText = currentTotalPrice;
    const finalPrice = document.getElementById('final-price')
    finalPrice.innerText = currentTotalPrice;
}

// Promo Code Discount function
document.getElementById('promocode-btn').addEventListener('click', function(){
    let finalPrice = document.getElementById('final-price');
    let promoCodeInput = document.getElementById('promocode-input');
    console.log(promoCodeInput.value)
    if( promoCodeInput.value == 'stevekaku'){
        const percent = finalPrice.innerText * 0.2;
        const priceAfterDiscount = finalPrice.innerText - percent;
        finalPrice.innerText = priceAfterDiscount;
    } else {
        alert("Your Promo Code Isn't Valid")
    }
    
    promoCodeInput.value = ''
})