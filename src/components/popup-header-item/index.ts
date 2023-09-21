import Block from "../../js/block";
import template from "./popup-header-item.pug";

interface PopupHeaderItemProps {
	src: string;
	descr: string;
	onClick?: () => void;
}
export class PopupHeaderItem extends Block {
  constructor(props: PopupHeaderItemProps) {
    super({
      ...props,
      events: {
        click: props.onClick,
      },
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
