import { StaticImageData } from "next/image";
import React, { FC, ForwardRefExoticComponent, SVGProps } from "react";

import { IconProps } from "../components/Icon/Icon";

import Image from "next/image";
export interface HomepageMeta {
  title: string;
  description: string;
  ogImageUrl?: string;
  twitterCardType?: "summary" | "summary_large";
  twitterTitle?: string;
  twitterSite?: string;
  twitterCreator?: string;
  twitterDomain?: string;
  twitterUrl?: string;
  twitterDescription?: string;
  twitterImageUrl?: string;
}

/**
 * Hero section
 */
export interface Hero {
  imageSrc: StaticImageData;
  name: string;
  description: JSX.Element;
  actions: HeroActionItem[];
}

interface HeroActionItem {
  href: string;
  text: string;
  primary?: boolean;
  Icon?: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref">>;
}

/**
 * About section
 */
export interface About {
  profileImageSrc?: React.ReactNode;
  description: string;
  aboutItems: AboutItem[];
}

export interface AboutItem {
  label: string;
  text: string;
  Icon?: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref">>;
}

/**
 * Stat section
 */
export interface Stat {
  title: string;
  value: number;
  Icon?: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref">>;
}

/**
 * Skills section
 */

export interface Skill {
  name: string;
  level: number;
  max?: number;
}

export interface SkillGroup {
  name: string;
  skills: Skill[];
}

/**
 * Portfolio section
 */
export interface PortfolioItem {
  title: string;
  description: string;
  url: any;
  image: string | StaticImageData;
  longDescription?: string;
  keyFeatures?: { featureTitle: string; featureDescription: string }[];
  sliderImages?: StaticImageData[];
  sliderVideos?: string[];
  stackUsed?: string[];
}

/**
 * Resume section
 */
export interface TimelineItem {
  date: string;
  location: string;
  title: string;
  content: string[];
}

/**
 * Testimonial section
 */
export interface TestimonialSection {
  imageSrc?: string | StaticImageData;
  testimonials: Testimonial[];
}

export interface Testimonial {
  image?: string;
  name: string;
  text: string;
}

/**
 * Contact section
 */
export interface ContactSection {
  headerText?: string;
  description: string;
  items: ContactItem[];
}

export const ContactType = {
  Email: "Email",
  Phone: "Phone",
  Location: "Location",
  Github: "Github",
  LinkedIn: "LinkedIn",
} as const;

export type ContactType = (typeof ContactType)[keyof typeof ContactType];

export interface ContactItem {
  type: ContactType;
  text: string;
  href?: string;
}

export interface ContactValue {
  Icon:
    | FC<IconProps>
    | ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref">>;
  srLabel: string;
}

/**
 * Social items
 */
export interface Social {
  label: string;
  Icon: FC<IconProps>;
  href: string;
}
