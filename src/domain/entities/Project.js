/**
 * Domain Entity: Project
 * Represents a portfolio project with its metadata, contributions, and technical stack.
 */
export class Project {
  constructor({
    id,
    title,
    monogram,
    category,
    roleTitle,
    period,
    displayLink,
    link,
    image = null,
    roleImage = null,
    secondaryImage = null,
    images = [],
    subtitle,
    description,
    contributions = [],
    challenges = '',
    tech = [],
  }) {
    this.id = id;
    this.title = title;
    this.monogram = monogram;
    this.category = category;
    this.roleTitle = roleTitle;
    this.period = period;
    this.displayLink = displayLink;
    this.link = link;
    this.image = image;
    this.roleImage = roleImage;
    this.secondaryImage = secondaryImage;
    this.images = images;
    this.subtitle = subtitle;
    this.description = description;
    this.contributions = contributions;
    this.challenges = challenges;
    this.tech = tech;
  }
}

/**
 * Domain Entity: ParallaxProductCard
 * Represents a card item displayed in the 3D Hero Parallax showcase rows.
 */
export class ParallaxProductCard {
  constructor({
    title,
    category,
    projectDetails,
    sectionIndex = 0,
    type = 'mock',
    subtitle = '',
    bgGradient = '',
    filename = '',
    codeSnippet = '',
    thumbnail = null,
    secondaryImage = null,
    tech = [],
  }) {
    this.title = title;
    this.category = category;
    this.projectDetails = projectDetails;
    this.sectionIndex = sectionIndex;
    this.type = type;
    this.subtitle = subtitle;
    this.bgGradient = bgGradient;
    this.filename = filename;
    this.codeSnippet = codeSnippet;
    this.thumbnail = thumbnail;
    this.secondaryImage = secondaryImage;
    this.tech = tech;
  }
}
