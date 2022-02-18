import {createSlice, current} from "@reduxjs/toolkit";

export const recipesSlice=createSlice( {
    name:'recipes',
    initialState: {
        value: [
            {
                "title": 'Pica',
                "id":1,
                "pictures": [
                    'https://c4.wallpaperflare.com/wallpaper/234/543/684/food-pizza-wallpaper-preview.jpg',
                    'https://c4.wallpaperflare.com/wallpaper/776/107/693/food-cheese-milk-tomatoes-wallpaper-preview.jpg',
                    'https://c4.wallpaperflare.com/wallpaper/432/234/423/food-cheese-wheat-wallpaper-preview.jpg',
                    'https://c4.wallpaperflare.com/wallpaper/554/968/10/cheese-food-piece-wallpaper-thumb.jpg',
                    'https://c4.wallpaperflare.com/wallpaper/960/148/933/cheese-sliced-food-wallpaper-preview.jpg'
                ],
                "ingredients": ['padas', 'desra', 'suris'],
                "prepTime": '12-15 min',
                "steps": ['ikaitinti orkaite', 'ir kepti nurodyta laika'],
                "reviews":[
                    {
                        'rating':5,
                        'text': 'labai skanu'
                    },
                    {
                        'rating':4,
                        'text': 'sssss'
                    },
                ]
            },
            {
                "title": 'Mesainis',
                "id":2,
                "pictures": [
                    'https://c4.wallpaperflare.com/wallpaper/374/404/846/brown-bird-perching-during-daytime-wren-wren-wallpaper-preview.jpg',
                    'https://c4.wallpaperflare.com/wallpaper/798/46/343/cheese-mold-olives-food-wallpaper-thumb.jpg',
                    'https://c4.wallpaperflare.com/wallpaper/623/784/892/sandwich-tomato-grape-toast-wallpaper-thumb.jpg'
                ],
                "ingredients": ['bandele', 'kotletas', 'suris', 'salota'],
                "prepTime": '2-5 min',
                "steps": ['atvozti bandele', 'sudeti kotleta', 'suri', 'ant virsaus…salota', 'ir nepamirsti persmeigti dantu krapstuku.'],
                "reviews":[
                    {
                        'rating':5,
                        'text': 'labai skanu'
                    },
                    {
                        'rating':4,
                        'text': 'sssss'
                    },
                ]
            },
            {
                "title": "Salotos",
                "id":3,
                "pictures": ["https://c4.wallpaperflare.com/wallpaper/388/340/982/food-salad-vegetable-pepper-wallpaper-preview.jpg"],
                "ingredients": ["net nezinau", "nuo ko pradeti"],
                "prepTime": "1-10 min",
                "steps": ["geriausia butu nusipirkti."],
                "reviews":[
                    {
                        'rating':5,
                        'text': 'labai skanu'
                    },
                    {
                        'rating':4,
                        'text': 'sssss'
                    },
                ]
            },
            {
                "title": "ledai",
                "id":4,
                "pictures": ["https://c4.wallpaperflare.com/wallpaper/946/557/290/ice-cream-food-colorful-wallpaper-preview.jpg"],
                "ingredients": ["vaflis", "saldytas vanduo", "grietinele"],
                "prepTime": "15 sek",
                "steps": ["sumoketi pingus"],
                "reviews":[
                    {
                        'rating':5,
                        'text': 'labai skanu'
                    },
                    {
                        'rating':4,
                        'text': 'sssss'
                    },
                ]
            },
            {
                "title": "Vaisiai, uogos",
                "id":5,
                "pictures": ["https://c4.wallpaperflare.com/wallpaper/437/455/804/food-fruit-strawberries-blood-orange-wallpaper-preview.jpg"],
                "ingredients": ["Vaisiai", "uogos"],
                "prepTime": "30 min",
                "steps": ['nuskinti', 'nuplauti', 'valgyti', 'spjaudyti kauliuks'],
                "reviews":[
                    {
                        'rating':5,
                        'text': 'labai skanu'
                    },
                    {
                        'rating':4,
                        'text': 'sssss'
                    },
                ]
            },
            {
                "title": "Darzoves",
                "id":6,
                "pictures": ["https://c4.wallpaperflare.com/wallpaper/770/26/351/food-fruits-and-vegetables-wallpaper-preview.jpg"],
                "ingredients": ["vaisiai", "darzoves", "sodo gerybes"],
                "prepTime": "45 min",
                "steps": ["skinti", "nuplauti", "palaukti kol nudzius", "valgyti"],
                "reviews":[
                    {
                        'rating':2,
                        'text': 'labai skanu'
                    },
                    {
                        'rating':4,
                        'text': 'sssss'
                    },
                ]
            }
        ],
    },
    reducers: {
        addRecipe: (state, action)=> {
            state.value=[...state.value, action.payload];
        },
    }
});

export const {addRecipe}= recipesSlice.actions;
export default recipesSlice.reducer;