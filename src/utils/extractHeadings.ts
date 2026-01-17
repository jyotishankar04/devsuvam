export function extractHeadings(markdown: string) {
    const regex = /^##\s+(.*)$/gm;
    const headings: { id: string; text: string }[] = [];

    let match;
    while ((match = regex.exec(markdown)) !== null) {
        const text = match[1];
        const id = text
            .toLowerCase()
            .replace(/[^\w]+/g, "-");

        headings.push({ id, text });
    }

    return headings;
}
