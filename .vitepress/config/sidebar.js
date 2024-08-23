export default {
    '/html/': [
        { text: 'HTML Introduction', link: '/html/' },
        { text: 'HTML Basics', link: '/html/basics' },
        { text: 'Advanced HTML', link: '/html/advanced' }
    ],
    '/css/': [
        { text: 'CSS Introduction', link: '/css/' },
        { text: 'CSS Basics', link: '/css/basics' },
        { text: 'Advanced CSS', link: '/css/advanced' }
    ],
    '/js/': [
        { text: 'JavaScript Introduction', link: '/js/' },
        { text: 'JavaScript Basics', link: '/js/basics' },
        { text: 'Advanced JavaScript', link: '/js/advanced' }
    ],
    '/cpp/': [
        {
            text: "Kirish",
            collapsed: false,
            items: [
                { text: 'C++ Introduction', link: '/cpp/' },  // Link to index.md with a clear title
                { text: 'C++ Basics', link: '/cpp/basics' },
                { text: 'Advanced C++', link: '/cpp/advanced' }
            ]
        },
        {
            text: "Kirish",
            collapsed: true,
            items: [
                { text: 'C++ Basics', link: '/cpp/basics' },
                { text: 'Advanced C++', link: '/cpp/advanced' }
            ]
        },
        {
            text: "Kirish",
            collapsed: true,
            items: [
                { text: 'C++ Basics', link: '/cpp/basics' },
                { text: 'Advanced C++', link: '/cpp/advanced' }
            ]
        },
        {
            text: "Kirish",
            collapsed: true,
            items: [
                { text: 'C++ Basics', link: '/cpp/basics' },
                { text: 'Advanced C++', link: '/cpp/advanced' }
            ]
        },
    ]
}
