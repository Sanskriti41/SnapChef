import React, { useState } from "react";
import { motion } from "framer-motion";
import Modal from "../components/Modal";

const Explore = () => {
    const [selectedRecipe, setSelectedRecipe] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const recipes = [
        {
            id: 1,
            title: "Spicy Pasta Arrabbiata",
            image: "https://images.unsplash.com/photo-1611270629569-8b357cb88da9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            description: "A fiery Italian pasta dish with tomatoes, garlic, and red chili peppers.",
            content: `Ingredients:
- 200g pasta
- 2 tbsp olive oil
- 3 garlic cloves, minced
- 1 red chili, finely chopped
- 400g canned tomatoes
- Salt and pepper to taste
- Fresh basil for garnish

Instructions:
1. Cook pasta according to package instructions.
2. Heat olive oil in a pan, add garlic and chili, and sauté for 1-2 minutes.
3. Add canned tomatoes, salt, and pepper. Simmer for 10 minutes.
4. Toss cooked pasta in the sauce.
5. Garnish with fresh basil and serve hot.`,
        },
        {
            id: 2,
            title: "Classic Margherita Pizza",
            image: "https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            description: "A simple yet delicious pizza with fresh mozzarella, tomatoes, and basil.",
            content: `Ingredients:
- 1 pizza dough
- 100g fresh mozzarella
- 2 tomatoes, sliced
- Fresh basil leaves
- 2 tbsp olive oil
- Salt to taste

Instructions:
1. Preheat oven to 250°C (480°F).
2. Roll out the pizza dough and place it on a baking tray.
3. Layer tomato slices and mozzarella on the dough.
4. Drizzle with olive oil and sprinkle salt.
5. Bake for 10-12 minutes until the crust is golden.
6. Garnish with fresh basil and serve.`,
        },
        {
            id: 3,
            title: "Chocolate Lava Cake",
            image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            description: "A decadent dessert with a gooey chocolate center.",
            content: `Ingredients:
- 100g dark chocolate
- 100g butter
- 100g sugar
- 2 eggs
- 50g flour

Instructions:
1. Preheat oven to 200°C (390°F).
2. Melt chocolate and butter together.
3. Whisk sugar and eggs until fluffy, then fold in the melted chocolate mixture.
4. Add flour and mix until just combined.
5. Pour into ramekins and bake for 10-12 minutes.
6. Serve warm with vanilla ice cream.`,
        },
    ];

    const handleRecipeClick = (recipe) => {
        setSelectedRecipe(recipe);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedRecipe(null);
    };

    return (
        <div className="bg-gradient-to-br from-white to-gray-50 min-h-screen py-12 px-4 sm:px-8">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-4">
                        Explore <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-transparent bg-clip-text">Recipes</span>
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-600">
                        Discover delicious recipes curated just for you.
                    </p>
                </motion.div>

                {/* Recipe Cards */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.2,
                            },
                        },
                    }}
                >
                    {recipes.map((recipe) => (
                        <motion.div
                            key={recipe.id}
                            className="bg-white rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            whileHover={{ scale: 1.05 }}
                            onClick={() => handleRecipeClick(recipe)}
                        >
                            <img
                                src={recipe.image}
                                alt={recipe.title}
                                className="w-full h-48 object-cover rounded-t-xl"
                            />
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                    {recipe.title}
                                </h3>
                                <p className="text-gray-600">{recipe.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Modal */}
            {selectedRecipe && (
                <Modal
                    isOpen={isModalOpen}
                    onClose={closeModal}
                    title={selectedRecipe.title}
                    content={selectedRecipe.content}
                />
            )}
        </div>
    );
};

export default Explore;