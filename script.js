let currentMax = 4;
let boxPrice = 5.00;
let basket = [];
let cookiesTotal = 0;

function selectSize(max, price) {
    currentMax = max;
    boxPrice = price;
    basket = [];
    cookiesTotal = 0;
    
    // تحديث الشكل النشط
    document.querySelectorAll('.size-card').forEach(c => c.classList.remove('active'));
    event.currentTarget.classList.add('active');
    
    document.getElementById('max').innerText = max;
    updateUI();
}

function addCookie(name, price, color) {
    if (basket.length < currentMax) {
        basket.push({name, price, color});
        cookiesTotal += price;
        updateUI();
    } else {
        alert("الصندوق ممتلئ! | Box is full!");
    }
}

function updateUI() {
    const dotsContainer = document.getElementById('progress-dots');
    dotsContainer.innerHTML = '';
    for (let i = 0; i < currentMax; i++) {
        const dot = document.createElement('div');
        dot.className = 'dot';
        if (basket[i]) {
            dot.style.background = basket[i].color;
            dot.style.border = 'none';
            dot.style.boxShadow = `0 0 10px ${basket[i].color}`;
        }
        dotsContainer.appendChild(dot);
    }

    document.getElementById('count').innerText = basket.length;
    document.getElementById('total-price').innerText = (boxPrice + cookiesTotal).toFixed(2);
    
    const list = document.getElementById('bill-items');
    list.innerHTML = basket.map(item => `<div style="display:flex; justify-content:space-between; margin-bottom:5px;"><span>• ${item.name}</span> <span>${item.price.toFixed(2)}$</span></div>`).join('');
}

function toggleGift() {
    document.getElementById('giftFields').classList.toggle('hidden');
}

function finish() {
    const name = document.getElementById('cust-name').value;
    if (basket.length < currentMax) {
        alert("يرجى إكمال تعبئة الصندوق أولاً | Please fill the box first!");
    } else if (!name) {
        alert("يرجى إدخال اسم المستلم | Please enter receiver name!");
    } else {
        alert("تم تأكيد طلبك بنجاح! | Order Confirmed Successfully!");
    }
}

function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

selectSize(4, 5.00);