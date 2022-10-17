export default function Source({source}){

    return(
        <div>
            <p>The recipe is made by {source.author}, found on the {source.location.retrievalDate}</p>
            <p>Which can be found {source.location.url}</p>
            
        </div>
    )
}
