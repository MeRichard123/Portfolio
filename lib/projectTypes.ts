interface HeaderImage {
    url: string;
    width: number;
    height: number;
}

export interface ProjectType{
    title: string;
    headerImage: HeaderImage;
    techStack: string;
    contentMd: string;
    siteLink?: string;
    blogLink?: string;
    codeLink?: string;
    demoLink?: string;
}

export interface PageDataType{
    pageData: ProjectType;
}