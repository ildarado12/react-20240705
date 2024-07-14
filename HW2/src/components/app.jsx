import { restaurants } from "../constants/mock";
import { Layout } from "./layout/layout";
import { Restaurant } from "./restaurant/restaurant";
import { Resttab } from "./resttab/resttab";

export const App = () => {
    return <div>
        <Layout>
        {restaurants.map(({name}) => (<Resttab name={name}/>))}
        <Restaurant />
        </Layout>
        </div>;
};