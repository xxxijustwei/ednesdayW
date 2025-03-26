export function getGithubFileUrl(slug: string) {
    return `https://github.com/xxxijustwei/ednesdayW/blob/main/content${slug === "/docs" ? "/docs/index" : slug}.mdx`;
}
