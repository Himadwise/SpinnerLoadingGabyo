import React from 'react'
import { useState, useEffect } from 'react'
import { GridLoader } from 'react-spinners';
import Poetry from './Poetry';
import "./Style.css"



const Home = () => {

    const [loading, setLoading] = useState(false);
    const [poet, setPoet] = useState([
        {
            id: 1,
            gabyaaga: " Sayid Mohamed ABdulle Hassan",
            cinwankaGabayga: "Gabayga Sagaal Nin oo Walaala Ah",
            tuducyoGabayga: `
            Sagaal nin oo walaalo ah sideennaas ${"\n"}
            Siddeed isku bah tahay sidiinnaas 
            Ninkuna bah gaar yahay sidaydaas  
            Siddeeduna ninkii siri sidiinnaas 
            `,
            sawirUrl: "https://bandhige.com/wp-content/uploads/2020/03/hqdefault1.jpg"
        },
        {
            id: 2,
            gabyaaga: " Ismaaciil Mire Cilmi ",
            cinwankaGabayga: " Gabayga Iibsi Lacageed",
            tuducyoGabayga: `
            Nimanyahow awow iyo awow iyo abkaan sheegto
            Iyo aniga abidkay ma arag iibsi lacageede
            Adduun buu lahaan jirey raaggaan ka isirraa waaye
            `,
            sawirUrl: "https://www.poetrytranslation.org/images/_AUTOx320_crop_center-center_none/Ismaciil_Mire_xxx.jpg"
        },
        {
            id: 3,
            gabyaaga: " Maxamed Ibraahim Warsame",
            cinwankaGabayga: "Maansada HOOBAL",
            tuducyoGabayga: `
            Ninka Hirarka dhaadheer,  Dadka kala hadlaayee
            Qof kastaba la haystee,   ugu taga halkiisow
            kolley waan hubaayoo,   Haasaawahaygiyo
            waxa aad had iyo jeer,   la haloosiyeysaa
                        `,
            sawirUrl: "http://somaliwiki.com/wp-content/uploads/2018/02/hadraawi_285x0_285_294_90.jpg"
        },

    ]);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1000);
    }, [])
    // DeleteAll
    const deleteAll = () => {
        setPoet([]);
    }
    // DeleteCard
    const deleteCard = (id) => {
        const newCard = poet.filter((item) => item.id != id);
        setPoet(newCard);
    }
    return (

        <div className="container">
            {
                loading ?
                    <div className="load">
                        <GridLoader color='#e21818' />
                    </div>
                    :
                    <div>
                        <Poetry poet={poet} deleteCard={deleteCard} />
                        <div className="erase">
                            <button className='dellAll' onClick={deleteAll}>Delete All</button>
                        </div>
                    </div>
            }

        </div>

    )
}

export default Home
