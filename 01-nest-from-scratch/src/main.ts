import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
};

bootstrap();

//To Run In Terminal [[[npx ts-node-dev src/main.ts]]]
// Starting Up a Nest App ---> localhost:3000 in Browser
