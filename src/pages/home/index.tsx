import * as C from "./styled"
import { Add } from "../../components/Add"
import { Filter } from "../../components/Filter"
import { ReactNode, useEffect, useState } from "react"
import { Modal } from "../../components/modal"
import { Vehicle } from "../../types/vehicle"
import { Api } from "../../api/api_crud"
import { Options } from "../../types/options"
import { setColors } from "../../helpers/setColors"

// Timer for search Request (created out component for disable loop )
let timer: NodeJS.Timeout

export const Home = () => {
    // Get vehicles
    const [vehicles, setVeihcles] = useState<Vehicle[]>([])

    const getVehicles = async (options?: Options) => {
        let json = await Api.getVehicles(options)
        setVeihcles(json.cars)
        if(process.env.REACT_APP_ENV === "test"){
           let vh = setColors(json.cars)
           setVeihcles(vh)
        }
    }

    useEffect(()=> {
        getVehicles()
    }, [])

    // Modal controllers
    const [displayModal, setDisplayModal] = useState(false)
    const [childrenModal, setChildrenModal] = useState<ReactNode>()
    const [scroll, setScroll] = useState("auto")

    const controllerModal = (controller: boolean, children?: ReactNode) => {
        setDisplayModal(controller)
        if(children){
            setChildrenModal(children)
            setScroll("hidden")
        }
    }

    //Favorite
    const fav = async (id : string, payload: boolean) => {
        await Api.favVehicle(id, payload)
        window.location.reload()
    }

    //Delete
    const del = async (id: string) => {
        await Api.delVehicle(id)
        window.location.reload()
    }

    //Search
    const search = async (e: string) => {
        clearTimeout(timer)

        timer = setTimeout(async ()=> {
           let json = await Api.searchVehicle(e)
           setVeihcles(json.list)
        },2000)
    }
    
    return (
       <>
        <Modal show={displayModal} togglerDisplay={controllerModal} children={childrenModal}/>
        <C.Container overflow={scroll}>
            <div className="container-mb">
                <div className="search--area">
                    <div className="search--box">
                        <img src="icons/search.png" alt="search-icon" />
                        <input type="text" placeholder="Buscar" onChange={(e)=> search(e.target.value)}/>
                    </div>
                    <div className="filter-box" 
                    onClick={()=>controllerModal(true, <Filter displayModal={controllerModal} updateRequest={getVehicles}/>)}>
                        <img src="icons/filter.png" alt="filter"/>
                    </div>
                </div>
                <div className="button-area">
                    <button className="button--add" onClick={()=>controllerModal(true, <Add vehicle={false}/>)}>
                        <img src="icons/plus.png" alt="" />
                        <span className="button--text">ADICIONAR</span>
                    </button>
                </div>

                <div className="vehicles--area">
                    { vehicles.length === 0 &&
                        <div className="empty">Nenhum veículo encontrado</div>
                    }
                    { vehicles.length > 0 &&
                    <>
                        <div className="title">Meus Anúncios</div>
                        <div className="all--area">
                            {vehicles.map((k,i)=>(
                                <div className="un--vehicles" key={i}>
                                    <div className="header--box">
                                        <img 
                                            src="/icons/editing.png" 
                                            alt="" 
                                            onClick={()=>controllerModal(true, <Add vehicle={vehicles[i]}/>)}
                                        />
                                        <img 
                                            src="/icons/close.png" 
                                            alt=""
                                            onClick={()=>del(vehicles[i].id)}
                                        />
                                        {vehicles[i].favorite &&
                                            <img 
                                                src="/icons/heart.png" 
                                                alt="" 
                                                onClick={()=>fav(vehicles[i].id, false)}
                                            />
                                        }
                                        {!vehicles[i].favorite &&
                                            <img 
                                                src="/icons/heart-empty.png" 
                                                alt="" 
                                                onClick={()=>fav(vehicles[i].id, true)}
                                            />
                                        }
                                    </div>
                                    <div className="body--box" style={{background: vehicles[i].colorBox, color: vehicles[i].colorText}}>
                                        <div className="tl-vehicle">{vehicles[i].brand} {vehicles[i].title}</div>
                                        <div className="pr-vehicle">
                                            Preço: {vehicles[i].price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                                        </div>
                                        <div className="desc-vehicle">Descrição: {vehicles[i].description}</div>
                                        <div className="yr-veihcle">Ano: {vehicles[i].year}</div>
                                        <div className="cl-veihcle">Cor: {vehicles[i].color}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                      
                    </>
                    }
                </div>
            </div>
        </C.Container>
       </>
    )
}