import React from "react"
import { Filter} from "../../src/components/Filter/index"
import { Options } from "../../src/types/options"

const controllerModal = (controller: boolean) => {}
const getVehicles = async (options?: Options) => {}

describe('Filter', () => {
  it('playground', () => {
    cy.mount(<Filter displayModal={controllerModal} updateRequest={getVehicles}/>)
    cy.get(".save").contains("Filtrar")
  })
})