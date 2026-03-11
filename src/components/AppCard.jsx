export default function AppCard({title,description,key}){
    return(
        <>
        <div className="col" key={key}> 
            <h1 className="cardTitle">{title}</h1>
            <p className="description">{description}</p>
        </div>
        </>
    )

    
}