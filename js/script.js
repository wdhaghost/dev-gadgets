
//gallery function mobile
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

function changePic(a) {
    document.querySelector(".pictures-img").src = `img/canard-jaune-${a}-l.png`
}

//gallery function desktop
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

function getQty() {
    const qty = document.getElementById("add-qty")
    displayQty(qty.value)
}

function displayQty(qty) {
    if (qty > 99) {
        document.getElementById("cart-nb").innerText = "99+"
    } else {
        document.getElementById("cart-nb").innerText = qty
    }
    removeAddBtn()
}

function removeAddBtn() {
    addBtn.innerText = "Déja au panier"
    addBtn.classList.add("bought")
    addBtn.removeEventListener("click", getQty)

}
//accordeon function
function manageAcrdBtn() {
    document.querySelectorAll(".product-acrd-lnk").forEach(acrd => {
        acrd.addEventListener("click", function (event) {
            displayAcrdText(`${this.dataset.id}`);
            this.classList.toggle("closed")
        })
        getStorageAcrdState(`${acrd.dataset.id}`,acrd)
    })
}
manageAcrdBtn()

function displayAcrdText(id){
    document.getElementById(id).classList.toggle("hide")
    setStorageAcrdState(id,document.getElementById(id).classList)
}

function setStorageAcrdState(id,state){
    localStorage.setItem(id,state)
}
function getStorageAcrdState(id,acrd){
    const a= localStorage.getItem(`${acrd.dataset.id}`)

    document.getElementById(id).className=`${a}`
    if(document.getElementById(id).classList.contains("hide")){
        acrd.classList.add("closed")
    }
}
