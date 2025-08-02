import Footer from "@/components/custom/Footer"
import LeftCard from "@/components/custom/LeftCard"
import NavBar from "@/components/custom/NavBar"
import Index from "@/pages/Index"

const IndexLayout = () => {
    return (

        <div className="max-w-6xl w-full h-full mx-auto flex flex-col">
            <div className="block md:hidden">
                <NavBar />
            </div>
            <div className="flex md:flex-1 flex-col md:flex-row">
                <div className="md:w-1/3">
                    <LeftCard />
                </div>
                <div className="md:flex-1 md:h-screen">
                    <Index />
                </div>
            </div>
            <Footer />
        </div>

    )
}

export default IndexLayout