import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.UsersJoinSubDatabasesCreateArgs>({
  usersJoinSubDatabases: {
    one: {
      data: {
        user: {
          create: {
            email: 'String8575117',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
        subdatabase: { create: { name: 'String', ownerId: 4146020 } },
      },
    },
    two: {
      data: {
        user: {
          create: {
            email: 'String9591939',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
        subdatabase: { create: { name: 'String', ownerId: 2191399 } },
      },
    },
  },
})

export type StandardScenario = typeof standard
