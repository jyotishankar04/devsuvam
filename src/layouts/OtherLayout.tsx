import Footer from "@/components/custom/Footer"
import NavBar from "@/components/custom/NavBar"

const OtherLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <>
            <div className="max-w-6xl w-full h-screen mx-auto flex flex-col">
                <NavBar />
                <div className="flex-1 w-full h-full overflow-auto">
                    {children}
                    <Footer />
                </div>
            </div>
        </>

    )
}

export default OtherLayout