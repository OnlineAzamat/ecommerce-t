import Bestseller from "./Bestseller"
import HomeCategories from "./HomeCategories"
import HomeMainComp from "./HomeMainComp"
import NavBar from "./NavBar"
import Summer from "./Summer"

export const Homepage = () => {
    return(
        <main className="homepage">
            <NavBar />
            <HomeMainComp />
            <HomeCategories />
            <Bestseller />
            <Summer />
        </main>
    )
}