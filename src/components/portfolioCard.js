import Image from "next/image"
const portfolioCard = () => {
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
export async function getServerSideProps(){
  // const [port, setPort] = useState([])
  const res = await fetch('http://127.0.0.1:3001/projects')
  const projects = await res.json()

  return {props: {projects}}
}

export default portfolioCard