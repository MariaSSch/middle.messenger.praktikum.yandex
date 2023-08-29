const sendMsgForm = document.getElementById("send-msg");

if (sendMsgForm) {
	const sendMsgInput = (sendMsgForm as HTMLFormElement).message;
	const sendMediaInput = (sendMsgForm as HTMLFormElement).attach_media;
	const sendFileInput = (sendMsgForm as HTMLFormElement).attach_file;
	const sendLocationInput = (sendMsgForm as HTMLFormElement).attach_location;

	sendMsgForm.addEventListener("submit", (e) => {
		e.preventDefault();
		const toSend = {
			message: sendMsgInput.value,
			media: sendMediaInput.value,
			file: sendFileInput.value,
			location: sendLocationInput.value,
		};
		sendMsgInput.value = "";
		console.log(toSend);
	});
}
