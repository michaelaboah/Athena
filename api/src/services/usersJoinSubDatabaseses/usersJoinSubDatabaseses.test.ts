import {
  usersJoinSubDatabaseses,
  usersJoinSubDatabases,
  createUsersJoinSubDatabases,
  updateUsersJoinSubDatabases,
  deleteUsersJoinSubDatabases,
} from './usersJoinSubDatabaseses'
import type { StandardScenario } from './usersJoinSubDatabaseses.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('usersJoinSubDatabaseses', () => {
  scenario(
    'returns all usersJoinSubDatabaseses',
    async (scenario: StandardScenario) => {
      const result = await usersJoinSubDatabaseses()

      expect(result.length).toEqual(
        Object.keys(scenario.usersJoinSubDatabases).length
      )
    }
  )

  scenario(
    'returns a single usersJoinSubDatabases',
    async (scenario: StandardScenario) => {
      const result = await usersJoinSubDatabases({
        id: scenario.usersJoinSubDatabases.one.id,
      })

      expect(result).toEqual(scenario.usersJoinSubDatabases.one)
    }
  )

  scenario(
    'creates a usersJoinSubDatabases',
    async (scenario: StandardScenario) => {
      const result = await createUsersJoinSubDatabases({
        input: {
          userId: scenario.usersJoinSubDatabases.two.userId,
          subdatabaseId: scenario.usersJoinSubDatabases.two.subdatabaseId,
        },
      })

      expect(result.userId).toEqual(scenario.usersJoinSubDatabases.two.userId)
      expect(result.subdatabaseId).toEqual(
        scenario.usersJoinSubDatabases.two.subdatabaseId
      )
    }
  )

  scenario(
    'updates a usersJoinSubDatabases',
    async (scenario: StandardScenario) => {
      const original = await usersJoinSubDatabases({
        id: scenario.usersJoinSubDatabases.one.id,
      })
      const result = await updateUsersJoinSubDatabases({
        id: original.id,
        input: { userId: scenario.usersJoinSubDatabases.two.userId },
      })

      expect(result.userId).toEqual(scenario.usersJoinSubDatabases.two.userId)
    }
  )

  scenario(
    'deletes a usersJoinSubDatabases',
    async (scenario: StandardScenario) => {
      const original = await deleteUsersJoinSubDatabases({
        id: scenario.usersJoinSubDatabases.one.id,
      })
      const result = await usersJoinSubDatabases({ id: original.id })

      expect(result).toEqual(null)
    }
  )
})
