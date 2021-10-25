function option(){
    return `
    <div id="optionButton">
        <div class="buttonTitle">
            <p>Size</p>
        </div>
        <div class="buttonBox">
            <div class="buttons">
                <img src="https://img.icons8.com/external-becris-lineal-becris/24/000000/external-left-arrow-mintab-for-ios-becris-lineal-becris.png" alt="">
            </div>
            <div class="buttons">
                <p>Medium</p>
            </div>
            <div class="buttons">
                <p>Small</p>
            </div>
            <div class="buttons">
                <p>X-Large</p>
            </div>
            <div class="buttons">
                <p>XX-Large</p>
            </div>
            <div class="buttons">
                <img src="https://img.icons8.com/ios/30/000000/more-than.png" alt="">
            </div>
        </div>

        <div class="buttonTitle">
            <p>Color</p>
        </div>
        <div class="buttonBox">
            <div class="buttons">
                <img src="https://img.icons8.com/external-becris-lineal-becris/24/000000/external-left-arrow-mintab-for-ios-becris-lineal-becris.png" alt="">
            </div>
            <div class="buttons">
                <p>Oxford Gray</p>
            </div>
            <div class="buttons">
                <p>Surf the web</p>
            </div>
            <div class="buttons">
                <p>Ultra Marine</p>
            </div>
            <div class="buttons">
                <p>Light Blue</p>
            </div>
            <div class="buttons">
                <img src="https://img.icons8.com/ios/30/000000/more-than.png" alt="">
            </div>
        </div>

        <div class="buttonTitle">
            <p>Quantity</p>
        </div>
        <div id="addToCartBtn">
            <div id="quantityBox">
            <button id="subtractQuantity">-</button>
            <input type="number" id="showQuantity" style="width: 40px; text-align: center; border: none; outline: none;" value="1">
            <button id="addQuantity">+</button>
            </div>
        </div>`
}

function rightContainerJs(){
    return `
    <div id="productName">

    </div>
    <div id="optionButton">
        <div class="buttonTitle">
            <p>Size</p>
        </div>
        <div class="buttonBox">
            <div class="buttons">
                <img src="https://img.icons8.com/external-becris-lineal-becris/24/000000/external-left-arrow-mintab-for-ios-becris-lineal-becris.png" alt="">
            </div>
            <div class="buttons">
                <p>Medium</p>
            </div>
            <div class="buttons">
                <p>Small</p>
            </div>
            <div class="buttons">
                <p>X-Large</p>
            </div>
            <div class="buttons">
                <p>XX-Large</p>
            </div>
            <div class="buttons">
                <img src="https://img.icons8.com/ios/30/000000/more-than.png" alt="">
            </div>
        </div>

        <div class="buttonTitle">
            <p>Color</p>
        </div>
        <div class="buttonBox">
            <div class="buttons">
                <img src="https://img.icons8.com/external-becris-lineal-becris/24/000000/external-left-arrow-mintab-for-ios-becris-lineal-becris.png" alt="">
            </div>
            <div class="buttons">
                <p>Oxford Gray</p>
            </div>
            <div class="buttons">
                <p>Surf the web</p>
            </div>
            <div class="buttons">
                <p>Ultra Marine</p>
            </div>
            <div class="buttons">
                <p>Light Blue</p>
            </div>
            <div class="buttons">
                <img src="https://img.icons8.com/ios/30/000000/more-than.png" alt="">
            </div>
        </div>

        <div class="buttonTitle">
            <p>Quantity</p>
        </div>
        <div id="addToCartBtn">
            <div id="quantityBox">
                <button id="subtractQuantity">-</button>
                <input type="number" id="showQuantity" style="width: 40px; text-align: center; border: none; outline: none;" value="1">
                <button id="addQuantity">+</button>
            </div>
            <div id="cartButton" class="cartButtonCss">
            </div>
        </div>
        <p>Get it to INDIA by Oct 13 to Oct 21 with standard delivery.</p>
    </div>
    <div>
        <div id="miscellaneous">
            <div class="miscellaneousBox">
                <div>
                    <img src="https://img.icons8.com/external-tulpahn-detailed-outline-tulpahn/30/000000/external-delivery-box-online-shopping-tulpahn-detailed-outline-tulpahn.png"/>
                </div>
                <div>
                    <p>Free Delivery to INDIA</p>
                </div>
            </div>
            <div class="miscellaneousBox">
                <div>
                    <img src="https://img.icons8.com/material-outlined/24/000000/rotate.png"/>
                </div>
                <div>
                    <p>Easy Returns & Exchanges</p>
                </div>
            </div>
            <div class="miscellaneousBox">
                <div>
                    <img src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/30/000000/external-message-chat-flatart-icons-outline-flatarticons-6.png"/>
                </div>
                <div>
                    <p>Ask About This Product</p>
                </div>
            </div>
        </div>
    </div>`
}

export  {option, rightContainerJs};