
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
function manageThumbs(){
    document.querySelectorAll(".thumbs > .thumbs-itm").forEach(thumb=>{
        thumb.addEventListener("mouseover",function(event){
           changePic(this.dataset.id)
        })
    });
}
manageThumbs()