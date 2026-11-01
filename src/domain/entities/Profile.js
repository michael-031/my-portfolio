/**
 * Domain Entity: Profile
 * Represents the portfolio owner's personal details, contact info, and gallery items.
 */
export class Profile {
  constructor({
    name,
    firstName,
    eyebrow,
    headline,
    description,
    avatar,
    logo,
    badges = [],
    highlights = [],
    contact = {},
    socials = [],
    aboutSlogan = '',
    gallery = [],
    navigation = [],
  }) {
    this.name = name;
    this.firstName = firstName;
    this.eyebrow = eyebrow;
    this.headline = headline;
    this.description = description;
    this.avatar = avatar;
    this.logo = logo;
    this.badges = badges;
    this.highlights = highlights;
    this.contact = contact;
    this.socials = socials;
    this.aboutSlogan = aboutSlogan;
    this.gallery = gallery;
    this.navigation = navigation;
  }
}
