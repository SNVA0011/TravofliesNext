export const PageStaicJson = (page) => {
    switch (page) {
        case 'header': return ([
            {
                'title': 'Home',
                'url': '/'
            },
            {
                'title': 'Artikel',
                'url': '/artikel'
            },
            {
                'title': 'Blog',
                'url': '/blogs'
            },
            {
                'title': 'Articulo',
                'url': '/articulo'
            },
            {
                'title': 'Contact',
                'url': '/contact'
            }
        ]);
        case 'footer': return ({
            'Newsletter': {
                'SpecialOff': 'Get special offers and more from Tavoflies',
                'Placeholder': 'Enter your email',
                'BtnText': 'Subscribe',
            },
            'HomeEng': '/',
            'Info': 'Flying across various destinations worldwide creates a sense of joy and happiness for travoholics, which enables them to create everlasting memories. Let us at Travoflies, whisk you away toward attaining unforgettable travel dreams that are yet to be fulfilled.',
            'QuickLinks' : {
                'heading':'Quick Links',
                'LinksUrl' : [
                    {
                        'title': 'Home',
                        'url': '/'
                    },
                    {
                        'title': 'About Us',
                        'url': '/about-us'
                    },
                    {
                        'title': 'Blog',
                        'url': '/blogs'
                    },
                    {
                        'title': 'Cheap Flight',
                        'url': '/cheap-flight'
                    },
                    {
                        'title': 'Article',
                        'url': '/article' 
                    },
                    {
                        'title': 'Contact-Us',
                        'url': '/contact'
                    } 
                ]
            },
            'OurServices' : {
                'heading':'Our Services',
                'LinksUrl' : [
                    {
                        'title': 'Artikel',
                        'url': '/artikel'
                    },
                    {
                        'title': 'Articulo',
                        'url': '/articulo'
                    },
                    {
                        'title': 'Nouvelles',
                        'url': '/nouvelles'
                    },
                    {
                        'title': 'Artigo',
                        'url': '/artigo'
                    },
                    {
                        'title': 'Bloggen',
                        'url': '/bloggen'
                    },
                    {
                        'title': 'Articolo',
                        'url': '/articolo'
                    }
                ]
            },
            'ConnectWithUs' : {
                'heading':'Connect  With Us',
                'LinksUrl' : [ 
                    {
                        'title': 'info@travoflies.com',
                        'url': 'mailto:info@travoflies.com',
                        'icon': 'outline-email.png'
                    },
                    {
                        'title': '+1-802-341-3461',
                        'url': 'tel:+1-802-341-3461',
                        'icon': 'phone-linear.png'
                    }
                ],
                'Social' :  [
                    {
                        'icon': 'facebook-footer.png',
                        'url': '/#'
                    },
                    {
                        'icon': 'twitter-footer.png',
                        'url': '/#'
                    },
                    {
                        'icon': 'instragram-footer.png',
                        'url': '/#'
                    },
                    {
                        'icon': 'youtube-footer.png',
                        'url': '/#'
                    } 
                ]
            },
            'Copyright': `Copyright ${new Date().getFullYear()}-${new Date().getFullYear() + 1} | All Rights Reserved by Travoflies.com`
        }
        )
    }
}

 
 