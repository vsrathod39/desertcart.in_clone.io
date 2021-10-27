function paymentBtn(){
    return `<div>
    <button id="cnfButton" class="payBtn">Confirm</button>
    </div>`
}
function shipping(){
    return `<p id="subFont">Select your Shipping Method</p>
    <div id="ship">
        <div id="shipMethod">
            <div class="standard">
                <img src="https://w7.pngwing.com/pngs/565/191/png-transparent-dromedary-bactrian-camel-startup-company-innovation-camel-racing-mockups-logo-miscellaneous-mammal-innovation-thumbnail.png">
                <p class="boldSub">Standard</p>
                <p>₹ 650</p>
            </div>
            <div class="standard">
                <img src="https://img.icons8.com/external-flatart-icons-lineal-color-flatarticons/124/000000/external-delivery-shopping-and-commerce-flatart-icons-lineal-color-flatarticons-1.png"/>
                <p class="boldSub">Standard with DC+</p>
                <p>Free</p>
            </div>
        </div>
    </div>
    <div id="smallIcon">
        <img src="https://img.icons8.com/ios-filled/20/000000/checked.png"/>
        <p>- Your items will be sent together in fewest possible packages</p>
    </div>`
}

export {paymentBtn, shipping};