import {createClient} from "contentful";
import {UserContext} from "./App";
import {useContext} from "react";

const useContentful = () => {
    const user = useContext(UserContext);

    const client = createClient({
        space: user.space,
        accessToken: user.accessToken,
        host: "preview.contentful.com"
    })

    const getRecipes = async (title,category) => {
        try {
            const entries = await client.getEntries({
                content_type: "recipe",
                select: "fields",
                "fields.title[match]": title,
                //"fields.categories.fields.name[match]": category
            });

            return entries.items.map((item) => {
                const categories = item.fields.categories.map(({fields}) => fields.name);
                return {
                    ...item.fields,
                    categories: categories
                };
            });
        } catch (error) {
            console.error(error);
        }
    }

    return {getRecipes};
}

export default useContentful;
