import { rootTemplates } from "@larabiz/templates";

const templates = (page: any): JSX.Element => {
    switch (page.data.template) {
        // Custom templates
        default:
            return rootTemplates(page);
    }
}

export default templates;
