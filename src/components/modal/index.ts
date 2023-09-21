import Block from "../../js/block";
import template from "./modal.pug";

export class Modal extends Block {
  constructor() {
    super({
      events: {
        click: (e: Event) => e.stopPropagation(),
      },
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
