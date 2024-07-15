import { restaurants } from "../constants/mock";
import { Layout } from "./layout/layout";
import { Restaurant } from "./restaurant/restaurant";

export const App = () => {
    return <div>
        <Layout>
        {restaurants.map(({name, menu, reviews}) => (<Restaurant name={name} menu={menu} reviews={reviews}/>))}
        </Layout>
        </div>;
};