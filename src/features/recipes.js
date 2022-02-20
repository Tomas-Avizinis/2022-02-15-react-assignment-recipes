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
                    'https://c4.wallpaperflare.com/wallpaper/776/107/693/food-cheese-milk-tomatoes-wallpaper-preview.jpg',
                    'https://c4.wallpaperflare.com/wallpaper/432/234/423/food-cheese-wheat-wallpaper-preview.jpg',
                    'https://c4.wallpaperflare.com/wallpaper/554/968/10/cheese-food-piece-wallpaper-thumb.jpg',
                    'https://c4.wallpaperflare.com/wallpaper/960/148/933/cheese-sliced-food-wallpaper-preview.jpg'
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
                "title": 'Mesainis',
                "id":2,
                "pictures": [
                    'https://c4.wallpaperflare.com/wallpaper/374/404/846/brown-bird-perching-during-daytime-wren-wren-wallpaper-preview.jpg',
                    'https://c4.wallpaperflare.com/wallpaper/798/46/343/cheese-mold-olives-food-wallpaper-thumb.jpg',
                    'https://c4.wallpaperflare.com/wallpaper/623/784/892/sandwich-tomato-grape-toast-wallpaper-thumb.jpg'
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
                "title": "Salotos",
                "id":3,
                "pictures": ["https://c4.wallpaperflare.com/wallpaper/388/340/982/food-salad-vegetable-pepper-wallpaper-preview.jpg"],
                "ingredients": ["net nezinau", "nuo ko pradeti"],
                "prepTime": 10,
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
                "prepTime": 15,
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
                    {
                        'rating':2,
                        'text': 'fui'
                    },
                ]
            },
            {
                "title": "Vaisiai, uogos",
                "id":5,
                "pictures": ["https://c4.wallpaperflare.com/wallpaper/437/455/804/food-fruit-strawberries-blood-orange-wallpaper-preview.jpg"],
                "ingredients": ["Vaisiai", "uogos"],
                "prepTime": 10,
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
                    {
                        'rating':3,
                        'text': 'skonis tai kai popieriaus, geriau buciau ir nevalges'
                    },
                ]
            },
            {
                "title": "Darzoves",
                "id":6,
                "pictures": ["https://c4.wallpaperflare.com/wallpaper/770/26/351/food-fruits-and-vegetables-wallpaper-preview.jpg"],
                "ingredients": ["vaisiai", "darzoves", "sodo gerybes"],
                "prepTime": 5,
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
                    {
                        'rating':5,
                        'text': 'eeeeeee'
                    },
                    {
                        'rating':1,
                        'text': 'sssss'
                    },
                    {
                        'rating':4,
                        'text': 'gardu'
                    },
                    {
                        'rating':0,
                        'text': 'fe fef'
                    },
                    {
                        'rating':3,
                        'text': 'buna ir blogaiu'
                    },
                    {
                        'rating':5,
                        'text': 'super'
                    },
                    {
                        'rating':5,
                        'text': 'mano megiamas'
                    },
                    {
                        'rating':4,
                        'text': 'sssss'
                    },
                    {
                        'rating':4,
                        'text': 'sssss'
                    },
                    {
                        'rating':4,
                        'text': 'sssss'
                    },
                    {
                        'rating':4,
                        'text': 'sssss'
                    },
                    {
                        'rating':4,
                        'text': 'sssss'
                    },
                ]
            },
            {
                "title": "Paprast juoda duona",
                "id": 7,
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
                    "MIltai",
                    "Vanduo",
                    "Prieskoniai"
                ],
                "prepTime": "60",
                "steps": [
                    "Užauginti kviečius",
                    "Nupjauti, išklti, sumalti į miltus",
                    "Miltus sumaišius su vandeniu iškočioti tešlą",
                    "Suformuoti duonos formą",
                    "Kepti krosnyje apie ę0 min."
                ],
                "reviews": []
            },
            {
                "title": "Lazanja",
                "id": 8,
                "favourite": false,
                "pictures": [
                    "https://c4.wallpaperflare.com/wallpaper/754/484/858/lasagne-wallpaper-preview.jpg",
                    "https://c1.wallpaperflare.com/preview/307/138/340/lasagna-noodles-pasta-food.jpg",
                    "https://c4.wallpaperflare.com/wallpaper/754/484/858/lasagne-wallpaper-preview.jpg",
                    "https://c4.wallpaperflare.com/wallpaper/187/997/205/lasagne-wallpaper-preview.jpg"
                ],
                "ingredients": [
                    "Makaronu lakštai",
                    "faršas",
                    "Prieskoniai"
                ],
                "prepTime": "25",
                "steps": [
                    "Sluoksniais sud4ti lakštus, faršą ir prieskonius",
                    "Suformuoti bent 3-4 sluoksnius",
                    "kepti orkaitėje 20 min"
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