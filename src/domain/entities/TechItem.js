/**
 * Domain Entity: TechItem
 * Represents a technology or tool in the developer's stack.
 */
export class TechItem {
  constructor({ name, icon, category = 'core' }) {
    this.name = name;
    this.icon = icon;
    this.category = category;
  }
}
