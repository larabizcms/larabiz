import RootTemplates from "@admin/templates";

const templates = (page: any, uri: string): JSX.Element => {
    switch (page.template) {
        // Custom templates
        default:
            return RootTemplates(page, uri);
    }
}

export default templates;
