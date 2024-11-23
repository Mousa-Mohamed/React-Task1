import Gallery from "./Task1";
import Profile1 from "./Task2";
import Profile2 from "./Task3";
import Custom from "./Task4";
import PackingList1 from "./Task5";
import PackingList2 from "./Task6";
import DrinkList from "./Task7";


export default function Tasks() {
    return (
        <>
            <div>
                <Gallery/>
            </div>
            <div>
                <Profile1/>
            </div>
            <div>
                <Profile2/>
            </div>
            <div>
                <Custom/>
            </div>
            <div>
                <PackingList1/>
            </div>
            <div>
                <PackingList2/>
            </div>
            <div>
                <DrinkList/>
            </div>
        </>
    )
}