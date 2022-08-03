import client from '../lib/commerce';
import CategoryList from '../components/CategoryList';
import Navbar from '../components/Navbar';

export async function getStaticProps() {
    const { data: categories} = await client.categories.list();

    return {

        props: {
            categories,
        },
    }
}

export default function CategoryPage({categories}) {
    return (
        <div>
            <Navbar/>
            <div className="mt-16">
                <CategoryList categories={categories} />
            </div>
            
        </div>
    )
}