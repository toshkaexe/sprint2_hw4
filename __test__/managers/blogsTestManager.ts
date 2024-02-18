import request from "supertest";
import {app, RouterPaths} from "../../src/settings";
import {HTTP_STATUSES} from "../../src/models/common";
import {CreateBlogInputModel} from "../../src/models/blogs/blog-models";

type HttpKeys = keyof typeof HTTP_STATUSES
type HttpStatusType = (typeof HTTP_STATUSES)[HttpKeys];

export const blogsTestManager = {
    async createBlog(data: CreateBlogInputModel, expectedStatus: HttpStatusType) {

        const responce = await request(app)
            .post(RouterPaths.blogs)
            .auth('admin', 'qwerty')
            .send(data)
            .expect(expectedStatus)

        let createdBlogManager;
        if (expectedStatus === HTTP_STATUSES.CREATED_201) {
            createdBlogManager = responce.body

            expect(createdBlogManager).toEqual(
                {
                    id: expect.any(String),
                    name: createdBlogManager.name,
                    description: createdBlogManager.description,
                    websiteUrl: createdBlogManager.websiteUrl,
                    createdAt: createdBlogManager.createdAt,
                    isMembership: createdBlogManager.isMembership
                })
        }
        return {responce, createdBlogManager};

    }
}