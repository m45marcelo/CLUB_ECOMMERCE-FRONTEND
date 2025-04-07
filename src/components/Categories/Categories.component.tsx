import { useEffect, useState } from 'react'
import axios from 'axios'

// Ultilities
import Category from '../../types/category.types'

// Styles
import './Categories.styles.css'

const Categories = () => {
    const [categories, setCategories] = useState<Category[]>([]);
    console.log({categories})
    const fetchCategories = async () => {
        try {
            const { data } = await axios.get('http://localhost:8000/categorias');
            console.log(data)
            setCategories(data)

        } catch (error) {
            console.log({error})
        }
    }
    useEffect(() => {
        fetchCategories()
    }, [])

    return(
        <div className="categories-container">
            <div className="categories-content">
                
            </div>
        </div>
    )
}

export default Categories