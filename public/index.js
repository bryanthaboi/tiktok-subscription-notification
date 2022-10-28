class SubscriptionConnection {
    constructor(backendUrl) {
        this.socket = io(backendUrl);
        this.socket.on('connect', () => {
            console.info("Socket connected!");

        })
        this.socket.on('disconnect', () => {
            console.warn("Socket disconnected!");
        })
    }

    connect() {
        return new Promise((resolve, reject) => {
            this.socket.once('subConnected', resolve);
            this.socket.once('subDisconnected', reject);
            setTimeout(() => {
                reject('Connection Timeout');
            }, 15000)
        })
    }

    on(eventName, eventHandler) {
        this.socket.on(eventName, eventHandler);
    }
}
let socket;
let connection = new SubscriptionConnection(undefined);
function connect() {
    connection
        .connect()
        .then((state) => { })
        .catch((errorMessage) => {
            console.log(errorMessage);
        });
}

connection.on("subNumb", (data) => {
    $('#subNumb').html(data.number);
    $('#container').addClass('animate__wobble');
    doConfetti();
    setTimeout(function(){
        $('#container').removeClass('animate__wobble');
    },1500)
    $("#audio").find("#audiosource").attr("src", '/notification.mp3');
    $("#audio").get(0).load();
    $("#audio").prop("volume", 0.1)
    $("#audio").get(0).play();
});
function doConfetti() {
    var myCanvas = document.getElementById('canvasBox');
    $('#container').append(myCanvas);
    var myConfetti = confetti.create(myCanvas, { resize: true });
    myConfetti({
      particleCount: 150,
      gravity: 2,
      startVelocity: 30,
      spread: 360,
      origin: {
        x: 0.5,
        // since they fall down, start a bit higher than random
        y: 0.4
      }
    });
}

function test(){
    $('#subNumb').html(parseInt($('#subNumb').html()) +1);
    $('#container').addClass('animate__wobble');
    doConfetti();
    setTimeout(function(){
        $('#container').removeClass('animate__wobble');
    },1500)
    $("#audio").find("#audiosource").attr("src", '/notification.mp3');
    $("#audio").get(0).load();
    $("#audio").prop("volume", 0.1)
    $("#audio").get(0).play();
}
connect();