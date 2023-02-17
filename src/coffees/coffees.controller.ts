import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
//   Put,
  Res,
} from '@nestjs/common';
import { get } from 'http';

@Controller('coffees')
export class CoffeesController {
  @Get() // Read Operation - retrieves records from a database table based on search criteria
  //Response Status Code
  // nest is using express under the hood by default (could change to fastify)
//   findAll(@Res() response) {
//     response.status(200).send('This action returns all coffees'); 
//     // provides full control of response object like header manipulation, library specific features, etc,.
//     // Beware: has disadvantages such as losing compatability with nest features that depened on nest standard response handling (interceptors & @HttpCode declarator)
//   }

  // Use Route Parameters
  // for dynamic data that is part of the request
//   @Get(':id')
//   findOne(@Param('id') id: string) {
//     return `This action returns #${id} coffee`;
//   }

  // Implement Pagination with Query Parameters
  @Get()
  findAll(@Query() paginationQuery) {
    const { limit, offset } = paginationQuery;
    return `This action returns all coffees. Limit: ${limit}, offset: ${offset}`;
  }

  // Handling Request Body/Payload
  @Post() // Create Operation - adds a new database record
  @HttpCode(HttpStatus.GONE) //useful when status code is static -- helper methods & other utilities by Nest will provide more control later
  create(@Body() body) {
    return body; // return `This action creates a coffee`
  }

  // Handling Update & Delete Requests
  //@Put() // Update Operation - replaces the entire resource
  @Patch(':id') // Update Operation - partially updates an existing resource -- even if its just a single property of a resource
  update(@Param('id') id: string, @Body() body) {
    return `This action updates #${id} coffee`;
  }

  @Delete(':id') // Delete Operation - removed/deletes an existing resource
  remove(@Param('id') id: string) {
    return `This action removes #${id} coffee`;
  }


}
