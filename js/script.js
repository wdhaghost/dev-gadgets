
//gallery function mobile
//Event listener added on the btn 
function managePicBtn() {
    let i = 1
    document.querySelectorAll(".pictures-handler").forEach(btn => {


        btn.addEventListener("click", function (event) {
            if (this.classList.contains("pictures-next")) {
                i++
                if (i == 6) {
                    i = 1
                }
            }
            if (this.classList.contains("pictures-prev")) {
                i--
                if (i == 0) {
                    i = 5
                }
            }

            changePic(i)
        })
    });
}
managePicBtn()

//Change the src of the displayed picture 
function changePic(a) {
    document.querySelector(".pictures-img").src = `img/canard-jaune-${a}-l.png`
}

//gallery function desktop
//The pic change when the mouse is hover the thums with an event listener
function manageThumbs() {
    document.querySelectorAll(".thumbs > .thumbs-itm").forEach(thumb => {
        thumb.addEventListener("mouseover", function (event) {
            changePic(this.dataset.id)
        })
    });
}
manageThumbs()
//Cart function
const addBtn = document.getElementById("add-cta")
function manageAddBtn() {
    addBtn.addEventListener("click", getQty)
}
manageAddBtn()

//get the value of the input and call a function to dislay it in the cart
function getQty() {
    const qty = document.getElementById("add-qty")
    displayQty(qty.value)
}

//display the qty into the cart
function displayQty(qty) {
    if (qty > 99) {
        document.getElementById("cart-nb").innerText = "99+"
    } else {
        document.getElementById("cart-nb").innerText = qty
    }
    removeAddBtn()
}
//change the state of the add-to-cart button
function removeAddBtn() {
    addBtn.innerText = "Déja au panier"
    addBtn.classList.add("bought")
    addBtn.removeEventListener("click", getQty)

}
//accordeon function
//   get the last state of the acordeonadd an event listener to acrd button and call a function for display 
function manageAcrdBtn() {
    document.querySelectorAll(".product-acrd-lnk").forEach(acrd => {
        getStorageAcrdState(`${acrd.dataset.id}`,acrd)
        acrd.addEventListener("click", function (event) {
            displayAcrdText(`${this.dataset.id}`);
            this.classList.toggle("closed")
        })
    })
}
manageAcrdBtn()

//it change the state of the acordeon(hide/display)
function displayAcrdText(id){
    document.getElementById(id).classList.toggle("hide")
    setStorageAcrdState(id,document.getElementById(id).classList)
}
//it save the last state of the acordeon
function setStorageAcrdState(id,state){
    localStorage.setItem(id,state)
}
//  get the last state of the acordeon in the local storage and applied it
function getStorageAcrdState(id,acrd){
    const a= localStorage.getItem(`${acrd.dataset.id}`)

    document.getElementById(id).className=`${a}`
    if(document.getElementById(id).classList.contains("hide")){
        acrd.classList.add("closed")
    }
}

//carousel function
let count = 0
let array=[]
getSimilarArticleId()

//manage the btn of the similar article (hide/display)
function manageSimilarBtn() {
    document.querySelectorAll(".similar-lnk-handler").forEach(btn => {


        btn.addEventListener("click", function (event) {
        //the prev btn is hide in the first place
            if (this.classList.contains("similar-next")) {
                count++
                if(count==array.length-1){
                    //hide the next btn when we are at the last article
                    document.getElementById("similar-next").classList.add("hide")
                }
                document.getElementById("similar-prev").classList.remove("hide")
                displaySimilarItm(count)
            }
            if (this.classList.contains("similar-prev")) {
                count--
                if(count==0){
                    //hide the prev btn when we are at the last article
                    document.getElementById("similar-prev").classList.add("hide")
                }
                document.getElementById("similar-next").classList.remove("hide")
                displaySimilarItm(count)
            }
            
        })
    });
}
//get the id of all the similar itm
function getSimilarArticleId() {
    document.querySelectorAll(".similar-lst > .similar-itm").forEach(itm => {
        if (!array.includes(itm)) {
            array.push(itm.id);
        }
    });
}
//display on itm at a time
function displaySimilarItm(i) {
    //overflow hidden is applied in the css code so this line will allow to scroll directly to the element and act like a carousel
    document.getElementById(array[i]).scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" })
}

manageSimilarBtn()