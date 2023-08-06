const sendMsgForm = document.getElementById("send-msg");
const sendMsgInput = sendMsgForm.message;
const sendMediaInput = sendMsgForm.attach_media;
const sendFileInput = sendMsgForm.attach_file;
const sendLocationInput = sendMsgForm.attach_location;

sendMsgForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const toSend = {
        message: sendMsgInput.value,
        media: sendMediaInput.value,
        file: sendFileInput.value,
        location: sendLocationInput.value,
    }
    sendMsgInput.value = "";
    console.log(toSend)
})