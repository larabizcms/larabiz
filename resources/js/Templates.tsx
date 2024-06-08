import RootTemplates from "@larabiz/Templates";

const Templates = (page: any): JSX.Element => {
    switch (page.data.template) {
        // Custom templates
        default:
            return RootTemplates(page);
    }
}

export default Templates;
