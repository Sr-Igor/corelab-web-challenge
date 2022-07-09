import { useEffect, useState } from "react"
import * as C from "./styled"
import NumberFormat from "react-number-format"
import { Api } from "../../api/api_crud"
import { Options } from "../../types/options"

type Props = {
    displayModal: (controller: boolean) => void
    updateRequest: (options: Options) => void
}

type Color =  {
    color: string
}

type Year = {
    year: number
}

type Brand = {
    brand: string
}

export const Filter = ({displayModal, updateRequest}: Props) => {

    // Filters
    const [brand, setBrand] = useState("")
    const [color, setColor] = useState("")
    const [year, setyear] = useState("")
    const [maxValue, setMaxValue] = useState("")
    const [minValue, setMinValue] = useState("")

    //Loading
    const [disabled, setDisabled] = useState(false)
    
    // Fill select
    const [years, setYears] = useState<Year[]>([])
    const [brands, setBrands] = useState<Brand[]>([])
    const [colors, setColors] = useState<Color[]>([])

    useEffect(()=>{
        const getOptions = async () => {
            let jsonYear = await Api.getYears()
            let jsonBrand = await Api.getBrands()
            let josnColors = await Api.getColors()
            setYears(jsonYear.years)
            setBrands(jsonBrand.brands)
            setColors(josnColors.colors)
        }
        getOptions()
    }, [])

    // Send options for filter
    const filter = async () => {
        setDisabled(true)
        let options = {
            brand,
            color,
            year,
            maxValue,
            minValue
        }
        updateRequest(options)
        setDisabled(false)
        displayModal(false)
    }

    return (
        <C.Container>
            <div className="md-format">
                <form action="">
                        <div className="input--area">
                            <label htmlFor="#brand">Marca:</label>
                            <select 
                                name="brand" 
                                id="brand" 
                                value={brand} 
                                onChange={(e)=> setBrand(e.target.value)}
                                disabled={disabled}
                            >
                                <option value=""></option>
                                {brands && brands.map((i,k)=> (
                                    <option key={k} value={i.brand}>{i.brand}</option>
                                ))
                                }
                            </select>
                        </div>
                        <div className="input--area">
                            <label htmlFor="#color">Cor:</label>
                            <select 
                                name="color" 
                                id="color" 
                                value={color} 
                                onChange={(e)=> setColor(e.target.value)}
                                disabled={disabled}
                            >
                                <option value=""></option>
                                {colors && colors.map((i,k)=> (
                                    <option key={k} value={i.color}>{i.color}</option>
                                ))
                                }
                            </select>
                        </div>
                        <div className="input--area">
                            <label htmlFor="#year">Ano:</label>
                            <select 
                                name="year" 
                                id="year" 
                                value={year} 
                                onChange={(e)=>setyear(e.target.value)}
                                disabled={disabled}
                            >
                                <option value=""></option>
                                {years && years.map(i => (
                                    <option key={i.year} value={i.year}>{i.year}</option>
                                ))}
                            </select>
                        </div>
                        <div className="input--area price--area">
                            <div className="col">
                                <label htmlFor="#brand">Preço mín:</label>
                                <NumberFormat
                                    value={minValue}
                                    prefix="R$"
                                    decimalSeparator=","
                                    allowedDecimalSeparators={[","]}
                                    decimalScale={2}
                                    displayType="input"
                                    type="text"
                                    thousandSeparator={"."}
                                    allowNegative={false} 
                                    onValueChange={(e)=> setMinValue(e.value.replace(".", ","))}
                                    placeholder="R$"
                                    disabled={disabled}
                                    maxLength={13}
                                />
                            </div>
                            <div className="col">
                                <label htmlFor="#brand">Preço máx:</label>
                                <NumberFormat
                                    value={maxValue}
                                    prefix="R$"
                                    decimalSeparator=","
                                    allowedDecimalSeparators={[","]}
                                    decimalScale={2}
                                    displayType="input"
                                    type="text"
                                    thousandSeparator={"."}
                                    allowNegative={false} 
                                    onValueChange={(e)=> setMaxValue(e.value.replace(".", ","))}
                                    placeholder="R$"
                                    disabled={disabled}
                                    maxLength={13}
                                />
                            </div>
                        </div>
                    </form>
                <div className="button-area">
                    <button className="save" onClick={()=> filter()}>Filtrar</button>
                </div>
            </div>
        </C.Container>
    )
}