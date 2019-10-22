import faker from 'faker'

faker.locale = "en";

var listBlogs = [];
for(var index=0; index < 10; index++) {
    let data = {
        title: faker.lorem.sentence(10),
        abstract: faker.lorem.paragraph(2),
        fullName: faker.name.firstName() + ' ' + faker.name.lastName(),
        create_at: faker.date.past()
    }
    listBlogs.push(data);
}
