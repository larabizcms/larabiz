import RootTemplates from "@larabiz/templates";

const templates = (page: any, uri: string): JSX.Element => {
    switch (page.data.template) {
        // Custom templates
        default:
            return RootTemplates(page, uri);
    }
}

export default templates;
