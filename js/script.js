

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