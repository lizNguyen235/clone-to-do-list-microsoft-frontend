import MenuItem from "./MenuItem";

export default class Menu {
  constructor(title, icon = null) {
    this.title = title;
    this.icon = icon;
    this.items = [];
  }

  addItem({
    label,
    leading = null,
    trailing = null,
    onClick = () => {},
    isFooter = false,
  }) {
    const item = new MenuItem({
      label,
      leading,
      trailing,
      onClick,
      isFooter, // ← truyền đúng giá trị isFooter
    });
    this.items.push(item);
  }
}
