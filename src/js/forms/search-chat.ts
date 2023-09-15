const searchForm = document.getElementById("search");

/*from pug-file*/
export let chatList = [
	{
		avatarSrc: "https://imgaz.staticbg.com/customers_avatars/20181219104152_503.jpg",
		name: "Alex",
		messagePre: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet, doloribus.",
		time: "10:23",
		unreadNum: 0,
	},
	{
		avatarSrc: "",
		name: "Samaritynin",
		messagePre: "Sticker",
		time: "Cp",
		unreadNum: 13,
	},
	{
		name: "Alex",
		messagePre: "Smth I wrote",
		time: "30 февраля 2020",
		unreadNum: 5,
	},
];

if (searchForm) {
	// const searchInput = searchForm.search;

	searchForm.addEventListener("input", (e) => {
		e.preventDefault();
		const { value } = (e.target as HTMLInputElement);
		chatList = chatList.filter((chat) => chat.name.startsWith(value));
		if (chatList.length === 0) {
			const noChatsMsg = document.querySelector(".chats__list");
			(noChatsMsg as HTMLElement).textContent = "Такого разговора нет";
		}
		console.log(chatList);
		/*render new chatList*/
	});
}
