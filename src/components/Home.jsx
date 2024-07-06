
import CatallogueItem from "./CatallogueItem"
import Nav from "./Nav"
const Home = () => {
  return (
    <div className="bg-orange-50 h-full ">
        <Nav/>
        <main className="flex flex-col p-10 items-center">
          <div className="bg-orange-100 w-full max-w-4xl rounded-md h-72 hover:cursor-pointer p-2 shadow-lg">
          <picture className="">
          <img className="rounded-md w-full h-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6sqac3Za27sZzEmzRflg3Gli21RY9_7kldg&s" alt=""/>
          </picture>
          </div>

          <section className="grid grid-cols-3  mt-5">
            <CatallogueItem/>
            <CatallogueItem/>
            <CatallogueItem/>
          </section>

        </main>

    </div>
  )
}

export default Home