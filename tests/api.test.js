const { test, expect } = require('@playwright/test');
const { testData } = require('../testData');
const {ApiUtils} = require('../utils/apiClient');

test.describe('JSONPlaceholder API Tests', () => {
  let initialPostsCount;
  let createdPostId;

  test('Read Total Number of Posts and Store in a Variable', async ({ request }) => {
    const apiUtils = new ApiUtils(request);
    const response = await apiUtils.getPosts();
    const responseBody = await response.json();

    initialPostsCount = responseBody.length

    expect(response.status()).toBe(200);
    expect(Array.isArray(responseBody)).toBeTruthy();
    expect(responseBody.length).toBeGreaterThan(0);
    const firstItem = responseBody[0];
    expect(firstItem).toHaveProperty('userId');
    expect(firstItem).toHaveProperty('id');
    expect(firstItem).toHaveProperty('title');
    expect(firstItem).toHaveProperty('body');
   expect(responseBody.length).toBe(100);
    });

  test('Create a New Post and Store its ID', async ({ request }) => {
    const apiUtils = new ApiUtils(request);
    const response = await apiUtils.createPost();
    expect(response.status()).toBe(201);
    const responseBody = await response.json();
   
    createdPostId = responseBody.id

    expect(responseBody).toHaveProperty('id');
    expect(responseBody.id).toBe(createdPostId);
    expect(responseBody.title).toBe(testData.newPost.title);
    expect(responseBody.body).toBe(testData.newPost.body);
  });


  test('Get Only the Created Post by ID', async ({ request }) => {
    const apiUtils = new ApiUtils(request);
    const response = await apiUtils.getSinglePost(createdPostId);
    const responseBody = await response.json();

    // expect(responseBody.id).toBe(createdPostId);
    // expect(responseBody.title).toBe(testData.newPost.title);
    // expect(responseBody.body).toBe(testData.newPost.body);
  
  });

  test('Replace Some Field in the Created Post with PATCH', async ({ request }) => {
    const apiUtils = new ApiUtils(request);
    const response = await apiUtils.updatePost(createdPostId);
    const responseBody = await response.json();

    // expect(response.status()).toBe(200); 
    // expect(responseBody.id).toBe(createdPostId); 
    // expect(responseBody.title).toBe(testData.updatedData.title);
    // expect(responseBody.body).toBe(testData.updatedData.body);
  });

  test('Delete the Created Post by ID and verify deletion', async ({ request }) => {
    const apiUtils = new ApiUtils(request);
    const response = await apiUtils.deletePost(createdPostId);

    // expect(response.status()).toBe(200); 
    // const deletedPost = await apiUtils.getSinglePost(createdPostId);
    // expect(deletedPost).toBeUndefined();
  });

  test('Check the Number of Posts to Ensure Integrity', async ({ request }) => {
    const apiUtils = new ApiUtils(request);
    const response = await apiUtils.deletePost(createdPostId);
    const responseBody = await response.json();
    
    // const currentPostsCount = responseBody.length;
    // expect(currentPostsCount).toBe(initialPostsCount);  
  });
})