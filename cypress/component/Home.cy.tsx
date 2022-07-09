import React from "react"
import { Home } from "../../src/pages/home"

describe('Home', () => {
  it('playground', () => {
    cy.mount(<Home />)
    cy.get(".button--text").contains("ADICIONAR")
  })
})