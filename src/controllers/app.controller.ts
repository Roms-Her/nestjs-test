import { Controller, Get, Param } from '@nestjs/common';
import { DatabaseService } from '../app.service';

@Controller()
export class DatabaseController {
  constructor(private readonly databaseService: DatabaseService) {}

  @Get('posts')
  async getPosts(): Promise<any> {
    const query = 'SELECT * FROM post';
    return this.databaseService.executeQuery(query);
  }
  @Get('posts/category/:id')
  async getPostsByCategory(@Param('id') id: string): Promise<any> {
    const query = `SELECT * FROM post WHERE category_id=${id}`;
    return this.databaseService.executeQuery(query);
  }
  @Get('category')
  async getcategory(): Promise<any> {
    const query = 'SELECT * FROM category';
    return this.databaseService.executeQuery(query);
  }
  @Get('category/:id')
  async getcategoryId(@Param('id') id: string): Promise<any> {
    const query = `SELECT * FROM category WHERE id=${id}`;
    return this.databaseService.executeQuery(query);
  }
  @Post('category')
  async createCategory(): Promise<any> {
    const query = `INSERT INTO category`;
    return this.databaseService.executeQuery(query);
  }
}
