import { jobList } from "./Job.List";
import { projectList } from "./Project.List";
import { educationList } from "./Education.List";
import technologiesList from "./Technologies.List";
import socialLinkList from "./SocialLinks.List";
import { ChildrenSVG } from "../interfaces/Interfaces";

export const Jobs = jobList;
export const Projects = projectList;
export const Educations = educationList;
export const Technologies : ChildrenSVG[] = technologiesList();
export const SocialLinks = socialLinkList;