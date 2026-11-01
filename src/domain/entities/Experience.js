/**
 * Domain Entity: Experience
 * Represents a professional work experience or internship milestone.
 */
export class Experience {
  constructor({
    id,
    role,
    company,
    date,
    type = 'Internship',
    location = 'Software Engineering',
    summary = '',
    highlights = [],
    documentLink = null,
  }) {
    this.id = id;
    this.role = role;
    this.company = company;
    this.date = date;
    this.type = type;
    this.location = location;
    this.summary = summary;
    this.highlights = highlights;
    this.documentLink = documentLink;
  }
}
