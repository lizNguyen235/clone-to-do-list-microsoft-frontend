export default class Task {
  /**
   * @param {TaskProps} props
   */
  constructor({
    id,
    title,
    description = "",
    completed = false,
    dueDate,
    reminder,
    repeat = "None",
    createdAt,
    updatedAt,
  }) {
    this.id = id || crypto.randomUUID();
    this.title = title;
    this.description = description;
    this.completed = completed;
    this.dueDate = dueDate;
    this.reminder = reminder;
    this.repeat = repeat;
    this.createdAt = createdAt || new Date();
    this.updatedAt = updatedAt || new Date();
  }

  /** Toggle completion status */
  toggleComplete() {
    this.completed = !this.completed;
    this._touch();
  }

  /** Update title or description
   * @param {Object} data
   * @param {string} [data.title]
   * @param {string} [data.description]
   */
  update({ title, description }) {
    if (title !== undefined) this.title = title;
    if (description !== undefined) this.description = description;
    this._touch();
  }

  /** Set due date
   * @param {Date} date
   */
  setDue(date) {
    this.dueDate = date;
    this._touch();
  }

  /** Set reminder date
   * @param {Date} date
   */
  setReminder(date) {
    this.reminder = date;
    this._touch();
  }

  /** Set repeat option
   * @param {RepeatOption} option
   */
  setRepeat(option) {
    this.repeat = option;
    this._touch();
  }

  /** Private: update timestamp */
  _touch() {
    this.updatedAt = new Date();
  }
}
