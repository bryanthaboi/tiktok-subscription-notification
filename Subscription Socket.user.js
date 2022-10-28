// ==UserScript==
// @name         TikTok Subscription Socket by bryanthaboi
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  connect to subs page on tiktok to deliver info to the source!
// @author       bryanthaboi
// @match        https://livecenter.tiktok.com/subscription/my_subscription*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tiktok.com

// ==/UserScript==


(function() {

    let subNumb = 0;
    const socket = new WebSocket("ws://127.0.0.1:8086");

    socket.onopen = (event) => {

        setTimeout(function(){
            for (const a of document.querySelectorAll("div")) {
                if (a.textContent.toLowerCase().replace(/\s/g, '') ==(('Current subscribers').replace(/\s/g, '').toLowerCase())) {
                    subNumb =a.parentElement.children[1].textContent
                    socket.send(JSON.stringify({number:subNumb}));
                    setTimeout(function(){
                        let r = (Math.random() + 1).toString(36).substring(7);
                       window.location.href = 'https://livecenter.tiktok.com/subscription/my_subscription?'+r;
                    },30000)
                }
            }
        },2000)



    };

})();