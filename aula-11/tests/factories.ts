import prisma from "../src/database";
import { UserInput } from "../src/repository";

export async function createUser(email: string, password: string) {
    const userData: UserInput = {
        email,
        password
      };
  
      const user = await prisma.user.create({
        data: userData
      });
      
      return user;
}