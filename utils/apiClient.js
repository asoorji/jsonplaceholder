const { testData } = require('../testData');

class ApiUtils {
  constructor(request) {
    this.request = request;
  }

  async getPosts() {
    const response = await this.request.get('/posts', {
    });
    return response;
  }
  
  async createPost() {
    const response = await this.request.post('/posts', {
      data: testData.newPost
    });
    return response;
  }

  async getSinglePost(postId) {
    const response = await this.request.get(`/posts/${postId}`, {
    });
    return response;
  }

  async updatePost(postId) {
    const response = await this.request.patch(`/posts/${postId}`, {
      data: testData.updatedData
    });
    return response;
  }

  
  async deletePost(postId) {
    const response = await this.request.delete(`/posts/${postId}`, {
    });
    return response;
  }


}

module.exports = { ApiUtils };