import { Controller, Get } from "@nestjs/common";

@Controller("/app")
export class AppController {
  //http://localhost:3000/app/
  @Get()
  getRootRoute() {
    return "Hi,this is Jerald";
  }

  // http://localhost:3000/app/home
  @Get("/home")
  getHello() {
    return "Hello Home";
  }

  // http://localhost:3000/app/bye
  @Get("/bye")
  getBye() {
    return "Bye";
  }
}
