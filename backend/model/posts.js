import faker from 'faker';

export default class Posts {
    constructor() {
        this.data = new Array(30).fill().map((item, index) => {
            return {
                id: index + 1,
                title: faker.name.title(),
                image: faker.image.image(),
                author: {
                    name: faker.name.findName(),
                    url: faker.internet.url()
                },
                date: faker.date.past(),
                url: faker.internet.url(),
                comments: {
                    count: faker.random.number()
                },
                recommended: {
                    count: faker.random.number()
                }
            };
        });

        Object.freeze(this.data);
    }

    getPosts(sortOrder) {
        // todo add support for sortOrder
        return this.data;
    }
}
