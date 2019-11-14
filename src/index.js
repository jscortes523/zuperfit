import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import App from './routes/App';

const initialState = {
        "user": {},
        "myCart": {},
        "myFavorites": [],
        "recipes":[
            {
                "id": 1,
                "title": "Empanadas chilenas de carne",
                "description": " Este plato es perfecto para comer como desayuno o cena y es tan rico y completo que no podréis comer solo una. ",
                "prepTime": 45,
                "images": "https://cdn.pixabay.com/photo/2018/05/18/03/56/empanadas-3410288_960_720.jpg",
                "servings": 1,
                "tags": ["intermedio", "carne"],
                "categories": ["breakfast"],
                "instructions": "Comenzamos haciendo la masa. Para ellos derrite la manteca en un cazo a fuego lento. Mientras tanto, agrega en un bol la harina, el polvo para hornear y la sal. Cuando la manteca se haya derretido incorpórala al bol donde esta la masa y añade también la leche y el agua. Amasa con tus manos hasta tener una masa suave y consistente. Guarda la masa en la nevera hasta el momento de hacer las empanadas. Para empezar a hacer el guiso prepara todos os ingredientes. Corta la carne en cubitos pequeños. Luego, pela las cebollas, lava los pimientos y corta ambos ingredientes en cuadritos muy pequeños. Agrega un poco de aceite a una olla y cuando esté caliente sofríe la carne con el pimiento, la cebolla, el comino, el pimiento en polvo y sal al gusto. Deja que se dore la carne durante ocho minutos a fuego medio lento. \nLuego agrega a la olla el caldo de ternera y deja cocer la carne durante 30 minutos a fuego lento y con la olla tapada. Pasado el tiempo añade las dos cucharadas de harina, remueve bien, rectifica la sal y reserva. Cocina los huevos en un cazo con agua hirviendo durante 15 minutos. Cuando estén listos, aclara con abundante agua fría, pela y corta en rodajas. Aclara también las aceitunas para quitar el exceso de sal. Saca la masa de la nevera y extiende con la ayuda de un rodillo sobre un mesón enharinado. Corta círculos de masa con la ayuda de un plato para postres. Ve precalentando el horno de una vez a 200°C. Agrega una cucharada generosa de guiso de carne en el centro de uno de los círculos de masa. Luego añade tres aceitunas, cuatro pasitas y una rodaja de huevo. Humedece los bordes de la masa, dobla el círculo por la mitad para dar forma de empanada y sella los bordes doblándolos hacia el interior del círculo o aplastándolos con un tenedor. Repite el procedimiento hasta armar todas las empanadas. Coloca las empanadas en una bandeja forrada con papel film y luego pincélalas con clara de huevo. Hornea las empanadas durante 20 minutos a 200°C. Para que queden bien doraditas, activa la función grill del horno durante cinco minutos una vez que las empanadas estén listas. Saca tus empanadas chilenas de carne del horno, deja reposar durante diez minutos y luego sirve y disfruta con tu chimichurri de tomate. ¡A comer!",
                "ingredients":[ 
                    "Para la masa:",
                    "3 tazas de harina de trigo",
                    "1/3 taza de manteca",
                    "3/4 de taza de leche tibia",
                    "1/4 de taza de agua tibia",
                    "1 cucharadita de polvo para hornear",
                    "1 cucharadita de sal",
                    "Para el relleno:",
                    "1 kg. de carne de ternera para guisar",
                    "1 taza de caldo de ternera",
                    "3 cebollas",
                    "1 pimiento rojo",
                    "1 pimiento  verde",
                    "2 cucharadas de harina",
                    "1 cucharadita de pimiento dulce",
                    "1 cucharadita de comino",
                    "Aceitunas verdes en rodajas",
                    "Pasitas bebé",
                    "4 huevos",
                    "Aceite",
                    "Sal al gusto"
                ],
                "price": 4000
            },
            {
                "id": 2,
                "title": "Tamales mexicanos",
                "description": " Los tamales son un plato típico del desayuno de México, pero mundialmente se acostumbra comerlos a cualquier hora.",
                "prepTime": 60,
                "images": "https://cdn.pixabay.com/photo/2019/09/25/16/29/tamale-4504060_960_720.jpg",
                "servings": 1,
                "tags": ["maiz", "mexicana", "intermedio", "pollo"],
                "categories": ["breakfast"],
                "instructions": "Vamos a empezar preparando la masa de los tamales mexicanos. Para ello, hierve la piel de tomate en un cazo con 1/4 de litro de agua. Hierve por 5 minutos y luego reserva sin desechar el agua.\n En otro cazo caliente, incorpora la manteca y bátela hasta que adopte una consistencia más suave y comience a blanquearse su color. Sin dejar de batir, añade poco a poco la harina. Bate hasta integrar correctamente ambos ingredientes.\n Luego, de igual modo sin dejar de batir, añade el polvo para hornear, un toque sal, el caldo de pollo y una taza del agua donde herviste la piel de tomates. Bate hasta obtener una mezcla homogénea. Sabrás que la masa está lista cuando está suave y no ha perdido consistencia.\n Cuando esté lista la masa necesitarás el relleno, así que vamos a prepararlo. Pela la cebolla y el ajo y corta ambos ingredientes por la mitad. Luego pica los chiles en dos y extrae la vena blanca y las semillas.\n Lava el cilantro y los tomates y trocea ambos ingredientes. En un cazo añade abundante agua e incorpora tomates, cilantro, cebolla, ajo, chiles, un toque de sal y las pechugas de pollo. Deja cocer a fuego medio hasta que el pollo esté tierno. Saca el pollo y reserva.\n Añade al vaso de la licuadora los tomates, la cebolla, el ajo, el cilantro, el chile, la piel de tomate que reservaste y un poco del agua donde se coció el pollo. Procesa hasta tener una mezcla homogénea.\n Cuando el pollo se haya enfriado, desmenuza con tus manos en finas tiras. Luego incorpóralo a una sartén y añade la mezcla de la licuadora. Calienta a fuego medio durante 3 minutos, rectifica el gusto y retira.\nAhora sí, ¡vamos a preparar los tamales mexicanos! Toma una hoja de maíz y coloca en el centro una cucharada con abundante masa. Esparce la masa a lo largo de la hoja y agrega una cucharada de guiso de pollo. Tapa la h\n     Encima del relleno añade otra cucharada de masa y esparce nuevamente. Luego coloca una hoja de maíz encima, dobla los costados de ambas hojas y amarra el tamal con pabilo para que quede bien compacto. Repite hasta armar todos los tamales.\n Incorpora los tamales de forma vertical en una vaporara u olla de vapor. Tapa la preparación y deja cocer durante 3 horas. Pasado el tiempo estarán listos tus tamales mexicanos para servir y disfrutar. ¡Qué aproveche!",
                "ingredients":[ 
                    "Para el relleno:",
                    "2 pechugas de pollo sin piel",
                    "1 cebolla blanca grande",
                    "4 tomates verdes",
                    "2 chiles verdes",
                    "1 rama de cilantro",
                    "1 diente de ajo",
                    "Sal",
                    "Para la masa:",
                    "32 hojas de maíz lavadas",
                    "1 kg de harina de maíz",
                    "1 1/2 tazas de caldo de pollo",
                    "2 cucharaditas de polvo para hornear",
                    "1 taza de manteca de cerdo",
                    "12 unidades de piel de tomate",
                    "Sal",
                    "Pabilo	",
                ],
                "price": 5500
            }
        ]
};

const store = createStore(reducer, initialState);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, 
    document.getElementById('app')
);


