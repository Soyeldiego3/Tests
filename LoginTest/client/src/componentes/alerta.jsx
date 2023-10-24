import Swal from "sweetalert2";
import 'animate.css';
import confetti from "https://cdn.skypack.dev/canvas-confetti";

const lolxd = require('./img/pog.png');

function confetiMAXIMO(){
    confetti();
    confetti();
    confetti();
    confetti();
    confetti();
    confetti();
    confetti();
    confetti();
    confetti();
}

function Epico(){
        confetiMAXIMO()
        Swal.fire(
            {
                showClass: {
                    popup: 'animate__animated animate__tada'
                  },
                title: 'POGGG!',
                text: 'Lo lograsteee!!!',
                width: '300',
                imageUrl: lolxd,
                imageHeight: 300,
                imageWidth: 350,
            }
        )
}

export default Epico