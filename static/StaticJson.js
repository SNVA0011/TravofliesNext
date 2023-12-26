export const PageStaicJson = (page) => {
    switch (page) {
        case 'header': return ([
            {
                'title': 'Home',
                'url': '/'
            },
            {
                'title': 'Artikal',
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
            'Info': 'While planning a trip to your favorite destination, multiple things must be considered so that you can easily travel with them by making the related booking. And at Travvoflies',
            'QuickLinks' : {
                'heading':'Quick Links',
                'LinksUrl' : [
                    {
                        'title': 'Home',
                        'url': '/'
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
                        'title': 'About Us',
                        'url': '/about-us'
                    },
                    {
                        'title': 'Article',
                        'url': '/article'
                    } 
                ]
            },
            'OurServices' : {
                'heading':'Our Services',
                'LinksUrl' : [
                    {
                        'title': 'Contact Us',
                        'url': '/contact'
                    },
                    {
                        'title': 'Sitemap',
                        'url': '/#!'
                    },
                    {
                        'title': 'Privacy Policy',
                        'url': '/#!'
                    },
                    {
                        'title': 'Terms & Conditions',
                        'url': '/#!'
                    } 
                ]
            },
            'ConnectWithUs' : {
                'heading':'Connect  With Us',
                'LinksUrl' : [
                    {
                        'title': '301 B, St George, UT  84770, USA',
                        'url': 'http://maps.google.com/?q=301 B, St George, UT  84770, USA ',
                        'icon': 'mdi-address.png'
                    },
                    {
                        'title': 'support@travoflies.com',
                        'url': 'mailto:support@travoflies.com',
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


