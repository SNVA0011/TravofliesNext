export const HeaderUrls = (lang) => {

    switch (lang) {
        case 'ar': return (
            [
                {
                    "title": "بيت ",
                    "url": "/ar",
                    "time" : '2023-08-04T06:47:34+00:00'
                }, 
                {
                    "title": "معلومات عنا",
                    "url": "/ar/about-us",
                    "time" : '2023-08-04T06:47:34+00:00'
                }, 
                {
                    "title": "فئات",
                    "url": "/ar/categories",
                    "time" : new Date().toISOString().split('T')[0] + 'T06:47:34+00:00'
                },
                {
                    "title": "مدونة ",
                    "url": "/ar/blog",
                    "time" : new Date().toISOString().split('T')[0] + 'T06:47:34+00:00'
                },
                {
                    "title": "اتصل بنا",
                    "url": "/ar/contact-us",
                    "time" : '2023-08-04T06:47:34+00:00'
                }
            ]
        );
        case 'pt': return (
            [
                {
                    "title": "Pagina inicial",
                    "url": "/pt",
                    "time" : '2023-08-04T06:47:34+00:00'
                },
                {
                    "title": "Sobre nós",
                    "url": "/pt/sobre-nos",
                    "time" : '2023-08-04T06:47:34+00:00'
                },
                {
                    "title": "Categorias",
                    "url": "/pt/categorias",
                    "time" : new Date().toISOString().split('T')[0] + 'T06:47:34+00:00'
                },
                {
                    "title": "Artigos",
                    "url": "/pt/artigos",
                    "time" : new Date().toISOString().split('T')[0] + 'T06:47:34+00:00'
                },
                {
                    "title": "Contate Nos",
                    "url": "/pt/contate-nos",
                    "time" : '2023-08-04T06:47:34+00:00'
                }
            ]
        );
        case 'es': return  (
            [
                {
                    "title": "Casa",
                    "url": "/es",
                    "time" : '2023-08-04T06:47:34+00:00'
                },
                {
                    "title": "Sobre Nosotros",
                    "url": "/es/sobre-nosotras",
                    "time" : '2023-08-04T06:47:34+00:00'
                },
                {
                    "title": "Categorías",
                    "url": "/es/categorias",
                    "time" : new Date().toISOString().split('T')[0] + 'T06:47:34+00:00'
                }, 
                {
                    "title": "Artículos",
                    "url": "/es/articulos",
                    "time" : new Date().toISOString().split('T')[0] + 'T06:47:34+00:00'
                },
                {
                    "title": "contacto",
                    "url": "/es/contacto",
                    "time" : '2023-08-04T06:47:34+00:00'
                }
            ]
        );
        default: return (
            [
                {
                    "title": "Home",
                    "url": "/",
                    "time" : '2023-08-04T06:47:34+00:00'
                },
                {
                    "title": "About",
                    "url": "/about-us",
                    "time" : '2023-08-04T06:47:34+00:00'
                },
                {
                    "title": "Categories",
                    "url": "/categories",
                    "time" : new Date().toISOString().split('T')[0] + 'T06:47:34+00:00'
                }, 
                {
                    "title": "Blog",
                    "url": "/blog",
                    "time" : new Date().toISOString().split('T')[0] + 'T06:47:34+00:00'
                },
                {
                    "title": "Contact Us",
                    "url": "/contact-us",
                    "time" : '2023-08-04T06:47:34+00:00'
                },
            ]
        );
    }
}


 