import Image from "next/image"

const PortfolioCard = ({projects}) => {
    return(
        <div>
            {projects[0].map((prod)=> {
          const {title, stack, desc} = prod
          return (
            <div key={prod.id}>
              <h3>{title}</h3>
              <h4>{desc}</h4>
              <div>{stack}</div>
              <Image src='/rayshotthis.jpg' alt={title} width={500} height={500}/>
            </div>
            
          )
        })}
        {/* <Image src={gal} alt='hello' width={500} height={500}/> */}
        <Image src='/next.svg' alt='hello' width={500} height={500}/>
        </div>
    )
}

export default PortfolioCard
