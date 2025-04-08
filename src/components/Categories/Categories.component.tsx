import { useEffect, useState } from "react";
import axios from "axios";

// Ultilities
import Category from "../../types/category.types";

// Styles
import CategoryItem from "../Category_Item/Category_Item.component";
import { CategoriesContainer, CategoriesContent } from "./Category.styles";

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
        <CategoriesContainer>
            <CategoriesContent>
                {categories.map((category) => (
                    <div key={category.id}>
                        <CategoryItem category={category} />
                    </div>
                ))}
            </CategoriesContent>
        </CategoriesContainer>
    );
};

export default Categories;
