       // grab everything we need
        const priceInput = document.querySelector('[name=price]');
        const tarifInput = document.querySelector('[name=tarif]');
        const checkInput = document.querySelector('[name=check]');
        const check2Input = document.querySelector('[name=check2]');
        const check3Input = document.querySelector('[name=check3]');
        const quantityInput = document.querySelector('[name=quantity]');
        const quantity2Input = document.querySelector('[name=quantity2]');
        const total = document.querySelector('.total');
        const quantityLabel = document.querySelector('.quantity-label');
        const quantity2Label = document.querySelector('.quantity2-label');


       // create the functions that we'll need
        function calculatePieCost() {
            const price = priceInput.value;
            const tarif = tarifInput.value;
            const check = checkInput.value;
            const check2 = check2Input.value;
            const check3 = check3Input.value;
            const quantity = quantityInput.value;
            const quantity2 = quantity2Input.value;
            const cost = price * tarif * check * check2 * check3 * quantity * quantity2;
            console.log(cost);
            total.innerText = '$' + cost.toFixed(2);
        }

        function updateQuantityLabel() {
            const quantity = quantityInput.value;
            quantityLabel.innerText = quantity;
        }

        function updateQuantity2Label() {
            const quantity2 = quantity2Input.value;
            quantity2Label.innerText = quantity2;
        }

        // on first fun
        calculatePieCost();


       // add our event listeners
        priceInput.addEventListener('input', calculatePieCost);
        quantityInput.addEventListener('input', calculatePieCost);
        quantity2Input.addEventListener('input', calculatePieCost);
        quantityInput.addEventListener('input', updateQuantityLabel);
        quantity2Input.addEventListener('input', updateQuantity2Label);