import prisma from "../../src/database";
import { UserInput } from "../../src/repository";
import { faker } from '@faker-js/faker';

export async function buildUser(email: string, password?: string) {
  const userData: UserInput = {
    email,
    password: password || new Date().getTime().toString()
  };

  const user = await prisma.user.create({ data: userData });
  return user;
}

export async function buildUserRandom() {
  const userData: UserInput = {
    email: faker.internet.email(),
    password: faker.internet.password({length: 8})
  };

  const user = await prisma.user.create({ data: userData });
  return user;
}