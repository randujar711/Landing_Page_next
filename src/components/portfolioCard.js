import Image from "next/image"
const PortfolioCard = ({projects}) => {
    return(
        <div>
            {projects[0].map((prod)=> {
          const {title, stack, desc} = prod
          return (
            <div>
              <h3>{title}</h3>
              <h4>{desc}</h4>
              <div>{stack}</div>
            </div>
            
          )
        })}
        </div>
    )
}

export default PortfolioCard