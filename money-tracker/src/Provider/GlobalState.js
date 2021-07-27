import React, { createContext, useState } from 'react'

const AppContext = createContext()

const Provider = (props) => {
    const [component, setComponent] = useState([])
    return (
        <AppContext.Provider value={[component, setComponent]}>
            {props.children}
        </AppContext.Provider>
    )
}

const InfoConsumer = AppContext.Consumer

export { InfoConsumer, Provider };