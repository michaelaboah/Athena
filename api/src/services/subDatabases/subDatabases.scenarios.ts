import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.SubDatabaseCreateArgs>({
  subDatabase: {
    one: { data: { name: 'String', ownerId: 9363425 } },
    two: { data: { name: 'String', ownerId: 6478692 } },
  },
})

export type StandardScenario = typeof standard
