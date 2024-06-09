import RootTemplates from "@larabiz/Templates";

const Templates = (page: any, uri: string): JSX.Element => {
    switch (page.data.template) {
        // Custom templates
        default:
            return RootTemplates(page, uri);
    }
}

export default Templates;
