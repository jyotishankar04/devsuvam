import Footer from "@/components/custom/Footer"
import LeftCard from "@/components/custom/LeftCard"
import Index from "@/pages/Index"

const IndexLayout = () => {
    return (

        <div className="max-w-6xl w-full h-full mx-auto flex flex-col">

            <div className="flex flex-1 flex-col md:flex-row">
                <div className="w-1/3">
                    <LeftCard />
                </div>
                <div className="flex-1 h-screen">
                    <Index />
                </div>
            </div>
            <Footer />
        </div>

    )
}

export default IndexLayout