import { Prisma } from "@prisma/client";

export function prismaErrorHandler(error: any) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
            console.log('There is a unique constraint violation, a new user cannot be created with this email')
        } else if (error.code === 'P2003') {
            console.log('There is a unique constraint violation, a new user cannot be created with this email')
        }
    }
    console.log(error);
}