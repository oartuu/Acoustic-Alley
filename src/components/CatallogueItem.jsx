

const CatallogueItem = () => {
  return (
    <div className="flex flex-col p-2 rounded-md m-5 items-center w-40 bg-orange-100 hover:cursor-pointer shadow-lg">
        <picture className="w-32 h-40- bg-white rounded-md p-1">
          <img className="rounded-md drop-shadow-md " src="https://images.ctfassets.net/m8onsx4mm13s/4eS8a0pLPlqsbdWW5aXcoE/bc11ec1664c63a397015a50c79033ded/LPS5P00M2NH1_front.png" alt=""/>
        </picture>
        <section className="mt-1 pl-3 flex flex-col w-full bg-orange-50 rounded-sm">
            <span className="text-lg truncate">Gibson Les Paul Studio</span>
            <span className="text-sm">R$ 1500,00</span>
        </section>
        
    </div>
  )
}

export default CatallogueItem