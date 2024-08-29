test('GET to /api/v1/status should return 200', async () => {
  const response = await fetch('http://localhost:3000/api/v1/status')
  expect(response.status).toBe(200)

  const responseBody = await response.json()
  //console.log(responseBody.updated_at)
  expect(responseBody.updated_at).toBeDefined()

  const parsedUpdatedAt = new Date(responseBody.updated_at).toISOString()
  expect(responseBody.updated_at).toEqual(parsedUpdatedAt)

  expect(responseBody.dependencies).toBeDefined()
  expect(responseBody.dependencies.database).toBeDefined()

  expect(responseBody.dependencies.database.version).toBeDefined()
  expect(responseBody.dependencies.database.version).toEqual('16.0')

  expect(responseBody.dependencies.database.max_connections).toBeDefined()
  expect(responseBody.dependencies.database.max_connections).toEqual(100)

  expect(responseBody.dependencies.database.opened_connections).toBeDefined()
  expect(responseBody.dependencies.database.opened_connections).toEqual(1)

  //expect(responseBody.dependencies.version).toBeDefined()
  //expect(responseBody.dependencies.version).not.toBeNull()
  //expect(responseBody.dependencies.version.length).toBeGreaterThan(0)
})
