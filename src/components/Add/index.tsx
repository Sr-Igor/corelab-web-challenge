import * as C from "./styled"
import NumberFormat from "react-number-format"
import { useEffect, useState } from "react"
import { Vehicle } from "../../types/vehicle"
import { Api } from "../../api/api_crud"
import { colorsCl }from "../../database/colors"

type Props = {
    vehicle: Vehicle|false
}

type Color = {
    color: string
}

export const Add = ({vehicle}:Props) => {

    // Fill colors 
    const [colors, setColors] = useState<Color[]>()

    useEffect(()=> {
        const getColors = async() => {
            let col = await Api.getColors()
            setColors(col.colors)
            if(process.env.REACT_APP_ENV === "test"){
                setColors(colorsCl)
             }
        }
        getColors()
    }, [])

    // Form fields
    const [title, setTitle] = useState("")
    const [brand, setBrand] = useState("")
    const [color, setColor] = useState("")
    const [year, setYear] = useState("")
    const [licensePlate, setLicensePlate] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")

    // Loading 
    const [disabled, setDisabled] = useState(false)
    const [error, setError] = useState("")

    useEffect(()=> {
        if(vehicle){
            setTitle(vehicle.title)
            setBrand(vehicle.brand)
            setColor(vehicle.color)
            setYear(vehicle.year.toString())
            setLicensePlate(vehicle.licensePlate)
            setPrice(vehicle.price.toString())
            setDescription(vehicle.description)
        }else{
            setTitle("")
            setBrand("")
            setColor("")
            setYear("")
            setLicensePlate("")
            setPrice("")
            setDescription("")
        }
    },[vehicle])

    const addCar = async () => {
        setDisabled(true)
        setError("")
        if(!title){
            setError("Preencha o nome do veículo")
            setDisabled(false)
            return
        }
        if(!brand){
            setError("Preencha a marca do veículo")
            setDisabled(false)
            return
        }
        if(!color){
            setError("Selecione uma cor para o veículo")
            setDisabled(false)
            return
        }
        if(!year){
            setError("Prencha o ano do veículo")
            setDisabled(false)
            return
        }
        if(!licensePlate){
            setError("Informe a placa do veículo")
            setDisabled(false)
            return
        }
        if(!price){
           setError("Informe o preço do veículo")
           setDisabled(false)
           return
        }

        let data = {
            title: title.toUpperCase(),
            brand: brand.toUpperCase(),
            color,
            year,
            licensePlate: licensePlate.toUpperCase(),
            price,
            description
        }

        let json
        if(vehicle){
            json = await Api.editVehicle(data, vehicle.id)
        }else {
            json = await Api.addVehicle(data)
        }
        
        if(json.error){
            setError("Ocorreu um erro, verifique os dados e tente novamente")
            setDisabled(false)
        }else{
            window.location.reload()
            setDisabled(false)
        }
    }

    return (
        <C.Container>
            {error &&
                <div className="error">{error}</div>
            } 

                <form action="">
                    <div className="input--area">
                        <label htmlFor="#name">Nome:</label>
                        <input 
                            type="text"
                            name="name" 
                            id="name" 
                            value={title} 
                            onChange={e=>setTitle(e.target.value)}
                            disabled={disabled}
                            maxLength={15}
                        />
                    </div>
                    <div className="input--area">
                        <label htmlFor="#brand">Marca:</label>
                        <input 
                            type="text" 
                            name="brand" 
                            id="brand"  
                            value={brand} 
                            onChange={e=>setBrand(e.target.value)}
                            disabled={disabled}
                            maxLength={15}
                        />
                    </div>
                    <div className="input--area">
                        <label htmlFor="#color">Cor:</label>
                        <select 
                            name="color" 
                            id="color" 
                            value={color} 
                            onChange={e=>setColor(e.target.value)}
                            disabled={disabled}
                        >
                            <option value=""></option>
                            {colors && colors.map((i,k)=> (
                                <option value={i.color} key={k}>{i.color}</option>
                            ))}
                        </select>
                    </div>
                    <div className="input--area">
                        <label htmlFor="#year">Ano:</label>
                        <input 
                            type="number"
                            name="year" 
                            id="yaer" 
                            maxLength={4}
                            value={year} 
                            onChange={e=>setYear(e.target.value)}
                            disabled={disabled}
                        />
                    </div>
                    <div className="input--area">
                        <label htmlFor="#licensePlate">Placa</label>
                        <input 
                            type="text" 
                            name="licensePlate" 
                            id="licensePlate"  
                            value={licensePlate} 
                            onChange={e=>setLicensePlate(e.target.value)}
                            disabled={disabled}
                            maxLength={8}
                        />
                    </div>
                    <div className="input--area">
                        <label htmlFor="#price">Preço</label>
                        <NumberFormat
                            value={price}
                            prefix="R$"
                            decimalSeparator=","
                            allowedDecimalSeparators={[","]}
                            decimalScale={2}
                            displayType="input"
                            type="text"
                            thousandSeparator={"."}
                            allowNegative={false} 
                            onValueChange={(e)=> setPrice(e.value.replace(".", ","))}
                            placeholder="R$"
                            disabled={disabled}
                            maxLength={13}
                        />
                    </div>

                    <div className="input--area">
                        <label htmlFor="#description">Descrição</label>
                        <input 
                            type="text" 
                            name="description" 
                            id="description"  
                            value={description} 
                            onChange={e=>setDescription(e.target.value)}
                            disabled={disabled}
                            maxLength={25}
                        />
                    </div>
                </form>
                <div className="button-area">
                    <button className="save" onClick={()=> addCar()}>Salvar</button>
                </div>

        </C.Container>
    )
}