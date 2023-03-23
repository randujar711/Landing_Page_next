import Image from "next/image"

const PortfolioCard = ({projects}) => {
    return(
        <div>
          {projects[0].map((prod)=> {
            const {title, stack, desc, image} = prod
            return (
              <div key={prod.id}>
                <h3>{title}</h3>
                <h4>{desc}</h4>
                <div>{stack}</div>
                <Image src={image} alt={title} width={500} height={500}/>
              </div>
            )
          })}
        </div>
    )
}

export default PortfolioCard
