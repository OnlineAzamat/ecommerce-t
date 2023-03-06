import HomeCategories from "./HomeCategories"
import HomeMainComp from "./HomeMainComp"
import NavBar from "./NavBar"

export const Homepage = () => {
    return(
        <main className="homepage">
            <NavBar />
            <HomeMainComp />
            <HomeCategories />
        </main>
    )
}