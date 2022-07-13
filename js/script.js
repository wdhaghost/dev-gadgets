
//gallery function mobile
function managePicButton() {
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
managePicButton()

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
function manageAddButton() {
    addBtn.addEventListener("click", getQty)
}
manageAddButton()

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
    removeAddbutton()
}

function removeAddbutton() {
    addBtn.innerText = "Déja au panier"
    addBtn.classList.add("bought")
    addBtn.removeEventListener("click", getQty)

}