import { createClient } from "contentful-management";

const manageContentful = () => {

    const client = createClient({
        accessToken: process.env.REACT_APP_ACCESS_TOKEN
    });

    const createEntry = async (entry) => {
        try {
            client.getSpace('hjxdu4cirwy1')
            .then((space) => {
                // console.log(space.getEnvironment("master").then(data => console.log(data)));
                return space.getEnvironment('master')
            })
            .then((environment) => {
                console.log(environment);

                return environment.createEntry('recipe', entry)
            })
            .then((entry) => console.log(entry))
            .catch(console.error)
        } catch (error) {
            console.error(error);
        }
    }

    return { createEntry };
}

export default manageContentful;