
const bebidas = {
    category_name: 'Bebidas',
    items:[
        {
            id:1,
            name:"Agua de Jamaica",
            price:33,
        },
        {
            id:2,
            name:"Agua de Horchata",
            price:33,
        },
        {
            id:3,
            name:"Agua de Piña",
            price:34,
        },
        {
            id:4,
            name:"Coca-cola",
            price:37,
        },
        {
            id:5,
            name:"Fanta",
            price:37,
        },
        {
            id:6,
            name:"Yoli",
            price:37,
        },
        {
            id:7,
            name:"Tehuacán",
            price:37,
        },
        {
            id:8,
            name:"Corona",
            price:40,
        },
        {
            id:9,
            name:"Negra Modelo",
            price:44,
        },
        {
            id:10,
            name:"Diet Coke",
            price:37,
        },
        {
            id:11,
            name:"Agua Manantial",
            price:32,
        }
    ]
}
const tacos = {
    category_name: 'Tacos',
    items:[
        {
            id:1,
            name:'Pastor',
            price:18
        },
        {
            id:1,
            name:'Bistec',
            price:155
        },
        {
            id:1,
            name:'Costilla',
            price:162
        },
        {
            id:1,
            name:'Chuleta',
            price:108
        },
        {
            id:1,
            name:'Chorizo',
            price:89
        },
        {
            id:1,
            name:'Pollo',
            price:99
        }
    ]
}

const combinaciones = {
    category_name:"Combinaciones",
    items:[
        {
            id:1,
            name:"Bistec con tocino",
            price:152
        },
        {
            id:2,
            name:"Bistec con chorizo",
            price:145
        },
        {
            id:3,
            name:"Bistec Encebollado",
            price:152
        },
        {
            id:4,
            name:"Bistec y chile poblano",
            price:144
        }
    ]
}

const alambres = {
    category_name:"alambres",
    items:[
        {
            id:1,
            name:"Alambre de bistec",
            price:176
        },
        {
            id:2,
            name:"Alambre de pollo",
            price:164
        },
        {
            id:3,
            name:"Alambre de chuleta",
            price:164
        },
        {
            id:4,
            name:"Alambre de pastor",
            price:164
        },
        {
            id:5,
            name:"Alambre con queso",
            price:193
        }
    ]
}

const quesos = {
    category_name:"Quesos",
    items:[
        {
            id:1,
            name:"Queso fundido",
            price:109
        },
        {
            id:2,
            name:"Queso con chorizo",
            price:109
        },
        {
            id:3,
            name:"Queso con chile poblano",
            price:109
        },
        {
            id:4,
            name:"Quesadilla",
            price:82
        },
        {
            id:5,
            name:"Chicharron de queso",
            price:94
        }
    ]
}

const volcanes = {
    category_name:"Volcanes",
    items:[
        {
            id:1,
            name:"Volcan con queso",
            price:90
        },
        {
            id:2,
            name:"Volcan con pastor",
            price:99
        },
        {
            id:3,
            name:"Volcan con bistec",
            price:109
        },
        {
            id:4,
            name:"Volcan con poblano",
            price:79
        },
        {
            id:5,
            name:"Cebollitas",
            price:79
        },
        {
            id:6,
            name:"Frijodes charros",
            price:60
        }
    ]
}

const menu = [ tacos, combinaciones, alambres, quesos, volcanes, bebidas ]

export default menu