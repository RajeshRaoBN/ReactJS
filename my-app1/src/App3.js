import React from "react"
import ContactCard from "./components/ContactCard"

function App3() {
    return(
        <div>
            <ContactCard contact={{
                name:"Mr. Whiskersin", 
                imgUrl:"http://placekitten.com/300/200",
                phone:"(212) 555-1234",
                email:"mr.whiskaz@catnap.meow"}}
            />
            <ContactCard contact={{
                name:"Fluffykins",
                imgUrl:"http://placekitten.com/400/200",
                phone:"(212) 555-2345",
                email:"fluff@me.com"}}
            />
            <ContactCard contact={{
                name:"Destroyer",
                imgUrl:"http://placekitten.com/400/300",
                phone:"(212) 555-3456",
                email:"0fworlds@yahoo.com"}}
            />
            <ContactCard contact={{
                name:"felix",
                imgUrl:"http://placekitten.com/200/100",
                phone:"(212) 555-4567",
                email:"thecat@hotmail.com"}}
            />
        </div>
    )
}

export default App3