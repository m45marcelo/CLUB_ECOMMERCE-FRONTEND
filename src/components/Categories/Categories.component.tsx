import { useEffect, useState } from "react";
import axios from "axios";

// Ultilities
import Category from "../../types/category.types";

// Styles
import "./Categories.styles.css";
import CategoryItem from "../Category_Item/Category_Item.component";

const Categories = () => {
    const [categories, setCategories] = useState<Category[]>([]);

    console.log({ categories });

    const fetchCategories = async () => {
        try {
            const { data } = await axios.get(
                "http://localhost:8000/categorias",
            );

            setCategories(data);
        } catch (error) {
            console.log({ error });
        }
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    return (
        <div className="categories-container">
            <div className="categories-content">
                {categories.map((category) => (
                    <div key={category.id}>
                        <CategoryItem category={category} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Categories;
