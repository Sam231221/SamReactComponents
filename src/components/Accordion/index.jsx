import Accordion from "./Accordion";
const render = () => {
    let items = [
        {
            name: "Header 1",
            content: <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, voluptate!</div>
        },
        {
            name: "Header 2",
            content: <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, voluptate!</div>
        },
        {
            name: "Header 3",
            content: <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, voluptate!</div>
        },
    ]
    return (
        <div style={{ width: "100%", height: "100vh", display: "grid", placeItems: "center"}}>
            <Accordion multiple items={items} />
        </div>
    )
}

export default render;  
