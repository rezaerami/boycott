export interface BrandLinkType {
  title: string;
  href: string;
}
export interface BrandAttributeType {
  key: string;
  value: string;
}

export interface BrandType {
  title: string;
  description: string;
  logo: string;
  content: string;
  links: BrandLinkType[];
  attributes: BrandAttributeType[];
}
