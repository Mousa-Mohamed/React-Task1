import Profile from './Task1.js';
import Profile2 from './Task2.js';
import Profile3 from './Task3.js';
import Show from './Task4.js';

export default function Tasks() {
    return (
        <div>
            <h1>Task One</h1>
            <Profile/>
            <h1>Task Two</h1>
            <Profile2/>
            <h1>Task Three</h1>
            <Profile3/>
            <h1>Task Four</h1>
            <Show/>
        </div>
    );
}
