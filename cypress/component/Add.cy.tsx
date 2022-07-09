import React from "react"
import { Add} from "../../src/components/Add/index"

describe('Add/Edit', () => {
  it('playground', () => {
    cy.mount(<Add vehicle={false} />)
    cy.get(".save").contains("Salvar")
  })
})