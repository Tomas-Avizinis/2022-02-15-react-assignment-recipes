import {createSlice, current} from "@reduxjs/toolkit";

export const recipesSlice=createSlice( {
    name:'recipes',
    initialState: {
        value: [
            {
                "title": 'Šaunioji nuostabioji Itališka pica, su viduržemio regione užaugintomis alyvuogėmis',
                "id":1,
                "pictures": [
                    'https://c4.wallpaperflare.com/wallpaper/234/543/684/food-pizza-wallpaper-preview.jpg',
                    'https://c4.wallpaperflare.com/wallpaper/991/135/708/food-pizza-fire-ovens-wallpaper-preview.jpg',
                    'https://c4.wallpaperflare.com/wallpaper/786/792/888/veggie-pizza-pizza-and-red-pepper-wallpaper-preview.jpg',
                    'https://c4.wallpaperflare.com/wallpaper/826/968/997/food-pizza-tomatoes-red-onion-wallpaper-preview.jpg',
                    'https://c4.wallpaperflare.com/wallpaper/165/200/910/food-pizza-cheese-wallpaper-preview.jpg',
                    'https://c4.wallpaperflare.com/wallpaper/741/599/723/pizza-food-vegetables-fruit-wallpaper-preview.jpg',

                ],
                "ingredients": ['Padas', 'dešra', 'sūris', 'alyvuogės'],
                "prepTime": 15,
                "steps": ['Įkaitinti orkaitę', 'ir kepti nurodytą laiką'],
                "reviews":[
                    {
                        'rating':5,
                        'text': 'labai skanu'
                    },
                    {
                        'rating':4,
                        'text': 'Man taip pat'
                    },
                ]
            },
            {
                "title": 'Mėsainis',
                "id":2,
                "pictures": [
                    'https://c4.wallpaperflare.com/wallpaper/374/404/846/brown-bird-perching-during-daytime-wren-wren-wallpaper-preview.jpg',
                    'https://c4.wallpaperflare.com/wallpaper/498/712/47/food-burger-burgers-fries-hd-wallpaper-preview.jpg',
                    'https://c4.wallpaperflare.com/wallpaper/197/854/431/fire-burger-5k-steak-wallpaper-preview.jpg',
                    'https://c4.wallpaperflare.com/wallpaper/667/630/482/burger-dinner-food-hamburger-wallpaper-preview.jpg',
                    'https://c4.wallpaperflare.com/wallpaper/330/471/709/food-burgers-wallpaper-preview.jpg',
                    'https://c4.wallpaperflare.com/wallpaper/777/533/143/movies-pulp-fiction-samuel-l-jackson-burgers-wallpaper-preview.jpg',
                    '',
                ],
                "ingredients": ['bandele', 'kotletas', 'suris', 'salota'],
                "prepTime": 5,
                "steps": ['atvozti bandele', 'sudeti kotleta', 'suri', 'ant virsaus…salota', 'ir nepamirsti persmeigti dantu krapstuku.'],
                "reviews":[
                    {
                        'rating':3,
                        'text': 'labai skanu'
                    },
                    {
                        'rating':2,
                        'text': 'sssss'
                    },
                ]
            },

            {
                "title": "Paprasta juoda duona",
                "id": 3,
                "favourite": false,
                "pictures": [
                    "https://c4.wallpaperflare.com/wallpaper/686/554/560/food-wheat-bread-baskets-wallpaper-preview.jpg",
                    "https://c4.wallpaperflare.com/wallpaper/133/409/69/food-bread-wallpaper-preview.jpg",
                    "https://c4.wallpaperflare.com/wallpaper/866/878/494/basket-mac-bread-buns-wallpaper-preview.jpg",
                    "https://c4.wallpaperflare.com/wallpaper/220/287/656/field-sunset-macro-wheat-wallpaper-preview.jpg",
                    "https://c4.wallpaperflare.com/wallpaper/960/128/933/woman-wearing-knee-high-boots-wallpaper-preview.jpg",
                    "https://c1.wallpaperflare.com/preview/944/141/271/bake-baking-bread-cook.jpg"
                ],
                "ingredients": [
                    "Miltai",
                    "Vanduo",
                    "Prieskoniai"
                ],
                "prepTime": "60",
                "steps": [
                    "Užauginti kviečius",
                    "Nupjauti, iškulti, sumalti į miltus",
                    "Miltus sumaišius su vandeniu iškočioti tešlą",
                    "Tešlą užraugti (kiek tai truks laiko neįsivaizduoju",
                    "Tešlai išrūgus suformuoti duonos formą",
                    "Kepti krosnyje apie 60 min."
                ],
                "reviews": []
            },
            {
                "title": "Lazanja",
                "id": 4,
                "favourite": false,
                "pictures": [
                    "https://c4.wallpaperflare.com/wallpaper/754/484/858/lasagne-wallpaper-preview.jpg",
                    "https://c1.wallpaperflare.com/preview/307/138/340/lasagna-noodles-pasta-food.jpg",
                    "https://c4.wallpaperflare.com/wallpaper/187/997/205/lasagne-wallpaper-preview.jpg"
                ],
                "ingredients": [
                    "Makaronų lakštai",
                    "Mėsos faršas",
                    "Prieskoniai"
                ],
                "prepTime": "25",
                "steps": [
                    "Sluoksniais sudėti lakštus, faršą ir prieskonius",
                    "Suformuoti bent 3-4 tokius sluoksnius",
                    "kepti orkaitėje 20-25 min"
                ],
                "reviews": []
            }
        ],
    },
    reducers: {
        addRecipe: (state, action)=> {
            state.value=[...state.value, action.payload];
        },
        addReview: (state, {payload:{id, rating, text}})=> {
            const index=current(state).value.findIndex(r=>r.id===id);

            const a = current(state).value.find(r=>r.id===id);
            const updateRecipe = {...a, reviews:[...a.reviews, {rating:rating, text: text}]}
            const updateRecipesArray=[...current(state).value];
            updateRecipesArray[index]=updateRecipe;

            state.value=[...updateRecipesArray]
        }
    }
});

export const {addRecipe, addReview}= recipesSlice.actions;
export default recipesSlice.reducer;