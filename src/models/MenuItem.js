// models/MenuItem.js
export default class MenuItem {
  constructor({
    label,
    leading = null,
    trailing = null,
    onClick = () => {},
    isFooter = false,
  }) {
    this.label = label;
    this.leading = leading;
    this.trailing = trailing;
    this.onClick = onClick;
    this.isFooter = isFooter;
  }
}
