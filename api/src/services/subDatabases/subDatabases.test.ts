import {
  subDatabases,
  subDatabase,
  createSubDatabase,
  updateSubDatabase,
  deleteSubDatabase,
} from './subDatabases'
import type { StandardScenario } from './subDatabases.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('subDatabases', () => {
  scenario('returns all subDatabases', async (scenario: StandardScenario) => {
    const result = await subDatabases()

    expect(result.length).toEqual(Object.keys(scenario.subDatabase).length)
  })

  scenario(
    'returns a single subDatabase',
    async (scenario: StandardScenario) => {
      const result = await subDatabase({ id: scenario.subDatabase.one.id })

      expect(result).toEqual(scenario.subDatabase.one)
    }
  )

  scenario('creates a subDatabase', async () => {
    const result = await createSubDatabase({
      input: { name: 'String', ownerId: 4536261 },
    })

    expect(result.name).toEqual('String')
    expect(result.ownerId).toEqual(4536261)
  })

  scenario('updates a subDatabase', async (scenario: StandardScenario) => {
    const original = await subDatabase({ id: scenario.subDatabase.one.id })
    const result = await updateSubDatabase({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a subDatabase', async (scenario: StandardScenario) => {
    const original = await deleteSubDatabase({
      id: scenario.subDatabase.one.id,
    })
    const result = await subDatabase({ id: original.id })

    expect(result).toEqual(null)
  })
})
