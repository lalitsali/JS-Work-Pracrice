const form=document.querySelector('form');

form.addEventListener('submit',function(e){
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    
    const results=document.querySelector('#result');
    const bmi=weight/(height*height);


    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Please enter a valid height: ${height}`;
    }else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please enter a valid weight: ${weight}`;
    }else{
        results.innerHTML = `Your BMI is ${bmi.toFixed(2)}`;
        if (bmi < 18.5) {
            results.innerHTML += '<br>You are underweight';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            results.innerHTML += '<br>You are normal weight';
        } else if (bmi >= 25 && bmi < 29.9) {
            results.innerHTML += '<br>You are overweight';
        } else {
            results.innerHTML += '<br>You are obese';   }
            
    }
    

})
