import ExperiencieList from "./Experiencie.List";
import ProjectList from "./Project.List";
import EducationList from "./Education.List";
import technologiesList from "./Technologies.List";
import socialLinkList from "./SocialLinks.List";
import { ChildrenSVG } from "../interfaces/Interfaces";

export const Experiencie = ExperiencieList;
export const Projects = ProjectList;
export const Educations = EducationList;
export const Technologies : ChildrenSVG[] = technologiesList();
export const SocialLinks = socialLinkList;