const INITIAL_STATE = {
    sections: [{
        title: 'hats',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png',
        linkUrl: 'shop/hats',
        id: 1
    },{
        title: 'sneakers',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png',
        linkUrl: 'shop/sneakers',
        id: 2
    },{
        title: 'jackets',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png',
        linkUrl: 'shop/jackets',
        id: 3
    },{
        title: 'womens',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png',
        linkUrl: 'shop/womens',
        size: 'large',
        id: 4
    },{
        title: 'mens',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png',
        linkUrl: 'shop/mens',
        size: 'large',
        id: 5
    }]
}

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default:
            return state
    }
}

export default directoryReducer;