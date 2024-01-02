// ==UserScript==
// @name         Nimo pickme by Mzn
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  tool xàm lồn để join pick me
// @author       Mzn
// @match        https://www.nimo.tv/*
// @icon         https://www.nimo.tv/nms/images/favicon-32x32.4c79d7892d1f5a3bf7430e2e2f4bec35.png
// @grant        none
// ==/UserScript==

(function(){
    var changeFlag = false
    var isExistPickMe = false
    
    setInterval(() => {
        if(document.querySelector("#page-pick-me-container")){
            if(changeFlag){
                const inputChatBox = document.querySelector(".PickMeComment__input")
                const btnSendMsg = document.querySelector(".PickMeComment__btn")

                inputChatBox.value = "ty"
                btnSendMsg.click()
            }
            
            changeFlag = !isExistPickMe
            isExistPickMe = true
        } else {
            changeFlag = isExistPickMe
            isExistPickMe = false
        }
    }, 10000)
})();
