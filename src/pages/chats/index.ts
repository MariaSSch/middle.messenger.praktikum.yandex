import { Chat } from "../../components/chat";
import { ChatContent } from "../../components/chat-content";
import { ChatFooter } from "../../components/chat-footer";
import { ChatHeader } from "../../components/chat-header";
import { Link } from "../../components/link";
import { render } from "../../js/render";
import Block from "../../js/block";
import template from "./chats.pug";
import { Form } from "../../components/form";
import { chatList } from "../../js/forms/search-chat";
import { InputInit } from "../../components/input-init";

interface ChatsProps {
	chatListLength: number;
	isChatSelected: boolean;
}
export class Chats extends Block {
  constructor(props: ChatsProps) {
    super({
      ...props,
      chatListLength: 3,
      isChatSelected: true,
    });
  }

  init() {
    this.children.link = new Link({
      text: "Профиль &gt;",
      linkClass: "chats__to-profile-link",
      onClick: () => render("profile"),
      events: {
        click: () => this.props.onClick,
      },
    });
    this.children.formSearch = new Form({
      className: "chats__search",
      formId: "search",
      onInput: (e: Event) => {
        e.preventDefault();
        const { value } = (e.target as HTMLInputElement);
        const result = chatList.filter((chat) => chat.name.startsWith(value));
        console.log({ result });
      },
    });
    this.children.input = new InputInit({
      fieldType: "search",
      name: "search",
      placeholder: "Поиск",
      fieldClassName: "chats__search-field",
      formId: "search",
    });

    this.children.chatOne = new Chat({
      avatarSrc: "https://imgaz.staticbg.com/customers_avatars/20181219104152_503.jpg",
      name: "Alex",
      messagePre: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet, doloribus.",
      time: "10:23",
      unreadNum: 0,
    });
    this.children.chatTwo = new Chat({
      avatarSrc: "",
      name: "Samaritynin",
      messagePre: "Sticker",
      time: "Cp",
      unreadNum: 13,
    });
    this.children.chatThree = new Chat({
      name: "Alex",
      messagePre: "Smth I wrote",
      time: "30 февраля 2020",
      unreadNum: 5,
    });
    this.children.chatHeader = new ChatHeader({
      name: "Alex",
      avatarSrc: "https://imgaz.staticbg.com/customers_avatars/20181219104152_503.jpg",
      src: "string;,",
      descr: "string;",
    });
    this.children.chatContent = new ChatContent({
      date: "19 мая",
      interlocutorMsg: "Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой.  Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.",
      msgTime: "10:54",
      ownMsg: "Круто!",
    });
    this.children.chatFooter = new ChatFooter();
  }

  render() {
    return this.compile(template, this.props);
  }
}
