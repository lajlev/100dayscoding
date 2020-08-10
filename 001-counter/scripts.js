var btnIncrease = document.getElementById('btn-increase'),
    btnDecrease = document.getElementById('btn-decrease'), 
    countValue = document.getElementById('count-value'),
    count = 0;

    
btnIncrease.addEventListener('click', function(){
  count++;
  countValue.innerHTML = count;
});

btnDecrease.addEventListener('click', function(){
  count--;
  countValue.innerHTML = count;
});
    