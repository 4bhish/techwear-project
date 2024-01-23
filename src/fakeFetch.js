export const fakeFetch = (url) => {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(url === '/products/wears'){
                resolve({
                    status:200,
                    message:'success',
                    data:[
                        {
                            id:1,
                            title:'Super Ninja Pro Tech wear',
                            description:'Super Ninja Pro Tech wear outdoor waterproof Winter Jacket',
                            imgSrc:'https://clottech.com/cdn/shop/products/11a_550x.jpg?v=1634293610',
                            price:20672.19,
                            rating:4.5,
                            discountPrice:14860.73,
                            category:'urban',
                    
                        },
                        {
                            id:2,
                            title:'Tech wear trench coat',
                            description:'Mid-length tech wear trench coat',
                            imgSrc:'https://clottech.com/cdn/shop/products/8_bf6b2abc-78f9-4d1e-a672-8cab73f7fc14_550x.jpg?v=1636276252',
                            price:8218.54,
                            rating:4,
                            discountPrice:5728.07,
                            category:'jackets'
                        },
                        {
                            id:3,
                            title:'Hoodie techwear',
                            description:'Hoodie pocket techwear jacket coat',
                            imgSrc:'https://clottech.com/cdn/shop/products/1_a1b33f43-cade-4683-995d-6611644a1165_550x.jpg?v=1634212219',
                            price:9878.85,
                            rating:4,
                            discountPrice:8218.54,
                            category:'jackets'
                        },
                        {
                            id:4,
                            title:'Military tactical vest',
                            description:'Military tactical vest with many pockets',
                            imgSrc:'https://clottech.com/cdn/shop/products/1_aab4d64e-e96d-4784-ab68-e8c153559dae_550x.jpg?v=1634465429',
                            price:7388.38,
                            rating:3,
                            discountPrice:4897.92,
                            category:'military'
                        },
                        {
                            id:5,
                            title:'Cyberpunk jacket',
                            description:'Cyberpunk Dark Tech wear jacket',
                            imgSrc:'https://clottech.com/cdn/shop/products/1_550x.jpg?v=1634206771',
                            price:9048.69,
                            rating:3.5,
                            discountPrice:7388.38,
                            category:'urban',
                        },
                        {
                            id:6,
                            title:'Military Ripstop Vest',
                            description:'Military Tech wear Multi-pocket Ripstop Vest',
                            imgSrc:'https://clottech.com/cdn/shop/products/3_72a6ca99-ac28-4722-baab-0ed207f81b29_550x.jpg?v=1634466122',
                            price:6558.23,
                            rating:2,
                            discountPrice:4565.86,
                            category:'military'
                        },
                        {
                            id:7,
                            title:'Eco-friendly tech wear',
                            description:'Eco-friendly tech wear winter heated vest',
                            imgSrc:'https://clottech.com/cdn/shop/products/1_69a3ba54-21b9-4295-a09b-6377824df70e_550x.jpg?v=1634543996',
                            price:8218.54,
                            rating:3.5,
                            discountPrice:6475.21,
                            category:'urban'
                        },
                        {
                            id:8,
                            title:'Street Ninja Tech wear',
                            description:'Military Street Ninja Series Tech wear',
                            imgSrc:'https://clottech.com/cdn/shop/products/4_4417a5c5-39a6-4e7d-8d51-c95ab6847cfb_550x.jpg?v=1634293342',
                            price:10709.01,
                            rating:4.5,
                            discountPrice:6558.23,
                            category:'military'
                        },
                        {
                            id:9,
                            title:'Cardigan jacket',
                            description:'Cardigan jacket techwear',
                            imgSrc:'https://clottech.com/cdn/shop/products/1_43172e38-813f-4289-94e6-e509d11aeeec_550x.jpg?v=1634209397',
                            price:10709.01,
                            rating:5,
                            discountPrice:8218.54,
                            category:'jackets'
                        },
                    ]
                })
            } else{
                reject({
                    status:404,
                    message:'Cannot Load the data'
                })
            }
        },2000)
    })
}