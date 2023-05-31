import { createClient } from "contentful";
import { UserContext } from "./App";
import { useContext } from "react";
import { alignPropType } from "react-bootstrap/esm/types";

const useContentful = (user) => {
    if (!user)
        return [];

    const client = createClient({
        space: user?.space,
        accessToken: user?.accessToken,
        host: "preview.contentful.com"
    });

    const getRecipes = async (title, category) => {
        try {
            const entries = await client.getEntries({
                //kinda mandatory
                content_type: "recipe",
                //you chose what to select
                select: "fields,sys",

                //each extra line is a query option
                "fields.title[match]": title,

                //to search by related category
                "fields.categories.sys.id": category,
                // 'fields.categories.sys.id[equal]': category,
                
            })

            return entries.items.map((item) => sanitizeRecipe(item));
        } catch (error) {
            console.error(error);
        }
    }


    const getRecipeDetails = async (id) => {
        try {
            // if (client === null)
            //     return null;

            const recipe = await client.getEntry(id);

            return sanitizeRecipe(recipe);
        } catch (error) {
            console.error(error);
        }
    }

    const sanitizeRecipe = (recipe) => {
        // console.log(recipe);
        const categories = recipe.fields.categories?.map(({ fields }) => fields.name);
        const cleanRecipe = {
            ...recipe.fields,
            categories: categories,
            id: recipe.sys.id,
            image: recipe.fields.image?.fields.file.url
        };
        // console.log(cleanRecipe);

        return cleanRecipe;
    }

    const getCategories = async () => {
        // console.log("getting categories contentful");

        // if (client === null)
        //     return null;



        try {
            const entries = await client.getEntries({
                //kinda mandatory
                content_type: "category",
                //you chose what to select
                select: "fields,sys",
            });

            return entries.items.map((item) => sanitizeCategory(item));
        } catch (error) {
            console.error(error);
        }
    }

    const sanitizeCategory = (category) => {
        // console.log(category)

        return {
            ...category.fields,
            id: category.sys.id
        };
    }


    const createEntry = (entry) => {

    }

    return { getRecipes, getRecipeDetails, getCategories };
}

export default useContentful;